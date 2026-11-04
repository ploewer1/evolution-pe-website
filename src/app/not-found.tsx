import { PageHero } from "@/components/sections/PageHero";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero eyebrow="Page not found" title="We couldn't find that page." subtitle="It may have moved. Head back to the home page or tell us what you were looking for.">
      <LinkButton href="/" arrow>Back to home</LinkButton>
      <LinkButton href="/contact" variant="secondary">Contact us</LinkButton>
    </PageHero>
  );
}
