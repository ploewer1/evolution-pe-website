"use client";

import Script from "next/script";
import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

/** Loads the analytics script only when a Plausible domain is configured, and reports clicks on [data-cta] buttons. */
export function Analytics() {
  const domain = siteConfig.plausibleDomain;
  useEffect(() => {
    if (!domain) return;
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("[data-cta]");
      const name = el?.getAttribute("data-cta");
      if (name) trackEvent("CTA", { name });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [domain]);
  if (!domain) return null;
  return <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />;
}
