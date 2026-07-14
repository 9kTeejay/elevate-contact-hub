import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { services, process } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Northbound" },
      { name: "description", content: "Websites, SEO, Google & Facebook Ads, CRM, booking, SMS, email, and AI chatbots — deployed as one growth system for local businesses." },
      { property: "og:title", content: "Services — Northbound" },
      { property: "og:description", content: "Websites, SEO, Google & Facebook Ads, CRM, booking, SMS, email, and AI chatbots — deployed as one growth system." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="py-24">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow-label">Services</span>
            <h1 className="display-title mt-4 max-w-[820px]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
              Every capability your business needs to <span className="grad-text">grow locally</span>.
            </h1>
            <p className="mt-5 max-w-[620px] text-[1.1rem] text-ink-soft">
              Start with the one channel that unblocks growth this quarter, or deploy the full stack from day one. Either way, everything is engineered to work together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/pricing" className="btn btn-primary">See Pricing</Link>
              <Link to="/contact" className="btn btn-ghost">Book a Strategy Call</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Capabilities</span>
            <h2 className="section-title mt-3.5">The full toolkit, deployed together.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col gap-4 bg-white p-8">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-accent-1"
                     style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-1) 12%, transparent), color-mix(in oklab, var(--accent-3) 12%, transparent))" }}>
                  {s.icon}
                </div>
                <span className="mono text-[0.72rem] uppercase tracking-[0.06em] text-accent-1">{s.tag}</span>
                <h3 className="text-[1.06rem] font-bold">{s.title}</h3>
                <p className="text-[0.92rem] text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-[660px] text-center">
            <span className="eyebrow-label">Process</span>
            <h2 className="section-title mt-3.5">A five-phase build, not a monthly retainer of guesswork.</h2>
          </Reveal>
          <div className="relative mt-14">
            <div className="pointer-events-none absolute left-[27px] top-4 bottom-4 w-px bg-line md:left-1/2 md:-translate-x-1/2" />
            {process.map((p, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={p.n} delay={i * 60}>
                  <div className="relative grid grid-cols-[56px_1fr] items-center gap-6 py-8 md:grid-cols-[1fr_56px_1fr] md:gap-9">
                    <div className={`card p-7 ${flip ? "md:col-start-3" : "md:col-start-1"}`}>
                      <h4 className="text-[1.12rem] font-bold">{p.title}</h4>
                      <p className="mt-2 text-[0.94rem] text-ink-soft">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="mono rounded-md border border-line px-2 py-1 text-[0.72rem] text-ink-faint">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mono z-[2] grid h-14 w-14 place-items-center rounded-full bg-ink text-[0.95rem] font-semibold text-white md:col-start-2 md:row-start-1">
                      {p.n}
                    </div>
                    <div className="hidden md:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
