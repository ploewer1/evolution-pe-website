import { ChevronDown } from "@/components/ui/Icons";

export interface FaqItem { q: string; a: string }

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink-200 rounded-[var(--radius-card)] border border-ink-200 bg-white shadow-card">
      {items.map((it) => (
        <details key={it.q} className="group px-6 py-5 open:bg-sky-50/50">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-semibold text-navy-900 [&::-webkit-details-marker]:hidden">
            {it.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-teal-700 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 max-w-3xl text-[0.95rem] leading-7 text-ink-600">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
