"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

import { cn } from "@/lib/cn";

/* Round arrow in the bottom-right corner. It appears after the visitor
   scrolls past the hero and returns the page to the top. */
export function BackToTop() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", "#top");
      }}
      className={cn(
        "group fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0b0d14]/90 text-white ring-1 ring-white/15 backdrop-blur transition-all duration-300 sm:bottom-8 sm:right-8",
        "shadow-[0_0_0_1px_rgba(99,102,241,0.25),0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:ring-sky-300/50 hover:shadow-[0_0_0_1px_rgba(125,211,252,0.5),0_12px_34px_-8px_rgba(56,189,248,0.8)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
