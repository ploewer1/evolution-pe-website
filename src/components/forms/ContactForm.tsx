"use client";

import { useEffect, useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { isValidEmail, submitForm, type FormResult } from "@/lib/forms";
import { Field, FormMessage, Honeypot, SelectInput, TextArea, TextInput } from "./fields";

const TOPICS: { value: string; label: string }[] = [
  { value: "general", label: "General question" },
  { value: "beta", label: "Beta testing" },
  { value: "school-license", label: "School or district license" },
  { value: "homeschool-co-op", label: "Homeschool co-op" },
  { value: "feedback", label: "Feedback on a product" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [topic, setTopic] = useState("general");
  // Read ?topic= after load so the form still renders fully in the static HTML.
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && TOPICS.some((x) => x.value === t)) setTopic(t);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [result, setResult] = useState<FormResult>({ status: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (new FormData(e.currentTarget).get("company_website")) return;
    const next: typeof errors = {};
    if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (message.trim().length < 5) next.message = "Please tell us a little about what you need.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setResult({ status: "sending" });
    const res = await submitForm(siteConfig.contactEndpoint, { form: "contact", topic, name: name.trim(), email: email.trim(), message: message.trim() });
    setResult(res);
    if (res.status === "success") { setName(""); setEmail(""); setMessage(""); }
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact Evolution PE">
      <div className="relative space-y-5">
        <Honeypot />
        <Field label="What is this about?" htmlFor="contact-topic">
          <SelectInput id="contact-topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            {TOPICS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
          </SelectInput>
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" htmlFor="contact-name">
            <TextInput id="contact-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field label="Email address" htmlFor="contact-email" error={errors.email}>
            <TextInput id="contact-email" type="email" name="email" autoComplete="email" inputMode="email" required value={email}
              onChange={(e) => setEmail(e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} />
          </Field>
        </div>
        <Field label="Message" htmlFor="contact-message" error={errors.message} hint="Please don't include student names or information.">
          <TextArea id="contact-message" name="message" required value={message} onChange={(e) => setMessage(e.target.value)}
            aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} />
        </Field>
        <button type="submit" disabled={result.status === "sending"}
          className="inline-flex w-full items-center justify-center rounded-xl bg-navy-900 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-navy-800 disabled:cursor-not-allowed disabled:bg-ink-300 sm:w-auto">
          {result.status === "sending" ? "Sending…" : "Send message"}
        </button>
        <FormMessage status={result.status} message={result.message} />
      </div>
    </form>
  );
}
