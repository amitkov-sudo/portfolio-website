"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

/* A card with a soft blue spotlight that follows the pointer. The spotlight
   sits on a negative z-index inside an isolated stacking context, so it paints
   above the card background and below the card content. */
export function Card({
  className,
  children,
  onPointerMove,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (el) {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    }
    onPointerMove?.(e);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      className={cn(
        "group/card relative isolate overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-[box-shadow,--tw-ring-color] duration-300 hover:ring-indigo-400/40",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
      />
      {children}
    </div>
  );
}
