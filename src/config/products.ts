import { siteConfig } from "./site";

/**
 * Product availability lives here. Change a product's `status` and every page,
 * card, and button updates, so an unfinished product can never show a purchase button.
 *
 *  live           -> product is released and open. Shows "Open ..." and links to `href`.
 *  beta-open      -> beta people can use today. Shows "Open the beta" and links to `href`.
 *  beta-waitlist  -> beta is invite-only. Shows "Join the beta" and goes to the waitlist form.
 *  coming-soon    -> not released. Shows "Get notified" and goes to the signup form.
 */
export type ProductStatus = "live" | "beta-open" | "beta-waitlist" | "coming-soon";

export type Audience = "teachers" | "homeschool";

/** A product preview image. With no `src`, a clearly labeled placeholder is shown instead. */
export interface ProductPreview {
  /** Path under /public, for example "/previews/bench-boost.png". Leave blank until you have a real screenshot. */
  src?: string;
  width?: number;
  height?: number;
  alt: string;
  /** Small badge on the image, such as "Sample data" or "Draft page". Required so nothing is mistaken for live customer data. */
  label: string;
  caption: string;
  kind: "browser" | "phone" | "document";
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: ProductStatus;
  audiences: Audience[];
  /** External app link (only used when status is live or beta-open). */
  href?: string;
  /** Internal page with details. */
  detailsHref: string;
  /** Where the waitlist / "get notified" button goes. */
  waitlistHref?: string;
  highlights: string[];
  /** Plain-language limits shown on the card, so nothing is overstated. */
  honestNote?: string;
  preview: ProductPreview;
}

export const statusMeta: Record<
  ProductStatus,
  { badge: string; cta: string; tone: "solid" | "outline" | "muted"; opensApp: boolean }
> = {
  live: { badge: "Live", cta: "Open", tone: "solid", opensApp: true },
  "beta-open": { badge: "Open beta", cta: "Open the beta", tone: "solid", opensApp: true },
  "beta-waitlist": { badge: "Beta: join the waitlist", cta: "Join the beta", tone: "outline", opensApp: false },
  "coming-soon": { badge: "Coming soon", cta: "Get notified", tone: "muted", opensApp: false },
};

export const SIGNUP_PATH = "/free-resources#signup";
export const TEACHER_BETA_PATH = "/for-pe-teachers#beta";
export const HOMESCHOOL_WAITLIST_PATH = "/for-homeschool-families#waitlist";

/** The analyzer is a waitlist beta until you set NEXT_PUBLIC_ANALYZER_URL to where it is hosted. */
const analyzerLive = Boolean(siteConfig.analyzerUrl);

export const products: Product[] = [
  {
    slug: "bench-boost",
    name: "Bench Boost",
    tagline: "Interactive PE and health learning",
    summary:
      "A web app where students practice physical education and health ideas through short, game-style activities across four grade bands.",
    status: "beta-open",
    audiences: ["teachers", "homeschool"],
    href: siteConfig.benchBoostUrl,
    detailsHref: "/bench-boost",
    highlights: [
      "Grade bands K–2, 3–5, 6–8, and 9–12",
      "Movement, fitness, teamwork, and health topics",
      "Multiple practice modes, from Learn to Lightning Round",
    ],
    honestNote: "Actively in development. Content and features are still growing.",
    preview: {
      alt: "Placeholder for a Bench Boost screenshot",
      label: "Placeholder",
      caption: "A real Bench Boost screenshot will appear here.",
      kind: "phone",
    },
  },
  {
    slug: "k-5-curriculum",
    name: "Evolution PE K–5 Curriculum",
    tagline: "A 36-week physical education program",
    summary:
      "A year of ready-to-run lessons in two tracks (K–2 and 3–5), with solo, partner, and group versions so it works at home, in a co-op, or in a gym.",
    status: "coming-soon",
    audiences: ["teachers", "homeschool"],
    detailsHref: "/k-5-curriculum",
    highlights: [
      "36 weeks and 72 games with setup, scoring, and progressions",
      "Household equipment alternatives",
      "Designed to pair with Bench Boost topics",
    ],
    honestNote: "Being finalized. Join the list to hear when it is ready.",
    preview: {
      src: "/previews/curriculum-page.png",
      width: 1100,
      height: 906,
      alt: "A draft lesson page from the K–5 curriculum: Week 6, Catch Pattern Lab, with learning objective, equipment table with household alternatives, and a setup diagram",
      label: "Draft page",
      caption: "A real draft lesson page (Week 6, grades 3–5). The curriculum is still being finalized.",
      kind: "document",
    },
  },
  {
    slug: "fitness-test-analyzer",
    name: "Fitness Test Analyzer",
    tagline: "Summarize fitness-testing results",
    summary:
      "A browser-based tool that summarizes class fitness-testing data against your own standards, the 2026 Presidential benchmarks, or the results your school software already calculated.",
    status: analyzerLive ? "beta-open" : "beta-waitlist",
    audiences: ["teachers"],
    href: analyzerLive ? siteConfig.analyzerUrl : undefined,
    detailsHref: "/fitness-tools#analyzer",
    waitlistHref: TEACHER_BETA_PATH,
    highlights: [
      "Three ways to choose standards",
      "Upload a file or type scores in",
      "Designed to run in your browser",
    ],
    honestNote: "Beta. Check results against your official reports before relying on them.",
    preview: {
      src: "/previews/analyzer-results.png",
      width: 1400,
      height: 1050,
      alt: "The Fitness Test Analyzer showing class totals, boys and girls results for core, cardio, and upper body categories, and a results table",
      label: "Sample data",
      caption: "A real screen from the beta, using a made-up class of 30 fictional students.",
      kind: "browser",
    },
  },
  {
    slug: "shuttle-run-scoreboard",
    name: "15-Meter Shuttle Run Scoreboard",
    tagline: "A pacer video with a live lap scoreboard",
    summary:
      "An animated shuttle-run pacer with spoken directions, level callouts, and a lap scoreboard for the gym screen.",
    status: "coming-soon",
    audiences: ["teachers"],
    detailsHref: "/fitness-tools#scoreboard",
    waitlistHref: TEACHER_BETA_PATH,
    highlights: ["Original audio and visuals", "Large scoreboard for a projector", "20-meter version planned"],
    honestNote: "Licensing and timing verification are still in progress, so it is not released.",
    preview: {
      alt: "Placeholder for a shuttle run scoreboard screenshot",
      label: "Placeholder",
      caption: "A screenshot will appear here once the scoreboard is released.",
      kind: "browser",
    },
  },
];

export const getProduct = (slug: string): Product => {
  const p = products.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown product: ${slug}`);
  return p;
};

/** Where a product's main button should go. */
export function productCta(product: Product): { label: string; href: string; external: boolean } {
  const meta = statusMeta[product.status];
  if (meta.opensApp && product.href) {
    return { label: product.status === "live" ? `${meta.cta} ${product.name}` : meta.cta, href: product.href, external: true };
  }
  return { label: meta.cta, href: product.waitlistHref ?? SIGNUP_PATH, external: false };
}
