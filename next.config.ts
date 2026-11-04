import type { NextConfig } from "next";

/**
 * The whole site is static pages, so it is exported to plain files (the `out` folder after `npm run build`).
 * Those files can be hosted for free on GitHub Pages, Cloudflare Pages, or Netlify. No server is needed.
 * Security headers live in public/_headers (used by Cloudflare Pages and Netlify; GitHub Pages ignores it).
 */
// Only set when previewing under a sub-address such as ploewer1.github.io/evolution-pe-website (before the custom domain exists).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  trailingSlash: true, // /about/ -> about/index.html, which works on every static host
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
