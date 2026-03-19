"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Maximize2 } from "lucide-react";

import { PROJECTS, SOCIALS, type Project } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Modal } from "@/components/ui/modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

function ProjectModal({ project }: { project: Project }) {
  return (
    <div className="space-y-5">
      <p className="text-sm leading-7 text-white/75">{project.description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {project.stack.map((s) => (
          <Badge
            key={s}
            className="bg-white/[0.04] text-white/75 ring-white/10 px-2.5 py-0.5"
          >
            {s}
          </Badge>
        ))}
      </div>

      <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-4">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
          Impact
        </p>
        <p className="mt-2 text-sm text-white/80 leading-7">{project.impact}</p>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
          Details
        </p>
        <ul className="mt-3 space-y-2 text-sm text-white/75">
          {project.details.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
              <span className="leading-7">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Projects() {
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);
  const githubHref =
    SOCIALS.find((s) => s.label === "GitHub")?.href ?? "https://github.com/";
  const activeProject = React.useMemo(
    () => PROJECTS.find((p) => p.slug === openSlug) ?? null,
    [openSlug],
  );

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Production-minded builds with clear signals."
          description="A selection of work focused on reliability, clarity, and measurable outcomes. More projects are available on GitHub."
        />
        <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-white"
          >
            Browse more on GitHub
          </a>
          .
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 220, damping: 26, delay: idx * 0.03 }}
            >
              <Card className="group h-full p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {p.description}
                    </p>
                  </div>
                  <button
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    onClick={() => setOpenSlug(p.slug)}
                    aria-label={`Open details for ${p.title}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      className="bg-white/[0.04] text-white/75 ring-white/10 px-2.5 py-0.5"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-4">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                    Impact
                  </p>
                  <p className="mt-2 text-sm text-white/80 leading-7">
                    {p.impact}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {p.links.github ? (
                    <a
                      href={p.links.github.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
                        "bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/8 hover:text-white transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                      )}
                    >
                      <Github className="h-4 w-4" />
                      {p.links.github.label}
                    </a>
                  ) : null}

                  {p.links.demo ? (
                    <a
                      href={p.links.demo.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
                        "bg-white/0 text-white/70 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                      )}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {p.links.demo.label}
                    </a>
                  ) : null}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      <Modal
        open={Boolean(activeProject)}
        onOpenChange={(o) => setOpenSlug(o ? openSlug : null)}
        title={activeProject?.title}
      >
        {activeProject ? <ProjectModal project={activeProject} /> : null}
      </Modal>
    </section>
  );
}

