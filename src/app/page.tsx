import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { asset } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { products, SIGNUP_PATH, getProduct } from "@/config/products";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, IconTile } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { ArrowRight, IconClipboard, IconHeart, IconHome, IconUsers, IconShield, IconBook, IconChart, IconApp } from "@/components/ui/Icons";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroProductStack } from "@/components/sections/HeroProductStack";
import { ProductCard, ProductRow } from "@/components/sections/ProductCard";
import { SignupSection } from "@/components/sections/SignupSection";
import { CTABand } from "@/components/sections/CTABand";
import { AudienceCtas } from "@/components/sections/AudienceCtas";
import { ProductPreviewSection } from "@/components/sections/ProductPreviewSection";
import { PrivacyGlance } from "@/components/sections/PrivacyGlance";

export const metadata = pageMetadata({
  title: `${siteConfig.name}: ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "",
});

function Pathway({ icon, title, text, points, href, chips, audience }: { icon: React.ReactNode; title: string; text: string; points: string[]; href: string; chips: string[]; audience: "teachers" | "homeschool" }) {
  return (
    <Card lift className="reveal flex h-full flex-col p-6 sm:p-9">
      <IconTile className="h-12 w-12">{icon}</IconTile>
      <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
      <p className="mt-2 text-base leading-7 text-ink-600">{text}</p>
      <CheckList className="mt-6" items={points} />
      <div className="mt-6 flex flex-wrap gap-2">
        {chips.map((c) => <span key={c} className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-navy-800">{c}</span>)}
      </div>
      <div className="mt-auto pt-7"><AudienceCtas audience={audience} size="md" location="home" /><p className="mt-4 text-sm"><Link href={href} className="font-semibold text-teal-700 underline-offset-4 hover:text-teal-800 hover:underline">See the full {audience === "teachers" ? "teacher" : "homeschool"} page</Link></p></div>
    </Card>
  );
}

export default function HomePage() {
  const featured = ["bench-boost", "k-5-curriculum", "fitness-test-analyzer"].map(getProduct);
  const secondary = products.filter((p) => p.slug === "shuttle-run-scoreboard");
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden bg-sky-50">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative py-12 sm:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-teal-800 shadow-sm ring-1 ring-inset ring-sky-200 sm:text-xs sm:tracking-[0.12em]">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-600" aria-hidden /> Created by an elementary PE teacher
              </p>
              <h1 className="text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl sm:leading-[1.04] lg:text-[4.25rem]">
                Better PE.<br />Less Prep.<br /><span className="text-teal-700">More Movement.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink-600 sm:mt-6 sm:text-xl sm:leading-9">
                Engaging physical education curriculum, interactive learning, and practical fitness tools—created by an elementary PE teacher.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                <LinkButton href="/for-pe-teachers" size="lg" arrow cta="home-pathway-teachers">For PE Teachers</LinkButton>
                <LinkButton href="/for-homeschool-families" size="lg" variant="teal" arrow cta="home-pathway-homeschool">For Homeschool Families</LinkButton>
              </div>
            </div>
            <HeroProductStack />
          </div>
        </Container>
      </div>

      {/* PATHWAYS */}
      <Section>
        <SectionHeading center eyebrow="Choose your path" title="Built for the gym, the living room, and the co-op" intro="Evolution PE serves two groups with different needs. Start with the page that fits you." />
        <div className="mt-9 sm:mt-12 grid gap-6 lg:grid-cols-2">
          <Pathway
            icon={<IconClipboard className="h-6 w-6" />}
            title="For PE Teachers"
            text="Spend less time planning and more time teaching, with materials you can run tomorrow."
            points={["Fitness-data analysis that cuts the spreadsheet work", "Interactive learning that reinforces what students do in class", "Lesson games with setup, rules, scoring, and progressions"]}
            chips={["Bench Boost: open beta", "Curriculum: coming soon", "Analyzer: beta"]}
            href="/for-pe-teachers" audience="teachers"
          />
          <Pathway
            icon={<IconHome className="h-6 w-6" />}
            title="For Homeschool Families"
            text="A clear year of PE that works with the space, equipment, and children you actually have."
            points={["36 weeks in two tracks: K–2 and 3–5", "Solo, partner, and group versions of every game", "Household equipment alternatives and printable cards"]}
            chips={["Curriculum: coming soon", "Bench Boost: open beta"]}
            href="/for-homeschool-families" audience="homeschool"
          />
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section tone="sky">
        <SectionHeading eyebrow="What we make" title="Three tools that work together" intro="Teach with the curriculum, practice with Bench Boost, and track progress with fitness tools. Every card shows exactly what is available today." />
        <div className="mt-9 sm:mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
        <div className="mt-6 space-y-4">
          {secondary.map((p) => <ProductRow key={p.slug} product={p} />)}
        </div>
      </Section>

      {/* HOW IT FITS */}
      <Section>
        <SectionHeading center eyebrow="How it fits together" title="Teach. Practice. Assess." />
        <ol className="mt-9 sm:mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: <IconBook className="h-6 w-6" />, t: "Teach", d: "Weekly movement lessons from the K–5 curriculum, with solo, partner, and group options.", n: "01" },
            { icon: <IconApp className="h-6 w-6" />, t: "Practice", d: "Students reinforce movement and health ideas with Bench Boost's short, game-style activities.", n: "02" },
            { icon: <IconChart className="h-6 w-6" />, t: "Assess", d: "Summarize fitness-testing results and track personal progress with the analyzer and scoreboard.", n: "03" },
          ].map((s, i) => (
            <li key={s.t} className="reveal relative rounded-[var(--radius-card)] border border-ink-200 bg-white p-7 shadow-card">
              <span className="font-display text-sm font-bold text-teal-700">{s.n}</span>
              <div className="mt-3 flex items-center gap-3"><IconTile>{s.icon}</IconTile><h3 className="text-xl font-bold">{s.t}</h3></div>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink-600">{s.d}</p>
              {i < 2 && <ArrowRight className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-teal-600 md:block" />}
            </li>
          ))}
        </ol>
      </Section>

      {/* PRODUCT PREVIEWS */}
      <Section tone="sky">
        <SectionHeading eyebrow="See it in action" title="A closer look at each product" intro="Real screens where we have them, and clearly labeled placeholders where we don't yet." />
        <div className="mt-9 space-y-14 sm:mt-14 sm:space-y-20">
          <ProductPreviewSection
            product={getProduct("fitness-test-analyzer")}
            eyebrow="For PE teachers"
            title="Fitness data, summarized"
            text="Load a class's results or type them in, choose your standards, and see who met them by grade and gender."
            points={["Compare against your school's FitnessGram results, the 2026 Presidential benchmarks, or your own standards", "Excel summary and print report without student identifiers"]}
            cta={{ label: "Try Fitness Analyzer", href: siteConfig.analyzerUrl || "/for-pe-teachers#beta", cta: "teachers-try-analyzer:home-preview" }}
          />
          <ProductPreviewSection
            product={getProduct("bench-boost")}
            reverse
            eyebrow="For teachers and families"
            title="Short, game-style practice"
            text="Students review movement and health ideas in quick rounds, from kindergarten through high school."
            points={["Four grade bands: K–2, 3–5, 6–8, and 9–12", "Multiple modes, from Learn to Lightning Round"]}
            cta={{ label: "Explore Bench Boost", href: "/bench-boost", cta: "home-preview-bench-boost" }}
          />
          <ProductPreviewSection
            product={getProduct("k-5-curriculum")}
            eyebrow="For families and teachers"
            title="Lessons written to be run"
            text="Each game lists equipment with household alternatives, setup, play steps, scoring, and solo, partner, and group versions."
            points={["36 weeks in two tracks: K–2 and 3–5", "Printable cards, diagrams, and recording sheets"]}
            cta={{ label: "Join the Curriculum Waitlist", href: "/for-homeschool-families#waitlist", cta: "homeschool-waitlist:home-preview" }}
          />
        </div>
      </Section>

      {/* SIGNUP */}
      <SignupSection source="home" />

      {/* FOUNDER */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-teal-100" aria-hidden />
            <div className="relative flex aspect-square items-center justify-center rounded-[2rem] bg-sky-50 ring-1 ring-sky-200">
              <Image src={asset("/brand/logo.png")} alt="Evolution PE emblem" width={480} height={480} className="h-4/5 w-auto" />
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Who&apos;s behind it</p>
            <h2 className="text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]">Created by an elementary PE and health teacher</h2>
            <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8 text-ink-600">
              Evolution PE exists because teachers and families deserve physical education resources that are easy to run, include every child, and are honest about what they can and can&apos;t do.
            </p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                { i: <IconHeart className="h-5 w-5" />, t: "Movement is never punishment", d: "Games use skill-based re-entries, not exercise as a penalty." },
                { i: <IconUsers className="h-5 w-5" />, t: "Everyone can play", d: "Solo, partner, and group versions of every game." },
                { i: <IconBook className="h-5 w-5" />, t: "Sources shown", d: "Health connections name where the information comes from." },
                { i: <IconShield className="h-5 w-5" />, t: "Honest about status", d: "If it isn't ready, we say so on the card." },
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <IconTile className="h-10 w-10 shrink-0">{x.i}</IconTile>
                  <span><span className="block font-display font-bold text-navy-900">{x.t}</span><span className="block text-sm leading-6 text-ink-600">{x.d}</span></span>
                </li>
              ))}
            </ul>
            <div className="mt-8"><LinkButton href="/about" variant="secondary" arrow>About Evolution PE</LinkButton></div>
          </div>
        </div>
      </Section>

      <PrivacyGlance />

      <CTABand title="Help shape what comes next" text="Try Bench Boost today, join the beta list for new tools, or tell us what would make your PE program easier.">
        <LinkButton href={siteConfig.benchBoostUrl} variant="onDark" size="lg">Try Bench Boost</LinkButton>
        <LinkButton href={SIGNUP_PATH} variant="teal" size="lg">Join the list</LinkButton>
      </CTABand>
    </>
  );
}
