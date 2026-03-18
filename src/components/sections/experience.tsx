import { TIMELINE } from "@/content/portfolio";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience / Education"
          title="A timeline built for credibility."
          description="A quick view of the work, study, and focus areas that shaped my engineering practice."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-6" />
          <div className="space-y-4">
            {TIMELINE.map((item) => (
              <div key={`${item.title}-${item.timeframe}`} className="relative">
                <div className="absolute left-[7px] top-6 h-6 w-6 rounded-full bg-black ring-1 ring-white/15 md:left-[15px]" />
                <div className="absolute left-[11px] top-10 h-2 w-2 rounded-full bg-emerald-400/80 md:left-[19px]" />

                <Card className="ml-12 p-6 md:ml-16">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-white">
                        <item.icon className="h-4 w-4 text-white/70" />
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-white/75">
                        <span className="text-white">{item.org}</span>
                        {item.location ? (
                          <span className="text-white/55"> • {item.location}</span>
                        ) : null}
                      </p>
                    </div>
                    <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                      {item.timeframe}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                        <span className="leading-7">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

