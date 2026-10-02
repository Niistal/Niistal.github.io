import { enterprisePoints } from "@/data/experience";
import { Reveal } from "../ui/Reveal";
import { Badge, SectionHeading } from "../ui/Section";

export function Enterprise() {
  return (
    <section id="enterprise" className="border-y border-zinc-200 bg-zinc-50/60 dark:border-white/[0.08] dark:bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Enterprise software"
          title="ERP & business systems."
          description="What I do at GIP 2019, in general terms. Employer details stay private — this is the stack and the kind of problems."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-white/[0.04]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Core stack</h3>
              <p className="mt-3 font-mono text-sm leading-loose text-zinc-700 dark:text-zinc-300">
                C# · VB.NET · .NET · WinForms<br />
                SQL Server · T-SQL · Stored Procedures<br />
                ODBC · APIs · Enterprise Integrations
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-white/[0.04]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">Concepts</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {enterprisePoints.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
