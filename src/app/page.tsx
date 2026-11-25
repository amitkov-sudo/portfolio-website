import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { Research } from "@/components/sections/research";
import { ClientWork } from "@/components/sections/client-work";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--color-white)_8%,transparent),rgba(0,0,0,0)_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <Hero />
      <Research />
      <ClientWork />
      <Services />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
