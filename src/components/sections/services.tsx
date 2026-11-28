"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

import { SERVICES, type Service, type ServiceProduct } from "@/content/portfolio";
import { AstroWordmark } from "@/components/astro-wordmark";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const LABEL = "text-xs font-semibold uppercase tracking-[0.22em] text-white/55";

function CardTop({ idx, icon: Icon }: { idx: number; icon: Service["icon"] }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="bg-gradient-to-r from-indigo-200 to-sky-200 bg-clip-text font-mono text-xs font-semibold text-transparent">
        {String(idx + 1).padStart(2, "0")}
      </span>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/25 via-sky-400/15 to-emerald-400/20 ring-1 ring-white/10 transition-transform duration-300 group-hover/card:-translate-y-0.5 group-hover/card:rotate-6 group-hover/card:scale-110">
        <Icon className="h-5 w-5 text-white" />
      </span>
    </div>
  );
}

/* Keeps a hyphenated term such as AES-256-GCM on one line. */
function Prose({ children }: { children: string }) {
  return children.split(" ").map((word, i) => (
    <React.Fragment key={i}>
      {i > 0 ? " " : null}
      {word.includes("-") ? <span className="whitespace-nowrap">{word}</span> : word}
    </React.Fragment>
  ));
}

/* A product for sale takes the full row. The wordmark, the pitch, the button
   and the price sit beside the screenshots, the reasons to buy follow, and
   the specs wait behind a fold for a reader who checks. */
function ProductCard({
  service,
  product,
  idx,
}: {
  service: Service;
  product: ServiceProduct;
  idx: number;
}) {
  const half = Math.ceil(product.specs.length / 2);
  const columns = [product.specs.slice(0, half), product.specs.slice(half)];

  return (
    <Card id={product.anchor} className="scroll-mt-24 p-6 ring-indigo-400/30 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.24),rgba(0,0,0,0)_65%)] blur-2xl"
      />
      <CardTop idx={idx} icon={service.icon} />

      <div className="mt-2 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h3 className="text-[34px] text-white sm:text-[42px]">
            <AstroWordmark />
          </h3>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-sky-400/10 px-2.5 py-0.5 text-xs text-sky-200 ring-1 ring-sky-300/20">
              {product.version}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {product.status}
            </span>
          </div>
          <p className="mt-5 bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
            {product.tagline}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            <Prose>{service.description}</Prose>
          </p>
          <div className="mt-6 flex flex-col gap-x-3 gap-y-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={product.cta.href}
              className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-5 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {product.cta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <p className="sm:ml-3">
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                {product.price.label}
              </span>
              <span className="mt-1 block text-sm font-semibold text-white">
                {product.price.value}
              </span>
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-2 gap-3 self-start md:self-center lg:col-span-2">
          {product.shots.map((shot) => (
            <figure key={shot.caption}>
              <div className="aspect-[15/26] overflow-hidden rounded-xl bg-white ring-1 ring-white/15">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  unoptimized
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-xs text-white/55">{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {product.benefits.map((b) => (
          <li key={b.title} className="rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
            <b.icon className="h-5 w-5 text-emerald-300" />
            <p className="mt-3 text-sm font-semibold text-white">{b.title}</p>
            <p className="mt-1 text-sm leading-6 text-white/70">
              <Prose>{b.text}</Prose>
            </p>
          </li>
        ))}
      </ul>

      <details className="group mt-6 border-t border-white/10 pt-5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white/80 hover:text-white [&::-webkit-details-marker]:hidden">
          Technical details
          <ChevronDown className="h-4 w-4 shrink-0 text-white/50 transition-transform group-open:rotate-180" />
        </summary>

        <div className="mt-5 grid gap-x-10 xl:grid-cols-2">
          {columns.map((rows) => (
            <dl key={rows[0]?.label}>
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-t border-white/10 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4"
                >
                  <dt className="text-sm font-medium text-white">{row.label}</dt>
                  <dd className="text-sm leading-6 text-white/70">
                    <Prose>{row.value}</Prose>
                  </dd>
                </div>
              ))}
            </dl>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-white/[0.03] p-4 ring-1 ring-white/10">
          <p className={LABEL}>Good to know</p>
          <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm text-white/75 xl:grid-cols-3">
            {product.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/60" />
                <span className="leading-7">
                  <Prose>{note}</Prose>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </Card>
  );
}

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
              className={s.product ? "sm:col-span-2" : undefined}
            >
              {s.product ? (
                <ProductCard service={s} product={s.product} idx={idx} />
              ) : (
                <Card className="h-full p-6">
                  <CardTop idx={idx} icon={s.icon} />
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
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
