import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT, BRAND } from "@/lib/site-content";

const links = [
  { href: "/#how", label: "How It Works" },
  { href: "/#topics", label: "How We Help" },
  { href: "/#faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      {/* Navy top strip */}
      <div className="w-full text-white text-center text-[0.86rem] font-semibold py-2 px-4"
           style={{ background: "var(--navy-deep)" }}>
        <span className="opacity-90">NEED POLICY ASSISTANCE? WE'RE HERE FOR YOU. CALL </span>
        <a href={CONTACT.phoneHref} className="underline underline-offset-2 decoration-white/50 hover:decoration-white">
          {CONTACT.phone}
        </a>
        <span className="opacity-90"> TODAY.</span>
      </div>

      <div className="border-b border-line bg-white/90 backdrop-blur-xl">
        <div className="wrap flex h-[76px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-bold text-[1rem] tracking-tight">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] text-white"
                  style={{ background: "var(--gradient-brand)" }}>
              <Phone className="h-4 w-4" />
            </span>
            <span className="uppercase tracking-wider text-[0.95rem]" style={{ color: "var(--navy-deep)" }}>
              {BRAND.name}
            </span>
          </Link>

          <nav className="hidden md:flex gap-8 text-[0.92rem] font-medium text-ink-soft">
            {links.map((l) =>
              "to" in l ? (
                <Link key={l.label} to={l.to} className="transition-colors hover:text-ink" activeProps={{ className: "text-ink" }}>
                  {l.label}
                </Link>
              ) : (
                <a key={l.label} href={l.href} className="transition-colors hover:text-ink">{l.label}</a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a href={CONTACT.phoneHref} className="btn btn-primary btn-sm hidden sm:inline-flex" style={{ padding: "0.62rem 1.15rem", fontSize: "0.85rem" }}>
              <Phone className="h-3.5 w-3.5" /> Call {CONTACT.phone}
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-line bg-white">
            <div className="wrap flex flex-col gap-1 py-4">
              {links.map((l) =>
                "to" in l ? (
                  <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-soft hover:bg-surface hover:text-ink">
                    {l.label}
                  </Link>
                ) : (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-soft hover:bg-surface hover:text-ink">
                    {l.label}
                  </a>
                )
              )}
              <a href={CONTACT.phoneHref} onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">
                <Phone className="h-4 w-4" /> Call {CONTACT.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
