import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Per-page metadata with a canonical URL and social tags. */
export function pageMetadata(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const url = `${siteConfig.url}${opts.path}${opts.path ? "/" : ""}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: { title: `${opts.title} | ${siteConfig.name}`, description: opts.description, url, siteName: siteConfig.name, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Evolution PE" }] },
    twitter: { card: "summary_large_image", title: `${opts.title} | ${siteConfig.name}`, description: opts.description, images: ["/og.png"] },
    robots: opts.noindex ? { index: false, follow: false } : undefined,
  };
}
