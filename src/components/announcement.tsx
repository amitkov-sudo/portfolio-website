export function Announcement() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-indigo-500/10 via-sky-400/10 to-emerald-400/10">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-6 py-2 text-xs sm:text-sm">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="hue-drift bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text font-medium tracking-wide text-transparent">
          Something new is launching soon.
        </span>
      </div>
    </div>
  );
}
