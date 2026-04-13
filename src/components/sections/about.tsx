import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Research rigor, engineering outcomes."
          description="A quick overview of how I work and what I optimize for."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm leading-7 text-white/75">
              Working at the intersection of software engineering, machine learning, AI,
              and data engineering and my main focus is turning complex ideas into practical,
              production-ready solutions. My strength is taking research-grade ideas and turning 
              them into production-minded systems: clear interfaces, measurable outcomes, 
              and reliable code.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              I care about correctness and reliability but I’m equally focused on impact
              — shipping useful features, improving decision quality, and building systems
              that scale.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              I’m most effective when the work benefits from strong systems
              thinking; reliable data flows, clean service boundaries, and ML
              workflows that bank on reproducibility.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">
              What I’m going for
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <span className="text-white">Production mindset</span> — build
                systems that can be deployed, monitored, and iterated on.
              </li>
              <li>
                <span className="text-white">Clarity</span> — readable code,
                predictable APIs, and documentation that scales.
              </li>
              <li>
                <span className="text-white">Measurable outcomes</span> — metrics,
                evaluation, and sane baselines.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}

