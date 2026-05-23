// Pure CSS + SVG — zero JS, zero WebGL
// Retro CRT monitor with synthwave sun, perspective grid, and terminal

const STARS = [
  { top: "7%",  left: "9%",  size: 2,   delay: "0s"   },
  { top: "13%", left: "24%", size: 1.5, delay: "0.6s"  },
  { top: "5%",  left: "48%", size: 2,   delay: "1.2s"  },
  { top: "16%", left: "65%", size: 1,   delay: "0.9s"  },
  { top: "9%",  left: "80%", size: 1.5, delay: "0.3s"  },
  { top: "20%", left: "38%", size: 1,   delay: "1.6s"  },
  { top: "4%",  left: "91%", size: 2,   delay: "0.7s"  },
  { top: "22%", left: "14%", size: 1,   delay: "1.9s"  },
  { top: "11%", left: "57%", size: 1.5, delay: "0.4s"  },
  { top: "18%", left: "74%", size: 1,   delay: "1.1s"  },
];

const SCREW = (style: React.CSSProperties) => (
  <div
    style={{
      position: "absolute",
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "radial-gradient(circle at 35% 35%, #4a4a72, #22223a)",
      border: "1px solid #3a3a5a",
      ...style,
    }}
  />
);

export default function SynthwaveCard() {
  return (
    <div
      className="flex flex-col items-center select-none"
      role="img"
      aria-label="Retro synthwave CRT monitor showing horizon grid and stats"
    >
      {/* ── Monitor body ─────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "min(360px, 88vw)",
          background: "linear-gradient(155deg, #1c1c38 0%, #0e0e20 100%)",
          border: "2.5px solid #2e2e52",
          borderRadius: "16px",
          padding: "16px 16px 12px",
          boxShadow: [
            "0 0 0 1px #3c3c60",
            "0 28px 70px rgba(0,0,0,0.85)",
            "0 0 55px rgba(233,30,140,0.13)",
            "0 0 110px rgba(249,115,22,0.06)",
          ].join(", "),
        }}
      >
        {SCREW({ top: 9,  left: 9  })}
        {SCREW({ top: 9,  right: 9 })}
        {SCREW({ bottom: 32, left: 9  })}
        {SCREW({ bottom: 32, right: 9 })}

        {/* ── CRT screen ─────────────────────────────────── */}
        <div
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            aspectRatio: "4 / 3",
            background: "#03030c",
            boxShadow: [
              "inset 0 0 50px rgba(0,0,0,0.75)",
              "inset 0 0 0 1px rgba(255,255,255,0.025)",
              "0 0 35px rgba(233,30,140,0.22)",
            ].join(", "),
          }}
        >
          {/* Stars */}
          {STARS.map((s, i) => (
            <div
              key={i}
              className="crt-star"
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                borderRadius: "50%",
                background: "#ffffff",
                animationDelay: s.delay,
              }}
            />
          ))}

          {/* Synthwave sun */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "52%",
            }}
          >
            <svg
              viewBox="0 0 200 112"
              width="100%"
              aria-hidden="true"
              overflow="visible"
            >
              <defs>
                <linearGradient id="sw-sun-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#fde68a" />
                  <stop offset="28%"  stopColor="#fbbf24" />
                  <stop offset="62%"  stopColor="#f97316" />
                  <stop offset="100%" stopColor="#e91e8c" />
                </linearGradient>
                {/* Glow filter */}
                <filter id="sw-sun-glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Half-circle */}
              <path
                d="M 5 102 A 95 95 0 0 1 195 102 Z"
                fill="url(#sw-sun-grad)"
                filter="url(#sw-sun-glow)"
              />
              {/* Horizontal stripe mask — classic synthwave look */}
              <rect x="5"   y="60"  width="190" height="7"  fill="#03030c" />
              <rect x="5"   y="73"  width="190" height="6"  fill="#03030c" />
              <rect x="5"   y="84"  width="190" height="6"  fill="#03030c" />
              <rect x="5"   y="93"  width="190" height="5"  fill="#03030c" />
              <rect x="5"   y="100" width="190" height="4"  fill="#03030c" />
              {/* Atmospheric base glow */}
              <ellipse
                cx="100" cy="102" rx="90" ry="14"
                fill="rgba(249,115,22,0.18)"
              />
            </svg>
          </div>

          {/* Horizon glow line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "52%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, #e91e8c 30%, #f97316 50%, #e91e8c 70%, transparent 100%)",
              boxShadow:
                "0 0 8px 1px rgba(233,30,140,0.9), 0 0 22px 2px rgba(249,115,22,0.5)",
            }}
          />

          {/* Perspective grid */}
          <div
            style={{
              position: "absolute",
              left: "-15%",
              right: "-15%",
              top: "52%",
              bottom: "-8%",
              backgroundImage:
                "linear-gradient(rgba(233,30,140,0.55) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(249,115,22,0.35) 1px, transparent 1px)",
              backgroundSize: "16% 16px",
              transform: "perspective(110px) rotateX(55deg)",
              transformOrigin: "50% 0%",
            }}
          />

          {/* Terminal text */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "10px 14px",
              fontFamily: "'Fira Code', 'Courier New', monospace",
              fontSize: "clamp(0.52rem, 1.6vw, 0.65rem)",
              lineHeight: 1.75,
              color: "#fca5a5",
              background:
                "linear-gradient(to top, rgba(3,3,12,0.95) 65%, transparent 100%)",
            }}
          >
            <div>
              <span style={{ color: "#e91e8c" }}>&gt; </span>
              ENGINEER
              <span style={{ color: "#3c3c60" }}> + </span>
              MUSIC PRODUCER
            </div>
            <div>
              <span style={{ color: "#e91e8c" }}>&gt; </span>
              BEATS_RELEASED
              <span style={{ color: "#3c3c60" }}>=</span>
              <span style={{ color: "#fbbf24" }}> 5000+</span>
            </div>
            <div>
              <span style={{ color: "#e91e8c" }}>&gt; </span>
              STREAMS
              <span style={{ color: "#3c3c60" }}>=</span>
              <span style={{ color: "#fbbf24" }}> 5M+</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: "#e91e8c" }}>&gt; </span>
              <span className="crt-cursor" style={{ color: "#e91e8c" }}>█</span>
            </div>
          </div>

          {/* Scanlines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
              pointerEvents: "none",
            }}
          />

          {/* Screen curvature vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "8px",
              boxShadow: "inset 0 0 55px rgba(0,0,0,0.65)",
              pointerEvents: "none",
            }}
          />

          {/* Screen glow pulse */}
          <div
            className="crt-glow-pulse"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 65% 45% at 50% 48%, rgba(233,30,140,0.07) 0%, transparent 75%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Monitor brand strip */}
        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "'Michroma', sans-serif",
            fontSize: "0.48rem",
            letterSpacing: "0.32em",
            color: "#35355a",
            textTransform: "uppercase",
          }}
        >
          SYNTHVISION™ &nbsp;·&nbsp; MODEL 1984
        </div>
      </div>

      {/* ── Stand neck ───────────────────────────────────── */}
      <div
        style={{
          width: "50px",
          height: "20px",
          background: "linear-gradient(155deg, #1c1c38, #0e0e20)",
          borderLeft: "2.5px solid #2e2e52",
          borderRight: "2.5px solid #2e2e52",
          borderBottom: "2.5px solid #2e2e52",
          clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)",
        }}
      />
      {/* ── Stand base ───────────────────────────────────── */}
      <div
        style={{
          width: "140px",
          height: "11px",
          background: "linear-gradient(155deg, #1c1c38, #0e0e20)",
          border: "2.5px solid #2e2e52",
          borderRadius: "0 0 8px 8px",
          boxShadow:
            "0 6px 24px rgba(0,0,0,0.7), 0 0 20px rgba(233,30,140,0.08)",
        }}
      />
    </div>
  );
}
