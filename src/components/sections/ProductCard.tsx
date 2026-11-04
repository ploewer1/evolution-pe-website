import Link from "next/link";
import { Card, IconTile } from "@/components/ui/Card";
import { LinkButton } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CheckList } from "@/components/ui/CheckList";
import { IconApp, IconCalendar, IconChart, IconTimer } from "@/components/ui/Icons";
import { productCta, type Product } from "@/config/products";
import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  "bench-boost": <IconApp className="h-6 w-6" />,
  "k-5-curriculum": <IconCalendar className="h-6 w-6" />,
  "fitness-test-analyzer": <IconChart className="h-6 w-6" />,
  "shuttle-run-scoreboard": <IconTimer className="h-6 w-6" />,
};

export function ProductIcon({ slug }: { slug: string }) {
  return <IconTile>{icons[slug]}</IconTile>;
}

/** Full product card: status badge, honest note, and a button that matches the product's real availability. */
export function ProductCard({ product }: { product: Product }) {
  const cta = productCta(product);
  const primaryCta = product.status === "coming-soon" || product.status === "beta-waitlist" ? "teal" : "primary";
  return (
    <Card lift className="reveal flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <ProductIcon slug={product.slug} />
        <StatusBadge status={product.status} />
      </div>
      <h3 className="mt-5 text-xl font-bold">{product.name}</h3>
      <p className="mt-1 text-sm font-medium text-teal-700">{product.tagline}</p>
      <p className="mt-3 text-[0.95rem] leading-7 text-ink-600">{product.summary}</p>
      <CheckList className="mt-5" items={product.highlights} />
      {product.honestNote && <p className="mt-5 rounded-xl bg-sky-50 px-3.5 py-2.5 text-sm leading-6 text-ink-700 ring-1 ring-inset ring-sky-200">{product.honestNote}</p>}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
        <LinkButton href={cta.href} variant={primaryCta}>{cta.label}</LinkButton>
        <Link href={product.detailsHref} className="text-sm font-semibold text-teal-700 underline-offset-4 hover:text-teal-800 hover:underline">
          Learn more<span className="sr-only"> about {product.name}</span>
        </Link>
      </div>
    </Card>
  );
}

/** Slim row for secondary products. */
export function ProductRow({ product }: { product: Product }) {
  const cta = productCta(product);
  return (
    <div className="reveal flex flex-col gap-4 rounded-[var(--radius-card)] border border-ink-200 bg-white p-5 shadow-card sm:flex-row sm:items-center sm:gap-6 sm:p-6">
      <ProductIcon slug={product.slug} />
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <StatusBadge status={product.status} />
        </div>
        <p className="mt-1 text-sm leading-6 text-ink-600">{product.summary}</p>
        {product.honestNote && <p className="mt-1 text-sm text-ink-500">{product.honestNote}</p>}
      </div>
      <LinkButton href={cta.href} variant="secondary" className="shrink-0">{cta.label}</LinkButton>
    </div>
  );
}
