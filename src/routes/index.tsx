import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Database,
  Cloud,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  Workflow,
  Sparkles,
  Cpu,
  Layers,
  Quote,
  CheckCircle2,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { StatCounter } from "@/components/StatCounter";
import heroConsultancy from "@/assets/hero-consultancy.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | Scalable Technology Solutions" },
      { name: "description", content: "Enterprise-grade data engineering, cloud architecture, and business intelligence solutions that drive measurable results." },
      { property: "og:title", content: "QGTM Consulting | Scalable Technology Solutions" },
      { property: "og:description", content: "Enterprise-grade data engineering, cloud architecture, and business intelligence for modern businesses." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICE_CARDS = [
  {
    icon: Database,
    title: "Data Engineering",
    body: "ETL pipelines, warehouses, and lakehouses engineered to move, transform, and centralize your data with absolute confidence.",
    points: ["Snowflake / Databricks", "Airflow & dbt", "Streaming pipelines"],
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    body: "AWS, Azure, and GCP environments architected for security, scale, and predictable cost-efficiency.",
    points: ["Multi-cloud strategy", "IaC with Terraform", "Cost optimization"],
    color: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    body: "Power BI, Tableau, and Looker dashboards that turn raw data into clear, executive-ready decisions.",
    points: ["Executive dashboards", "Self-service BI", "KPI frameworks"],
    color: "from-indigo-500/20 to-blue-500/10",
  },
] as const;

const TRUST_LOGOS = [
  "Northbridge Bank", "Helix Health", "Meridian Retail", "Vector Logistics",
  "Atlas Energy", "Cinder Labs", "Orbital Foods", "Quantum Mutual",
];

const STATS = [
  { v: 5, suffix: "+", l: "Years of Expertise" },
  { v: 50, suffix: "+", l: "Projects Delivered" },
  { v: 99.9, suffix: "%", l: "Uptime Delivered", decimals: 1 },
  { v: 25, suffix: "+", l: "Senior Engineers" },
];

function HomePage() {
  return (
    <>
      {/* ============ HERO (light) ============ */}
      <section className="relative overflow-hidden noise">
        <div className="absolute inset-0 grid-pattern animate-grid-pan opacity-50" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 560, height: 560, top: -180, left: -120, background: "color-mix(in oklab, var(--primary) 28%, transparent)" }} aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 520, height: 520, top: 60, right: -160, background: "color-mix(in oklab, var(--accent) 22%, transparent)", animationDelay: "-7s" }} aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />

        <div className="container-x relative grid items-center gap-14 pt-20 pb-24 md:pt-28 md:pb-32 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                A QGTM Division
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-5xl font-bold leading-[1.04] md:text-6xl lg:text-7xl">
                Scalable Technology{" "}
                <span className="shimmer-brand">Solutions</span>{" "}
                Engineered for Modern Businesses.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg text-muted-foreground">
                Enterprise-grade data engineering, cloud architecture, and business intelligence — built by senior engineers, measured against real business outcomes.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="shine group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow-ocean)]"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  Explore Services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-muted-foreground">
                {["AWS Certified", "SOC 2 Aligned", "5+ Years", "Fortune 500 Clients"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: consultancy illustration with floating proof points */}
          <Reveal delay={300}>
            <div className="relative mx-auto w-full max-w-[640px]">
              {/* Decorative concentric rings */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-10 h-72 w-72 text-primary opacity-[0.10]"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="100" />
              </svg>
              <div
                className="orb pointer-events-none"
                style={{
                  width: 420,
                  height: 420,
                  bottom: "-12%",
                  right: "-10%",
                  background: "color-mix(in oklab, var(--primary) 12%, transparent)",
                }}
                aria-hidden="true"
              />

              {/* Illustration */}
              <div className="relative">
                <img
                  src={heroConsultancy}
                  alt="QGTM consultancy team collaborating on a strategy dashboard"
                  width={1024}
                  height={1024}
                  className="relative z-[1] mx-auto w-full max-w-[560px] drop-shadow-[0_30px_60px_rgba(15,62,126,0.18)]"
                />

                {/* Floating top-left: credential chip */}
                <div className="absolute left-0 top-4 z-[2] hidden items-center gap-3 rounded-2xl border border-border bg-card/95 p-3 pr-4 shadow-[var(--shadow-soft)] backdrop-blur sm:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/5 font-serif text-base font-semibold text-primary">
                    Q<span className="text-accent">G</span>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Trusted Advisory
                    </p>
                    <p className="text-xs font-semibold text-foreground">Est. 2021</p>
                  </div>
                </div>

                {/* Floating top-right: pull-quote */}
                <figure className="absolute -right-2 top-2 z-[2] hidden w-[240px] rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:block">
                  <Quote className="h-4 w-4 text-primary/40" aria-hidden="true" />
                  <blockquote className="mt-2 font-serif text-[13px] leading-snug text-foreground">
                    “Reset how the board sees the business.”
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary ring-1 ring-primary/20">
                      EM
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      CFO · Northbridge Bank
                    </span>
                  </figcaption>
                </figure>

                {/* Floating bottom: outcomes strip */}
                <div className="relative z-[2] -mt-6 mx-auto grid w-[92%] max-w-[480px] grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
                  {[
                    { v: "+34%", l: "Revenue Lift" },
                    { v: "50+", l: "Engagements" },
                    { v: "97%", l: "On Target" },
                  ].map((m) => (
                    <div key={m.l} className="px-2 text-center">
                      <div className="brand-text text-2xl font-semibold tracking-tight md:text-3xl">
                        {m.v}
                      </div>
                      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {m.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>


        </div>
      </section>

      {/* ============ STATS BAND (dark inverted) ============ */}
      <section className="alt-band relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="container-x relative py-14 md:py-20">
          <div className="grid gap-10 text-center sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div>
                  <div className="brand-text text-5xl font-bold tracking-tight md:text-6xl">
                    <StatCounter value={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES (light) ============ */}
      <section className="container-x section-y">
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What We Do</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Three practices.<br />
              <span className="text-muted-foreground">Compounded value.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-muted-foreground md:text-right">
              We work where data, infrastructure, and analytics overlap — the highest-leverage surface in modern technology programs.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <div className={`hover-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${card.color} bg-card p-8`}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ HOW WE WORK — TIMELINE (light, muted bg) ============ */}
      <section className="relative overflow-hidden border-y border-border/60 bg-secondary noise">
        <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How We Work</p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">A delivery process you can audit.</h2>
              <p className="mt-5 text-muted-foreground">
                Four phases. Weekly demos. Clear milestones. No surprises.
              </p>
            </Reveal>
          </div>

          <div className="relative mt-16">
            {/* Animated gradient connector (lg+) */}
            <div className="absolute left-[8%] right-[8%] top-12 hidden h-[2px] lg:block" aria-hidden="true">
              <div className="h-full w-full bg-gradient-to-r from-primary/10 via-primary/40 to-accent/30" />
              <div className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_rgba(15,62,126,0.7)]" style={{ animation: "qgtm-flow 6s ease-in-out infinite" }} />
            </div>

            <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Zap, t: "Discovery", b: "Assess systems, data, and goals.", dur: "1–2 wks", out: "Audit" },
                { icon: Workflow, t: "Strategy", b: "Design a tailored roadmap.", dur: "2 wks", out: "Roadmap" },
                { icon: Cpu, t: "Implementation", b: "Build, test, and deploy.", dur: "8–12 wks", out: "Production" },
                { icon: TrendingUp, t: "Support", b: "Monitor, optimize, scale.", dur: "Ongoing", out: "SLA" },
              ].map((step, i) => (
                <Reveal key={step.t} delay={i * 100}>
                  <li className="group relative">
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-background ring-2 ring-primary/20 shadow-[var(--shadow-soft)] transition-all group-hover:-translate-y-1 group-hover:ring-primary/45 group-hover:shadow-[var(--shadow-elevated)]">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                      <span className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground ring-4 ring-secondary">
                        {i + 1}
                      </span>
                      <step.icon className="relative h-8 w-8 text-primary" />
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="font-bold">{step.t}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{step.b}</p>
                      <div className="mt-3 inline-flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                        <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">{step.dur}</span>
                        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-accent">{step.out}</span>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ WHY QGTM (light split) ============ */}
      <section className="container-x section-y">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why QGTM Consulting</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Technology-first.<br />
              <span className="brand-text">Outcome-focused.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              For 5+ years, QGTM has helped modern businesses unlock operational leverage through engineered data platforms, cloud-native architectures, and analytics executives actually rely on.
            </p>
            <Link to="/why-us" className="story-link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              See our delivery process <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Workflow, label: "End-to-end delivery", body: "From discovery to production handoff." },
              { icon: Cloud, label: "Cloud-native expertise", body: "Certified across AWS, Azure, GCP." },
              { icon: ShieldCheck, label: "Transparent process", body: "Weekly demos, clear milestones." },
              { icon: TrendingUp, label: "Measurable outcomes", body: "Every engagement ties to a KPI." },
            ].map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="hover-lift soft-card h-full p-6">
                  <p.icon className="h-6 w-6 text-primary" />
                  <h4 className="mt-4 font-bold">{p.label}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED TESTIMONIAL (dark inverted) ============ */}
      <section className="alt-band relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 480, height: 480, top: -150, left: "20%", background: "rgba(230,184,92,0.22)" }} aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-10 w-10 text-primary" />
            <blockquote className="mt-6 text-2xl font-medium leading-snug md:text-3xl">
              "QGTM rebuilt our data foundation in 90 days. Reporting went from a daily fire drill to a non-event."
            </blockquote>
            <div className="mt-7 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-bold text-primary">MR</div>
              <div className="text-left">
                <div className="font-semibold">Michael Reeves</div>
                <div className="text-xs text-muted-foreground">VP Data · Northbridge Bank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST MARQUEE (light) ============ */}
      <section className="border-b border-border/60 py-14">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by leading organizations
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="marquee gap-14 px-6">
            {[...TRUST_LOGOS, ...TRUST_LOGOS].map((name, i) => (
              <span key={i} className="whitespace-nowrap text-lg font-semibold tracking-wide text-muted-foreground/70 hover:text-primary transition-colors">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Ready to transform your technology infrastructure?" />
    </>
  );
}
