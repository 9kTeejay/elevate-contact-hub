import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { metrics, compare, industries } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northbound" },
      { name: "description", content: "Northbound engineers connected growth systems for local businesses. One team, one dashboard, one outcome — booked customers." },
      { property: "og:title", content: "About — Northbound" },
      { property: "og:description", content: "Northbound engineers connected growth systems for local businesses." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="py-24">
        <div className="wrap grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <Reveal>
            <span className="eyebrow-label">About Northbound</span>
            <h1 className="display-title mt-4" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
              We engineer <span className="grad-text">growth systems</span>, not marketing services.
            </h1>
            <p className="mt-5 text-[1.12rem] text-ink-soft">
              Local businesses don't need another vendor selling them one more channel. They need a
              single team owning the whole path — from a customer's first search to a booked appointment
              on the calendar. That's what we build.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary">Book a Strategy Call</Link>
              <Link to="/services" className="btn btn-ghost">See What We Do</Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6">
              {[
                ["Mission", "Give local businesses a growth engine that used to only exist inside venture-backed companies."],
                ["Approach", "Engineer the whole funnel — visibility, trust, demand, capture, retention — as one connected system."],
                ["Team", "Growth engineers, ad operators, and AI automation builders working directly on your account. No layers, no account managers."],
                ["Standard", "If a channel doesn't move booked appointments or revenue, we don't run it. Simple as that."],
              ].map(([t, d]) => (
                <div key={t} className="card p-6">
                  <div className="mono text-[0.74rem] uppercase tracking-[0.08em] text-accent-1">{t}</div>
                  <p className="mt-2 text-[0.98rem] text-ink">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line py-14">
        <div className="wrap grid grid-cols-2 gap-10 md:grid-cols-4">
          {metrics.map(([n, l]) => (
            <div key={l}>
              <div className="mono text-[clamp(1.9rem,3vw,2.5rem)] font-semibold tracking-tight">
                <span className="grad-text">{n}</span>
              </div>
              <div className="mt-1.5 text-[0.88rem] text-ink-soft">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Why Us</span>
            <h2 className="section-title mt-3.5">A different kind of agency relationship.</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr]">
                <div className="hidden md:block" />
                <div className="mono border-b border-line bg-surface px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-ink-faint">Traditional Agency</div>
                <div className="mono border-b border-line bg-ink px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-white">Northbound</div>

                {compare.map(([label, them, us]) => (
                  <div key={label} className="contents">
                    <div className="border-b border-line px-6 py-5 text-[0.92rem] font-medium text-ink-soft">{label}</div>
                    <div className="border-b border-line bg-surface px-6 py-5 text-[0.92rem] text-ink-faint before:mr-1.5 before:content-['—']">{them}</div>
                    <div className="border-b border-line bg-[color:oklch(0.99_0.01_275)] px-6 py-5 text-[0.92rem] font-semibold text-ink before:mr-1.5 before:font-bold before:text-accent-1 before:content-['✓']">{us}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-14 border-t border-line pt-11">
            <div className="mono mb-5 text-[0.78rem] uppercase tracking-[0.08em] text-ink-faint">Industries we grow</div>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((i) => (
                <span key={i} className="rounded-full border border-line bg-white px-4 py-2 text-[0.86rem] text-ink-soft">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
