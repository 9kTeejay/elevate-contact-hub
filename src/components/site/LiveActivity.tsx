import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const activity = [
  { name: "Robert", city: "Houston, TX", action: "just requested a free policy review" },
  { name: "Linda", city: "Phoenix, AZ", action: "was matched with a licensed agent" },
  { name: "Marcus", city: "Atlanta, GA", action: "found a lower premium option" },
  { name: "Denise", city: "Tampa, FL", action: "got claim guidance in under 10 minutes" },
  { name: "James", city: "Charlotte, NC", action: "requested a beneficiary update" },
  { name: "Patricia", city: "Dallas, TX", action: "started a free policy review" },
];

export function LiveActivity() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const first = setTimeout(() => setShow(true), 3500);
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((v) => (v + 1) % activity.length);
        setShow(true);
      }, 400);
    }, 7000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  const a = activity[i];

  return (
    <div
      className={`fixed left-4 bottom-24 md:bottom-6 z-40 max-w-xs rounded-xl bg-white shadow-2xl border border-line p-3.5 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 flex-none place-items-center rounded-full text-white"
             style={{ background: "var(--navy-deep)" }}>
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <div className="text-[0.86rem] font-semibold" style={{ color: "var(--navy-deep)" }}>
            {a.name} from {a.city}
          </div>
          <div className="text-[0.8rem] text-ink-soft leading-snug">{a.action}</div>
          <div className="mt-0.5 text-[0.68rem] text-ink-faint">just now</div>
        </div>
      </div>
    </div>
  );
}
