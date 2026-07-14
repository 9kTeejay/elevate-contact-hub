import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { tiers, faqs, CONTACT } from "@/lib/site-content";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Northbound" },
      { name: "description", content: "Four tiers, from a fast starter website to a full done-for-you growth machine. No lock-in — every tier starts with a free strategy call." },
      { property: "og:title", content: "Pricing — Northbound" },
      { property: "og:description", content: "Four tiers from starter website to a full done-for-you growth machine. No contracts." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <section className="py-24">
        <div className="wrap-wide">
          <Reveal className="mx-auto max-w-[720px] text-center">
            <span className="eyebrow-label">Pricing</span>
            <h1 className="display-title mt-4" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
              Choose the system that <span className="grad-text">fits where you are</span>.
            </h1>
            <p className="mt-5 text-[1.08rem] text-ink-soft">
              Every tier builds on the one before it — start where you are, move up as your lead flow grows. No contracts, no lock-in.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:items-start">
            {tiers.map((t, i) => (
              <Reveal key={t.num} delay={i * 60}>
                <div
                  className={`relative flex h-full flex-col gap-5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    t.popular ? "bg-white xl:-translate-y-3" : "card"
                  }`}
                  style={
                    t.popular
                      ? {
                          background:
                            "linear-gradient(white, white) padding-box, var(--gradient-brand) border-box",
                          border: "2px solid transparent",
                          boxShadow: "var(--shadow-brand)",
                        }
                      : undefined
                  }
                >
                  {t.popular && (
                    <span
                      className="mono absolute left-1/2 top-[-14px] -translate-x-1/2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div>
                    <span className="mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent-1">{t.num}</span>
                    <h3 className="mt-2 text-[1.15rem] font-extrabold leading-tight">{t.name}</h3>
                    <p className="mt-2 min-h-[42px] text-[0.86rem] text-ink-soft">{t.tagline}</p>
                  </div>
                  <div className="flex min-h-[54px] flex-col justify-center gap-1.5">
                    <div className="mono text-[1.5rem] font-semibold leading-tight tracking-tight">{t.price}</div>
                    <div className={`mono text-[0.74rem] ${t.cadenceAccent ? "font-semibold text-accent-1" : "text-ink-faint"}`}>{t.cadence}</div>
                  </div>
                  <Link to="/contact" className={`btn w-full ${t.popular ? "btn-primary" : "btn-ghost"}`}>
                    Book Your Free Strategy Call
                  </Link>
                  <div className="flex flex-col gap-3 border-t border-line pt-5">
                    {t.inherits && <p className="text-[0.78rem] italic text-ink-faint">{t.inherits}</p>}
                    <ul className="grid gap-3">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[0.87rem] leading-snug text-ink-soft">
                          <span className="font-bold text-accent-1">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[620px] text-center text-[0.9rem] text-ink-faint">
            Final pricing depends on scope, pages, and integrations — every tier starts with a free strategy call to confirm what's right for your business. Call{" "}
            <a href={CONTACT.phoneHref} className="font-semibold text-ink hover:underline">{CONTACT.phone}</a>{" "}or book online.
          </p>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="wrap-narrow">
          <Reveal>
            <span className="eyebrow-label">FAQ</span>
            <h2 className="section-title mt-3.5">Common questions about pricing & engagements.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
