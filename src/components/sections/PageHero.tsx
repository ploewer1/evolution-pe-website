import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageHero({ eyebrow, title, subtitle, children, aside }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode; aside?: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-sky-200/70 bg-sky-50">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative py-11 sm:py-20">
        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]" : ""}>
          <div className="max-w-3xl">
            {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{eyebrow}</p>}
            <h1 className="text-[1.9rem] font-extrabold leading-[1.1] sm:text-5xl sm:leading-[1.08]">{title}</h1>
            {subtitle && <p className="mt-4 max-w-2xl text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 text-ink-600">{subtitle}</p>}
            {children && <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">{children}</div>}
          </div>
          {aside}
        </div>
      </Container>
    </div>
  );
}
