import { createFileRoute } from "@tanstack/react-router";
import { Phone, CheckCircle2, ShieldCheck, Clock, Users, TrendingDown, Star, Award, Lock, Timer } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { CountUp } from "@/components/site/CountUp";
import { PolicyReviewForm } from "@/components/site/PolicyReviewForm";
import { helpTopics, faqs, CONTACT, BRAND } from "@/lib/site-content";
import heroPolicy from "@/assets/hero-policy.jpg";
import familyBw from "@/assets/family-bw.jpg";
import flag from "@/assets/flag.jpg";
import agent from "@/assets/agent.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mutual of Omaha Life Insurance Policy Help — Call (832) 622-4254" },
      { name: "description", content: "Independent help line for Mutual of Omaha life insurance policyholders and beneficiaries. Claims, beneficiary changes, denied claims, lapsed policies. Speak to a licensed agent — call (832) 622-4254." },
      { property: "og:title", content: "Mutual of Omaha Life Insurance Policy Help Line" },
      { property: "og:description", content: "Call (832) 622-4254 for expert life insurance guidance. Independent, licensed help for policyholders and beneficiaries." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function CallBtn({ full = false }: { full?: boolean }) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={`btn btn-primary ${full ? "w-full" : ""} text-[1.02rem] px-7 py-4`}
    >
      <Phone className="h-4 w-4" /> CALL {CONTACT.phone}
    </a>
  );
}

