import { Check } from "./Icons";
import { cn } from "@/lib/utils";

export function CheckList({ items, className, onDark }: { items: string[]; className?: string; onDark?: boolean }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-[0.95rem] leading-6">
          <Check className={cn("mt-0.5 h-5 w-5 shrink-0", onDark ? "text-teal-300" : "text-teal-600")} />
          <span className={onDark ? "text-sky-100" : "text-ink-700"}>{t}</span>
        </li>
      ))}
    </ul>
  );
}
