/**
 * Central site settings. Edit text here, not inside pages.
 * Values that depend on your accounts come from environment variables (see .env.example).
 */
export const siteConfig = {
  name: "Evolution PE",
  tagline: "Better PE. Less Prep. More Movement.",
  description:
    "Engaging physical education curriculum, interactive learning, and practical fitness tools, created by an elementary PE teacher.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://evolutionpe.com").replace(/\/$/, ""),

  /** Where the existing Bench Boost app lives. This site only links to it. */
  benchBoostUrl: "https://learn.evolutionpe.com/",

  /** Public email shown on the Contact page. Blank hides it. */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  /**
   * Form endpoints. Each audience can post to its own form so submissions are counted separately.
   * Teachers and homeschool fall back to the general endpoint if their own is blank.
   * With no endpoint at all, a form either opens an email (if a contact email is set) or says plainly
   * that nothing is saved. It never claims a submission was received when it was not.
   */
  signupEndpoints: {
    general: process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT ?? "",
    teachers: process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT_TEACHERS || process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT || "",
    homeschool: process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT_HOMESCHOOL || process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT || "",
  },
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",

  /** Where the beta Fitness Test Analyzer is hosted, once you are ready to let people use it. Blank = waitlist only. */
  analyzerUrl: process.env.NEXT_PUBLIC_ANALYZER_URL ?? "",

  /** A real, reviewed sample lesson file or page. Blank = "Get a Free Sample Lesson" goes to the waitlist. */
  sampleLessonUrl: process.env.NEXT_PUBLIC_SAMPLE_LESSON_URL ?? "",

  /** Optional privacy-friendly analytics (Plausible). Blank = no analytics script is loaded at all. */
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",

  /** Shown in the footer and on fitness-testing pages. Keep wording factual. */
  independenceNotice:
    "Evolution PE is an independent company. It is not affiliated with or endorsed by The Cooper Institute, FitnessGram, GreenLight Fitness, the President's Council on Sports, Fitness & Nutrition, or SHAPE America.",
  trademarkNotice:
    "FITNESSGRAM® and Healthy Fitness Zone® are registered trademarks of The Cooper Institute.",

  /** Short, accurate privacy summary used in the "Privacy at a glance" blocks. Keep it factual. */
  privacyPoints: [
    "This website does not ask for student information, and we ask visitors not to enter it in any form.",
    "It does not process payments or collect payment details.",
    "Forms ask adults for an email address and a message only.",
  ],

  /** Optional founder details. Leave blank until you are ready to publish them. */
  founder: {
    name: "",
    title: "Elementary Physical Education and Health teacher",
    photo: "", // e.g. "/brand/founder.jpg"
    bio: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
