import { michroma } from "@/lib/fonts";

/* Deep-space strip under the nav: twinkling stars, a nebula glow, an
   occasional shooting star and a small rocket that crosses the strip.
   It stays dark in both themes. Motion stops for reduced-motion visitors. */

function seeded(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

const STARS = (() => {
  const rand = seeded(424242);
  return Array.from({ length: 46 }, () => ({
    left: rand() * 100,
    top: rand() * 100,
    size: rand() < 0.15 ? 2 : 1,
    delay: rand() * 4,
    dur: 2 + rand() * 3,
  }));
})();

export function Announcement() {
  return (
    <div className="space-banner relative overflow-hidden border-b border-indigo-400/20 bg-[#05060d]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(99,102,241,0.28),transparent_45%),radial-gradient(ellipse_at_80%_40%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(ellipse_at_55%_120%,rgba(56,189,248,0.22),transparent_55%)]"
      />
      <div aria-hidden="true" className="absolute inset-0">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="space-star absolute rounded-full bg-[#fff]"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
            }}
          />
        ))}
        <span className="space-shoot absolute left-[70%] top-[10%] h-px w-16 bg-gradient-to-r from-transparent via-[#fff] to-transparent" />
        <svg
          viewBox="0 0 40 16"
          className="space-rocket absolute top-1/2 h-3.5 w-9 -translate-y-1/2"
        >
          <path d="M0 8 L9 5 L9 11 Z" fill="#fb923c" opacity="0.9" />
          <path d="M3 8 L9 6.4 L9 9.6 Z" fill="#fde68a" />
          <path d="M9 5 H28 C33 5 37 6.5 40 8 C37 9.5 33 11 28 11 H9 Z" fill="#e2e8f0" />
          <path d="M12 5 L8 1 H12 L16 5 Z M12 11 L8 15 H12 L16 11 Z" fill="#94a3b8" />
          <circle cx="29" cy="8" r="1.6" fill="#38bdf8" />
        </svg>
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-2.5">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span
          className={`${michroma.className} text-center text-[10px] uppercase leading-relaxed tracking-[0.1em] text-[#cbd5e1] sm:text-xs sm:tracking-[0.2em]`}
        >
          Something new is entering{" "}
          <span className="text-[#7dd3fc] [text-shadow:0_0_10px_rgba(56,189,248,0.75),0_0_22px_rgba(56,189,248,0.35)]">
            orbit
          </span>
          .{" "}
          <span className="whitespace-nowrap text-[#fb7185] [text-shadow:0_0_10px_rgba(244,63,94,0.55)]">
            Stay tuned!
          </span>
        </span>
      </div>
    </div>
  );
}
