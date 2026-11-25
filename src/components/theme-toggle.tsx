"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

type Theme = "dark" | "light";

/* Two-option switch: Light and Dark. Dark is the default. */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme>("dark");

  React.useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme-v2", next);
    } catch {
      /* private mode: the choice lasts for this visit only */
    }
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className={cn(
        "inline-flex h-9 items-center rounded-full bg-white/5 p-1 text-xs font-medium ring-1 ring-white/10",
        className,
      )}
    >
      {(["light", "dark"] as const).map((t) => (
        <button
          key={t}
          type="button"
          role="radio"
          aria-checked={theme === t}
          onClick={() => choose(t)}
          className={cn(
            "h-7 rounded-full px-3 capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
            theme === t ? "bg-white text-black" : "text-white/60 hover:text-white",
          )}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
