import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Notice } from "@/components/sections/Notice";

export const metadata = pageMetadata({
  title: "Terms of Use (placeholder)",
  description: "Terms of use placeholder for the Evolution PE website, pending legal review.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" subtitle="Placeholder, pending legal review." />
      <Section narrow>
        <Notice title="This is a placeholder, not a legal document">It has not been reviewed by an attorney and must be replaced before products are sold or licensed.</Notice>
        <div className="prose-evo mt-8">
          <h2>Using this website</h2>
          <p>[Describe acceptable use of the site.]</p>
          <h2>Educational content and safety</h2>
          <p>Materials on this site are for general educational use. Physical activity should be supervised by an adult and adapted to each child. [Add the formal disclaimer language after legal review.]</p>
          <h2>Product availability</h2>
          <p>Products described on this site may be in beta, coming soon, or unavailable. Nothing here is an offer to sell. [Add terms for beta testing.]</p>
          <h2>Intellectual property</h2>
          <p>[Describe ownership of site content and the license for downloadable materials once they exist.]</p>
          <h2>Third-party names and trademarks</h2>
          <p>Evolution PE is independent. FITNESSGRAM® and Healthy Fitness Zone® are registered trademarks of The Cooper Institute. Names of other organizations are used only to describe how our tools relate to their programs, and do not imply affiliation or endorsement.</p>
          <h2>Limitation of liability and changes</h2>
          <p>[To be written by an attorney.]</p>
        </div>
      </Section>
    </>
  );
}
