"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/profile";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/Section";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  bio: string | null;
};

export function GitHubSection() {
  const [data, setData] = useState<GhUser | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((r) => {
        if (!r.ok) throw new Error("github api");
        return r.json();
      })
      .then((j) => {
        if (!cancelled) setData(j);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow="GitHub"
        title="Public activity, verified only."
        description="Real public data via the GitHub API when available. If the API is unreachable, no stats are invented — just the profile link."
      />
      <Reveal className="mt-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8 dark:border-white/[0.08] dark:bg-white/[0.04]">
          <div>
            <p className="font-mono text-sm text-zinc-500">github.com/{siteConfig.githubUsername}</p>
            {data && !failed ? (
              <div className="mt-3 flex flex-wrap gap-5">
                <Stat label="Public repos" value={String(data.public_repos)} />
                <Stat label="Followers" value={String(data.followers)} />
                <Stat label="Following" value={String(data.following)} />
              </div>
            ) : (
              <p className="mt-3 max-w-md text-sm text-zinc-600 dark:text-[#A7A7B5]">
                {failed
                  ? "GitHub API unreachable right now — stats hidden rather than invented."
                  : "Loading public GitHub data…"}
              </p>
            )}
            {data?.bio && <p className="mt-3 max-w-md text-sm text-zinc-600 dark:text-zinc-400">{data.bio}</p>}
          </div>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            View GitHub Profile
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">{label}</p>
    </div>
  );
}
