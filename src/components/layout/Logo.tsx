import Image from "next/image";
import Link from "next/link";
import { asset, cn } from "@/lib/utils";

export function Logo({ onDark, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Evolution PE home">
      <Image
        src={asset(onDark ? "/brand/shield-white.png" : "/brand/shield.png")}
        alt=""
        width={46}
        height={36}
        className="h-9 w-auto"
        priority
      />
      <span className={cn("whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-[0.06em]", onDark ? "text-white" : "text-navy-900")}>
        Evolution <span className={onDark ? "text-teal-300" : "text-teal-700"}>PE</span>
      </span>
    </Link>
  );
}
