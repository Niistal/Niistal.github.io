import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-fuchsia-500 dark:text-fuchsia-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-[#A7A7B5]">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100/70 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-300">
      {children}
    </span>
  );
}
