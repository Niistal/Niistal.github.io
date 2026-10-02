import { siteConfig, socials } from "@/data/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

export function Contact() {
  const hasLinkedin = Boolean(socials.linkedin);
  const hasEmail = Boolean(socials.email);

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 text-center sm:p-14 dark:border-white/10 dark:bg-white/[0.03]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6D163A]/30 via-[#6C3BFF]/25 to-[#2563EB]/25 blur-[100px]"
          />
          <div className="relative">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title="Interested in working together?"
              description="Software, security, AI or engineering — my inbox is open."
            />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                GitHub
              </a>
              {hasLinkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold dark:border-white/15"
                >
                  LinkedIn
                </a>
              )}
              {hasEmail && (
                <a
                  href={`mailto:${socials.email}`}
                  className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold dark:border-white/15"
                >
                  Email
                </a>
              )}
              <a
                href={siteConfig.cvUrl}
                download
                className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold dark:border-white/15"
              >
                Download CV
              </a>
            </div>
            <p className="mt-6 font-mono text-xs text-zinc-500">
              {siteConfig.url.replace("https://", "")} · github.com/{siteConfig.githubUsername}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
