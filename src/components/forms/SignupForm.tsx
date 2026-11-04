"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { isValidEmail, submitForm, type FormResult } from "@/lib/forms";
import { trackEvent } from "@/lib/analytics";
import { CheckboxRow, Field, FormMessage, Honeypot, SelectInput, TextInput } from "./fields";

export type SignupAudience = "general" | "teachers" | "homeschool";

const GENERAL_INTERESTS = [
  "K–5 Curriculum",
  "Bench Boost updates",
  "Fitness Test Analyzer beta",
  "Shuttle Run Scoreboard",
  "School or district licenses",
];
const ROLES = ["PE teacher", "Homeschool parent", "Homeschool co-op leader", "School or district leader", "Other"];

interface Props {
  className?: string;
  idPrefix?: string;
  /** Which audience this form belongs to. It is sent with every submission so interest can be compared. */
  audience?: SignupAudience;
  /** Where on the site the form lives, sent with every submission (for example "for-pe-teachers"). */
  source?: string;
  interests?: string[];
  defaultInterests?: string[];
  submitLabel?: string;
}

/**
 * Signup form with three honest behaviors, decided at build time:
 *  1. An endpoint is configured  -> posts JSON to it and thanks the person only if the service accepted it.
 *  2. No endpoint, email is set  -> opens the person's email app with a ready message. Nothing is saved by this site.
 *  3. Neither                    -> says plainly that signups are not saved yet.
 */
export function SignupForm({ className, idPrefix = "signup", audience = "general", source = "free-resources", interests, defaultInterests = [], submitLabel = "Join the list" }: Props) {
  const endpoint = siteConfig.signupEndpoints[audience];
  const mode: "endpoint" | "mailto" | "unconfigured" = endpoint ? "endpoint" : siteConfig.contactEmail ? "mailto" : "unconfigured";
  const choices = interests ?? GENERAL_INTERESTS;
  const showRole = audience === "general";

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [picked, setPicked] = useState<string[]>(defaultInterests);
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [result, setResult] = useState<FormResult>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (form.get("company_website")) return; // spam trap
    if (!isValidEmail(email)) { setEmailError("Please enter a valid email address."); return; }
    setEmailError("");
    const payload = {
      form: "signup",
      audience,
      source,
      email: email.trim(),
      role: showRole ? role : audience === "teachers" ? "PE teacher" : "Homeschool family",
      interests: picked,
      consent,
    };

    if (mode === "mailto") {
      const body = `Please add me to the Evolution PE list.\n\nEmail: ${payload.email}\nI am a: ${payload.role || "(not given)"}\nInterested in: ${picked.join(", ") || "(not given)"}\nSource: ${source}`;
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(`Join the list (${audience})`)}&body=${encodeURIComponent(body)}`;
      setResult({ status: "idle" });
      return;
    }

    setResult({ status: "sending" });
    const res = await submitForm(endpoint, payload);
    setResult(res);
    if (res.status === "success") {
      trackEvent("Signup", { audience });
      setEmail(""); setRole(""); setPicked(defaultInterests); setConsent(false);
    }
  }

  const toggle = (v: string, on: boolean) => setPicked((cur) => (on ? [...cur, v] : cur.filter((x) => x !== v)));
  const sending = result.status === "sending";
  const label = mode === "mailto" ? "Open an email to join" : submitLabel;

  return (
    <form onSubmit={onSubmit} noValidate className={className} aria-label={submitLabel} id={idPrefix}>
      <div className="relative space-y-5">
        <Honeypot />
        <Field label="Email address" htmlFor={`${idPrefix}-email`} error={emailError}>
          <TextInput id={`${idPrefix}-email`} type="email" name="email" autoComplete="email" required inputMode="email" placeholder="you@example.com"
            value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={!!emailError} aria-describedby={emailError ? `${idPrefix}-email-error` : undefined} />
        </Field>
        {showRole && (
          <Field label="I am a…" htmlFor={`${idPrefix}-role`} hint="Optional. It helps us send the right updates.">
            <SelectInput id={`${idPrefix}-role`} name="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Choose one</option>
              {ROLES.map((r) => <option key={r}>{r}</option>)}
            </SelectInput>
          </Field>
        )}
        <fieldset>
          <legend className="mb-1.5 text-sm font-semibold text-navy-900">I'm interested in (optional)</legend>
          <div className="grid gap-0.5 sm:grid-cols-2">
            {choices.map((i, n) => (
              <CheckboxRow key={i} id={`${idPrefix}-int-${n}`} name="interests" value={i} label={i} checked={picked.includes(i)} onChange={(on) => toggle(i, on)} />
            ))}
          </div>
        </fieldset>
        <CheckboxRow id={`${idPrefix}-consent`} name="consent" value="yes" required checked={consent} onChange={setConsent}
          label="I agree to receive Evolution PE emails and understand I can unsubscribe at any time." />
        <p className="text-sm text-ink-600">
          Please don't enter student names or information in any form. See the <Link href="/privacy" className="font-medium text-teal-700 underline underline-offset-4">Privacy Policy</Link> (pending legal review).
        </p>
        {mode === "unconfigured" && (
          <p role="note" className="rounded-xl bg-sky-50 px-4 py-3 text-sm leading-6 text-ink-700 ring-1 ring-inset ring-sky-200">
            Signups aren't connected to an email service yet, so nothing entered here is saved.
          </p>
        )}
        {mode === "mailto" && (
          <p role="note" className="rounded-xl bg-sky-50 px-4 py-3 text-sm leading-6 text-ink-700 ring-1 ring-inset ring-sky-200">
            This opens your email app with a message ready to send. You're on the list once we receive it.
          </p>
        )}
        <button type="submit" disabled={sending || !consent}
          className="inline-flex w-full items-center justify-center rounded-xl bg-navy-900 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-ink-300 sm:w-auto">
          {sending ? "Sending…" : label}
        </button>
        <FormMessage status={result.status} message={result.message} />
      </div>
    </form>
  );
}
