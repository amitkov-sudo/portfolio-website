"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { SOCIALS } from "@/content/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const DEFAULT_STATE: FormState = { name: "", email: "", message: "" };

export function Contact() {
  const [state, setState] = React.useState<FormState>(DEFAULT_STATE);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = React.useState("");

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data?.error || "Failed to send message.");
        return;
      }

      setStatus("success");
      setState(DEFAULT_STATE);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk."
          description="If you’d like to collaborate or talk roles, send a message directly here or reach me by email."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">Message</h3>

            <form className="mt-5 space-y-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                    Name
                  </span>
                  <input
                    className="h-11 w-full rounded-xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={state.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                    Email
                  </span>
                  <input
                    className="h-11 w-full rounded-xl bg-white/5 px-4 text-sm text-white ring-1 ring-white/10 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                    value={state.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    type="email"
                    required
                  />
                </label>
              </div>
              <label className="space-y-2 block">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-white/55">
                  Message
                </span>
                <textarea
                  className="min-h-[140px] w-full resize-y rounded-xl bg-white/5 px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={state.message}
                  onChange={(e) => onChange("message", e.target.value)}
                  placeholder="What can I help with?"
                  required
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <Button type="submit" variant="primary" disabled={status === "loading"}>
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {status === "success" ? (
                  <p className="text-sm text-emerald-300">Message sent successfully.</p>
                ) : status === "error" ? (
                  <p className="text-sm text-red-300">{errorMessage}</p>
                ) : (
                  <a
                    className="text-sm text-white/70 hover:text-white underline underline-offset-4"
                    href={
                      SOCIALS.find((s) => s.label === "Email")?.href ??
                      "mailto:you@example.com"
                    }
                  >
                    Prefer email?
                  </a>
                )}
              </div>
            </form>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-white">Links</h3>

            <div className="mt-5 space-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/10 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white">
                      {s.label}
                    </span>
                  </div>
                  <span className="text-xs text-white/45 truncate max-w-[50%]">
                    {s.href.replace("mailto:", "")}
                  </span>
                </a>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

