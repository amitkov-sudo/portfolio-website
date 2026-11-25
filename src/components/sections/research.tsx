"use client";

import { motion } from "framer-motion";

import { RESEARCH } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Research() {
  return (
    <section id="research" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Research"
          title="How training shapes model behavior."
          description="I study reinforcement learning, post-training and AI safety, and I bring a background in quantum and computational chemistry research."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {RESEARCH.map((r, idx) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 220, damping: 26, delay: idx * 0.05 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/25 to-indigo-500/20 ring-1 ring-white/10">
                    <r.icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                      {r.org} · {r.timeframe}
                    </p>
                    <h3 className="mt-1 text-base font-semibold tracking-tight text-white">
                      {r.title}
                    </h3>
                    {r.status ? (
                      <span className="mt-2 inline-flex rounded-full bg-sky-400/10 px-2.5 py-0.5 text-xs text-sky-200 ring-1 ring-sky-300/20">
                        {r.status}
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/70">{r.summary}</p>

                {r.points.length ? (
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/60" />
                        <span className="leading-7">{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <Badge
                      key={t}
                      className="bg-white/[0.04] px-2.5 py-0.5 text-white/75 ring-white/10"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
