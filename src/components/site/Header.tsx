import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-[1.02rem] tracking-tight">
          <span className="relative h-[26px] w-[26px] flex-none rounded-[8px]" style={{ background: "var(--gradient-brand)" }}>
            <span className="absolute inset-[7px] rounded-[3px] bg-white/90" />
          </span>
          Northbound
        </Link>

        <nav className="hidden md:flex gap-8 text-[0.92rem] font-medium text-ink-soft">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:+18326224254" className="hidden xl:inline-flex items-center gap-1.5 mono text-[0.86rem] font-medium text-ink-soft hover:text-ink transition-colors">
            <Phone className="h-3.5 w-3.5" /> (832) 622-4254
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex" style={{ padding: "0.62rem 1.15rem", fontSize: "0.85rem" }}>
            Free Strategy Call
          </Link>
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
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink-soft hover:bg-surface hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
