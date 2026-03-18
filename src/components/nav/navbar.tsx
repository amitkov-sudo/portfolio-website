"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { SITE, SOCIALS } from "@/content/portfolio";
import { useActiveSection } from "@/components/active-section";
import { cn } from "@/lib/cn";
import { NAV_ITEMS, type SectionId } from "@/lib/sections";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Navbar() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/60 border-b border-white/10">
        <Container className="pointer-events-auto flex h-16 items-center justify-between">
          <button
            className="group inline-flex items-center gap-2 rounded-lg px-2 py-1 -ml-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            onClick={() => {
              setMobileOpen(false);
              setActiveSection("top");
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", "#top");
            }}
            aria-label="Go to top"
          >
            <span className="relative inline-flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]"
              />
              <span className="text-sm font-semibold tracking-tight bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-transparent sm:text-base">
                {SITE.name}
              </span>
            </span>
            <span className="sr-only">Go to top</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                    isActive ? "text-white" : "text-white/70 hover:text-white",
                  )}
                  onClick={() => {
                    setMobileOpen(false);
                    setActiveSection(item.id);
                    scrollToId(item.id);
                  }}
                >
                  {isActive ? (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/8 ring-1 ring-white/12" />
                  ) : null}
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <ButtonLink
              href={SITE.resumePath}
              variant="secondary"
              size="sm"
              external
              className="hidden sm:inline-flex"
            >
              Download Resume
            </ButtonLink>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="md:hidden pointer-events-auto border-b border-white/10 bg-black/80 backdrop-blur"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={cn(
                      "rounded-xl px-4 py-3 text-left text-sm font-medium ring-1 ring-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                      activeSection === item.id
                        ? "bg-white/6 text-white ring-white/10"
                        : "text-white/80 hover:bg-white/5 hover:text-white",
                    )}
                    onClick={() => {
                      setMobileOpen(false);
                      setActiveSection(item.id);
                      scrollToId(item.id);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                      aria-label={s.label}
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <ButtonLink
                  href={SITE.resumePath}
                  variant="secondary"
                  size="sm"
                  external
                >
                  Resume
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

