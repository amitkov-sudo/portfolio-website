"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

import { SITE, SOCIALS } from "@/content/portfolio";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

function scrollToProjects() {
  const el = document.getElementById("projects");
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", "#projects");
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

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {SITE.headline}
          </h1>
          <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
            {SITE.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={scrollToProjects}
              className={cn(
                "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white text-black px-5 text-sm font-medium",
                "hover:bg-white/90 active:bg-white/85 transition-colors",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_30px_-12px_rgba(0,0,0,0.65)]",
              )}
            >
              View Projects <ArrowDownRight className="h-4 w-4" />
            </button>
            <ButtonLink href={SITE.resumePath} external variant="secondary">
              Download Resume <Download className="h-4 w-4" />
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

