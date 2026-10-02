import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

const bullets = [
  {
    title: "Day job — ERP & business apps",
    text: "C#, VB.NET, WinForms and SQL Server at GIP 2019: maintenance, business rules, integrations and legacy modernization.",
  },
  {
    title: "After hours",
    text: "Developer tooling, cybersecurity, local-first AI and agents, Big Data, mobile apps and automation.",
  },
  {
    title: "How I work",
    text: "Small diffs, tested contracts, secure defaults — and boring technology wherever it counts.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="About"
        title="Enterprise software is my day job."
        description="I work on real business applications: desktop apps, databases, APIs and integrations on the Microsoft stack. Outside work I go deeper into security, automation, data and AI."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {bullets.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04]">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-[#A7A7B5]">{b.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
