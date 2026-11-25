"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

import { CLIENT_WORK } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ClientWork() {
  return (
    <section id="work" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Client work"
          title="Recent builds."
        />

        <div className="space-y-4">
          {CLIENT_WORK.map((w) => (
            <motion.div
              key={w.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              <Card className="relative overflow-hidden p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.18),rgba(0,0,0,0)_65%)] blur-2xl" />
                <div className="relative grid gap-6 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-200/80">
                        {w.client}
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
                        <Sparkles className="h-3 w-3" />
                        {w.status}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                      {w.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{w.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {w.stack.map((s) => (
                        <Badge
                          key={s}
                          className="bg-white/[0.04] px-2.5 py-0.5 text-white/75 ring-white/10"
                        >
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
                    {w.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-xl bg-white/[0.03] p-4 text-sm leading-6 text-white/80 ring-1 ring-white/10"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {w.aiTool ? (
                  <div className="relative mt-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-white/[0.02] to-emerald-400/10 p-5 ring-1 ring-white/10 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                        <Bot className="h-5 w-5 text-white" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                          AI-powered tool
                        </p>
                        <h4 className="text-base font-semibold tracking-tight text-white">
                          {w.aiTool.name}
                        </h4>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-white/75">{w.aiTool.description}</p>
                    <ul className="mt-4 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
                      {w.aiTool.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" />
                          <span className="leading-7">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
