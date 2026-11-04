import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { SignupSection } from "@/components/sections/SignupSection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { IconBook, IconChart, IconPrint } from "@/components/ui/Icons";

export const metadata = pageMetadata({
  title: "Free Resources",
  description: "Join the Evolution PE list for free resources, curriculum news, and beta invitations.",
  path: "/free-resources",
});

export default function FreeResourcesPage() {
  return (
    <>
      <PageHero eyebrow="Free resources" title="Join the list. Hear first." subtitle="We're preparing downloads and early access for teachers and homeschool families. Tell us who you are and we'll send what's relevant to you." />
      <SignupSection tone="white" title="Get free resources and early access" />
      <Section tone="sky">
        <SectionHeading eyebrow="What to expect" title="A small, useful list" intro="No flood of emails. You'll hear from us when there is something worth sharing." />
        <div className="mt-8 sm:mt-10">
          <FeatureGrid
            features={[
              { icon: <IconBook className="h-6 w-6" />, title: "Curriculum news", text: "Notice when the K–5 curriculum is ready, and when beta testers are needed." },
              { icon: <IconChart className="h-6 w-6" />, title: "Beta invitations", text: "Chances to try new tools, like the fitness analyzer, while they're still being shaped." },
              { icon: <IconPrint className="h-6 w-6" />, title: "Free downloads", text: "We're preparing downloadable resources and will announce them here and by email." },
            ]}
          />
        </div>
      </Section>
    </>
  );
}
