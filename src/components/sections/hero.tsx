"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { SITE, SOCIALS } from "@/content/portfolio";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.20),rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),rgba(0,0,0,0)_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_70%,rgba(0,0,0,1)_100%)]" />
      </div>

      <Container className="relative py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-white/75 ring-1 ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
            {SITE.locationLine}
          </p>

          <p className="mt-6 text-sm font-medium tracking-wide text-white/60">
            {SITE.name} · {SITE.roleLine}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">
              Custom web experiences.
            </span>
            <span className="block bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
              <span className="whitespace-nowrap">AI-integrated</span> intelligent business workflows.
            </span>
          </h1>
          <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
            {SITE.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollToId("contact")}
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white text-black px-5 text-sm font-medium",
                "hover:bg-white/90 active:bg-white/85 transition-colors",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_30px_-12px_rgba(0,0,0,0.65)]",
              )}
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white/5 px-5 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/10 transition-colors"
            >
              See services
            </button>
            <ButtonLink href={SITE.resumePath} external variant="ghost">
              Resume <Download className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/0 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

