import * as React from "react";

import { cn } from "@/lib/cn";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/[0.04] ring-1 ring-white/10 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]",
        className,
      )}
      {...props}
    />
  );
}

