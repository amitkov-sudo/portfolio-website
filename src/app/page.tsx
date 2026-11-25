import { About } from "@/components/sections/about";
import { ClientWork } from "@/components/sections/client-work";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { NeuralField } from "@/components/neural-field";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="float-a absolute left-[-10%] top-[12%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_65%)] blur-3xl" />
        <div className="float-b absolute right-[-12%] top-[30%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14),transparent_65%)] blur-3xl" />
        <div className="float-a absolute left-[-8%] top-[52%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12),transparent_65%)] blur-3xl" />
        <div className="float-b absolute right-[-10%] top-[72%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] blur-3xl" />
        <div className="float-a absolute left-[20%] top-[90%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--color-white)_8%,transparent)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>
      <Hero />
      <Services />
      <ClientWork />
      <Process />
      <Pricing />
      <About />
      <NeuralField />
      <Research />
      <Projects />
      <Skills />
      <Experience />
      <Faq />
      <Contact />
    </main>
  );
}
