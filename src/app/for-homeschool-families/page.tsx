import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getProduct } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PreviewFrame } from "@/components/sections/PreviewFrame";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { AudienceCtas } from "@/components/sections/AudienceCtas";
import { AudienceSignup } from "@/components/sections/AudienceSignup";
import { CheckList } from "@/components/ui/CheckList";
import { FAQ } from "@/components/sections/FAQ";
import { PrivacyGlance } from "@/components/sections/PrivacyGlance";
import { IconBox, IconHome, IconPrint, IconUsers, IconCalendar, IconApp } from "@/components/ui/Icons";

export const metadata = pageMetadata({
  title: "For Homeschool Families",
  description: "A 36-week K–5 physical education program designed for homeschool families and co-ops, with solo, partner, and group versions of every game.",
  path: "/for-homeschool-families",
});

export default function HomeschoolPage() {
  const curriculum = getProduct("k-5-curriculum");
  const bench = getProduct("bench-boost");
  return (
    <>
      <PageHero
        eyebrow="For homeschool families and co-ops"
        title="PE you can actually run at home."
        subtitle="A clear year of physical education that works with the space, equipment, and children you have, whether you teach one child or a whole co-op."
        aside={<PreviewFrame product={curriculum} priority />}
      >
        <AudienceCtas audience="homeschool" location="homeschool-hero" />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Made for home" title="Designed around how homeschool PE really works" />
        <div className="mt-8 sm:mt-10">
          <FeatureGrid
            features={[
              { icon: <IconUsers className="h-6 w-6" />, title: "Solo, partner, and group", text: "Every game has a version for one child, one child with a helper, and groups of 4 to 20, so nobody waits for a teammate." },
              { icon: <IconBox className="h-6 w-6" />, title: "Everyday equipment", text: "Each game lists what you need and household alternatives, such as paper plates, rolled socks, or tape on the floor." },
              { icon: <IconCalendar className="h-6 w-6" />, title: "A full 36-week year", text: "Two tracks, K–2 and 3–5, move through movement skills, games, rhythm, fitness, health, and a celebration week." },
              { icon: <IconPrint className="h-6 w-6" />, title: "Printable cards and sheets", text: "Game cards, setup diagrams, and recording sheets are designed to print at home." },
              { icon: <IconApp className="h-6 w-6" />, title: "Pairs with Bench Boost", text: "Weekly topics are designed to connect to Bench Boost, where children can practice what they learned." },
              { icon: <IconHome className="h-6 w-6" />, title: "Calm, skill-based play", text: "When a round goes wrong, children rejoin through a skill, not by doing exercise as a penalty." },
            ]}
          />
        </div>
      </Section>

      <Section tone="sky">
        <ProductPreviewSection
          headingLevel="h2"
          product={curriculum}
          eyebrow="What a lesson looks like"
          title="Everything for one game on a page"
          text="This is a real page from the draft curriculum. It shows the objective, the equipment list with household alternatives, and the setup diagram. The full game continues with play steps, scoring, progressions, and solo, partner, and group versions."
          cta={{ label: "Join the Curriculum Waitlist", href: "#waitlist", cta: "homeschool-waitlist:homeschool-preview" }}
        />
      </Section>

      <AudienceSignup
        id="waitlist"
        tone="white"
        audience="homeschool"
        source="for-homeschool-families"
        eyebrow="Curriculum waitlist"
        title="Join the curriculum waitlist"
        intro="Tell us a little about your family or co-op. This list is only for homeschool families, so we can build what you need."
        interests={["K–5 Curriculum waitlist", "Free sample lesson", "Bench Boost updates", "Co-op group versions"]}
        defaultInterests={["K–5 Curriculum waitlist", "Free sample lesson"]}
        submitLabel="Join the waitlist"
      >
        <CheckList className="mt-6" items={["Be first to know when the curriculum is ready", "Ask for the free sample lesson", "Help shape what we build for homeschool families"]} />
      </AudienceSignup>

      <Section>
        <ProductPreviewSection
          headingLevel="h2"
          product={bench}
          reverse
          eyebrow="Practice at home"
          title="Reinforce what children learned"
          text="Bench Boost lets children review movement and health ideas in short, game-style rounds. It's open to try today."
          points={["Grade bands from K–2 up", "Works alongside the curriculum topics"]}
          cta={{ label: "Explore Bench Boost", href: "/bench-boost", cta: "homeschool-explore-bench-boost" }}
        />
      </Section>

      <Section tone="sky">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Card>
            <h3 className="text-xl font-bold">Co-ops and groups</h3>
            <p className="mt-3 leading-7 text-ink-600">Group versions are written for 4 to 20 children, with roles, rotations, and ways to keep waiting time short. If you lead a co-op, tell us how your group meets so we can build for it.</p>
            <div className="mt-6"><LinkButton href="/contact?topic=homeschool-co-op" variant="teal" arrow>Talk to us about co-ops</LinkButton></div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold">Safety first</h3>
            <p className="mt-3 leading-7 text-ink-600">Activities need adult supervision and should be adapted to each child. Talk with your child's doctor if you have questions about what is right for them. Stop any activity that causes pain or dizziness.</p>
          </Card>
        </div>
      </Section>

      <Section narrow>
        <SectionHeading eyebrow="Good to know" title="Questions families ask" />
        <div className="mt-8">
          <FAQ items={[
            { q: "Can I buy the curriculum now?", a: "Not yet. It is still being finalized, and nothing on this site takes payments. Join the waitlist and we'll let you know when it's ready." },
            { q: "Is the free sample lesson available?", a: siteConfig.sampleLessonUrl ? "Yes. It is a draft lesson from the curriculum in development." : "Not published yet. Ask for it on the waitlist and we'll email it when it's ready." },
            { q: "What ages is it for?", a: "Kindergarten through Grade 5, in two tracks: K–2 and 3–5." },
            { q: "Do I need special equipment?", a: "Games list what you need and household alternatives. Many use things like soft balls, beanbags, cups, or tape." },
            { q: "Can I use it with just one child?", a: "Yes. Every game has a solo version that does not need a teammate or an opponent." },
          ]} />
        </div>
      </Section>

      <PrivacyGlance />
    </>
  );
}
