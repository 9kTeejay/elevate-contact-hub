import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-content";

export function StickyCallBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={CONTACT.phoneHref}
          className="flex w-full items-center justify-center gap-2 py-4 text-white font-bold text-[1rem] shadow-2xl"
          style={{ background: "var(--navy-deep)" }}
        >
          <Phone className="h-5 w-5" /> CALL {CONTACT.phone} — FREE
        </a>
      </div>

      {/* Desktop floating pill */}
      <a
        href={CONTACT.phoneHref}
        className={`fixed bottom-6 right-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-bold shadow-2xl transition-all ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ background: "var(--navy-deep)" }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <Phone className="h-4 w-4" /> {CONTACT.phone}
      </a>
    </>
  );
}
