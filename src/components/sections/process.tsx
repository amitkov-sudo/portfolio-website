"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { PROCESS } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  const ref = React.useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From first call to launch."
        />

        <div className="relative">
          <div className="mb-4 h-1 overflow-hidden rounded-full bg-white/10">
            <motion.div
              style={{ scaleX: progress }}
              className="h-full origin-left rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"
            />
          </div>

          <ol
            ref={ref}
            className="grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PROCESS.map((step, idx) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 220, damping: 26, delay: idx * 0.08 }}
                className="group/step bg-background p-6 transition-colors hover:bg-white/[0.04]"
              >
                <span className="bg-gradient-to-r from-indigo-200 to-sky-200 bg-clip-text font-mono text-xs font-semibold text-transparent">
                  Step {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
