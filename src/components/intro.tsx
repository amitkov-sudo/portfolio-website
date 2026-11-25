"use client";

import * as React from "react";

/* Fast opening screen: a small network draws itself, the name fades in,
   then the overlay lifts. Plays once per visit. A synth sweep and chime,
   built with Web Audio, plays when the browser allows sound before a click.
   A click or key press skips the intro. */

const KEY = "intro-seen";
const DURATION = 1200;

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

const NODES: [number, number][] = [
  [10, 30],
  [34, 12],
  [38, 46],
  [62, 26],
  [86, 10],
  [88, 44],
  [110, 28],
];
const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 6],
  [5, 6],
  [1, 4],
];

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
    const gone = window.setTimeout(() => setPhase("gone"), DURATION + 380);
    const skip = () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
      setPhase("leave");
      window.setTimeout(() => setPhase("gone"), 380);
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
        window.setTimeout(() => setPhase("gone"), 380);
      }}
      className={`intro fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background ${
        phase === "leave" ? "intro-leave" : ""
      }`}
    >
      <svg viewBox="0 0 120 56" className="intro-net h-16 w-36 sm:h-20 sm:w-44" aria-hidden="true">
        <defs>
          <linearGradient id="introLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--color-indigo-200)" />
            <stop offset="0.5" stopColor="var(--color-sky-200)" />
            <stop offset="1" stopColor="var(--color-emerald-200)" />
          </linearGradient>
        </defs>
        {LINKS.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="url(#introLine)"
            strokeWidth="1"
            pathLength={1}
            className="intro-link"
            style={{ animationDelay: `${60 + i * 35}ms` }}
          />
        ))}
        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.6"
            className="intro-node"
            style={{ animationDelay: `${i * 45}ms` }}
          />
        ))}
      </svg>
      <p className="intro-name mt-5 bg-gradient-to-r from-white via-white to-indigo-200 bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl">
        Alex Mitkov
      </p>
    </div>
  );
}
