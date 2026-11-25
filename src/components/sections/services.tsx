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
          description="Websites and AI workflows for small businesses. Pick one service or combine several in one build."
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
                  <span className="font-mono text-xs text-white/45">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <s.icon className="h-5 w-5 text-white/60" />
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
