import { FaCode, FaMusic, FaGamepad } from "react-icons/fa";

const ROLES = [
  {
    icon: <FaCode className="size-3" />,
    label: "Software Engineer",
    color: "#e91e8c",
    // top-left
    className: "top-10 left-0 sm:left-2",
    delay: "0s",
  },
  {
    icon: <FaMusic className="size-3" />,
    label: "Music Producer",
    color: "#f97316",
    // right-center
    className: "right-0 sm:right-2 top-1/2 -translate-y-8",
    delay: "0.7s",
  },
  {
    icon: <FaGamepad className="size-3" />,
    label: "Game Developer",
    color: "#fbbf24",
    // bottom-center
    className: "bottom-10 left-1/2 -translate-x-1/2",
    delay: "1.4s",
  },
];

export default function HeroCard() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center select-none">

      {/* Ambient glow blob */}
      <div
        className="absolute w-44 h-44 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e91e8c 0%, #f97316 100%)" }}
      />

      {/* Slow-spinning orbit ring */}
      <div
        className="absolute rounded-full border border-dashed border-[var(--border-2)] animate-spin-slow pointer-events-none"
        style={{ inset: "12%" }}
      />

      {/* Avatar with gradient border */}
      <div
        className="relative rounded-full p-[2.5px] z-10"
        style={{
          background: "linear-gradient(135deg, #fbbf24 0%, #f97316 40%, #e91e8c 75%, #be185d 100%)",
        }}
      >
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[var(--surface-2)] flex flex-col items-center justify-center gap-0.5">
          <span
            className="font-michroma font-bold g-text"
            style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
          >
            AM
          </span>
          <span className="text-[var(--fg-3)] text-[0.48rem] tracking-[0.22em] uppercase">
            Portfolio
          </span>
        </div>

        {/* Available indicator with ping */}
        <div className="absolute bottom-1.5 right-1.5 z-20">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span
              className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"
              style={{ boxShadow: "0 0 0 2px var(--bg)" }}
            />
          </span>
        </div>
      </div>

      {/* Floating role badges */}
      {ROLES.map((r) => (
        <div
          key={r.label}
          className={`absolute flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-[0.7rem] font-semibold text-white whitespace-nowrap z-10 ${r.className}`}
          style={{
            background: `${r.color}18`,
            border: `1px solid ${r.color}45`,
            boxShadow: `0 0 12px ${r.color}18`,
            animation: `float 4s ease-in-out infinite ${r.delay}`,
          }}
        >
          <span style={{ color: r.color }}>{r.icon}</span>
          {r.label}
        </div>
      ))}
    </div>
  );
}
