import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const paths = ["", "/for-pe-teachers", "/for-homeschool-families", "/bench-boost", "/k-5-curriculum", "/fitness-tools", "/free-resources", "/pricing", "/about", "/contact", "/privacy", "/terms"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${siteConfig.url}${p}${p ? "/" : ""}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
