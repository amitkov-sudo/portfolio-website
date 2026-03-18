import { SKILLS } from "@/content/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit tuned for data + ML systems."
          description="Languages, frameworks, and tools I use to ship and operate systems."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g) => (
            <Card key={g.label} className="p-6">
              <h3 className="text-sm font-semibold text-white">{g.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

