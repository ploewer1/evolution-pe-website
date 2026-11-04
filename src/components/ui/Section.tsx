import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "sky" | "navy";

export function Section({
  id, tone = "white", children, className, narrow,
}: { id?: string; tone?: Tone; children: ReactNode; className?: string; narrow?: boolean }) {
  const tones: Record<Tone, string> = {
    white: "bg-white",
    sky: "bg-sky-50 border-y border-sky-200/70",
    navy: "bg-navy-900 text-sky-100 [&_h2]:text-white [&_h3]:text-white",
  };
  return (
    <section id={id} className={cn("py-[3.25rem] sm:py-20 lg:py-24", tones[tone], className)}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow, title, intro, center, onDark,
}: { eyebrow?: string; title: string; intro?: string; center?: boolean; onDark?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className={cn("mb-3 text-xs font-semibold uppercase tracking-[0.14em]", onDark ? "text-teal-300" : "text-teal-700")}>{eyebrow}</p>
      )}
      <h2 className={cn("text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]", onDark && "text-white")}>{title}</h2>
      {intro && <p className={cn("mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8", onDark ? "text-sky-200" : "text-ink-600")}>{intro}</p>}
    </div>
  );
}
