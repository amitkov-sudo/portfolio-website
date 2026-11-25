"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SERVICES, SITE } from "@/content/portfolio";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Building Intelligent Solutions to Real-World Problems"
          description="Websites and AI workflows for small businesses. Pick one piece or the whole stack: I handle design, development, launch and the AI behind the scenes."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 220, damping: 26, delay: idx * 0.05 }}
            >
              <Card className="group h-full p-6 transition-colors hover:bg-white/[0.06]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-emerald-400/20 ring-1 ring-white/10 transition-transform group-hover:scale-105">
                    <s.icon className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-300/90" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="mt-4 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Pricing
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-white">
              $1,500 to $4,000
            </p>
            <p className="mt-1 text-sm text-white/70">{SITE.pricing}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
          >
            Start a project
          </a>
        </Card>
      </Container>
    </section>
  );
}
