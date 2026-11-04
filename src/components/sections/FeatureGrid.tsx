import type { ReactNode } from "react";
import { Card, IconTile } from "@/components/ui/Card";

export interface Feature { title: string; text: string; icon: ReactNode }

export function FeatureGrid({ features, cols = 3 }: { features: Feature[]; cols?: 2 | 3 }) {
  return (
    <div className={cols === 3 ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-6 sm:grid-cols-2"}>
      {features.map((f) => (
        <Card key={f.title} className="reveal">
          <IconTile>{f.icon}</IconTile>
          <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
          <p className="mt-2 text-[0.95rem] leading-7 text-ink-600">{f.text}</p>
        </Card>
      ))}
    </div>
  );
}