function Home() {
  return (
    <>
      {/* URGENCY RIBBON */}
      <div className="w-full text-center text-[0.86rem] font-semibold py-2.5 px-4"
           style={{ background: "linear-gradient(90deg, #fff8e1, #fff3d0, #fff8e1)", color: "var(--navy-deep)" }}>
        <Timer className="inline h-3.5 w-3.5 mr-1.5 -mt-0.5" />
        Rate reviews are running <strong>free through this month</strong> — average savings identified: $412/yr.
      </div>

      {/* HERO — split image + navy card */}
      <section className="pt-14 pb-20 bg-white">
        <div className="wrap grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
          <Reveal>
            <div className="relative overflow-hidden rounded-[22px] shadow-xl h-full min-h-[420px]">
              <img
                src={heroPolicy}
                alt="Senior signing a life insurance policy document"
                width={1408}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="relative flex h-full flex-col justify-center rounded-[22px] p-10 sm:p-12 text-white overflow-hidden"
              style={{ background: "linear-gradient(160deg, var(--navy-deep) 0%, var(--accent-2) 100%)" }}
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-20"
                   style={{ background: "radial-gradient(circle, white, transparent 60%)" }} />
              <span className="mono text-[0.78rem] uppercase tracking-[0.16em] text-white/70">
                Life Insurance Simplified
              </span>
              <h1 className="mt-4 font-extrabold leading-[1.05] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(2rem, 3.6vw, 2.9rem)" }}>
                Call today for expert <span className="text-white/95 underline decoration-white/40 underline-offset-8">Mutual of Omaha</span> policy guidance.
              </h1>
              <p className="mt-5 text-[1.02rem] text-white/80 max-w-md">
                Claims, denied payouts, beneficiary changes, premium confusion or a lapsed policy —
                talk to a licensed professional now. Free. No pressure. No phone tree.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={CONTACT.phoneHref}
                   className="btn text-[1.05rem] px-7 py-4"
                   style={{ background: "white", color: "var(--navy-deep)" }}>
                  <Phone className="h-4 w-4" /> CALL {CONTACT.phone}
                </a>
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex text-yellow-300">
                  {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="text-[0.86rem] text-white/90">
                  <strong className="text-white">4.9/5</strong> from 2,300+ policyholders
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-y-2 text-[0.86rem] text-white/80">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Free consultation</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Live line 24/7</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Licensed & independent</span>
                <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Real human answers</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PATRIOTIC TRUST BAND — 3 tall images */}
      <section className="grid sm:grid-cols-3 gap-0.5">
        {[familyBw, flag, agent].map((src, i) => (
          <div key={i} className="relative aspect-[4/5] overflow-hidden">
            <img
              src={src}
              alt={["American family", "American flag", "Licensed agent on call"][i]}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* ANIMATED STATS BAR */}
      <section className="py-14 text-white" style={{ background: "var(--navy-deep)" }}>
        <div className="wrap grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {[
            { end: 12483, prefix: "", suffix: "+", label: "Policyholders helped" },
            { end: 412, prefix: "$", suffix: "/yr", label: "Avg. savings identified" },
            { end: 24, prefix: "", suffix: "/7", label: "Live line coverage" },
            { end: 4, prefix: "", suffix: ".9★", label: "Client rating" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[clamp(1.9rem,3.2vw,2.6rem)] font-extrabold tracking-tight text-white">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-1.5 text-[0.86rem] text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* RATE / POLICY REVIEW — split form */}
      <section id="review" className="py-24 bg-white">
        <div className="wrap grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow-label" style={{ color: "var(--navy-deep)" }}>Free Policy Review</span>
            <h2 className="section-title mt-3.5" style={{ color: "var(--navy-deep)" }}>
              You may be paying more than you need to.
            </h2>
            <p className="mt-5 text-[1.05rem] text-ink-soft max-w-lg">
              Rates, health class, and coverage options have changed. A quick, no-obligation review of
              your current Mutual of Omaha policy shows you exactly what your coverage is worth today —
              and whether better options exist for your family.
            </p>
            <ul className="mt-6 space-y-3 text-[0.98rem] text-ink">
              {[
                ["Confirm your policy is still the right fit", TrendingDown],
                ["Compare against current market rates", Award],
                ["Get plain-English answers on benefits & riders", ShieldCheck],
                ["Zero cost. Zero obligation. Zero pressure.", Lock],
              ].map(([t, Icon]: any) => (
                <li key={t} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-none" style={{ color: "var(--accent-3)" }} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 hidden lg:flex">
              <CallBtn />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <PolicyReviewForm />
          </Reveal>
        </div>
      </section>



      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-surface">
        <div className="wrap">
          <Reveal className="text-center max-w-2xl mx-auto">
            <span className="eyebrow-label" style={{ color: "var(--navy-deep)" }}>How It Works</span>
            <h2 className="section-title mt-3.5" style={{ color: "var(--navy-deep)" }}>
              Three simple steps to real answers.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "1", title: "Call the Help Line", desc: "Dial our number and speak with a licensed insurance professional on the first ring — no hold music, no phone tree." },
              { n: "2", title: "Share Your Situation", desc: "Tell us about your Mutual of Omaha policy or the claim you're dealing with. Everything you share is confidential." },
              { n: "3", title: "Get a Clear Next Step", desc: "You'll leave the call with plain-English answers and a specific action plan — free and with zero obligation." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center px-4">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-full text-white text-[1.4rem] font-extrabold shadow-lg"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-6 text-[1.18rem] font-bold" style={{ color: "var(--navy-deep)" }}>{s.title}</h3>
                  <p className="mt-3 text-[0.96rem] text-ink-soft max-w-[300px]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <CallBtn />
          </div>
        </div>
      </section>

      {/* HOW WE HELP - topic grid */}
      <section id="topics" className="py-24 bg-white">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <span className="eyebrow-label" style={{ color: "var(--navy-deep)" }}>What We Help With</span>
            <h2 className="section-title mt-3.5" style={{ color: "var(--navy-deep)" }}>
              Common Mutual of Omaha policy issues we handle every day.
            </h2>
            <p className="mt-4 text-[1.02rem] text-ink-soft">
              Don't see your exact situation? Call anyway — chances are we've seen it before.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {helpTopics.map((t, i) => (
              <Reveal key={t.title} delay={i * 40}>
                <a href={CONTACT.phoneHref}
                   className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                   style={{ borderTop: "3px solid var(--navy-deep)" }}>
                  <div className="grid h-11 w-11 place-items-center rounded-xl text-white"
                       style={{ background: "var(--navy-deep)" }}>
                    {t.icon}
                  </div>
                  <h3 className="mt-2 text-[1rem] font-bold" style={{ color: "var(--navy-deep)" }}>{t.title}</h3>
                  <p className="text-[0.9rem] text-ink-soft">{t.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[0.84rem] font-semibold group-hover:underline"
                        style={{ color: "var(--accent-3)" }}>
                    <Phone className="h-3.5 w-3.5" /> Call about this
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM CONTENT */}
      <section className="py-24" style={{ background: "var(--navy-deep)" }}>
        <div className="wrap-narrow text-white/90">
          <Reveal>
            <h2 className="section-title text-white">
              Policy Questions? Here's How Our Help Line Can Assist.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-white/80">
              When it comes to protecting your family, your life insurance policy is one of the most
              important documents you own. Whether you're an experienced Mutual of Omaha policyholder
              or a beneficiary trying to file a claim after a loss, having dependable support on the
              other end of the phone matters. That's exactly what our dedicated policy help line is for.
            </p>
            <div className="my-10 text-center">
              <a href={CONTACT.phoneHref} className="btn text-[1.05rem] px-7 py-4"
                 style={{ background: "white", color: "var(--navy-deep)" }}>
                <Phone className="h-4 w-4" /> CALL {CONTACT.phone} TODAY
              </a>
            </div>

            <h3 className="mt-12 text-[1.4rem] font-bold text-white">Your Trusted Partner for Policy Clarity</h3>
            <p className="mt-3 text-[1rem] leading-[1.75] text-white/80">
              Our help line is more than a customer-service number — it's a complete support system
              built to help you understand every part of your Mutual of Omaha life insurance policy.
              Life insurance is full of dense language and fine print. We translate it into words that
              actually make sense.
            </p>

            <h4 className="mt-8 text-[1.15rem] font-bold text-white">How Can We Help You?</h4>
            <p className="mt-3 text-[1rem] leading-[1.75] text-white/80">
              Every caller is different. Some need help filing a death benefit claim. Others are trying
              to reinstate a lapsed policy, update a beneficiary, or make sense of a premium increase.
              Whatever you're facing, our licensed professionals are ready to guide you through it —
              step by step, in plain English.
            </p>

            <h4 className="mt-8 text-[1.15rem] font-bold text-white">Talk to a Real Person — Not a Phone Tree</h4>
            <p className="mt-3 text-[1rem] leading-[1.75] text-white/80">
              One of the biggest advantages of calling us is that a licensed representative answers the
              phone. No 45-minute hold. No being transferred five times. Whether you need help with
              beneficiaries, premiums, coverage limits, or the claim process, we're ready to give you
              real answers when you call{" "}
              <a href={CONTACT.phoneHref} className="underline decoration-white/50 hover:decoration-white">
                {CONTACT.phone}
              </a>.
            </p>

            <h4 className="mt-8 text-[1.15rem] font-bold text-white">Continuous Support for Policyholders & Beneficiaries</h4>
            <ul className="mt-4 space-y-3 text-[1rem] leading-[1.7] text-white/80">
              <li><strong className="text-white">Policy Reviews:</strong> Marriage, a new baby, or buying a home can change what your family needs. We'll re-evaluate your coverage with you.</li>
              <li><strong className="text-white">Premium Adjustments:</strong> Struggling with a rate hike or missed payments? There may be options you don't know about.</li>
              <li><strong className="text-white">Claims Assistance:</strong> Filing a claim after a loss is hard enough — we guide beneficiaries through it so you get what you're owed, without delays.</li>
            </ul>

            <p className="mt-10 text-[1rem] leading-[1.75] text-white/70 italic">
              {BRAND.disclaimer}
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="wrap-narrow">
          <Reveal className="text-center">
            <span className="eyebrow-label" style={{ color: "var(--navy-deep)" }}>Frequently Asked Questions</span>
            <h2 className="section-title mt-3.5" style={{ color: "var(--navy-deep)" }}>
              Straight answers before you call.
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <Reveal>
            <div className="rounded-[24px] p-10 sm:p-14 text-center text-white shadow-xl"
                 style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--accent-3))" }}>
              <h2 className="text-white font-extrabold" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", lineHeight: 1.15 }}>
                Stop waiting on hold. Get a straight answer today.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85 text-[1.02rem]">
                One phone call. A licensed professional will listen and tell you exactly what to do next
                with your Mutual of Omaha life insurance policy.
              </p>
              <div className="mt-8 flex justify-center">
                <a href={CONTACT.phoneHref} className="btn text-[1.1rem] px-8 py-4 font-bold"
                   style={{ background: "white", color: "var(--navy-deep)" }}>
                  <Phone className="h-4 w-4" /> CALL {CONTACT.phone}
                </a>
              </div>
              <p className="mt-6 text-[0.82rem] text-white/60">
                Free · Confidential · Live line 24/7
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
