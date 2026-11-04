import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getProduct, productCta } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FAQ } from "@/components/sections/FAQ";
import { Notice } from "@/components/sections/Notice";
import { PreviewFrame } from "@/components/sections/PreviewFrame";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = pageMetadata({
  title: "Bench Boost: Interactive PE and Health Learning",
  description: "Bench Boost is a web app where students practice physical education and health ideas through short, game-style activities, for grades K–12.",
  path: "/bench-boost",
});

const bands = [
  { label: "K–2", text: "Early elementary" },
  { label: "3–5", text: "Upper elementary" },
  { label: "6–8", text: "Middle school" },
  { label: "9–12", text: "High school" },
];
const modes = ["Learn", "Quick 10", "Challenge 20", "Mastery", "Lightning Round", "Fact Check", "Sort It", "Bench Reporter"];
const peTopics = ["Movement skills", "Throwing, catching, and kicking", "Sports and game strategy", "Dance, rhythm, and gymnastics", "Fitness", "Fitness testing and goals", "Active lifestyle", "Teamwork and sportsmanship"];
const healthTopics = ["Nutrition and hydration", "The human body", "Healthy habits", "Mental and emotional wellness", "Safety and first aid", "Relationships and social health"];

export default function BenchBoostPage() {
  const product = getProduct("bench-boost");
  const cta = productCta(product);
  return (
    <>
      <PageHero
        eyebrow="Product · Bench Boost"
        title="Practice PE and health, one short round at a time."
        subtitle="Bench Boost is a web app where students review movement and health ideas through quick, game-style activities."
        aside={<PreviewFrame product={product} priority />}
      >
        <LinkButton href={cta.href} size="lg">{cta.label}</LinkButton>
        <LinkButton href="/contact?topic=feedback" size="lg" variant="secondary">Share feedback</LinkButton>
        <StatusBadge status={product.status} />
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Grade bands" title="Four bands, kindergarten through high school" intro="Students practice at the level that fits them." />
        <div className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bands.map((b) => (
            <Card key={b.label} lift className="reveal text-center">
              <p className="font-display text-3xl font-extrabold text-teal-700 sm:text-4xl">{b.label}</p>
              <p className="mt-2 text-sm text-ink-600">{b.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sky">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Ways to practice" title="Multiple modes" intro="Students can study, test themselves, race the clock, and sort ideas." />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {modes.map((m) => <li key={m} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 shadow-sm ring-1 ring-inset ring-sky-300">{m}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Topics" title="Physical education and health" />
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div><h3 className="mb-3 text-base font-bold">Physical education</h3><CheckList items={peTopics} /></div>
              <div><h3 className="mb-3 text-base font-bold">Health</h3><CheckList items={healthTopics} /></div>
            </div>
          </div>
        </div>
      </Section>

      <Section narrow>
        <SectionHeading eyebrow="Works with the curriculum" title="Teach it in the gym, practice it in the app" />
        <p className="mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 text-ink-600">The K–5 curriculum is designed so each week's topic connects to Bench Boost content. The curriculum isn't released yet, but Bench Boost is open to explore today.</p>
        <Notice title="Bench Boost is in beta" className="mt-8">It is actively in development. Content and features are still growing, and your feedback helps. This website does not collect student data, and Bench Boost runs separately at learn.evolutionpe.com.</Notice>
      </Section>

      <Section tone="sky" narrow>
        <SectionHeading eyebrow="Good to know" title="Questions" />
        <div className="mt-8">
          <FAQ items={[
            { q: "Where do I find Bench Boost?", a: `Bench Boost lives at ${siteConfig.benchBoostUrl.replace("https://", "").replace(/\/$/, "")}. This website links to it and does not host it.` },
            { q: "What does it cost?", a: "You can open Bench Boost today. Future pricing hasn't been decided, and nothing on this website takes payments." },
            { q: "Is it okay to use with my class?", a: "That is up to your school or district. Please check their rules about students using online tools before you start." },
            { q: "Can I suggest a topic or report a mistake?", a: "Yes, please. Use the feedback link and tell us what you found." },
          ]} />
        </div>
      </Section>

      <CTABand title="Try a round today" text="Open Bench Boost and see what a quick session looks like.">
        <LinkButton href={cta.href} variant="onDark" size="lg">{cta.label}</LinkButton>
        <LinkButton href="/contact?topic=feedback" variant="teal" size="lg">Share feedback</LinkButton>
      </CTABand>
    </>
  );
}
