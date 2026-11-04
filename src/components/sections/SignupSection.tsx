import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { SignupForm } from "@/components/forms/SignupForm";

/** Reusable email-signup block. The page that hosts it should provide id="signup" via the wrapper below. */
export function SignupSection({ tone = "sky", title = "Get free resources and early access", intro, source = "free-resources" }: { tone?: "sky" | "white"; title?: string; intro?: string; source?: string }) {
  return (
    <Section id="signup" tone={tone}>
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Join the list</p>
          <h2 className="text-[1.6rem] font-extrabold leading-[1.15] sm:text-4xl sm:leading-[2.5rem]">{title}</h2>
          <p className="mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8 text-ink-600">
            {intro ?? "Tell us who you are and what you'd like to hear about. We'll send updates as products are ready and invite beta testers along the way."}
          </p>
          <CheckList
            className="mt-7"
            items={[
              "Early notice when the K–5 curriculum is ready",
              "Invitations to try new tools while they're in beta",
              "Free resources as they are released",
            ]}
          />
        </div>
        <Card className="p-6 sm:p-8">
          <SignupForm idPrefix="signup-form" audience="general" source={source} />
        </Card>
      </div>
    </Section>
  );
}
