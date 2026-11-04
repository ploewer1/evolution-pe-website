import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SIGNUP_PATH } from "@/config/products";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/70">
      {/* The blur lives on its own layer so the mobile menu panel (position: fixed) is not trapped inside the header. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/90 backdrop-blur-md" />
      <Container wide className="flex h-16 items-center justify-between gap-4 xl:h-[4.5rem]">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><LinkButton href={SIGNUP_PATH} className="whitespace-nowrap">Get free resources</LinkButton></div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
