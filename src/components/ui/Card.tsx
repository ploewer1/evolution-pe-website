import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({ children, className, lift }: { children: ReactNode; className?: string; lift?: boolean }) {
  return (
    <div className={cn("rounded-[var(--radius-card)] border border-ink-200 bg-white p-5 shadow-card sm:p-7", lift && "transition duration-300 hover:-translate-y-0.5 hover:shadow-lift", className)}>
      {children}
    </div>
  );
}

export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-100", className)}>{children}</span>;
}
