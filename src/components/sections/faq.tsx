import { ChevronDown } from "lucide-react";

import { FAQS } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Common questions." />

        <div className="divide-y divide-white/10 rounded-2xl ring-1 ring-white/10">
          {FAQS.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-white/50 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
