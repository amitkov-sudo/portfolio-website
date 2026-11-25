"use client";

import * as React from "react";

/* Interactive neural-network mesh.
   Nodes drift in a shallow 3D field and link to neighbours within reach.
   The pointer pulls nearby nodes and draws threads to them. A click or tap
   fires a signal from the nearest node: it spreads along the links, node by
   node, with light pulses travelling down each link. */

type Node = {
  x: number;
  y: number;
  z: number; // depth 0.35 (far) .. 1 (near)
  vx: number;
  vy: number;
  glow: number; // 0..1 activation glow
  hitRun: number; // last run id that reached this node
};

type Pulse = { from: number; to: number; t: number; run: number };

const LINK = 175; // link distance in px at depth 1

let audio: AudioContext | null = null;

/* Quiet engine whir for a visitor's click: a low hum that spins up and
   settles, with a soft rumble and a breath of air. Runs inside the click,
   so browsers allow it. */
function blip(pitch: number) {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    audio = audio || new AC();
    if (audio.state === "suspended") void audio.resume();
    const ctx = audio;
    const t = ctx.currentTime + 0.005;
    const end = t + 0.55;

    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(0.14, t + 0.06);
    out.gain.setValueAtTime(0.14, t + 0.2);
    out.gain.exponentialRampToValueAtTime(0.0001, end);
    out.connect(ctx.destination);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.Q.value = 2;
    filter.frequency.setValueAtTime(320, t);
    filter.frequency.exponentialRampToValueAtTime(900, t + 0.22);
    filter.frequency.exponentialRampToValueAtTime(380, end);

    // Rumble: a fast tremolo on the hum.
    const body = ctx.createGain();
    body.gain.value = 0.75;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 32;
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.25;
    lfo.connect(lfoDepth);
    lfoDepth.connect(body.gain);
    body.connect(filter);
    filter.connect(out);

    const base = 52 * pitch;
    const hum = ctx.createOscillator();
    hum.type = "sawtooth";
    hum.frequency.setValueAtTime(base, t);
    hum.frequency.exponentialRampToValueAtTime(base * 1.9, t + 0.22);
    hum.frequency.exponentialRampToValueAtTime(base * 1.6, end);
    hum.connect(body);

    const sub = ctx.createOscillator();
    sub.type = "sine";
    sub.frequency.setValueAtTime(base / 2, t);
    sub.frequency.exponentialRampToValueAtTime(base * 0.95, t + 0.22);
    const subGain = ctx.createGain();
    subGain.gain.value = 0.9;
    sub.connect(subGain);
    subGain.connect(out);

    // Air: filtered noise that swells with the spin-up.
    const len = Math.floor(ctx.sampleRate * 0.55);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.Q.value = 0.8;
    band.frequency.setValueAtTime(600, t);
    band.frequency.exponentialRampToValueAtTime(1500, t + 0.22);
    const air = ctx.createGain();
    air.gain.setValueAtTime(0.0001, t);
    air.gain.exponentialRampToValueAtTime(0.06, t + 0.18);
    air.gain.exponentialRampToValueAtTime(0.0001, end);
    noise.connect(band);
    band.connect(air);
    air.connect(out);

    [hum, sub, lfo].forEach((o) => {
      o.start(t);
      o.stop(end + 0.05);
    });
    noise.start(t);
    noise.stop(end);
  } catch {
    /* sound is optional */
  }
}

