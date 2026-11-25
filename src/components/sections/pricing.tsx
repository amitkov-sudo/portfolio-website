import { PRICING_FACTORS, SITE } from "@/content/portfolio";
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
            <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
              {SITE.priceRange}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {SITE.pricing} Alex Mitkov sends each quote in writing before work starts.
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
                <li key={f} className="py-3">
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
