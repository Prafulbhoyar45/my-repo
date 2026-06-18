import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer
      className="relative overflow-hidden border-t border-border bg-card"
      style={{
        boxShadow: "0 -8px 32px -12px rgba(11,20,38,0.06)",
      }}
    >
      <div className="absolute inset-0 dot-pattern opacity-[0.12]" aria-hidden="true" />
      <div className="orb animate-blob" style={{ width: 360, height: 360, bottom: -160, left: "60%", background: "color-mix(in oklab, var(--primary) 8%, transparent)", opacity: 0.35 }} aria-hidden="true" />

      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Scalable technology solutions engineered for modern businesses — data engineering, cloud architecture, and analytics that move the needle.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              A division of <span className="font-semibold text-foreground">QGTM Conglomerate</span>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Company</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Resources</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:consulting@qgtm.com" className="hover:text-primary transition-colors">consulting@qgtm.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                +1 (800) 000-0000
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                New York, NY · Remote-first
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-primary transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <Link to="/contact" className="ml-1 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2 transition-all">
                Start a project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} QGTM Consulting. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
