export function PipelineDiagram() {
  const stages = [
    { label: "Search", sub: "Google / Maps" },
    { label: "Visit", sub: "Fast site + GBP" },
    { label: "Capture", sub: "Form / Chat / Call" },
    { label: "Nurture", sub: "SMS + Email" },
    { label: "Book", sub: "Automated calendar" },
    { label: "Retain", sub: "Reviews + Repeat" },
  ];
  return (
    <div className="rounded-[22px] border border-line bg-gradient-to-b from-white to-[color:var(--surface)] p-2" style={{ boxShadow: "var(--shadow-elev)" }}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 mono text-[0.74rem] text-ink-faint">northbound.pipeline — live</span>
        <span className="ml-auto mono text-[0.74rem] text-accent-1 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-1 pulse-dot" /> running
        </span>
      </div>
      <div className="overflow-x-auto px-4 py-9">
        <svg viewBox="0 0 1080 220" className="w-full min-w-[720px] h-auto" role="img" aria-label="Growth pipeline diagram">
          <defs>
            <linearGradient id="pipe" x1="0" x2="1">
              <stop offset="0" stopColor="var(--accent-1)" />
              <stop offset="0.55" stopColor="var(--accent-2)" />
              <stop offset="1" stopColor="var(--accent-3)" />
            </linearGradient>
          </defs>
          {/* connector */}
          <path d="M60 110 H1020" stroke="var(--line)" strokeWidth="2" strokeLinecap="round" />
          <path d="M60 110 H1020" stroke="url(#pipe)" strokeWidth="2" strokeLinecap="round" className="flow-line" />

          {stages.map((s, i) => {
            const x = 60 + i * (960 / (stages.length - 1));
            return (
              <g key={s.label} transform={`translate(${x} 110)`}>
                <circle r="26" fill="white" stroke="url(#pipe)" strokeWidth="2" />
                <circle r="6" fill="url(#pipe)" />
                <text y="-46" textAnchor="middle" className="mono" style={{ fontSize: 12, fill: "var(--ink)", fontWeight: 600 }}>
                  {String(i + 1).padStart(2, "0")}
                </text>
                <text y="62" textAnchor="middle" style={{ fontSize: 14, fill: "var(--ink)", fontWeight: 700 }}>{s.label}</text>
                <text y="82" textAnchor="middle" style={{ fontSize: 11, fill: "var(--ink-soft)" }}>{s.sub}</text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
