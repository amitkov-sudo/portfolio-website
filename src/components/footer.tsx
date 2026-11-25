import { SITE, SOCIALS } from "@/content/portfolio";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white">{SITE.name}</p>
          <p className="text-sm text-white/60">
            Custom web experiences. AI-integrated intelligent business workflows.
          </p>
          <p className="text-xs text-white/40">
            Designed, developed & AI-integrated by{" "}
            <a
              href="https://amitkov.dev"
              className="underline underline-offset-4 hover:text-white"
            >
              Alex Mitkov
            </a>
            . © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/0 px-3 py-2 text-sm text-white/70 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors"
            >
              <s.icon className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

