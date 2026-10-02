import { skillGroups, specializations } from "@/data/skills";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="Stack"
        title="Tools I actually use."
        description="Grouped by area. Everything here has shipped something."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {specializations.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.07}>
            <article className="card-lift h-full rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/[0.08] dark:bg-white/[0.04]">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">{s.description}</p>
              <ul className="mt-3 space-y-1.5">
                {s.points.map((pt) => (
                  <li key={pt} className="text-sm text-zinc-700 dark:text-zinc-300">— {pt}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.03]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">{g.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{g.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
