import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { IconLock } from "@/components/ui/Icons";

/** Plain-language privacy summary. It lives outside the hero but is easy to find. */
export function PrivacyGlance() {
  return (
    <Section tone="white" className="!py-10 sm:!py-14">
      <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-[var(--radius-card)] border border-ink-200 bg-sky-50/60 p-5 sm:flex-row sm:items-start sm:gap-7 sm:p-8">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 ring-1 ring-inset ring-teal-100"><IconLock className="h-5 w-5" /></span>
        <div>
          <h2 className="font-display text-lg font-bold text-navy-900">Privacy at a glance</h2>
          <ul className="mt-3 space-y-2 text-[0.95rem] leading-6 text-ink-700">
            {siteConfig.privacyPoints.map((p) => <li key={p} className="flex gap-2.5"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden />{p}</li>)}
          </ul>
          <p className="mt-4 text-sm text-ink-600">Read the full <Link href="/privacy" className="font-medium text-teal-700 underline underline-offset-4">Privacy Policy</Link> (placeholder, pending legal review).</p>
        </div>
      </div>
    </Section>
  );
}
