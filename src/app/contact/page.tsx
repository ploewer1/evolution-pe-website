import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { Notice } from "@/components/sections/Notice";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Evolution PE about beta testing, school licenses, homeschool co-ops, or feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Tell us what you need." subtitle="Questions, beta testing, school licenses, co-ops, or feedback on a product. We read every message." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Card className="p-6 sm:p-8"><ContactForm /></Card>
          <div className="space-y-6">
            <Notice title="Please don't send student information">Don't include student names, scores, or other personal details about children in your message.</Notice>
            {siteConfig.contactEmail && (
              <Card>
                <h2 className="text-lg font-bold">Prefer email?</h2>
                <p className="mt-2 text-ink-600"><a className="font-semibold text-teal-700 underline underline-offset-4" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
              </Card>
            )}
            <Card>
              <h2 className="text-lg font-bold">Looking for Bench Boost?</h2>
              <p className="mt-2 text-ink-600">Bench Boost runs separately at <a className="font-semibold text-teal-700 underline underline-offset-4" href={siteConfig.benchBoostUrl} target="_blank" rel="noopener noreferrer">learn.evolutionpe.com</a>.</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
