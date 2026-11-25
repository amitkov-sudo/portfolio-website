"use client";

import * as React from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* Renders the final value on the server, then counts up from zero the first
   time the number scrolls into view. */
export function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = React.useState(to);
  const started = React.useRef(false);

  React.useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el || started.current) return;
    const r = el.getBoundingClientRect();
    if (r.top > window.innerHeight) setValue(0);
  }, [reduce]);

  React.useEffect(() => {
    if (!inView || reduce || started.current) return;
    started.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}
