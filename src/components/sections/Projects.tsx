import { projects } from "@/data/projects";
import { Reveal } from "../ui/Reveal";
import { Badge, SectionHeading } from "../ui/Section";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected work"
        description="Public projects only. Private enterprise work is described conceptually in the Enterprise section — no proprietary code or internal details."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/10 dark:border-white/[0.08] dark:bg-white/[0.04] dark:hover:border-fuchsia-500/20 dark:hover:shadow-black/40">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ background: "radial-gradient(600px circle at 20% 0%, rgba(217,70,239,0.08), transparent 60%), radial-gradient(500px circle at 90% 100%, rgba(59,130,246,0.08), transparent 60%)" }}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-600 dark:text-fuchsia-400">{p.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-white">{p.name}</h3>
                  </div>
                  <span className="rounded-full border border-zinc-200 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-[#A7A7B5]">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.badges.map((b) => (
                    <Badge key={b}>{b}</Badge>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[11px] text-zinc-500 dark:text-zinc-500">{p.stack.join(" · ")}</p>
                <div className="mt-5 flex gap-2">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${p.name} on GitHub`}
                      className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    >
                      View project
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold dark:border-white/15">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
