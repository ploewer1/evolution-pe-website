import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/utils";
import { products } from "@/config/products";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ProductIcon } from "./ProductCard";

/** Decorative hero panel built from real product data (names and honest statuses). */
export function HeroProductStack() {
  const featured = products.filter((p) => ["bench-boost", "k-5-curriculum", "fitness-test-analyzer"].includes(p.slug));
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -right-6 -top-8 h-56 w-56 rounded-full bg-teal-100/70 blur-3xl" aria-hidden />
      <Image src={asset("/brand/shield.png")} alt="" width={300} height={234} aria-hidden className="pointer-events-none absolute -right-4 -top-14 w-32 opacity-[0.12] sm:w-40" />
      <div className="relative space-y-4">
        {featured.map((p, i) => (
          <Link
            key={p.slug}
            href={p.detailsHref}
            className="flex items-center gap-4 rounded-2xl border border-ink-200 bg-white/95 p-4 shadow-card backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            style={{ marginLeft: `${i * 1.25}rem`, marginRight: `${(2 - i) * 0.35}rem` }}
          >
            <ProductIcon slug={p.slug} />
            <span className="min-w-0 flex-1">
              <span className="block font-display text-base font-bold leading-6 text-navy-900">{p.name}</span>
              <span className="block text-sm leading-5 text-ink-600">{p.tagline}</span>
            </span>
            <span className="hidden shrink-0 sm:block"><StatusBadge status={p.status} /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
