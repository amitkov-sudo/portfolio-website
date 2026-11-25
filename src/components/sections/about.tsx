import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="An engineer who builds for owners."
          description="I bring production engineering habits to small-business sites."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm leading-7 text-white/75">
              I&apos;m a software and AI engineer based in Las Vegas. My background
              covers backend services, data pipelines and machine learning, and I
              studied computational chemistry before moving into AI.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              I use that experience to build websites that do real work for a
              business: they take bookings, answer common questions and keep
              running with little upkeep. You talk to me from the first call to
              launch day, and I stay around after it.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">How I work</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <span className="text-white">Plain pricing.</span> You see a
                clear scope before I write any code.
              </li>
              <li>
                <span className="text-white">Low running costs.</span> I pick
                hosting and tools that fit your budget.
              </li>
              <li>
                <span className="text-white">You stay in control.</span> You
                can edit your content without calling me.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
