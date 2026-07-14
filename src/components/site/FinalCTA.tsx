import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { CONTACT } from "@/lib/site-content";

export function FinalCTA() {
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] px-8 py-20 text-center text-white sm:px-12"
               style={{ background: "radial-gradient(120% 140% at 20% 0%, #17172a 0%, #0b0b0d 55%), #0b0b0d" }}>
            <div className="pointer-events-none absolute inset-0" style={{
              background: "radial-gradient(420px 220px at 80% 110%, color-mix(in oklab, var(--accent-2) 35%, transparent), transparent 70%), radial-gradient(420px 220px at 10% -10%, color-mix(in oklab, var(--accent-3) 25%, transparent), transparent 70%)"
            }} />
            <div className="relative">
              <h2 className="section-title mx-auto max-w-3xl text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Let's build the system that grows your business.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.06rem] text-white/70">
                One free strategy call. We'll show you exactly where you're losing customers today, and what a connected growth system would look like for your business.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                <Link to="/contact" className="btn btn-invert">Book Your Free Strategy Call</Link>
                <Link to="/services" className="btn btn-ghost-invert">See Our Process</Link>
              </div>
              <p className="mt-6 text-[0.88rem] text-white/55">
                Prefer to talk now? Call <a href={CONTACT.phoneHref} className="font-semibold text-white hover:underline">{CONTACT.phone}</a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
