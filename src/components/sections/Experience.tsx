import { experience } from "@/data/experience";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked."
        description="Taken from my CV: enterprise software, commercial apps and an Erasmus+ stint in Ireland."
      />
      <ol className="mt-10 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${i}`} delay={i * 0.06}>
            <article className="card-lift rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 dark:border-white/[0.08] dark:bg-white/[0.04]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400">
                    {job.company} <span className="font-normal text-zinc-500">· {job.location}</span>
                  </p>
                </div>
                <span
                  className={
                    job.current
                      ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                      : "rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400"
                  }
                >
                  {job.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  )}
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-[#A7A7B5]">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
