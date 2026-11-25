"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SERVICES } from "@/content/portfolio";
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
              <Card className="h-full p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="bg-gradient-to-r from-indigo-200 to-sky-200 bg-clip-text font-mono text-xs font-semibold text-transparent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 via-sky-400/15 to-emerald-400/20 ring-1 ring-white/10 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:rotate-6 group-hover/card:scale-110">
                    <s.icon className="h-5 w-5 text-white" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{s.description}</p>
                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-white/75">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-300" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
