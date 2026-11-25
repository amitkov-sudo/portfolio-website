"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { SITE, TRUST_POINTS } from "@/content/portfolio";
import { Container } from "@/components/ui/container";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${e.clientX - r.left}px`);
    el.style.setProperty("--hy", `${e.clientY - r.top}px`);
  }

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onPointerMove}
      className="group/hero relative overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100 bg-[radial-gradient(520px_circle_at_var(--hx,50%)_var(--hy,30%),rgba(99,102,241,0.14),rgba(56,189,248,0.06)_45%,transparent_70%)]" />
        <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),rgba(0,0,0,0)_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-background/75 via-70% to-background to-100%" />
      </div>

      <Container className="relative py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 28 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
            {SITE.name} · {SITE.roleLine} · {SITE.locationLine}
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent">
              {SITE.headline}
            </span>
            <span className="hue-drift block bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
              <span className="whitespace-nowrap">AI-integrated</span> intelligent business
              workflows.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            {SITE.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
            >
              Request a quote <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white/5 px-5 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/10 transition-colors"
            >
              View services
            </button>
          </div>
        </motion.div>

        <ul className="mt-14 grid gap-3 border-t border-white/10 pt-6 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((t) => (
            <li key={t} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              {t}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
