import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { asset } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { products, SIGNUP_PATH } from "@/config/products";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Notice } from "@/components/sections/Notice";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = pageMetadata({
  title: "About Evolution PE",
  description: "Evolution PE was created by an elementary Physical Education and Health teacher to make PE easier to run, more inclusive, and honest about what it can do.",
  path: "/about",
});

const principles = [
  { t: "Movement is never punishment", d: "We design games so children re-enter through a skill, not by doing exercise as a penalty." },
  { t: "Everyone gets a role", d: "Every game has solo, partner, and group versions, so a child is never stuck waiting for a teammate." },
  { t: "Show the sources", d: "Health ideas in our materials name where they come from, so you can check and read more." },
  { t: "Say what's ready", d: "If something is in beta or coming soon, the page says so. We don't claim approvals we don't have." },
];

export default function AboutPage() {
  const founder = siteConfig.founder;
  return (
    <>
      <PageHero eyebrow="About" title="Built by a teacher who wanted better tools." subtitle="Evolution PE was created by an elementary Physical Education and Health teacher to make PE easier to run, more inclusive, and honest about what it can do." />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="mx-auto w-full max-w-xs rounded-[2rem] bg-sky-50 p-8 ring-1 ring-sky-200">
            {founder.photo ? (
              <Image src={asset(founder.photo)} alt={founder.name || "Founder of Evolution PE"} width={480} height={480} className="rounded-2xl" />
            ) : (
              <Image src={asset("/brand/logo.png")} alt="Evolution PE emblem" width={480} height={480} />
            )}
          </div>
          <div>
            <SectionHeading eyebrow="Our mission" title="Better PE for every child and every teacher" />
            <p className="mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 text-ink-600">
              Good physical education shouldn't depend on how much prep time a teacher has or how much equipment a family owns. We build curriculum, learning activities, and tools that are clear, flexible, and ready to use.
            </p>
            {founder.bio && <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8 text-ink-600">{founder.bio}</p>}
            {founder.name && <p className="mt-4 font-display font-bold text-navy-900">{founder.name}<span className="font-normal text-ink-600">, {founder.title}</span></p>}
          </div>
        </div>
      </Section>

      <Section tone="sky">
        <SectionHeading eyebrow="How we work" title="Four commitments" />
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <Card key={p.t} className="reveal"><h3 className="text-lg font-bold">{p.t}</h3><p className="mt-2 leading-7 text-ink-600">{p.d}</p></Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we're building" title="Products and where they stand" />
        <ul className="mt-8 sm:mt-10 divide-y divide-ink-200 rounded-[var(--radius-card)] border border-ink-200 bg-white shadow-card">
          {products.map((p) => (
            <li key={p.slug} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div><p className="font-display text-lg font-bold text-navy-900">{p.name}</p><p className="text-sm text-ink-600">{p.tagline}</p></div>
              <StatusBadge status={p.status} className="w-fit" />
            </li>
          ))}
        </ul>
        <Notice className="mt-8" title="Where we're headed">We hope to offer curriculum downloads, memberships, and school licenses over time. These plans may change, and none of them is available yet.</Notice>
      </Section>

      <Section tone="sky" narrow>
        <SectionHeading eyebrow="Independence" title="An independent company" />
        <p className="mt-4 leading-8 text-ink-600">{siteConfig.independenceNotice} {siteConfig.trademarkNotice} Their names appear on this site only to describe how our tools relate to their programs.</p>
      </Section>

      <CTABand title="Come along while we build" text="Join the list, try Bench Boost, or tell us what would make PE easier for you.">
        <LinkButton href={SIGNUP_PATH} variant="onDark" size="lg">Join the list</LinkButton>
        <LinkButton href="/contact" variant="teal" size="lg">Contact us</LinkButton>
      </CTABand>
    </>
  );
}
