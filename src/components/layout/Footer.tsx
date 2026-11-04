import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerColumns } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-sky-200">
      <Container className="py-11 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="mt-5 text-sm leading-6 text-sky-200/90">
              Physical education curriculum, interactive learning, and practical fitness tools, created by an elementary PE teacher.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] !text-teal-300">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-sky-100 hover:text-white hover:underline underline-offset-4">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-9 sm:mt-12 space-y-3 border-t border-white/10 pt-8 text-xs leading-5 text-sky-300/80">
          <p>{siteConfig.independenceNotice}</p>
          <p>{siteConfig.trademarkNotice}</p>
          <p>© {new Date().getFullYear()} Evolution PE. All rights reserved. This site does not collect student data and does not process payments.</p>
        </div>
      </Container>
    </footer>
  );
}
