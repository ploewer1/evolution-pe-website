import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import { getProduct, productCta } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Notice } from "@/components/sections/Notice";
import { CTABand } from "@/components/sections/CTABand";
import { ProductIcon } from "@/components/sections/ProductCard";
import { PreviewFrame } from "@/components/sections/PreviewFrame";
import { AudienceCtas } from "@/components/sections/AudienceCtas";

export const metadata = pageMetadata({
  title: "Fitness Tools for PE Teachers",
  description: "Tools for fitness testing: a beta analyzer that summarizes class results, and a shuttle-run scoreboard that is still in development.",
  path: "/fitness-tools",
});

export default function FitnessToolsPage() {
  const analyzer = getProduct("fitness-test-analyzer");
  const board = getProduct("shuttle-run-scoreboard");
  const aCta = productCta(analyzer);
  const bCta = productCta(board);
  return (
    <>
      <PageHero eyebrow="Fitness tools" title="Make fitness testing less of a paperwork project." subtitle="Two tools for PE teachers: one summarizes class results, and one keeps a shuttle run on pace. Each shows its true status below.">
        <AudienceCtas audience="teachers" location="fitness-tools-hero" />
      </PageHero>

      <Section id="analyzer">
        <div className="flex flex-wrap items-center gap-4"><ProductIcon slug={analyzer.slug} /><StatusBadge status={analyzer.status} /></div>
        <h2 className="mt-5 text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]">{analyzer.name}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-ink-600 sm:mt-4 sm:text-lg sm:leading-8">Load a class's results from a spreadsheet, or type scores in, and see totals by grade and gender. Choose what to compare against.</p>

        <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:grid-cols-2">
          <PreviewFrame product={analyzer} className="reveal" />
          <PreviewFrame product={{ ...analyzer, preview: { ...analyzer.preview, src: "/previews/analyzer-individual.png", width: 1400, height: 712, alt: "Individual results for four fictional students showing which standards each met, with the scores and what each needed", caption: "Individual results for four fictional students, shown on screen only." } }} className="reveal" />
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-3">
          <Card className="reveal"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Option 1</p><h3 className="mt-2 text-lg font-bold">Your school's FitnessGram results</h3><p className="mt-2 text-[0.95rem] leading-7 text-ink-600">Uses the "Standard Met" columns that your school's FitnessGram software already calculated.</p></Card>
          <Card className="reveal"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Option 2</p><h3 className="mt-2 text-lg font-bold">Presidential test (2026)</h3><p className="mt-2 text-[0.95rem] leading-7 text-ink-600">Built-in benchmarks from the official White House table published in May 2026, for ages 6 to 17+.</p></Card>
          <Card className="reveal"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Option 3</p><h3 className="mt-2 text-lg font-bold">Your own standards</h3><p className="mt-2 text-[0.95rem] leading-7 text-ink-600">Enter your state or district standards by age and sex, and save them in a small file to reuse.</p></Card>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">What it does</h3>
            <CheckList className="mt-4" items={["Upload an Excel or CSV file, or type or paste scores", "Class totals by grade and gender, plus Pre to Post movement", "Individual results on screen to see who met each standard", "Excel summary and print report with no student identifiers"]} />
          </div>
          <div>
            <h3 className="text-xl font-bold">How it handles data</h3>
            <CheckList className="mt-4" items={["Designed to run in your browser, without uploading or saving student records", "Nothing is stored: typed scores stay on the page until you close it", "Built with testing in mind, but still in beta and not independently audited"]} />
          </div>
        </div>

        <Notice title="Before you rely on it" className="mt-8 sm:mt-10">
          This tool is in beta. Check results against your official reports. Please follow your district's rules before using real student records. {siteConfig.independenceNotice} {siteConfig.trademarkNotice}
        </Notice>
        <div className="mt-8 flex flex-wrap gap-3"><LinkButton href={aCta.href} variant="teal" size="lg" arrow>{aCta.label}</LinkButton></div>
      </Section>

      <Section id="scoreboard" tone="sky">
        <div className="flex flex-wrap items-center gap-4"><ProductIcon slug={board.slug} /><StatusBadge status={board.status} /></div>
        <h2 className="mt-5 text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]">{board.name}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-ink-600 sm:mt-4 sm:text-lg sm:leading-8">A shuttle-run pacer video with spoken directions, a chime on every lap, level callouts, and a large lap scoreboard for the gym screen. It uses original audio and visuals.</p>
        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold">Planned</h3>
            <CheckList className="mt-4" items={["15-meter version, with a 20-meter version planned", "Spoken directions and level announcements", "Live lap count and next-beep timer", "Printable score sheets"]} />
          </Card>
          <Card>
            <h3 className="text-xl font-bold">Still being verified</h3>
            <CheckList className="mt-4" items={["Lap timing against the published shuttle-run protocol", "Licensing and trademark questions", "Safety guidance for maximal-effort testing"]} />
          </Card>
        </div>
        <Notice className="mt-8">Because those checks aren't finished, the scoreboard is not released and is not an official FitnessGram or PACER product.</Notice>
        <div className="mt-8"><LinkButton href={bCta.href} variant="teal" size="lg" arrow>{bCta.label}</LinkButton></div>
      </Section>

      <CTABand title="Help test these tools" text="Beta testers shape what we build. Tell us how you test fitness today.">
        <LinkButton href="/contact?topic=beta" variant="onDark" size="lg">Ask about beta testing</LinkButton>
      </CTABand>
    </>
  );
}
