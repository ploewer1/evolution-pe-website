import Link from "next/link";
import type { ReactNode } from "react";
import { cn, isExternal } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "./Icons";

type Variant = "primary" | "teal" | "secondary" | "ghost" | "onDark";

const styles: Record<Variant, string> = {
  primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-sm",
  teal: "bg-teal-700 text-white hover:bg-teal-800 shadow-sm",
  secondary: "bg-white text-navy-900 ring-1 ring-inset ring-ink-300 hover:ring-teal-600 hover:text-teal-800",
  ghost: "text-teal-700 hover:text-teal-800 px-0",
  onDark: "bg-white text-navy-900 hover:bg-sky-100",
};

interface Props {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "md" | "lg";
  /** Short name used for optional click measurement, for example "teachers-try-analyzer". */
  cta?: string;
}

/** One button for internal and external links. External links open in a new tab safely. */
export function LinkButton({ href, children, variant = "primary", arrow, className, size = "md", cta }: Props) {
  const external = isExternal(href);
  const cls = cn(
    "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 active:translate-y-px",
    size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-2.5 text-sm",
    styles[variant],
    className,
  );
  const icon = external ? (
    <ExternalLink className="h-4 w-4" />
  ) : arrow ? (
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
  ) : null;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} data-cta={cta}>
        {children}
        {icon}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-cta={cta}>
      {children}
      {icon}
    </Link>
  );
}
