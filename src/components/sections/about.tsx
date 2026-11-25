import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { SITE } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Founder"
          title="Alex Mitkov, founder and AI researcher."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <p className="text-sm leading-7 text-white/75">
              Completed graduate research in quantum computing and computational
              chemistry at UC Merced. Studies for an MCS in AI at Monash and
              researches self-correction in language models.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Builds websites and AI workflows for small businesses, from online
              booking to assistants that answer common questions. Works with each
              client from the first call to launch day.
            </p>
            <a
              href={SITE.resumePath}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              Download resume
            </a>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">Working together</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li>
                <span className="text-white">Plain pricing.</span> A written
                scope comes before any code.
              </li>
              <li>
                <span className="text-white">Low running costs.</span> Hosting
                and tools match the budget.
              </li>
              <li>
                <span className="text-white">Owner control.</span> Owners edit
                content without a developer.
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
