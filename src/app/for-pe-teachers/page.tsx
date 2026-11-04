import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getProduct } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { PreviewFrame } from "@/components/sections/PreviewFrame";
import { AudienceCtas } from "@/components/sections/AudienceCtas";
import { AudienceSignup } from "@/components/sections/AudienceSignup";
import { CheckList } from "@/components/ui/CheckList";
import { FAQ } from "@/components/sections/FAQ";
import { Notice } from "@/components/sections/Notice";
import { PrivacyGlance } from "@/components/sections/PrivacyGlance";
import { IconChart, IconClipboard, IconPrint, IconApp } from "@/components/ui/Icons";

export const metadata = pageMetadata({
  title: "For PE Teachers",
  description: "Analyze fitness-testing data, cut administrative work, and keep students learning with interactive PE and health activities. Tools from an elementary PE teacher.",
  path: "/for-pe-teachers",
});

export default function TeachersPage() {
  const analyzer = getProduct("fitness-test-analyzer");
  const bench = getProduct("bench-boost");
  const curriculum = getProduct("k-5-curriculum");
  return (
    <>
      <PageHero
        eyebrow="For PE teachers"
        title="Spend less time on fitness data and more time teaching."
        subtitle="Summarize fitness-testing results, cut the paperwork, and keep students learning with interactive PE and health activities. Built by an elementary PE teacher."
        aside={<PreviewFrame product={analyzer} priority />}
      >
        <AudienceCtas audience="teachers" location="teachers-hero" />
      </PageHero>

      {/* 1. FITNESS-DATA ANALYSIS */}
      <Section>
        <ProductPreviewSection
          headingLevel="h2"
          product={analyzer}
          eyebrow="Fitness-data analysis"
          title="From a pile of scores to a clear class summary"
          text="Load a class's results from a spreadsheet, or type or paste them in. Choose what to compare against, and get totals by grade and gender, plus Pre-to-Post movement."
          points={[
            "Compare against your school's FitnessGram results, the 2026 Presidential benchmarks, or standards you enter yourself",
            "Individual results on screen, so you can see who met each standard",
            "Excel summary and print report that leave out student identifiers",
            "Designed to run in your browser, so records aren't uploaded or saved",
          ]}
          cta={{ label: "Try Fitness Analyzer", href: siteConfig.analyzerUrl || "/for-pe-teachers#beta", cta: "teachers-try-analyzer:teachers-analysis" }}
        >
          <Notice className="mt-5">The analyzer is in beta. Check results against your official reports, and follow your district's rules before using real student records. {siteConfig.independenceNotice}</Notice>
        </ProductPreviewSection>
      </Section>

      {/* 2. LESS ADMIN */}
      <Section tone="sky">
        <SectionHeading eyebrow="Less administrative work" title="Skip the tallying and rebuilding" intro="The tool does the repetitive parts so your time goes back to students." />
        <div className="mt-8 sm:mt-10">
          <FeatureGrid
            features={[
              { icon: <IconChart className="h-6 w-6" />, title: "No manual tallying", text: "Class, grade, and gender totals are calculated for you, with the same rules applied to every student." },
              { icon: <IconPrint className="h-6 w-6" />, title: "Reports ready to share", text: "Download an Excel summary or print a report, without student names or IDs in either one." },
              { icon: <IconClipboard className="h-6 w-6" />, title: "Reuse your own standards", text: "Enter your state or district standards once, save them as a small file, and load them again next term." },
            ]}
          />
        </div>
      </Section>

      {/* 3. INTERACTIVE LEARNING */}
      <Section>
        <ProductPreviewSection
          headingLevel="h2"
          product={bench}
          reverse
          eyebrow="Interactive learning"
          title="Practice that students actually want to do"
          text="Bench Boost turns movement and health ideas into short, game-style rounds. Use it to reinforce a lesson, fill a station, or give early finishers something worthwhile."
          points={["Four grade bands: K–2, 3–5, 6–8, and 9–12", "Learn, Quick 10, Challenge 20, Lightning Round, and more", "Movement, fitness, teamwork, and health topics"]}
          cta={{ label: "Explore Bench Boost", href: "/bench-boost", cta: "teachers-explore-bench-boost:teachers-learning" }}
        />
      </Section>

      {/* 4. LESSON PLANNING */}
      <Section tone="sky">
        <ProductPreviewSection
          headingLevel="h2"
          product={curriculum}
          eyebrow="Lesson planning (coming soon)"
          title="K–5 lessons with the planning already done"
          text="Each game lists equipment with household alternatives, setup, numbered play steps, scoring, progressions, and safety notes."
          points={["36 weeks in two tracks: K–2 and 3–5", "Skill-based re-entries instead of exercise as punishment, following SHAPE America's position against using physical activity as punishment"]}
          cta={{ label: "Join the teacher waitlist", href: "#beta", cta: "teachers-curriculum-waitlist" }}
        />
      </Section>

      {/* 5. TEACHER WAITLIST */}
      <AudienceSignup
        id="beta"
        tone="white"
        audience="teachers"
        source="for-pe-teachers"
        eyebrow="Teacher beta and updates"
        title="Request beta access and updates"
        intro="Tell us you're a PE teacher and what you'd like to hear about. This list is only for teachers, so we can learn what you need."
        interests={["Fitness Test Analyzer beta", "Bench Boost updates", "K–5 Curriculum", "Shuttle Run Scoreboard", "School or district licenses"]}
        defaultInterests={["Fitness Test Analyzer beta"]}
        submitLabel="Request beta access"
      >
        <CheckList className="mt-6" items={["Early access to the Fitness Test Analyzer", "Notice when the curriculum is ready", "A say in what we build next"]} />
        <p className="mt-6 text-sm text-ink-600">Interested in a school or district license? <LinkButton href="/contact?topic=school-license" variant="ghost">Tell us what you'd need</LinkButton></p>
      </AudienceSignup>

      <Section tone="sky" narrow>
        <SectionHeading eyebrow="Good to know" title="Questions teachers ask" />
        <div className="mt-8">
          <FAQ items={[
            { q: "Can I use the analyzer today?", a: "It's in beta. Join the teacher waitlist and we'll tell you when access opens. Until then, nothing on this site asks for student data." },
            { q: "Can I use it with FitnessGram data?", a: "The analyzer can summarize results using the \"Standard Met\" columns that your school's FitnessGram software already calculated. Evolution PE is independent and not affiliated with or endorsed by The Cooper Institute." },
            { q: "Is the curriculum ready to use?", a: "Not yet. It is being finalized. Join the list and we'll tell you when it's ready." },
            { q: "Is it aligned to national or state standards?", a: "We haven't published a standards alignment, and we don't claim endorsement by any standards organization. If an alignment is documented when the curriculum is released, we'll publish it." },
            { q: "Can my class use Bench Boost?", a: "Bench Boost is open at learn.evolutionpe.com and is still in beta. Check your school's rules about student use of online tools first." },
          ]} />
        </div>
        <Notice className="mt-8">{siteConfig.trademarkNotice}</Notice>
      </Section>

      <PrivacyGlance />
    </>
  );
}
