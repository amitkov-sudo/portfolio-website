"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
      className={cn("mb-10 max-w-2xl", className)}
    >
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-200">
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="h-px w-8 origin-left bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200"
        />
        {eyebrow}
      </p>
      <h2 className="mt-3 bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
      ) : null}
    </motion.div>
  );
}
