import type { ReactNode } from "react";
import { Product, productCta } from "@/config/products";
import { LinkButton } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";
import { PreviewFrame } from "./PreviewFrame";

/** One product: honest text beside a real (or clearly labeled placeholder) preview. */
export function ProductPreviewSection({
  product, reverse, eyebrow, title, text, points, children, cta, headingLevel = "h3",
}: {
  product: Product; reverse?: boolean; headingLevel?: "h2" | "h3"; eyebrow?: string; title: string; text: string; points?: string[]; children?: ReactNode; cta?: { label: string; href: string; cta?: string };
}) {
  const std = productCta(product);
  const Heading = headingLevel;
  const action = cta ?? { label: std.label, href: std.href };
  return (
    <div className={cn("grid items-center gap-8 lg:grid-cols-2 lg:gap-14", reverse && "lg:[&>*:first-child]:order-2")}>
      <div className="reveal">
        <div className="flex flex-wrap items-center gap-3">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{eyebrow}</p>}
          <StatusBadge status={product.status} />
        </div>
        <Heading className="mt-3 text-[1.4rem] font-extrabold leading-[1.2] sm:text-3xl sm:leading-tight">{title}</Heading>
        <p className="mt-3 text-base leading-7 text-ink-600 sm:text-lg sm:leading-8">{text}</p>
        {points && <CheckList className="mt-5" items={points} />}
        {children}
        <div className="mt-6"><LinkButton href={action.href} variant={product.status === "coming-soon" || product.status === "beta-waitlist" ? "teal" : "primary"} arrow cta={action.cta}>{action.label}</LinkButton></div>
      </div>
      <PreviewFrame product={product} className="reveal" />
    </div>
  );
}
