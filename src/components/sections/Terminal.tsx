"use client";
/* eslint-disable react-hooks/set-state-in-effect -- progressive terminal reveal sets lines on viewport entry */

import { useEffect, useRef, useState } from "react";
import { Reveal } from "../ui/Reveal";

const LINES = [
  { cmd: "$ whoami", out: "Iker / Niistal" },
  { cmd: "$ focus", out: "software-engineering · cybersecurity · devsecops · data · ai" },
  { cmd: "$ current-project", out: "TerminalAI" },
  { cmd: "$ philosophy", out: "build -> test -> verify -> improve" },
];

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [text, setText] = useState<typeof LINES>([]);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (reduce) {
      setText(LINES);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setText(LINES.slice(0, i));
      if (i >= LINES.length) clearInterval(id);
    }, 450);
    return () => clearInterval(id);
  }, [started, reduce]);

  return (
    <section aria-label="Terminal" className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div
          ref={ref}
          className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-xl dark:border-white/10"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-zinc-500">niistal — zsh</span>
          </div>
          <div className="min-h-[180px] space-y-3 p-5 font-mono text-[13px] leading-relaxed">
            {text.length === 0 && <p className="text-zinc-600">$</p>}
            {text.map((l) => (
              <div key={l.cmd}>
                <p className="text-zinc-100">{l.cmd}</p>
                <p className="text-fuchsia-400/90">{l.out}</p>
              </div>
            ))}
            {started && text.length === LINES.length && (
              <p className="text-zinc-600">$ <span className="animate-pulse">▍</span></p>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
