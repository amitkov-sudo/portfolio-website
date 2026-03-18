"use client";

import * as React from "react";

import type { SectionId } from "@/lib/sections";
import { SECTION_IDS } from "@/lib/sections";

type ActiveSectionContextValue = {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
};

const ActiveSectionContext = React.createContext<ActiveSectionContextValue | null>(
  null,
);

export function useActiveSection() {
  const ctx = React.useContext(ActiveSectionContext);
  if (!ctx) throw new Error("useActiveSection must be used within ActiveSectionProvider");
  return ctx;
}

function getInitialActiveSection(): SectionId {
  if (typeof window === "undefined") return "top";
  const hash = window.location.hash.replace("#", "") as SectionId;
  return SECTION_IDS.includes(hash) ? hash : "top";
}

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = React.useState<SectionId>(
    getInitialActiveSection,
  );

  React.useEffect(() => {
    const ids: SectionId[] = SECTION_IDS.filter((id) => id !== "top");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (!visible?.target?.id) return;
        setActiveSection(visible.target.id as SectionId);
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5, 0.75],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = React.useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

