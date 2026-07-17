import { useState } from "react";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/site-content";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgnklak";

type Step = 1 | 2 | 3 | 4;

export function PolicyReviewForm() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState({
    age: "",
    coverage: "",
    premium: "",
    healthChange: "",
    name: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "err">("idle");

  const set = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!data.name || !data.phone) return;
    setStatus("submitting");
    try {
      const fd = new FormData();
      fd.append("_subject", "Free Policy Review Request");
      fd.append("form", "Policy Review");
      Object.entries(data).forEach(([k, v]) => fd.append(k, v));
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full text-white"
             style={{ background: "var(--navy-deep)" }}>
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-[1.3rem] font-bold" style={{ color: "var(--navy-deep)" }}>
          Request received.
        </h3>
        <p className="mt-2 text-ink-soft">
          A licensed agent will call you shortly. For immediate help, call{" "}
          <a href={CONTACT.phoneHref} className="font-semibold underline" style={{ color: "var(--accent-3)" }}>
            {CONTACT.phone}
          </a>.
        </p>
      </div>
    );
  }

  const questions: Record<Exclude<Step, 4>, { label: string; key: keyof typeof data; options: string[] }> = {
    1: { label: "What's your age?", key: "age", options: ["Under 50", "50–59", "60–69", "70–79", "80+"] },
    2: { label: "Approximate coverage amount?", key: "coverage", options: ["Under $25k", "$25k–$100k", "$100k–$250k", "$250k–$500k", "$500k+"] },
    3: { label: "Has your health improved (quit smoking, weight loss, etc.)?", key: "healthChange", options: ["Yes, significantly", "Somewhat", "About the same", "Not sure"] },
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-line"
    >
      {/* Progress */}
      <div className="mb-6 flex items-center gap-2">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="h-1.5 flex-1 rounded-full"
               style={{ background: n <= step ? "var(--navy-deep)" : "var(--line)" }} />
        ))}
      </div>

      <div className="mb-2 mono text-[0.72rem] uppercase tracking-[0.12em]"
           style={{ color: "var(--accent-3)" }}>
        Free Policy Review · Step {step} of 4
      </div>

      {step < 4 ? (
        <>
          <h3 className="text-[1.3rem] font-bold mb-5" style={{ color: "var(--navy-deep)" }}>
            {questions[step].label}
          </h3>
          <div className="grid gap-2.5">
            {questions[step].options.map((opt) => {
              const active = data[questions[step].key] === opt;
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => {
                    set(questions[step].key, opt);
                    setTimeout(() => setStep((s) => (Math.min(4, (s as number) + 1)) as Step), 150);
                  }}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-[0.95rem] font-medium transition-all ${
                    active ? "text-white" : "text-ink hover:bg-surface"
                  }`}
                  style={{
                    borderColor: active ? "var(--navy-deep)" : "var(--line)",
                    background: active ? "var(--navy-deep)" : "white",
                  }}
                >
                  {opt}
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </button>
              );
            })}
          </div>
          {step > 1 && (
            <button type="button" onClick={() => setStep((s) => Math.max(1, (s as number) - 1) as Step)}
                    className="mt-4 text-[0.85rem] text-ink-faint hover:text-ink">
              ← Back
            </button>
          )}
        </>
      ) : (
        <>
          <h3 className="text-[1.3rem] font-bold mb-2" style={{ color: "var(--navy-deep)" }}>
            Where should we send your review?
          </h3>
          <p className="text-[0.9rem] text-ink-soft mb-5">
            A licensed agent will call you with options tailored to your policy — usually within one business hour.
          </p>
          <div className="grid gap-3">
            <input required value={data.name} onChange={(e) => set("name", e.target.value)}
                   placeholder="Full name" className="w-full rounded-xl border border-line px-4 py-3 text-[0.95rem]" />
            <input required value={data.phone} onChange={(e) => set("phone", e.target.value)}
                   placeholder="Phone number" type="tel"
                   className="w-full rounded-xl border border-line px-4 py-3 text-[0.95rem]" />
            <input value={data.email} onChange={(e) => set("email", e.target.value)}
                   placeholder="Email (optional)" type="email"
                   className="w-full rounded-xl border border-line px-4 py-3 text-[0.95rem]" />
          </div>
          <button type="submit" disabled={status === "submitting"}
                  className="btn btn-primary mt-5 w-full text-[1rem] py-4">
            {status === "submitting" ? "Sending…" : "Get My Free Review →"}
          </button>
          {status === "err" && (
            <p className="mt-3 text-[0.85rem] text-red-600">
              Something went wrong. Please call {CONTACT.phone} directly.
            </p>
          )}
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-[0.78rem] text-ink-faint">
            <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> Confidential</span>
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> No obligation</span>
          </div>
          <div className="mt-4 border-t border-line pt-4 text-center">
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold"
               style={{ color: "var(--navy-deep)" }}>
              <Phone className="h-3.5 w-3.5" /> Prefer to talk now? Call {CONTACT.phone}
            </a>
          </div>
          <button type="button" onClick={() => setStep(3)}
                  className="mt-3 text-[0.85rem] text-ink-faint hover:text-ink">
            ← Back
          </button>
        </>
      )}
    </form>
  );
}
