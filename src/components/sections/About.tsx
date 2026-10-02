import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

const bullets = [
  {
    title: "Enterprise first",
    text: "I specialize in Microsoft-ecosystem business software: WinForms, C#/VB.NET, SQL Server, T-SQL, stored procedures, ODBC, APIs and enterprise integrations.",
  },
  {
    title: "Beyond the ERP",
    text: "Personal R&D in developer tooling, cybersecurity, AI, autonomous agents, Big Data, mobile apps, automation and infrastructure.",
  },
  {
    title: "How I build",
    text: "Secure by design, local-first when it makes sense, observable, maintainable, scalable and automation-first.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="About me"
        title="I build real software for real systems."
        description="Full Stack developer specialized in enterprise software and the Microsoft ecosystem. I work with real applications, databases, APIs, architecture, automation and software modernization."
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
