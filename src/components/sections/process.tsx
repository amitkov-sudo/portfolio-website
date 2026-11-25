import { PROCESS } from "@/content/portfolio";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From first call to launch."
          description="Alex Mitkov stays the single point of contact through all four steps."
        />

        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, idx) => (
            <li key={step.title} className="bg-background p-6">
              <span className="font-mono text-xs text-white/45">
                Step {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
