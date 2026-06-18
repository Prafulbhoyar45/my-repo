import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote, TrendingDown, Clock, DollarSign } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | Case Studies" },
      { name: "description", content: "Real results delivered for real businesses across financial services, healthcare, and retail." },
      { property: "og:title", content: "QGTM Consulting | Case Studies" },
      { property: "og:description", content: "Real results delivered for real businesses." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  {
    industry: "Financial Services",
    accent: "from-blue-500/15 to-indigo-500/5",
    title: "Modernizing a legacy data warehouse for a regional bank",
    challenge: "A mid-sized bank was running reporting on a 10-year-old on-premise warehouse, causing 4-hour delays in daily reports. Risk and compliance teams couldn't get same-day exposure views.",
    metrics: [
      { icon: Clock, k: "Report time", v: "4h → 12m" },
      { icon: DollarSign, k: "Cost", v: "−40%" },
      { icon: TrendingDown, k: "Data moved", v: "8 TB" },
    ],
    results: ["Reduced reporting time from 4 hours to 12 minutes", "Migrated 8TB of historical data to AWS Redshift", "Cut infrastructure costs by 40%"],
  },
  {
    industry: "Healthcare",
    accent: "from-emerald-500/15 to-teal-500/5",
    title: "Real-time analytics platform for a healthcare network",
    challenge: "A healthcare provider needed real-time visibility into patient throughput and resource utilization across 12 facilities. Existing reports lagged by a full shift.",
    metrics: [
      { icon: Clock, k: "Latency", v: "6h → 5m" },
      { icon: DollarSign, k: "Savings", v: "$2M" },
      { icon: TrendingDown, k: "Sites", v: "12" },
    ],
    results: ["Real-time dashboards deployed across all 12 sites", "Reduced data latency from 6 hours to under 5 minutes", "Enabled $2M in operational savings"],
  },
  {
    industry: "Retail",
    accent: "from-amber-500/15 to-orange-500/5",
    title: "Unifying e-commerce and in-store data for a national retailer",
    challenge: "A national retailer had siloed data across 3 platforms with no single view of customer behavior. Marketing was making decisions on stale, partial data.",
    metrics: [
      { icon: TrendingDown, k: "Targeting", v: "+35%" },
      { icon: Clock, k: "ETL", v: "Auto nightly" },
      { icon: DollarSign, k: "Sources", v: "3 → 1" },
    ],
    results: ["Unified data model consolidating 3 sources", "35% improvement in campaign targeting accuracy", "Fully automated nightly ETL replacing manual exports"],
  },
] as const;

const TESTIMONIALS = [
  { quote: "QGTM rebuilt our data foundation in 90 days. Reporting went from a daily fire drill to a non-event.", name: "Michael Reeves", role: "VP Data, Northbridge Bank" },
  { quote: "Senior engineers, transparent process, real outcomes. Easily the strongest consulting engagement we've run.", name: "Dr. Anita Suresh", role: "COO, Helix Health Network" },
  { quote: "They didn't just deliver dashboards — they delivered a team that could own them after they left.", name: "Carlos Mendez", role: "CMO, Meridian Retail" },
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("");
}

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        headline={<>Real results. <span className="brand-text">Real businesses.</span></>}
        subheadline="A selection of recent engagements across financial services, healthcare, and retail."
      />

      {/* Results bar */}
      <section className="border-b border-border/60 bg-secondary/60">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-3">
          {[
            { k: "3", l: "Industries served" },
            { k: "10×", l: "Avg throughput gain" },
            { k: "< 90 days", l: "Time to first value" },
          ].map((r) => (
            <div key={r.l} className="text-center">
              <div className="text-3xl font-bold brand-text md:text-4xl">{r.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured + secondary studies */}
      <section className="container-x section-y space-y-10">
        {/* FEATURED — first case study, larger */}
        {(() => {
          const c = CASES[0];
          return (
            <Reveal>
              <article className={`hover-lift soft-card relative overflow-hidden bg-gradient-to-br ${c.accent}`}>
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
                <div className="relative grid gap-0 lg:grid-cols-[1.4fr_1fr]">
                  <div className="border-b border-border p-8 md:p-12 lg:border-b-0 lg:border-r">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">Featured</span>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {c.industry}
                      </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{c.title}</h2>
                    <p className="mt-6 max-w-2xl text-muted-foreground">{c.challenge}</p>
                    <ul className="mt-8 space-y-3">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="story-link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Read full case study <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="bg-card/60 p-8 md:p-10">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Outcomes</h3>
                    <div className="mt-6 space-y-4">
                      {c.metrics.map((m) => (
                        <div key={m.k} className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <m.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">{m.k}</div>
                            <div className="text-2xl font-bold brand-text">{m.v}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })()}

        {/* SECONDARY — 2-col grid, taller cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {CASES.slice(1).map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className={`hover-lift soft-card flex h-full min-h-[420px] flex-col overflow-hidden bg-gradient-to-br ${c.accent}`}>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {c.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">Case · 0{i + 2}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-bold leading-snug md:text-3xl">{c.title}</h2>
                  <p className="mt-4 text-sm text-muted-foreground">{c.challenge}</p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div key={m.k} className="rounded-lg border border-border bg-background/80 p-3 text-center">
                        <m.icon className="mx-auto h-4 w-4 text-primary" />
                        <div className="mt-2 text-sm font-bold brand-text">{m.v}</div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.k}</div>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="story-link mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary">
                    Read full case study <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials — light background, distinct from CTA */}
      <section className="relative overflow-hidden border-y border-border/60 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-[0.15]" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 420, height: 420, top: -140, left: "8%", background: "color-mix(in oklab, var(--primary) 10%, transparent)" }} aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 360, height: 360, bottom: -120, right: "8%", background: "color-mix(in oklab, var(--accent) 10%, transparent)", animationDelay: "-7s" }} aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Voices</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              What <span className="brand-text">clients</span> say.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="hover-lift soft-card relative h-full overflow-hidden p-7 shadow-[var(--shadow-elevated)]">
                  <Quote className="absolute -left-1 -top-1 h-16 w-16 text-primary/[0.10]" aria-hidden="true" />
                  <blockquote className="relative pt-6 text-base leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary ring-1 ring-primary/30">
                      {initials(t.name)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Your project could be the next case study." />
    </>
  );
}
