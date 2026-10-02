"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/profile";

export function Hero() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))] dark:bg-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#6D163A]/25 via-[#6C3BFF]/20 to-[#2563EB]/20 blur-[120px] dark:from-[#6D163A]/40 dark:via-[#6C3BFF]/25 dark:to-[#2563EB]/25" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
            {siteConfig.location} · {siteConfig.role}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl dark:text-[#F7F7FA]">
            Iker <span className="bg-gradient-to-r from-[#8B1E4D] via-[#7C4DFF] to-[#3B82F6] bg-clip-text text-transparent">/ Niistal</span>
          </h1>
          <p className="mt-5 text-xl font-medium text-zinc-800 sm:text-2xl dark:text-zinc-100">
            {siteConfig.headline}
          </p>
          <p className="mt-2 text-base font-medium text-fuchsia-600 sm:text-lg dark:text-fuchsia-300/90">
            {siteConfig.subheadline}
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-[#A7A7B5]">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-gradient-to-r from-[#6D163A] via-[#6C3BFF] to-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500"
            >
              View Projects
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:border-zinc-400 dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/25"
            >
              GitHub
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-transparent px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            >
              Contact →
            </Link>
            <a
              href={siteConfig.cvUrl}
              download
              className="rounded-full border border-zinc-300 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/30"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-full max-w-[300px]"
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#6D163A]/40 via-[#6C3BFF]/30 to-[#2563EB]/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/20 bg-gradient-to-br from-[#5B1028] via-[#2a1440] to-[#0f1e4d] p-1.5 shadow-2xl">
              <div className="relative aspect-square overflow-hidden rounded-[1.4rem] bg-[#120A10]">
                {imgOk ? (
                  <Image
                    src={siteConfig.avatar}
                    alt="Photo of Iker Nistal Fernandez"
                    fill
                    sizes="300px"
                    className="object-cover"
                    priority
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#5B1028] via-[#3b1a5e] to-[#1e3a8a] text-white">
                    <span className="text-5xl font-bold tracking-tight">N</span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">Niistal.dev</span>
                    <span className="px-4 text-center text-[11px] text-white/50">Place your avatar at /public/images/avatar.webp</span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-zinc-200 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                GIP 2019 S.L. — Enterprise software &amp; ERP
              </p>
              <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">Elgoibar, Gipuzkoa</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
