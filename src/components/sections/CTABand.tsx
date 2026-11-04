import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function CTABand({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section className="bg-navy-900 py-[3.25rem] sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[1.6rem] font-extrabold leading-[1.15] !text-white sm:text-4xl sm:leading-[2.5rem]">{title}</h2>
          {text && <p className="mt-3 text-base leading-7 sm:text-lg sm:leading-8 text-sky-200">{text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">{children}</div>
      </Container>
    </section>
  );
}
