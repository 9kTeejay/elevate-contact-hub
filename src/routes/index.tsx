import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PipelineDiagram } from "@/components/site/PipelineDiagram";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FAQ } from "@/components/site/FAQ";
import {
  services, process, metrics, industries, compare, testimonials, faqs, CONTACT,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbound — AI Growth Systems for Local Businesses" },
      { name: "description", content: "One connected system — website, SEO, ads, CRM, and AI automation — that turns local searches into booked appointments." },
      { property: "og:title", content: "Northbound — AI Growth Systems for Local Businesses" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-24">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[1100px] -translate-x-1/2 blur-[10px]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--accent-1) 18%, transparent), color-mix(in oklab, var(--accent-2) 12%, transparent) 45%, transparent 72%)" }}
        />
        <div className="wrap relative">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-1 pulse-dot" />
              AI-Powered Growth · Built for Local Businesses
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-title mt-6 max-w-[920px]">
              Turn local searches into <span className="grad-text">booked customers</span> — on autopilot.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[620px] text-[clamp(1.05rem,1.6vw,1.27rem)] text-ink-soft">
              We build the systems that connect every channel — website, SEO, ads, CRM, and AI automation —
              so every dollar you spend compounds into predictable weekly revenue.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Link to="/contact" className="btn btn-primary">
                Book Your Free Strategy Call <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn btn-ghost">See How It Works</Link>
              <a href={CONTACT.phoneHref} className="ml-1 mono text-[0.86rem] text-ink-soft hover:text-ink transition-colors inline-flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> {CONTACT.phone}
              </a>
            </div>
            <p className="mt-3.5 text-[0.84rem] text-ink-faint">No contracts. No lock-in. We earn your business every month.</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-20">
              <PipelineDiagram />
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS BAR */}
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

      {/* ABOUT / WHY */}
      <section id="about" className="py-24">
        <div className="wrap grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <Reveal>
            <span className="eyebrow-label">Who We Are</span>
            <h2 className="section-title mt-3.5">Every channel, engineered as one growth system.</h2>
            <p className="mt-5 text-[1.12rem] text-ink-soft">
              Most agencies sell you services. We build you a machine — where your website, ads,
              reviews, and follow-up all reinforce each other. The result is fewer leaks, faster
              response, and revenue you can actually forecast.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6">
              {[
                ["01", "One system, not five vendors", "You get a single team owning strategy, execution, and reporting — no finger-pointing when something breaks."],
                ["02", "Built for local intent", "We specialize in the searches that actually convert — “near me,” service-specific, and high-intent keywords in your service area."],
                ["03", "Response speed as a growth lever", "Under-5-minute automated response — the single biggest driver of higher booking and show-up rates."],
                ["04", "Outcomes on the dashboard", "You see booked appointments and revenue, not clicks and impressions. Numbers that pay your team."],
              ].map(([i, t, d]) => (
                <div key={i} className="flex gap-4 border-b border-line pb-6 last:border-b-0 last:pb-0">
                  <div className="mono pt-0.5 text-[0.9rem] font-semibold text-accent-1">{i}</div>
                  <div>
                    <h4 className="text-[1.04rem] font-bold">{t}</h4>
                    <p className="mt-1.5 text-[0.96rem] text-ink-soft">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="wrap mt-16 border-t border-line pt-11">
          <div className="mono mb-5 text-[0.78rem] uppercase tracking-[0.08em] text-ink-faint">Industries we grow</div>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((i) => (
              <span key={i} className="rounded-full border border-line bg-white px-4 py-2 text-[0.86rem] text-ink-soft transition-all hover:-translate-y-px hover:border-accent-1 hover:text-ink">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Services</span>
            <h2 className="section-title mt-3.5">Eleven capabilities. One coordinated engine.</h2>
            <p className="mt-4 text-[1.06rem] text-ink-soft">
              We deploy the whole stack, or start with the piece that unblocks growth first.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-surface">
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
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24">
        <div className="wrap">
          <Reveal className="mx-auto max-w-[660px] text-center">
            <span className="eyebrow-label">How It Works</span>
            <h2 className="section-title mt-3.5">From first search to booked customer.</h2>
            <p className="mt-4 text-[1.06rem] text-ink-soft">
              Five phases. Every step builds on the last, so growth compounds instead of resetting every month.
            </p>
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

      {/* COMPARE */}
      <section className="bg-surface py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Why Choose Us</span>
            <h2 className="section-title mt-3.5">A different kind of agency relationship.</h2>
            <p className="mt-4 text-[1.06rem] text-ink-soft">
              Traditional agencies sell services. We engineer outcomes — and we measure ourselves the same way you do.
            </p>
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
                    <div className="border-b border-line bg-surface px-6 py-5 text-[0.92rem] text-ink-faint before:mr-1.5 before:text-ink-faint before:content-['—']">{them}</div>
                    <div className="border-b border-line bg-[color:oklch(0.99_0.01_275)] px-6 py-5 text-[0.92rem] font-semibold text-ink before:mr-1.5 before:font-bold before:text-accent-1 before:content-['✓']">{us}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Testimonials</span>
            <h2 className="section-title mt-3.5">What it's like to work with us.</h2>
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
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface py-24">
        <div className="wrap-narrow">
          <Reveal>
            <span className="eyebrow-label">FAQ</span>
            <h2 className="section-title mt-3.5">Questions we hear before the first call.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
          <div className="mt-10 rounded-2xl border border-line bg-white p-6 text-center">
            <p className="text-[0.95rem] text-ink-soft">
              Have a different question? <a href={CONTACT.emailHref} className="font-semibold text-ink underline decoration-accent-1 underline-offset-4">Email us</a> or{" "}
              <Link to="/contact" className="font-semibold text-ink underline decoration-accent-1 underline-offset-4">book a call</Link>.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
