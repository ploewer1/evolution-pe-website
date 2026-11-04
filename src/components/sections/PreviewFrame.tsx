import Image from "next/image";
import { asset, cn } from "@/lib/utils";
import type { Product } from "@/config/products";
import { ProductIcon } from "./ProductCard";

/**
 * Shows a real product image in a simple frame, or a clearly labeled placeholder when no image exists yet.
 * Nothing here is mocked up: if there is no screenshot, the frame says so.
 */
export function PreviewFrame({ product, className, priority }: { product: Product; className?: string; priority?: boolean }) {
  const p = product.preview;
  const isPlaceholder = !p.src;
  const labelTone = isPlaceholder ? "bg-white text-navy-800 ring-1 ring-inset ring-ink-300" : "bg-navy-900/90 text-white";

  const body = isPlaceholder ? (
    <div className={cn("flex flex-col items-center justify-center gap-3 bg-sky-50 px-6 text-center", p.kind === "phone" ? "aspect-[9/16] max-h-[26rem]" : "aspect-[4/3]")}>
      <ProductIcon slug={product.slug} />
      <p className="font-display text-base font-bold text-navy-900">{product.name}</p>
      <p className="max-w-xs text-sm leading-6 text-ink-600">{p.caption}</p>
    </div>
  ) : (
    <Image src={asset(p.src!)} alt={p.alt} width={p.width ?? 1200} height={p.height ?? 800} priority={priority} className="block h-auto w-full" sizes="(min-width: 1024px) 560px, 92vw" />
  );

  return (
    <figure className={cn("mx-auto w-full", p.kind === "phone" ? "max-w-[15rem]" : "max-w-xl", className)}>
      <div className={cn(
        "relative overflow-hidden border bg-white shadow-lift",
        isPlaceholder ? "border-dashed border-ink-300" : "border-ink-200",
        p.kind === "phone" ? "rounded-[2rem] border-[6px] border-navy-900 border-solid" : "rounded-2xl",
      )}>
        {p.kind === "browser" && (
          <div className="flex items-center gap-1.5 border-b border-ink-200 bg-ink-100 px-4 py-2.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-ink-300" /><span className="h-2.5 w-2.5 rounded-full bg-ink-300" /><span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
          </div>
        )}
        <span className={cn("absolute left-3 z-10 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em]", labelTone, p.kind === "browser" ? "top-12" : "top-3")}>{p.label}</span>
        {body}
      </div>
      <figcaption className="mt-3 text-center text-sm leading-6 text-ink-600">{p.caption}</figcaption>
    </figure>
  );
}
