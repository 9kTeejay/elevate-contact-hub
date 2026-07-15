import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import { CONTACT, BRAND } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-14 pb-8">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-bold">
              <span className="relative h-[26px] w-[26px] flex-none rounded-[8px]" style={{ background: "var(--gradient-brand)" }}>
                <span className="absolute inset-[7px] rounded-[3px] bg-white/90" />
              </span>
              {BRAND.name}
            </Link>
            <p className="mt-3.5 max-w-[380px] text-[0.9rem] text-ink-soft">{BRAND.tagline}</p>
          </div>

          <div>
            <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] mono text-ink">Navigate</h5>
            <ul className="flex flex-col gap-2.5 text-[0.9rem] text-ink-soft">
              <li><a href="/#topics" className="hover:text-ink">How We Help</a></li>
              <li><a href="/#faq" className="hover:text-ink">FAQ</a></li>
              <li><Link to="/contact" className="hover:text-ink">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] mono text-ink">Speak with us</h5>
            <ul className="flex flex-col gap-2.5 text-[0.9rem] text-ink-soft">
              <li><a href={CONTACT.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-accent-1"><Phone className="h-3.5 w-3.5" /> {CONTACT.phone}</a></li>
              <li><a href={CONTACT.emailHref} className="inline-flex items-center gap-1.5 hover:text-ink"><Mail className="h-3.5 w-3.5" /> {CONTACT.email}</a></li>
              <li className="text-ink-faint">Live line answered 24/7</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-line bg-surface p-4 text-[0.78rem] leading-relaxed text-ink-faint">
          <strong className="text-ink-soft">Disclaimer:</strong> {BRAND.disclaimer} This website is for informational purposes only and does not constitute legal or financial advice. Insurance products are offered through licensed insurance professionals.
        </div>

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.82rem] text-ink-faint">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="text-[0.82rem] text-ink-faint">Licensed insurance professionals · Independent resource</p>
        </div>
      </div>
    </footer>
  );
}
