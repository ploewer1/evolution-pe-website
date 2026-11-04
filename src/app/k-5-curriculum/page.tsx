import { pageMetadata } from "@/lib/metadata";
import { getProduct, productCta, SIGNUP_PATH } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FAQ } from "@/components/sections/FAQ";
import { Notice } from "@/components/sections/Notice";
import { PreviewFrame } from "@/components/sections/PreviewFrame";
import { AudienceCtas } from "@/components/sections/AudienceCtas";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = pageMetadata({
  title: "K–5 Physical Education Curriculum",
  description: "A 36-week K–5 physical education curriculum in two tracks (K–2 and 3–5), with solo, partner, and group versions of every game. Coming soon.",
  path: "/k-5-curriculum",
});

const quarters = [
  { q: "Quarter 1", w: "Weeks 1–9", t: "Movement foundations", d: "Traveling and balance, healthy fuel, rolling and catching, heart and effort, personal movement goals, and a movement carnival." },
  { q: "Quarter 2", w: "Weeks 10–18", t: "Games and teamwork", d: "Soccer skills, passing and possession, dribbling, shooting, cooperative play, and a sports festival." },
  { q: "Quarter 3", w: "Weeks 19–27", t: "Rhythm, striking, and rope", d: "Balance sequences, rhythm, hockey-style games, volleying, paddle striking, and jump rope." },
  { q: "Quarter 4", w: "Weeks 28–36", t: "Strength, habits, and celebration", d: "Strength and endurance, cooperation, digestion and nutrition, fitness progress, outdoor safety, planning, creating a game, and a celebration." },
];

const gameParts = [
  "Objective and an \"I can\" goal for the child",
  "Equipment list with household alternatives",
  "Space, setup time, and exact arrangement",
  "Numbered play steps, rules, and boundaries",
  "Scoring, reset, and round start and end",
  "Progressions by grade, plus easier and harder options",
  "Safety notes and observable outcomes",
  "A health connection that names its source",
  "Solo, partner, and group (4 to 20 children) versions",
  "A matching Bench Boost topic",
];

export default function CurriculumPage() {
  const product = getProduct("k-5-curriculum");
  const cta = productCta(product);
  return (
    <>
      <PageHero
        eyebrow="Product · K–5 Curriculum"
        title="A year of physical education, ready to teach."
        subtitle="36 weeks, two tracks (K–2 and 3–5), and 72 games, each with solo, partner, and group versions. It works in a gym, a co-op, or your living room."
        aside={<PreviewFrame product={product} priority />}
      >
        <div>
          <div className="mb-4"><StatusBadge status={product.status} /></div>
          <AudienceCtas audience="homeschool" location="curriculum-hero" />
        </div>
      </PageHero>

      <Section>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[["36", "weeks"], ["2", "grade tracks: K–2 and 3–5"], ["72", "games"], ["3", "versions of each: solo, partner, group"]].map(([n, l]) => (
            <Card key={l} className="reveal text-center">
              <dt className="sr-only">{l}</dt>
              <dd><span className="block font-display text-4xl font-extrabold text-teal-700 sm:text-5xl">{n}</span><span className="mt-1 block text-sm text-ink-600">{l}</span></dd>
            </Card>
          ))}
        </dl>
        <Notice title="Status: being finalized" className="mt-8">The curriculum isn't released and can't be purchased yet. Nothing on this site takes payments. Join the list to be notified when it is ready.</Notice>
      </Section>

      <Section tone="sky">
        <SectionHeading eyebrow="Year at a glance" title="Four quarters, one connected year" />
        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
          {quarters.map((q) => (
            <Card key={q.q} lift className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{q.q} · {q.w}</p>
              <h3 className="mt-2 text-xl font-bold">{q.t}</h3>
              <p className="mt-3 leading-7 text-ink-600">{q.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Inside every game" title="Everything you need on one page" intro="Each game is written to be run, with no guessing about setup, scoring, or what to do when something goes wrong." />
            <CheckList className="mt-8" items={gameParts} />
          </div>
          <div className="space-y-6">
            <Card><h3 className="text-xl font-bold">Movement is never punishment</h3><p className="mt-3 leading-7 text-ink-600">Games use skill-based re-entries, like a balance or a short skill, instead of exercises as a penalty. This follows SHAPE America's position against using physical activity as punishment.</p></Card>
            <Card><h3 className="text-xl font-bold">Printable library</h3><p className="mt-3 leading-7 text-ink-600">Game cards, setup diagrams, and recording sheets are designed to print at home or at school.</p></Card>
            <Card><h3 className="text-xl font-bold">Health connections with sources</h3><p className="mt-3 leading-7 text-ink-600">Health ideas name where they come from, such as CDC, NIDDK, and AAP guidance, so you can read further.</p></Card>
          </div>
        </div>
      </Section>

      <Section tone="sky" narrow>
        <SectionHeading eyebrow="Good to know" title="Questions" />
        <div className="mt-8">
          <FAQ items={[
            { q: "When will it be available?", a: "We don't have a date to share yet. Join the list and you'll hear first." },
            { q: "Is it aligned to standards?", a: "We haven't published a standards alignment and we don't claim endorsement by any standards organization." },
            { q: "Will there be a sample week?", a: "We'd like to offer one. Join the list so we can tell you if and when it's available." },
            { q: "Can I use it with one child?", a: "Yes. Every game includes a solo version." },
          ]} />
        </div>
      </Section>

      <CTABand title="Hear first when it's ready" text="We'll email you when the curriculum is available and when beta testers are needed.">
        <LinkButton href={SIGNUP_PATH} variant="onDark" size="lg">Join the list</LinkButton>
        <LinkButton href="/contact?topic=beta" variant="teal" size="lg">Ask about beta testing</LinkButton>
      </CTABand>
    </>
  );
}
