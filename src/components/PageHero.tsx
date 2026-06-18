import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  headline: ReactNode;
  subheadline?: ReactNode;
  align?: "left" | "center";
};

export function PageHero({ eyebrow, headline, subheadline, align = "center" }: Props) {
  const alignCls = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-secondary noise">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
      <div className="orb animate-blob" style={{ width: 420, height: 420, top: -140, left: -80, background: "color-mix(in oklab, var(--primary) 22%, transparent)" }} aria-hidden="true" />
      <div className="orb animate-blob" style={{ width: 380, height: 380, top: 40, right: -100, background: "color-mix(in oklab, var(--accent) 22%, transparent)", animationDelay: "-6s" }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />

      <div className="container-x relative pt-20 pb-16 md:pt-28 md:pb-24">
        <div className={`max-w-4xl ${alignCls}`}>
          {eyebrow && (
            <p className="reveal-sm is-visible mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {eyebrow}
            </p>
          )}
          <h1 className="reveal-sm is-visible text-4xl font-bold md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          {subheadline && (
            <p className={`reveal-sm is-visible mt-6 max-w-2xl text-lg text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
              {subheadline}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
