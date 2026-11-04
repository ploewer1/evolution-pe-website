"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryLinks, productLinks, secondaryLinks } from "@/config/navigation";
import { SIGNUP_PATH } from "@/config/products";
import { Close, Menu } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

function Group({ title, links, pathname }: { title: string; links: { label: string; href: string }[]; pathname: string }) {
  return (
    <div>
      <p className="px-3 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{title}</p>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={pathname.startsWith(l.href) ? "page" : undefined}
          className={cn("block rounded-xl px-3 py-3 text-base font-medium", pathname.startsWith(l.href) ? "bg-teal-50 text-teal-800" : "text-navy-900 hover:bg-ink-100")}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-900 ring-1 ring-inset ring-ink-300 hover:bg-ink-100"
      >
        {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-ink-200 bg-white px-5 pb-10 pt-2">
          <nav aria-label="Mobile">
            <Group title="Who it's for" links={primaryLinks} pathname={pathname} />
            <Group title="Products" links={productLinks} pathname={pathname} />
            <Group title="More" links={[...secondaryLinks, { label: "Contact", href: "/contact" }]} pathname={pathname} />
          </nav>
          <Link href={SIGNUP_PATH} className="mt-6 flex w-full items-center justify-center rounded-xl bg-navy-900 px-5 py-3.5 text-base font-semibold text-white">
            Get free resources
          </Link>
        </div>
      )}
    </div>
  );
}
