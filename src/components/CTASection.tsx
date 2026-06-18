import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  headline: string;
  buttonLabel?: string;
  eyebrow?: string;
};

export function CTASection({ headline, buttonLabel = "Book a Consultation", eyebrow = "Let's talk" }: Props) {
  return (
    <section className="alt-band relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden="true" />
      <div className="orb animate-blob" style={{ width: 420, height: 420, top: -120, left: "15%", background: "color-mix(in oklab, var(--primary) 16%, transparent)" }} aria-hidden="true" />
      <div className="orb animate-blob" style={{ width: 380, height: 380, bottom: -100, right: "8%", background: "color-mix(in oklab, var(--accent) 16%, transparent)", animationDelay: "-8s" }} aria-hidden="true" />

      <div className="container-x relative section-y text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </span>
        <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold md:text-5xl">
          <span className="shimmer-brand">{headline}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Free 30-minute consultation. No commitments. Real engineers — no sales filter.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow-ocean)]"
          >
            {buttonLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
