import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Cloud, Layers, BarChart3, Replace, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | Services" },
      { name: "description", content: "Comprehensive technology services: data engineering, cloud architecture, big data, BI & analytics, and system modernization." },
      { property: "og:title", content: "QGTM Consulting | Services" },
      { property: "og:description", content: "Comprehensive technology solutions engineered for performance and scale." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Database,
    title: "Data Engineering & Pipelines",
    tag: "Foundations",
    body: "We design and build robust, scalable data pipelines that move, transform, and centralize your data. From raw ingestion to clean, queryable outputs, every pipeline ships with observability built in.",
    items: ["Custom ETL pipelines", "Real-time and batch processing", "Data lake and warehouse setup", "Pipeline monitoring and alerting"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    tag: "AWS · Azure · GCP",
    body: "We architect cloud environments that are secure, cost-efficient, and built for growth. Our engineers hold certifications across all three major cloud platforms. We treat infrastructure as a product, not a checklist.",
    items: ["Cloud migration strategy", "Infrastructure as Code (IaC)", "Multi-cloud and hybrid design", "Cost optimization audits"],
  },
  {
    icon: Layers,
    title: "Big Data Solutions",
    tag: "Scale",
    body: "We implement big data platforms that let your team process and analyze massive datasets at scale. We work with Spark, Hadoop, Kafka, and modern lakehouse architectures.",
    items: ["Spark and Hadoop implementation", "Streaming data architecture", "Data lakehouse design", "Performance tuning"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    tag: "Decisions",
    body: "We turn raw data into clear, actionable dashboards and reports that drive better decisions. We work with Power BI, Tableau, Looker, and custom solutions — owned by the business, not gatekept by IT.",
    items: ["Dashboard design and build", "KPI framework definition", "Self-service analytics setup", "Automated reporting"],
  },
  {
    icon: Replace,
    title: "System Modernization",
    tag: "Migration",
    body: "We help businesses move off legacy systems and onto modern, cloud-native architectures without disruption. We phase delivery so value lands early and risk stays contained.",
    items: ["Legacy system assessment", "Migration roadmap", "Phased modernization delivery", "Post-migration support"],
  },
] as const;

const FAQ = [
  {
    q: "How long does a typical engagement take?",
    a: "Most engagements run 8–16 weeks for the initial delivery, with longer-term support arrangements available. We always scope a discovery phase first so timelines are grounded in reality, not guesswork.",
  },
  {
    q: "Do you work with our existing team?",
    a: "Yes — we embed alongside your engineers, share documentation as we go, and structure handoffs so your team owns the platform when we leave.",
  },
  {
    q: "Which cloud platforms do you support?",
    a: "We're certified across AWS, Azure, and Google Cloud. We have no preference — we recommend the platform that best fits your existing investments, compliance requirements, and team skills.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed-scope projects, time-and-materials, and managed-service retainers. Pricing is always tied to a clear deliverable or SLA — never an open-ended invoice.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        headline={<>Five practices. <span className="brand-text">One outcome.</span></>}
        subheadline="Comprehensive technology solutions engineered for performance, scale, and measurable business results."
      />

      {/* Service quick-grid (anchors) — upgraded KPI-style cards */}
      <section className="container-x py-14 border-b border-border/60">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => {
            const accents = [
              "from-primary/[0.10] to-transparent",
              "from-accent/[0.10] to-transparent",
              "from-primary/[0.08] to-accent/[0.04]",
              "from-accent/[0.08] to-primary/[0.04]",
              "from-primary/[0.10] to-transparent",
            ];
            return (
              <Reveal key={s.title} delay={i * 60}>
                <a
                  href={`#svc-${i}`}
                  className={`hover-lift soft-card group relative flex h-full flex-col gap-4 overflow-hidden p-6 bg-gradient-to-br ${accents[i]}`}
                >
                  <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" aria-hidden="true" />
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">0{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{s.tag}</div>
                    <h3 className="mt-1.5 text-base font-bold leading-snug group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{s.body.split(".")[0]}.</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all group-hover:gap-2.5">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Detailed services — alternating */}
      <section className="container-x section-y space-y-20 md:space-y-28">
        {SERVICES.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={s.title}
              id={`svc-${i}`}
              className={`scroll-mt-24 grid items-center gap-10 lg:grid-cols-12`}
            >
              <Reveal className={`relative lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                <span aria-hidden="true" className="pointer-events-none absolute -top-10 -left-2 select-none text-[140px] font-black leading-none text-primary/[0.06] md:text-[180px]">
                  0{i + 1}
                </span>
                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Service · 0{i + 1}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold md:text-5xl">{s.title}</h2>
                  <p className="mt-5 max-w-xl text-muted-foreground">{s.body}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground">{s.tag}</span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground">Senior engineers</span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground">KPI-aligned</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150} className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                <div className="soft-card hover-lift relative overflow-hidden p-7">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" aria-hidden="true" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">Deliverables</h3>
                    <ul className="mt-4 space-y-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="story-link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Discuss this service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </section>

      {/* FAQ — plain bg so CTA's alt-band reads as a distinct band */}
      <section className="relative overflow-hidden border-t border-border/60 bg-background">
        <div className="absolute inset-0 dot-pattern opacity-[0.18]" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 380, height: 380, top: -120, right: -120, background: "color-mix(in oklab, var(--primary) 10%, transparent)" }} aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Questions, <span className="brand-text">answered.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">The things prospective clients ask first.</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <details className="group soft-card overflow-hidden p-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold">
                    <span>{f.q}</span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Not sure which service fits? Book a free consultation." />
    </>
  );
}
