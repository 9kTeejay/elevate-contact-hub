import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { FAQ } from "@/components/site/FAQ";
import { faqs, CONTACT } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mutual of Omaha Policy Help Line" },
      { name: "description", content: "Get help with your Mutual of Omaha life insurance policy. Call (832) 622-4254 or send us a message — a licensed professional will get back to you within one business day." },
      { property: "og:title", content: "Contact — Mutual of Omaha Policy Help Line" },
      { property: "og:description", content: "Reach a licensed professional about your Mutual of Omaha life insurance policy. Free, no obligation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const contactSchema = z.object({
  name:    z.string().trim().min(1, "Name required").max(80),
  email:   z.string().trim().email("Valid email required").max(160),
  phone:   z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  industry:z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Tell us a little about your goals").max(2000),
});

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnklak";

function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      industry: String(fd.get("industry") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check the form.");
      setStatus("err");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const msg = body?.errors?.[0]?.message ?? "Something went wrong. Please try again.";
        setErr(msg);
        setStatus("err");
        return;
      }
      form.reset();
      setStatus("ok");
    } catch {
      setErr("Network error. Please try again or email us directly.");
      setStatus("err");
    }
  }

  return (
    <>
      <section className="py-24">
        <div className="wrap grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <span className="eyebrow-label">Talk To A Human</span>
            <h1 className="display-title mt-4" style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)" }}>
              Get help with your <span className="grad-text">Mutual of Omaha policy</span>.
            </h1>
            <p className="mt-5 text-[1.05rem] text-ink-soft">
              The fastest way to get an answer is to call — a licensed professional will pick up.
              Prefer to write? Fill out the form and we'll respond within one business day.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a href={CONTACT.phoneHref} className="card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl text-accent-1"
                      style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-1) 12%, transparent), color-mix(in oklab, var(--accent-3) 12%, transparent))" }}>
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[0.78rem] mono uppercase tracking-[0.08em] text-ink-faint">Call us</div>
                  <div className="mono text-[1.05rem] font-semibold text-ink">{CONTACT.phone}</div>
                </div>
              </a>
              <a href={CONTACT.emailHref} className="card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-accent-1">
                <span className="grid h-11 w-11 place-items-center rounded-xl text-accent-1"
                      style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-1) 12%, transparent), color-mix(in oklab, var(--accent-3) 12%, transparent))" }}>
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[0.78rem] mono uppercase tracking-[0.08em] text-ink-faint">Email</div>
                  <div className="text-[1.05rem] font-semibold text-ink">{CONTACT.email}</div>
                </div>
              </a>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl text-accent-1"
                      style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--accent-1) 12%, transparent), color-mix(in oklab, var(--accent-3) 12%, transparent))" }}>
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[0.78rem] mono uppercase tracking-[0.08em] text-ink-faint">Response time</div>
                  <div className="text-[1.05rem] font-semibold text-ink">Under 5 minutes, weekdays</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="card p-8" noValidate>
              {status === "ok" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                  <CheckCircle2 className="h-10 w-10 text-accent-1" />
                  <h3 className="text-[1.2rem] font-bold">Thank you!</h3>
                  <p className="max-w-sm text-[0.95rem] text-ink-soft">
                    Your request has been received. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  <Field name="name"    label="Your name"       required autoComplete="name" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="email"   label="Email"           type="email" required autoComplete="email" />
                    <Field name="phone"   label="Phone"           type="tel" autoComplete="tel" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="company" label="Policy number (if known)" />
                    <Field name="industry" label="Topic" placeholder="Claim, beneficiary, lapsed…" />
                  </div>
                  <Field name="message"  label="How can we help with your Mutual of Omaha policy?" textarea required />
                  {err && <p className="text-[0.85rem] text-red-600">{err}</p>}
                  <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-2 w-full disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "submitting" ? "Sending…" : "Send My Message"}
                  </button>
                  <p className="text-center text-[0.78rem] text-ink-faint">
                    Free · Confidential · We reply within one business day.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="wrap-narrow">
          <Reveal>
            <span className="eyebrow-label">FAQ</span>
            <h2 className="section-title mt-3.5">Before you call — quick answers.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name, label, type = "text", required, autoComplete, placeholder, textarea,
}: {
  name: string; label: string; type?: string; required?: boolean;
  autoComplete?: string; placeholder?: string; textarea?: boolean;
}) {
  const base =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-1 focus:ring-2 focus:ring-accent-1/20";
  return (
    <label className="grid gap-1.5">
      <span className="text-[0.82rem] font-medium text-ink-soft">
        {label}{required && <span className="text-accent-1"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
