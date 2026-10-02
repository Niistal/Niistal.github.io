import { education, journey, principles } from "@/data/experience";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Background"
            title="How I got here."
            description="From networks and systems to AI agents."
          />
          <ol className="mt-8 space-y-0 border-l border-zinc-200 pl-0 dark:border-white/10">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 0.04}>
                <li className="relative pb-7 pl-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-[-5px] h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#8B1E4D] to-[#3B82F6]"
                  />
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{j.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-[#A7A7B5]">{j.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <div>
          <SectionHeading eyebrow="Education" title="What I studied, in order." />
          <ul className="mt-8 space-y-3">
            {education.map((e) => (
              <Reveal key={e.title}>
                <li className="card-lift rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/[0.08] dark:bg-white/[0.04]">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">{e.title}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{e.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-zinc-500">
            Titles get you interviews. Shipped software gets you hired.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Principles" title="How I build software." />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <Reveal key={p.title}>
              <div className="card-lift rounded-xl border border-zinc-200 bg-white px-4 py-3.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{p.title}</p>
                <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
