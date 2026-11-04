import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Plain, honest callout used for status notes and disclaimers. */
export function Notice({ title, children, className }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-sky-50 p-5 text-sm leading-6 text-ink-700 ring-1 ring-inset ring-sky-200", className)}>
      {title && <p className="mb-1 font-semibold text-navy-900">{title}</p>}
      {children}
    </div>
  );
}
