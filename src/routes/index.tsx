import { createFileRoute } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import {
  helpTopics, whyCallUs, stats, commonIssues, testimonials, faqs, CONTACT, BRAND,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutual of Omaha Life Insurance Help Line — Call (832) 622-4254" },
      { name: "description", content: "Free, independent help for Mutual of Omaha life insurance policyholders and beneficiaries. Claims, beneficiary questions, denied claims, lapsed policies. Live line 24/7." },
      { property: "og:title", content: "Mutual of Omaha Life Insurance Help Line" },
      { property: "og:description", content: "Free, independent help for Mutual of Omaha life insurance policyholders. Live line 24/7 — (832) 622-4254." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function CallButton({ label = "Call Now", size = "lg" }: { label?: string; size?: "lg" | "md" }) {
  const cls = size === "lg" ? "btn btn-primary text-[1.05rem] px-7 py-4" : "btn btn-primary";
  return (
    <a href={CONTACT.phoneHref} className={`${cls} shadow-lg`}>
      <Phone className="h-4 w-4" /> {label} · {CONTACT.phone}
    </a>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div
          className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[1100px] -translate-x-1/2 blur-[10px]"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--accent-1) 22%, transparent), color-mix(in oklab, var(--accent-2) 14%, transparent) 45%, transparent 72%)" }}
        />
        <div className="wrap relative">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-1 pulse-dot" />
              Independent Policyholder Help Line · Not affiliated with Mutual of Omaha
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-title mt-6 max-w-[960px]">
              Real help with your <span className="grad-text">Mutual of Omaha life insurance policy</span> — one phone call away.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-[680px] text-[clamp(1.05rem,1.6vw,1.25rem)] text-ink-soft">
              Filing a claim. Chasing a denied payout. Confused about a rate hike or a lapsed policy.
              Whatever you're dealing with, a licensed professional will answer the phone and walk you
              through it — free, no pressure, no phone tree.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <CallButton label="Call Now" />
              <a href="#topics" className="btn btn-ghost">See what we help with <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.86rem] text-ink-faint">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent-1" /> Free consultation</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-accent-1" /> Live line 24/7</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-accent-1" /> Licensed & independent</span>
            </div>
          </Reveal>

          {/* Hero call card */}
          <Reveal delay={280}>
            <div className="mt-14 max-w-xl rounded-[28px] border border-line bg-white p-6 shadow-xl sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl text-white"
                      style={{ background: "var(--gradient-brand)" }}>
                  <Phone className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <div className="mono text-[0.74rem] uppercase tracking-[0.08em] text-ink-faint">Speak to a licensed agent now</div>
                  <a href={CONTACT.phoneHref} className="mono block text-[1.6rem] font-bold leading-tight text-ink hover:text-accent-1">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-[0.82rem] text-ink-soft">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent-1" /> Free call</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent-1" /> No obligation</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent-1" /> Real human answers</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent-1" /> Confidential</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-line py-12">
        <div className="wrap grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={l}>
              <div className="mono text-[clamp(1.7rem,2.6vw,2.3rem)] font-semibold tracking-tight">
                <span className="grad-text">{n}</span>
              </div>
              <div className="mt-1.5 text-[0.88rem] text-ink-soft">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HELP TOPICS */}
      <section id="topics" className="py-24">
        <div className="wrap">
          <Reveal className="max-w-[680px]">
            <span className="eyebrow-label">What We Help With</span>
            <h2 className="section-title mt-3.5">Common Mutual of Omaha policy issues we solve every day.</h2>
            <p className="mt-4 text-[1.05rem] text-ink-soft">
              If you don't see your exact issue, call anyway — chances are we've handled it before.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {helpTopics.map((s) => (
                <a key={s.title} href={CONTACT.phoneHref} className="group flex flex-col gap-4 bg-white p-7 transition-colors hover:bg-surface">
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-accent-1"
                       style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-1) 14%, transparent), color-mix(in oklab, var(--accent-3) 14%, transparent))" }}>
                    {s.icon}
                  </div>
                  <span className="mono text-[0.7rem] uppercase tracking-[0.06em] text-accent-1">{s.tag}</span>
                  <h3 className="text-[1.02rem] font-bold">{s.title}</h3>
                  <p className="text-[0.9rem] text-ink-soft">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-[0.82rem] font-semibold text-ink group-hover:text-accent-1">
                    <Phone className="h-3.5 w-3.5" /> Call about this
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 text-center">
            <CallButton />
          </div>
        </div>
      </section>

      {/* WHY CALL US */}
      <section className="bg-surface py-24">
        <div className="wrap grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <Reveal>
            <span className="eyebrow-label">Why Call Us</span>
            <h2 className="section-title mt-3.5">You've been on hold long enough.</h2>
            <p className="mt-5 text-[1.06rem] text-ink-soft">
              Big insurance call centers weren't built for you — they were built for volume.
              We answer the phone like it's a neighbor calling, because that's how policyholder
              questions should be handled.
            </p>
            <div className="mt-7">
              <CallButton />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-6">
              {whyCallUs.map(({ n, title, desc }) => (
                <div key={n} className="flex gap-4 border-b border-line pb-6 last:border-b-0 last:pb-0">
                  <div className="mono pt-0.5 text-[0.9rem] font-semibold text-accent-1">{n}</div>
                  <div>
                    <h4 className="text-[1.04rem] font-bold">{title}</h4>
                    <p className="mt-1.5 text-[0.96rem] text-ink-soft">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="wrap mt-16 border-t border-line pt-11">
          <div className="mono mb-5 text-[0.78rem] uppercase tracking-[0.08em] text-ink-faint">Common reasons people call</div>
          <div className="flex flex-wrap gap-2.5">
            {commonIssues.map((i) => (
              <span key={i} className="rounded-full border border-line bg-white px-4 py-2 text-[0.86rem] text-ink-soft transition-all hover:-translate-y-px hover:border-accent-1 hover:text-ink">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <span className="eyebrow-label">Real Callers</span>
            <h2 className="section-title mt-3.5">What people say after they hang up.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card flex h-full flex-col gap-5 p-8">
                  <div className="tracking-[2px] text-accent-1">★★★★★</div>
                  <p className="text-[0.98rem] leading-relaxed text-ink">"{t.quote}"</p>
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
            <h2 className="section-title mt-3.5">Straight answers before you call.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
          <div className="mt-10 rounded-2xl border border-line bg-white p-6 text-center">
            <p className="text-[0.95rem] text-ink-soft">
              Rather just talk to a human? Call <a href={CONTACT.phoneHref} className="font-semibold text-ink underline decoration-accent-1 underline-offset-4">{CONTACT.phone}</a> — a live agent will pick up.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] px-8 py-16 text-center text-white sm:px-12"
                 style={{ background: "radial-gradient(120% 140% at 20% 0%, #17172a 0%, #0b0b0d 55%), #0b0b0d" }}>
              <div className="pointer-events-none absolute inset-0" style={{
                background: "radial-gradient(420px 220px at 80% 110%, color-mix(in oklab, var(--accent-2) 35%, transparent), transparent 70%), radial-gradient(420px 220px at 10% -10%, color-mix(in oklab, var(--accent-3) 25%, transparent), transparent 70%)"
              }} />
              <div className="relative">
                <span className="mono text-[0.78rem] uppercase tracking-[0.14em] text-white/60">Free · Confidential · 24/7</span>
                <h2 className="section-title mx-auto mt-4 max-w-3xl text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Stop waiting on hold. Get a straight answer.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[1.06rem] text-white/70">
                  One call. A licensed professional will answer, listen, and tell you exactly what to do next with your Mutual of Omaha policy.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                  <a href={CONTACT.phoneHref} className="btn btn-invert text-[1.05rem] px-7 py-4">
                    <Phone className="h-4 w-4" /> Call {CONTACT.phone}
                  </a>
                </div>
                <p className="mt-6 text-[0.82rem] text-white/50 max-w-2xl mx-auto">
                  {BRAND.disclaimer}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
