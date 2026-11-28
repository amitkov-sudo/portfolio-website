import { cn } from "@/lib/cn";

/* The ASTRO wordmark with its "by Alex Mitkov" signature, in the lettering the
   sign-in app itself carries. Both lines take the current text color, and the
   font size sets the height of the wordmark. */
export function AstroWordmark({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="ASTRO by Alex Mitkov"
      className={cn("inline-flex flex-col gap-[0.42em]", className)}
    >
      <svg
        viewBox="0 0 446 100"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0"
        className="block h-[1em] w-[4.46em]"
      >
        <polygon points="0,100 36,0 48,0 84,100 71.5,100 42,18 12.5,100" />
        <path fill="none" strokeWidth="11.3" d="M148.85 13.4A22.2 22.2 0 1 0 131.85 50A22.2 22.2 0 1 1 114.85 86.6" />
        <rect x="179.7" y="0" width="64" height="11.3" />
        <rect x="206.05" y="0" width="11.3" height="100" />
        <rect x="263.7" y="0" width="11.3" height="100" />
        <path fill="none" strokeWidth="11.3" d="M269.35 5.65H297.7A22.5 22.5 0 0 1 297.7 50.65H269.35" />
        <polygon points="289.5,54 303,54 326,100 312.5,100" />
        <path fill="none" strokeWidth="11.3" d="M434.79 28.5A44.35 44.35 0 1 1 417.5 11.21" />
        <circle cx="427.36" cy="18.64" r="8.2" />
      </svg>
      <svg
        viewBox="0 0 1206.53 100"
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.4"
        className="block h-auto w-[4.46em] opacity-75"
      >
        <rect x="0" y="0" width="11.3" height="100" />
        <path fill="none" strokeWidth="13.7" d="M5.65 5.65H33A20.78 20.78 0 0 1 33 47.2H5.65" />
        <path fill="none" strokeWidth="13.7" d="M5.65 47.2H36A23.57 23.57 0 0 1 36 94.35H5.65" />
        <polygon points="91.22,0 104.72,0 135.97,54 122.47,54" />
        <polygon points="153.72,0 167.22,0 135.97,54 122.47,54" />
        <rect x="123.57" y="50" width="11.3" height="50" />
        <polygon points="239.22,100 275.23,0 287.23,0 323.23,100 310.73,100 281.23,18 251.72,100" />
        <rect x="349.23" y="0" width="11.3" height="100" />
        <rect x="349.23" y="88.7" width="54" height="11.3" />
        <rect x="429.23" y="0" width="11.3" height="100" />
        <rect x="429.23" y="0" width="56" height="11.3" />
        <rect x="429.23" y="44.35" width="48" height="11.3" />
        <rect x="429.23" y="88.7" width="56" height="11.3" />
        <polygon points="511.23,0 524.73,0 585.23,100 571.73,100" />
        <polygon points="571.73,0 585.23,0 524.73,100 511.23,100" />
        <rect x="657.23" y="0" width="11.3" height="100" />
        <rect x="737.93" y="0" width="11.3" height="100" />
        <polygon points="659.23,0 672.23,0 709.23,80 697.23,80" />
        <polygon points="734.23,0 747.23,0 709.23,80 697.23,80" />
        <rect x="775.23" y="0" width="11.3" height="100" />
        <rect x="812.52" y="0" width="64" height="11.3" />
        <rect x="838.88" y="0" width="11.3" height="100" />
        <rect x="902.52" y="0" width="11.3" height="100" />
        <polygon points="955.23,0 970.52,0 913.82,62 913.82,45.3" />
        <polygon points="925.62,40 938.32,40 969.38,100 956.67,100" />
        <circle fill="none" strokeWidth="13.7" cx="1046.53" cy="50" r="44.35" />
        <polygon points="1122.53,0 1135.03,0 1164.53,82 1194.03,0 1206.53,0 1170.53,100 1158.53,100" />
      </svg>
    </span>
  );
}
