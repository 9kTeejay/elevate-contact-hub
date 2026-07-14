import { useState } from "react";
import { Plus } from "lucide-react";

export type QA = { q: string; a: string };

export function FAQ({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 py-6 text-left text-[1.02rem] font-semibold text-ink"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <Plus className={`h-5 w-5 flex-none transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
            </button>
            <div
              className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0">
                <p className="pb-6 pr-10 max-w-[640px] text-[0.95rem] text-ink-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
