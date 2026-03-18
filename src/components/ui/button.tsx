"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black hover:bg-white/90 active:bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_30px_-12px_rgba(0,0,0,0.65)]",
  secondary:
    "bg-white/5 text-white hover:bg-white/8 active:bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
  ghost:
    "bg-transparent text-white/80 hover:text-white hover:bg-white/5 active:bg-white/8",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export type ButtonLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "className"
> & {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  external,
  ...props
}: ButtonLinkProps) {
  if (external) {
    return (
      <a
        className={cn(base, variants[variant], sizes[size], className)}
        href={String(props.href)}
        target="_blank"
        rel="noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