export function NeuralField() {
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [stats, setStats] = React.useState({ fired: 0, reached: 0, best: 0, total: 0 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let run = 0;
    let runReached = 0;
    let fired = 0;
    let best = 0;
    let visible = true;
    let raf = 0;
    let lastFire = performance.now();
    const pointer = { x: -9999, y: -9999, active: false };

    function build() {
      const r = wrap!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      const count = Math.max(55, Math.min(140, Math.round((w * h) / 4200)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: 0.35 + Math.random() * 0.65,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        glow: 0,
        hitRun: -1,
      }));
      pulses = [];
      setStats((s) => ({ ...s, total: count }));
    }

    function linked(a: Node, b: Node) {
      const reach = LINK * Math.min(a.z, b.z);
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      return d2 < reach * reach ? Math.sqrt(d2) / reach : -1;
    }

    function fire(x: number, y: number) {
      if (!nodes.length) return;
      let start = 0;
      let bestD = Infinity;
      nodes.forEach((n, i) => {
        const d = (n.x - x) ** 2 + (n.y - y) ** 2;
        if (d < bestD) {
          bestD = d;
          start = i;
        }
      });
      run += 1;
      runReached = 1;
      pulses = [];
      fired += 1;
      nodes[start].glow = 1;
      nodes[start].hitRun = run;
      spread(start, run, pulses);
      lastFire = performance.now();
      setStats((s) => ({ ...s, fired, reached: 1 }));
    }

    function spread(from: number, id: number, into: Pulse[]) {
      const a = nodes[from];
      nodes.forEach((b, j) => {
        if (j === from || b.hitRun === id) return;
        if (linked(a, b) >= 0) into.push({ from, to: j, t: 0, run: id });
      });
    }

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      const dark = isDark();
      const line = dark ? "94, 234, 212" : "37, 99, 160";
      const core = dark ? "236, 254, 255" : "30, 58, 138";
      const spark = dark ? "125, 211, 252" : "79, 70, 229";

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);

      // Move nodes.
      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx * n.z;
          n.y += n.vy * n.z;
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const d = Math.hypot(dx, dy);
            if (d < 170 && d > 1) {
              n.x += (dx / d) * 0.35 * n.z;
              n.y += (dy / d) * 0.35 * n.z;
            }
          }
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
          n.glow *= 0.965;
        }
      }

      // Links.
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const f = linked(a, b);
          if (f < 0) continue;
          const depth = (a.z + b.z) / 2;
          const lit = Math.max(a.glow, b.glow);
          const alpha = (1 - f) * (0.18 + 0.5 * depth) * (0.55 + lit) * (dark ? 1 : 1.35);
          ctx!.strokeStyle = `rgba(${line}, ${Math.min(alpha, 0.9)})`;
          ctx!.lineWidth = 0.6 + depth * 0.9;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      // Pointer threads.
      if (pointer.active) {
        for (const n of nodes) {
          const d = Math.hypot(pointer.x - n.x, pointer.y - n.y);
          if (d < 140) {
            ctx!.strokeStyle = `rgba(${spark}, ${(1 - d / 140) * 0.6})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(pointer.x, pointer.y);
            ctx!.lineTo(n.x, n.y);
            ctx!.stroke();
          }
        }
      }

      // Signal pulses travelling along links.
      const keep: Pulse[] = [];
      const spawned: Pulse[] = [];
      for (const p of pulses) {
        p.t += reduce ? 1 : 0.045;
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (p.t >= 1) {
          if (b.hitRun !== p.run) {
            b.hitRun = p.run;
            b.glow = 1;
            if (p.run === run) {
              runReached += 1;
              if (runReached > best) best = runReached;
              setStats((s) => ({ ...s, reached: runReached, best }));
            }
            if (pulses.length + spawned.length < 600) spread(p.to, p.run, spawned);
          }
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 6);
        g.addColorStop(0, `rgba(${core}, 0.95)`);
        g.addColorStop(1, `rgba(${spark}, 0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 6, 0, Math.PI * 2);
        ctx!.fill();
        keep.push(p);
      }
      pulses = keep.concat(spawned);

      // Nodes.
      for (const n of nodes) {
        const r = 1.2 + n.z * 2.6 + n.glow * 3;
        if (n.glow > 0.05) {
          const g = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
          g.addColorStop(0, `rgba(${spark}, ${0.45 * n.glow})`);
          g.addColorStop(1, `rgba(${spark}, 0)`);
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
          ctx!.fill();
        }
        ctx!.fillStyle = `rgba(${core}, ${0.35 + 0.55 * n.z + 0.1 * n.glow})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Fire on its own when nobody has clicked for a while.
      if (!reduce && now - lastFire > 6000 && pulses.length === 0) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        if (n) {
          const keepFired = fired;
          fire(n.x, n.y);
          fired = keepFired;
          setStats((s) => ({ ...s, fired }));
        }
      }
    }

    function local(e: PointerEvent) {
      const r = canvas!.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    const onMove = (e: PointerEvent) => {
      const p = local(e);
      pointer.x = p.x;
      pointer.y = p.y;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };
    const onDown = (e: PointerEvent) => {
      const p = local(e);
      // Higher pitch toward the right edge, lower toward the left.
      blip(0.9 + 0.25 * Math.min(1, Math.max(0, p.x / Math.max(w, 1))));
      fire(p.x, p.y);
    };

    build();
    raf = requestAnimationFrame(frame);
    const ro = new ResizeObserver(() => build());
    ro.observe(wrap);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(wrap);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return (
    <section aria-label="Interactive neural network" className="relative py-6">
      <div
        ref={wrapRef}
        className="relative h-[260px] w-full overflow-hidden sm:h-[340px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.10),transparent_70%)]"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 cursor-crosshair touch-pan-y"
          aria-hidden="true"
        />
      </div>
      <div className="mx-auto mt-3 flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 text-xs text-white/55">
        <span>Click or tap the network to fire a signal.</span>
        <span className="font-mono tabular-nums">
          Signals {stats.fired} · Reached {stats.reached}/{stats.total} · Best {stats.best}
        </span>
      </div>
    </section>
  );
}
