import { siteConfig } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:px-8 dark:text-zinc-500">
        <p>Built by Iker · Niistal</p>
        <p className="text-xs">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
            github.com/Niistal
          </a>{" "}
          · {siteConfig.url.replace("https://", "")}
        </p>
      </div>
    </footer>
  );
}
