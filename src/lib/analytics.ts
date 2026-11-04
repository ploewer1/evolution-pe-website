/**
 * Optional privacy-friendly analytics. Does nothing unless NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set
 * (see components/Analytics.tsx). Event names are deliberately simple so the two audiences can be
 * compared: every audience button has a data-cta name and every signup reports its audience.
 */
declare global {
  interface Window { plausible?: (event: string, options?: { props?: Record<string, string> }) => void }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window !== "undefined" && typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
  }
}
