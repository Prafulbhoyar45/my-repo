import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, CheckCircle2, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "QGTM Consulting | Contact" },
      { name: "description", content: "Tell us about your project — we'll get back to you within 24 hours." },
      { property: "og:title", content: "QGTM Consulting | Contact" },
      { property: "og:description", content: "Get in touch with QGTM Consulting." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const INQUIRY_TYPES = [
  "Data Engineering",
  "Cloud Architecture",
  "Big Data",
  "BI & Analytics",
  "System Modernization",
  "General",
];

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Please add a few details").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const inputCls =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/15";

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        headline={<>Let's <span className="brand-text">talk.</span></>}
        subheadline="Tell us about your project — a senior consultant will reach out within 24 hours."
      />

      <section className="container-x section-y">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="soft-card overflow-hidden">
              <div className="bg-gradient-to-br from-primary/[0.08] to-accent/[0.05] p-7">
                <h2 className="text-2xl font-bold">Reach us directly</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Prefer email or phone? Use the details below or fill out the form.
                </p>
              </div>

              <ul className="divide-y divide-border">
                {[
                  { icon: Mail, k: "Email", v: "consulting@qgtm.com", href: "mailto:consulting@qgtm.com" },
                  { icon: Phone, k: "Phone", v: "+1 (800) 000-0000", href: "tel:+18000000000" },
                  { icon: MapPin, k: "HQ", v: "New York, NY · Remote-first" },
                  { icon: Clock, k: "Response", v: "Within 24 hours" },
                ].map((it) => (
                  <li key={it.k} className="flex items-start gap-4 p-5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                      <it.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{it.k}</div>
                      {it.href ? (
                        <a href={it.href} className="font-semibold text-foreground hover:text-primary transition-colors">{it.v}</a>
                      ) : (
                        <div className="font-semibold">{it.v}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border p-7">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">Inquiry Types</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {INQUIRY_TYPES.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="soft-card relative overflow-hidden p-7 md:p-9"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/12 to-accent/10 blur-2xl" aria-hidden="true" />

              <div className="relative">
                {submitted && (
                  <div className="mb-6 flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <div className="font-semibold">Message sent</div>
                      <div className="text-muted-foreground">A consultant will reach out within 24 hours.</div>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name" name="name" error={errors.name} required />
                  <Field label="Company" name="company" error={errors.company} required />
                  <Field label="Email" name="email" type="email" error={errors.email} required />
                  <Field label="Phone" name="phone" type="tel" error={errors.phone} optional />

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium" htmlFor="service">
                      Service of Interest <span className="text-primary">*</span>
                    </label>
                    <select id="service" name="service" defaultValue="" className={inputCls} required>
                      <option value="" disabled>Select a service</option>
                      {INQUIRY_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      Project Description <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us about your goals, current systems, and timeline."
                      className={inputCls}
                      required
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="shine group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow-ocean)] md:w-auto"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by QGTM Consulting. A division of QGTM Conglomerate.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>
        {label}{" "}
        {required && <span className="text-primary">*</span>}
        {optional && <span className="text-xs text-muted-foreground">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={inputCls}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
