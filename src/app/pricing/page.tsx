import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { SIGNUP_PATH } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { Notice } from "@/components/sections/Notice";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = pageMetadata({
  title: "Pricing",
  description: "Evolution PE pricing has not been announced. See what we're planning and tell us what you'd need.",
  path: "/pricing",
});

const plans = [
  { name: "Bench Boost", tag: "Open beta", d: "You can open Bench Boost today. Future pricing hasn't been decided.", cta: { label: "Open Bench Boost", href: siteConfig.benchBoostUrl } },
  { name: "K–5 Curriculum for families and co-ops", tag: "Planned", d: "A digital curriculum for home and co-op use is planned. It isn't available yet, and the price hasn't been set.", cta: { label: "Get notified", href: SIGNUP_PATH } },
  { name: "Teacher membership", tag: "Under consideration", d: "We're considering a membership for teachers. Tell us what would make it worth it.", cta: { label: "Share your ideas", href: "/contact?topic=feedback" } },
  { name: "School and district licenses", tag: "Under consideration", d: "School licenses will come later. If your school is interested, tell us what you'd need.", cta: { label: "Tell us what you need", href: "/contact?topic=school-license" } },
];

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Pricing hasn't been announced." subtitle="We're still building. Here's what we're planning, so you can tell us what would be useful to you." />
      <Section>
        <SectionHeading eyebrow="What's planned" title="Options we're working toward" intro="Plans can change, and nothing here is available to buy yet." />
        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <Card key={p.name} lift className="reveal flex flex-col">
              <span className="w-fit rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-navy-800 ring-1 ring-inset ring-ink-300">{p.tag}</span>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="mt-3 flex-1 leading-7 text-ink-600">{p.d}</p>
              <div className="mt-6"><LinkButton href={p.cta.href} variant="secondary" arrow={!p.cta.href.startsWith("http")}>{p.cta.label}</LinkButton></div>
            </Card>
          ))}
        </div>
        <Notice className="mt-8" title="No payments on this site">This website doesn't take payments or collect payment information. When products go on sale, we'll announce it on this site and by email.</Notice>
      </Section>
      <CTABand title="Tell us what would help" text="Joining the list and choosing your interests is the easiest way to shape what we offer.">
        <LinkButton href={SIGNUP_PATH} variant="onDark" size="lg">Join the list</LinkButton>
      </CTABand>
    </>
  );
}
