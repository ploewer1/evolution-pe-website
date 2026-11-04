import { siteConfig } from "@/config/site";
import { HOMESCHOOL_WAITLIST_PATH, TEACHER_BETA_PATH } from "@/config/products";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * The two calls to action for each audience. Every button has a real destination:
 *  - Try Fitness Analyzer     -> the hosted beta if NEXT_PUBLIC_ANALYZER_URL is set, otherwise the teacher beta waitlist
 *  - Get a Free Sample Lesson -> the sample file if NEXT_PUBLIC_SAMPLE_LESSON_URL is set, otherwise the homeschool waitlist
 * The note under the buttons says which of the two is happening, so nobody is surprised.
 */
export function AudienceCtas({ audience, size = "lg", className, location = "page" }: { audience: "teachers" | "homeschool"; size?: "md" | "lg"; className?: string; location?: string }) {
  if (audience === "teachers") {
    const live = Boolean(siteConfig.analyzerUrl);
    return (
      <div className={className}>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <LinkButton href={live ? siteConfig.analyzerUrl : TEACHER_BETA_PATH} size={size} variant="primary" arrow cta={`teachers-try-analyzer:${location}`}>Try Fitness Analyzer</LinkButton>
          <LinkButton href="/bench-boost" size={size} variant="secondary" arrow cta={`teachers-explore-bench-boost:${location}`}>Explore Bench Boost</LinkButton>
        </div>
        <p className="mt-3 text-sm text-ink-600">{live ? "Fitness Analyzer is in beta. Check results against your official reports." : "Fitness Analyzer is in beta: request access on the teacher waitlist."}</p>
      </div>
    );
  }
  const hasSample = Boolean(siteConfig.sampleLessonUrl);
  return (
    <div className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <LinkButton href={hasSample ? siteConfig.sampleLessonUrl : HOMESCHOOL_WAITLIST_PATH} size={size} variant="teal" arrow cta={`homeschool-sample-lesson:${location}`}>Get a Free Sample Lesson</LinkButton>
        <LinkButton href={HOMESCHOOL_WAITLIST_PATH} size={size} variant="secondary" arrow cta={`homeschool-waitlist:${location}`}>Join the Curriculum Waitlist</LinkButton>
      </div>
      <p className={cn("mt-3 text-sm text-ink-600")}>{hasSample ? "The sample lesson is a draft from the curriculum in development." : "The sample lesson isn't published yet. Ask for it on the waitlist and we'll email it when it's ready."}</p>
    </div>
  );
}
