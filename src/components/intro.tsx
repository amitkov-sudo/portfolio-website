"use client";

import * as React from "react";

/* Fast opening screen: a neural network draws itself across the whole
   screen, radiating out from the name, then the overlay lifts. Plays once per visit. A synth sweep and chime,
   built with Web Audio, plays when the browser allows sound before a click.
   A click or key press skips the intro. */

const KEY = "intro-seen";
const DURATION = 900;
const FADE = 300;

function playIntroSound() {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const t = ctx.currentTime + 0.02;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, t);
    master.gain.exponentialRampToValueAtTime(0.16, t + 0.04);
    master.gain.setValueAtTime(0.16, t + 0.8);
    master.gain.exponentialRampToValueAtTime(0.0001, t + 1.15);
    master.connect(ctx.destination);

    // Rising filtered sweep.
    const sweep = ctx.createOscillator();
    sweep.type = "sawtooth";
    sweep.frequency.setValueAtTime(110, t);
    sweep.frequency.exponentialRampToValueAtTime(440, t + 0.42);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.value = 9;
    filter.frequency.setValueAtTime(260, t);
    filter.frequency.exponentialRampToValueAtTime(4200, t + 0.42);
    const sweepGain = ctx.createGain();
    sweepGain.gain.setValueAtTime(0.45, t);
    sweepGain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
    sweep.connect(filter);
    filter.connect(sweepGain);
    sweepGain.connect(master);
    sweep.start(t);
    sweep.stop(t + 0.58);

    // Three-note digital chime.
    [
      [1318.5, 0.4],
      [1975.5, 0.48],
      [2637, 0.56],
    ].forEach(([freq, at]) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t + at);
      g.gain.exponentialRampToValueAtTime(0.32, t + at + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + at + 0.5);
      osc.connect(g);
      g.connect(master);
      osc.start(t + at);
      osc.stop(t + at + 0.55);
    });

    window.setTimeout(() => void ctx.close(), 1600);
  } catch {
    /* sound is optional; the intro works without it */
  }
}

/* A full-screen network built from a fixed seed, so the server and the
   browser draw the same picture. The viewBox is a 1600 square and the SVG
   uses "slice", so wide and tall screens both crop it at the same density. */
const VW = 1600;
const VH = 1600;

function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NET = (() => {
  const rand = seeded(20261125);
  const cols = 12;
  const rows = 12;
  const nodes: { x: number; y: number; r: number; d: number }[] = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = ((i + 0.5 + (rand() - 0.5) * 0.9) / cols) * VW;
      const y = ((j + 0.5 + (rand() - 0.5) * 0.9) / rows) * VH;
      const d = Math.hypot((x - VW / 2) / VW, (y - VH / 2) / VH);
      nodes.push({ x, y, r: 2.2 + rand() * 3.2, d });
    }
  }
  const links: { a: number; b: number; d: number }[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 205 && rand() > 0.18) {
        links.push({ a: i, b: j, d: Math.min(nodes[i].d, nodes[j].d) });
      }
    }
  }
  return { nodes, links };
})();

export function Intro() {
  const [phase, setPhase] = React.useState<"show" | "leave" | "gone">("show");

  React.useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* private mode */
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      setPhase("gone");
      return;
    }
    playIntroSound();
    const leave = window.setTimeout(() => setPhase("leave"), DURATION);
    const gone = window.setTimeout(() => setPhase("gone"), DURATION + FADE);
    const skip = () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
      setPhase("leave");
      window.setTimeout(() => setPhase("gone"), FADE);
    };
    window.addEventListener("keydown", skip, { once: true });
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      id="intro"
      role="presentation"
      onClick={() => {
        setPhase("leave");
        window.setTimeout(() => setPhase("gone"), FADE);
      }}
      className={`intro fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background ${
        phase === "leave" ? "intro-leave" : ""
      }`}
    >
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="introLine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={VW} y2="0">
            <stop offset="0" stopColor="var(--color-indigo-200)" />
            <stop offset="0.5" stopColor="var(--color-sky-200)" />
            <stop offset="1" stopColor="var(--color-emerald-200)" />
          </linearGradient>
        </defs>
        {NET.links.map((l, i) => (
          <line
            key={i}
            x1={NET.nodes[l.a].x}
            y1={NET.nodes[l.a].y}
            x2={NET.nodes[l.b].x}
            y2={NET.nodes[l.b].y}
            stroke="url(#introLine)"
            strokeWidth="1.1"
            strokeOpacity="0.75"
            pathLength={1}
            className="intro-link"
            style={{ animationDelay: `${Math.round(l.d * 520)}ms` }}
          />
        ))}
        {NET.nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            className="intro-node"
            style={{ animationDelay: `${Math.round(n.d * 520)}ms` }}
          />
        ))}
      </svg>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--background)_0%,color-mix(in_oklab,var(--background)_70%,transparent)_28%,transparent_60%)]"
      />
      <p className="intro-name relative text-center text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
        <span className="hue-drift bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
          Alex Mitkov
        </span>
      </p>
    </div>
  );
}
