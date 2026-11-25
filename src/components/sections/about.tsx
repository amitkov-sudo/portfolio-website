import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A researcher who ships."
          description="My research and my client work feed each other."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm leading-7 text-white/75">
              I&apos;m an AI researcher and engineer in Las Vegas. At Algoverse I
              study how reinforcement learning changes what models do, with a focus
              on safety. Before AI, I did graduate research in quantum computing and
              computational chemistry at UC Merced, and I&apos;m now studying for an
              MCS in AI at Monash.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              I also build websites and AI workflows for small businesses. They take
              bookings, answer common questions and keep running with little upkeep.
              If you hire me, you talk to me from the first call to launch day.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">How I work with clients</h3>
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
