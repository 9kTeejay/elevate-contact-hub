import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { FinalCTA } from "@/components/site/FinalCTA";
import { cases, testimonials, industries } from "@/lib/site-content";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Case Studies — Northbound" },
      { name: "description", content: "Real results for real local businesses — roofing, HVAC, dental, and auto. Booked appointments up, missed leads down, response time in minutes." },
      { property: "og:title", content: "Case Studies — Northbound" },
      { property: "og:description", content: "Real results for real local businesses — roofing, HVAC, dental, and auto." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <section className="py-24">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow-label">Selected Work</span>
            <h1 className="display-title mt-4 max-w-[820px]" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
              Systems built for <span className="grad-text">real businesses</span>.
            </h1>
            <p className="mt-5 max-w-[620px] text-[1.08rem] text-ink-soft">
              A look at the kind of results local businesses see when every channel works as one system.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="card overflow-hidden transition-all hover:-translate-y-1" style={{ transitionDuration: "300ms" }}>
                  <div className="relative h-[200px] overflow-hidden" style={{ background: "linear-gradient(135deg, var(--surface), var(--surface-2))" }}>
                    <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 400 200">
                      <defs>
                        <pattern id={`g-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M20 0H0V20" fill="none" stroke="var(--line)" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="400" height="200" fill={`url(#g-${i})`} />
                      <circle cx={80 + i * 60} cy={i % 2 === 0 ? 40 : 160} r="60" fill={c.accent} opacity="0.12" />
                      <circle cx={320 - i * 30} cy={i % 2 === 0 ? 150 : 50} r="40" fill={c.accent} opacity="0.08" />
                    </svg>
                    <span className="mono absolute bottom-4 left-4 rounded-lg border border-line bg-white px-3 py-1.5 text-[0.72rem] text-ink-faint">
                      Case study coming soon
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="mono mb-2 text-[0.72rem] uppercase tracking-[0.06em] text-accent-1">{c.industry}</div>
                    <h4 className="text-[1.08rem] font-bold">{c.title}</h4>
                    <p className="mt-2 text-[0.92rem] text-ink-soft">{c.desc}</p>
                    <div className="mt-4 flex gap-5 border-t border-line pt-4">
                      {c.stats.map(([v, l]) => (
                        <div key={l} className="text-[0.8rem] text-ink-faint">
                          <strong className="mono block text-[1rem] text-ink">{v}</strong>
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">In Their Words</span>
            <h2 className="section-title mt-3.5">What owners say after 90 days.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card flex h-full flex-col gap-5 p-8">
                  <div className="tracking-[2px] text-accent-1">★★★★★</div>
                  <p className="text-[0.98rem] leading-relaxed text-ink">{t.quote}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <div className="h-10 w-10 flex-none rounded-full" style={{ background: "var(--gradient-brand)" }} />
                    <div>
                      <div className="text-[0.9rem] font-bold">{t.name}</div>
                      <div className="text-[0.8rem] text-ink-faint">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

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
