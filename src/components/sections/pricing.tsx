import { PRICING_FACTORS, SITE } from "@/content/portfolio";
import { CountUp } from "@/components/count-up";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Pricing" title="Project-based pricing." />

        <Card className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              Typical project
            </p>
            <p
              className="mt-3 bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-4xl font-semibold tracking-tight text-transparent tabular-nums"
            >
              <span className="sr-only">{SITE.priceRange}</span>
              <span aria-hidden="true">
                $<CountUp to={1500} /> to $<CountUp to={5000} />+
              </span>
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {SITE.pricing}
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs font-medium text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden="true" />
              {SITE.serviceArea}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
            >
              Request a quote
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              What sets the price
            </p>
            <ul className="mt-4 divide-y divide-white/10 text-sm text-white/80">
              {PRICING_FACTORS.map((f) => (
                <li key={f} className="flex items-center gap-3 py-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </section>
  );
}
