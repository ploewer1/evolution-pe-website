import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { SignupForm, type SignupAudience } from "@/components/forms/SignupForm";

/** A signup block that belongs to one audience, so teacher and homeschool interest are counted separately. */
export function AudienceSignup({
  id, audience, source, eyebrow, title, intro, interests, defaultInterests, submitLabel, children, tone = "sky",
}: {
  id: string; audience: SignupAudience; source: string; eyebrow: string; title: string; intro: string;
  interests: string[]; defaultInterests?: string[]; submitLabel: string; children?: ReactNode; tone?: "sky" | "white";
}) {
  return (
    <Section id={id} tone={tone}>
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{eyebrow}</p>
          <h2 className="text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]">{title}</h2>
          <p className="mt-3 text-base leading-7 text-ink-600 sm:mt-4 sm:text-lg sm:leading-8">{intro}</p>
          {children}
        </div>
        <Card className="p-5 sm:p-8">
          <SignupForm idPrefix={`${id}-form`} audience={audience} source={source} interests={interests} defaultInterests={defaultInterests} submitLabel={submitLabel} />
        </Card>
      </div>
    </Section>
  );
}
