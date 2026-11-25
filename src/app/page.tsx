import { About } from "@/components/sections/about";
import { ClientWork } from "@/components/sections/client-work";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <Hero />
      <Services />
      <ClientWork />
      <Process />
      <Pricing />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Experience />
      <Faq />
      <Contact />
    </main>
  );
}
