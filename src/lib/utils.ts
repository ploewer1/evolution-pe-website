export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * Prefixes public-folder paths when the site is previewed under a sub-address
 * (set NEXT_PUBLIC_BASE_PATH, for example "/evolution-pe-website"). Empty on the real domain.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
