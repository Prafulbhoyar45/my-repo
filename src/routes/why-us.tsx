import { createFileRoute } from "@tanstack/react-router";
import { Award, Workflow, BadgeCheck, Eye, Search, Map as MapIcon, Hammer, LifeBuoy, Shield, Layers, Sparkles, CheckCircle2, TrendingUp, Zap } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | Why Us" },
      { name: "description", content: "The consulting partner businesses choose when results matter. 5+ years, end-to-end delivery, cloud-certified engineers, transparent process." },
      { property: "og:title", content: "QGTM Consulting | Why Us" },
      { property: "og:description", content: "The consulting partner businesses choose when results matter." },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

const STEPS = [
  { icon: Search, title: "Discovery", body: "We assess your current systems, data, and goals — and surface the highest-leverage opportunities.", duration: "1–2 weeks", output: "Audit report" },
  { icon: MapIcon, title: "Strategy", body: "We design a tailored solution roadmap with clear milestones, deliverables, and KPIs.", duration: "2 weeks", output: "Roadmap & SOW" },
  { icon: Hammer, title: "Implementation", body: "We build, test, and deploy with engineering precision and weekly demos.", duration: "8–12 weeks", output: "Production system" },
  { icon: LifeBuoy, title: "Support", body: "We monitor, optimize, and scale alongside your team — handing off when it's right.", duration: "Ongoing", output: "SLA + runbooks" },
];

function WhyUsPage() {
  return (
    <>
      {/* Custom rich hero (replaces empty PageHero feel) */}
      <section className="relative overflow-hidden border-b border-border/70 bg-secondary noise">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 460, height: 460, top: -160, left: -100, background: "color-mix(in oklab, var(--primary) 22%, transparent)" }} aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 400, height: 400, top: 40, right: -120, background: "color-mix(in oklab, var(--accent) 22%, transparent)", animationDelay: "-6s" }} aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />

        <div className="container-x relative grid items-center gap-12 pt-20 pb-20 md:pt-28 md:pb-24 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Why Us
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Why <span className="brand-text">QGTM Consulting</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                The consulting partner businesses choose when results matter — not slideware, not staffing-shop hourly burn.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <ul className="mt-7 grid max-w-md grid-cols-2 gap-y-2.5 text-sm">
                {["Senior engineers only", "Weekly demos", "Fixed-scope options", "Production handoffs"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="relative grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: Award, k: "5+", l: "Years experience", grad: "from-primary/[0.08] to-transparent" },
                { icon: Workflow, k: "50+", l: "Projects shipped", grad: "from-accent/[0.10] to-transparent" },
                { icon: Shield, k: "SOC 2", l: "Security aligned", grad: "from-primary/[0.06] to-transparent" },
                { icon: TrendingUp, k: "40%", l: "Avg cost cut", grad: "from-accent/[0.08] to-transparent" },
              ].map((s) => (
                <div key={s.l} className={`soft-card hover-lift p-5 bg-gradient-to-br ${s.grad}`}>
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-3xl font-bold brand-text">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
              <div className="orb animate-blob pointer-events-none" style={{ width: 220, height: 220, top: "30%", left: "30%", background: "color-mix(in oklab, var(--primary) 16%, transparent)" }} aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats band — alt-band */}
      <section className="alt-band relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="container-x relative py-14">
          <div className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
            {[
              { v: 50, s: "+", l: "Projects" },
              { v: 99.9, s: "%", l: "Uptime", d: 1 },
              { v: 40, s: "%", l: "Avg Cost Reduction" },
              { v: 12, s: " min", l: "Avg Pipeline Cycle" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div>
                  <div className="brand-text text-5xl font-bold md:text-6xl">
                    <StatCounter value={s.v} suffix={s.s} decimals={s.d ?? 0} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator BENTO (no empty cells) */}
      <section className="container-x section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Differentiators</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">What sets us apart.</h2>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] gap-5 md:grid-cols-6">
          {/* Big feature card */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="hover-lift soft-card relative h-full overflow-hidden p-8 bg-gradient-to-br from-primary/[0.10] via-accent/[0.05] to-transparent">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-bold md:text-3xl">5+ Years Proven Expertise</h3>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Deep experience across data, cloud, and analytics — delivered for clients in financial services, healthcare, and retail.
                </p>
                <div className="mt-7 grid max-w-md grid-cols-3 gap-4">
                  {[{ k: "50+", l: "Projects" }, { k: "12+", l: "Industries" }, { k: "99.9%", l: "Uptime" }].map((s) => (
                    <div key={s.l}>
                      <div className="text-2xl font-bold brand-text">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-2 md:row-span-2">
            <div className="hover-lift soft-card relative h-full overflow-hidden p-7 bg-gradient-to-br from-accent/[0.10] to-transparent">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/30">
                <Workflow className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-bold">End-to-End Delivery</h3>
              <p className="mt-2 text-sm text-muted-foreground">Strategy to implementation to support — we own the outcome.</p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["Discovery", "Strategy", "Build", "Support"].map((t) => (
                  <span key={t} className="rounded-full bg-background px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {[
            { icon: BadgeCheck, title: "Cloud-Certified", body: "AWS · Azure · GCP, production-hardened." },
            { icon: Eye, title: "Transparent Process", body: "Clear timelines, regular updates, no surprises." },
            { icon: Shield, title: "Security-First", body: "SOC 2 aligned. Zero-trust by default." },
            { icon: Layers, title: "Modern Stack", body: "Snowflake, Databricks, Kafka, dbt, Spark." },
          ].map((d, i) => (
            <Reveal key={d.title} delay={120 + i * 60} className="md:col-span-3 lg:col-span-3">
              <div className="hover-lift soft-card relative h-full overflow-hidden p-6">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent" aria-hidden="true" />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process flow — richer horizontal/vertical hybrid */}
      <section className="relative overflow-hidden border-y border-border/60 bg-secondary noise">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Process</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">How we deliver.</h2>
              <p className="mt-5 text-muted-foreground">Four phases. Weekly demos. Clear deliverables. No surprises.</p>
            </Reveal>
          </div>

          <div className="relative mt-16">
            {/* Animated gradient connector */}
            <div className="absolute left-0 right-0 top-12 hidden h-[2px] lg:block" aria-hidden="true">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(15,62,126,0.6)]" style={{ animation: "qgtm-flow 6s ease-in-out infinite" }} />
            </div>

            <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <li className="group relative">
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-background ring-2 ring-primary/20 shadow-[var(--shadow-soft)] transition-all group-hover:ring-primary/50 group-hover:shadow-[var(--shadow-elevated)]">
                      <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground ring-4 ring-secondary">
                        {i + 1}
                      </span>
                      <s.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                      <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">{s.duration}</span>
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">{s.output}</span>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Trust pillar */}
      <section className="container-x section-y">
        <Reveal>
          <div className="soft-card overflow-hidden bg-gradient-to-br from-primary/[0.07] via-transparent to-accent/[0.07] p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold md:text-3xl">Senior engineers. No bait-and-switch.</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Every engagement is staffed by the senior engineers you meet in the proposal — not handed off to juniors after kickoff. It's how we earn long-term trust.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection headline="Let's build something that scales." />
    </>
  );
}
