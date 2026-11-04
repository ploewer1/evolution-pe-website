import { cn } from "@/lib/utils";
import { statusMeta, type ProductStatus } from "@/config/products";

/** Honest availability label. Driven by products.ts so it can never drift from the buttons. */
export function StatusBadge({ status, className }: { status: ProductStatus; className?: string }) {
  const meta = statusMeta[status];
  const tones = {
    solid: "bg-teal-700 text-white",
    outline: "bg-white text-teal-800 ring-1 ring-inset ring-teal-600",
    muted: "bg-ink-100 text-navy-800 ring-1 ring-inset ring-ink-300",
  } as const;
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold", tones[meta.tone], className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", meta.tone === "solid" ? "bg-teal-200" : "bg-teal-600")} aria-hidden />
      {meta.badge}
    </span>
  );
}
