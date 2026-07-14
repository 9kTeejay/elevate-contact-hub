import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-16 pb-9">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] mb-14">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-bold">
              <span className="relative h-[26px] w-[26px] flex-none rounded-[8px]" style={{ background: "var(--gradient-brand)" }}>
                <span className="absolute inset-[7px] rounded-[3px] bg-white/90" />
              </span>
              Northbound
            </Link>
            <p className="mt-3.5 max-w-[280px] text-[0.9rem] text-ink-soft">
              AI-powered growth systems for local businesses. Websites, automation, and digital growth — built as one connected system.
            </p>
          </div>

          <FooterCol title="Services" items={[
            ["/services", "Website Development"],
            ["/services", "SEO & Local Search"],
            ["/services", "Google & Facebook Ads"],
            ["/services", "CRM & Automation"],
            ["/services", "AI Chatbots"],
          ]} />

          <FooterCol title="Company" items={[
            ["/about", "About"],
            ["/services", "Our Process"],
            ["/work", "Case Studies"],
            ["/contact", "FAQ"],
          ]} />

          <FooterCol title="Get Started" items={[
            ["/contact", "Book a Strategy Call"],
            ["/pricing", "Pricing"],
          ]} extra={
            <>
              <a href="mailto:hello@northbound.agency" className="hover:text-ink">hello@northbound.agency</a>
              <a href="tel:+18326224254" className="hover:text-ink">(832) 622-4254</a>
            </>
          } />
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-[0.85rem] text-ink-faint">© 2026 Northbound. All rights reserved.</p>
          <div className="flex gap-3 text-ink-faint">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:text-ink hover:border-ink transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:text-ink hover:border-ink transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full border border-line hover:text-ink hover:border-ink transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, extra }: { title: string; items: [string, string][]; extra?: React.ReactNode }) {
  return (
    <div>
      <h5 className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] mono text-ink">{title}</h5>
      <ul className="flex flex-col gap-2.5 text-[0.9rem] text-ink-soft">
        {items.map(([to, label]) => (
          <li key={label}>
            <Link to={to} className="hover:text-ink transition-colors">{label}</Link>
          </li>
        ))}
        {extra && <>{Array.isArray(extra) ? null : <li className="flex flex-col gap-2.5">{extra}</li>}</>}
      </ul>
    </div>
  );
}
