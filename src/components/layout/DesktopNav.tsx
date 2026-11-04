"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryLinks, productLinks, secondaryLinks } from "@/config/navigation";
import { ChevronDown } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const linkCls = (active: boolean) =>
  cn(
    "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    active ? "text-teal-800 bg-teal-50" : "text-ink-700 hover:text-navy-900 hover:bg-ink-100",
  );

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const productActive = productLinks.some((l) => pathname.startsWith(l.href));

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
      {primaryLinks.map((l) => (
        <Link key={l.href} href={l.href} className={linkCls(pathname.startsWith(l.href))} aria-current={pathname.startsWith(l.href) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}

      <div className="relative" ref={wrap}>
        <button
          type="button"
          className={cn(linkCls(productActive), "inline-flex items-center gap-1")}
          aria-expanded={open}
          aria-controls="products-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Products <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
        {open && (
          <div id="products-menu" className="absolute left-0 top-full z-50 mt-2 w-80 rounded-2xl border border-ink-200 bg-white p-2 shadow-lift">
            {productLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block rounded-xl px-3 py-3 hover:bg-sky-50">
                <span className="block text-sm font-semibold text-navy-900">{l.label}</span>
                {l.description && <span className="block text-sm text-ink-600">{l.description}</span>}
              </Link>
            ))}
          </div>
        )}
      </div>

      {secondaryLinks.map((l) => (
        <Link key={l.href} href={l.href} className={linkCls(pathname.startsWith(l.href))} aria-current={pathname.startsWith(l.href) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
