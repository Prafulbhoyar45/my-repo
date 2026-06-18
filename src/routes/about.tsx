import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Sparkles, Building2, ArrowRight, Award, Users, Globe, Rocket, Briefcase, MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | About" },
      { name: "description", content: "Technology consulting built on expertise, integrity, and results — a division of QGTM Conglomerate." },
      { property: "og:title", content: "QGTM Consulting | About" },
      { property: "og:description", content: "Technology consulting built on expertise, integrity, and results." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const FACTS = [
  { k: "Founded", v: "2019" },
  { k: "Headquarters", v: "New York, NY" },
  { k: "Team", v: "25+ Engineers" },
  { k: "Certifications", v: "AWS · Azure · GCP" },
];

const VALUES = [
  { icon: Target, title: "Mission", body: "Empower businesses through scalable, data-driven technology solutions." },
  { icon: Eye, title: "Vision", body: "To be the most trusted technology partner for mid-market and enterprise businesses." },
  { icon: Sparkles, title: "Values", body: "Integrity · Innovation · Excellence · Results." },
];

const MILESTONES = [
  { y: "2019", t: "Founded in NYC", b: "Small team of senior data engineers." },
  { y: "2021", t: "Multi-cloud certified", b: "AWS, Azure, and GCP practices launched." },
  { y: "2023", t: "50+ projects shipped", b: "Across finance, healthcare, and retail." },
  { y: "2025", t: "SOC 2 aligned", b: "Zero-trust by default across delivery." },
];

function AboutPage() {
  return (
    <>
      {/* Rich hero — fills the empty space with stat cards + orbit graphic */}
      <section className="relative overflow-hidden border-b border-border/70 bg-secondary noise">
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 460, height: 460, top: -160, left: -100, background: "color-mix(in oklab, var(--primary) 22%, transparent)" }} aria-hidden="true" />
        <div className="orb animate-blob" style={{ width: 400, height: 400, top: 40, right: -120, background: "color-mix(in oklab, var(--accent) 22%, transparent)", animationDelay: "-6s" }} aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" aria-hidden="true" />

        <div className="container-x relative grid items-center gap-12 pt-20 pb-20 md:pt-28 md:pb-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> About
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                About <span className="brand-text">QGTM Consulting</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                Technology consulting built on expertise, integrity, and results — a senior-engineer practice inside the QGTM Conglomerate.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> New York · Remote-first
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border">
                  <Briefcase className="h-3.5 w-3.5 text-primary" /> Est. 2019
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground ring-1 ring-border">
                  <Users className="h-3.5 w-3.5 text-primary" /> 25+ engineers
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="relative">
              {/* concentric orbit graphic */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center" aria-hidden="true">
                <div className="absolute h-64 w-64 rounded-full border border-primary/15" />
                <div className="absolute h-48 w-48 rounded-full border border-primary/20" />
                <div className="absolute h-32 w-32 rounded-full border border-accent/30" />
              </div>
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: Rocket, k: "2019", l: "Founded", grad: "from-primary/[0.10] to-transparent" },
                  { icon: Users, k: "25+", l: "Engineers", grad: "from-accent/[0.10] to-transparent" },
                  { icon: Award, k: "50+", l: "Projects", grad: "from-primary/[0.08] to-transparent" },
                  { icon: Globe, k: "3", l: "Continents", grad: "from-accent/[0.08] to-transparent" },
                ].map((s) => (
                  <div key={s.l} className={`soft-card hover-lift relative p-5 bg-gradient-to-br ${s.grad}`}>
                    <s.icon className="h-5 w-5 text-primary" />
                    <div className="mt-3 text-3xl font-bold brand-text">{s.k}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Story */}
      <section className="container-x section-y grid items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Story</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">A team built to ship outcomes.</h2>
          <p className="mt-6 text-muted-foreground">
            QGTM Consulting was founded 5+ years ago with a mission to help businesses leverage modern technology to optimize operations and scale efficiently. From a small team of senior data engineers, we've grown into a multi-disciplinary practice serving mid-market and enterprise clients across financial services, healthcare, and retail.
          </p>
          <p className="mt-4 text-muted-foreground">
            We specialize in data engineering, cloud solutions, and business intelligence — measured against one bar: did the engagement move the business forward?
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/services" className="story-link inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Our services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="story-link inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              See case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="soft-card overflow-hidden">
            <div className="bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] p-7">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Key Facts</h3>
              <dl className="mt-5 divide-y divide-border">
                {FACTS.map((f) => (
                  <div key={f.k} className="flex items-center justify-between py-4">
                    <dt className="text-muted-foreground">{f.k}</dt>
                    <dd className="font-bold">{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-card">
              <div className="p-5 text-center">
                <Users className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 text-2xl font-bold"><StatCounter value={25} suffix="+" /></div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Engineers</div>
              </div>
              <div className="p-5 text-center">
                <Award className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 text-2xl font-bold"><StatCounter value={50} suffix="+" /></div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</div>
              </div>
              <div className="p-5 text-center">
                <Globe className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 text-2xl font-bold"><StatCounter value={3} /></div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Continents</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Values — dark inverted */}
      <section className="alt-band relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 dot-pattern opacity-40" aria-hidden="true" />
        <div className="container-x relative section-y">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What We Stand For</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Built on <span className="brand-text">principles</span>, not pitches.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="hover-lift soft-card h-full p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones rail */}
      <section className="container-x section-y">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Milestones</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">A short, honest timeline.</h2>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" aria-hidden="true" />
          <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.y} delay={i * 90}>
                <li className="relative text-center">
                  <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-background ring-2 ring-primary/25 shadow-[var(--shadow-soft)]">
                    <span className="text-xs font-bold text-primary">{m.y}</span>
                  </div>
                  <h3 className="mt-5 font-bold">{m.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.b}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Parent company banner (light) */}
      <section className="container-x section-y">

        <Reveal>
          <div className="soft-card flex flex-col items-center gap-5 overflow-hidden bg-gradient-to-r from-primary/[0.06] via-transparent to-accent/[0.06] p-8 text-center md:flex-row md:p-10 md:text-left">
            <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold">Part of something bigger.</h3>
              <p className="mt-1.5 text-muted-foreground">
                <span className="font-semibold text-foreground">QGTM Consulting</span> is a division of <span className="font-semibold text-foreground">QGTM Conglomerate</span> — a diversified technology and business solutions group.
              </p>
            </div>
            <Link to="/contact" className="shine inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow-ocean)]">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTASection headline="Partner with a team that delivers." />
    </>
  );
}
