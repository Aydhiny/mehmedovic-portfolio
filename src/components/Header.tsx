"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Spotlight from "@/components/Spotlight";
import MovingBorderButton from "@/components/MovingBorderButton";
import { useLanguage } from "@/context/LanguageContext";

// ── Stars scattered in the upper sky ────────────────────────
const STARS = [
  { top: "5%",  left: "6%",  r: 1.8, d: "0s"   },
  { top: "10%", left: "16%", r: 1.2, d: "0.5s"  },
  { top: "4%",  left: "30%", r: 1.0, d: "1.1s"  },
  { top: "9%",  left: "43%", r: 2.0, d: "0.3s"  },
  { top: "14%", left: "54%", r: 1.2, d: "1.7s"  },
  { top: "6%",  left: "66%", r: 1.0, d: "0.8s"  },
  { top: "11%", left: "76%", r: 1.8, d: "0.2s"  },
  { top: "7%",  left: "87%", r: 1.4, d: "1.3s"  },
  { top: "18%", left: "22%", r: 1.0, d: "1.9s"  },
  { top: "20%", left: "70%", r: 1.2, d: "0.6s"  },
  { top: "3%",  left: "51%", r: 1.0, d: "1.5s"  },
  { top: "16%", left: "93%", r: 1.8, d: "0.9s"  },
  { top: "22%", left: "38%", r: 1.0, d: "2.1s"  },
  { top: "13%", left: "82%", r: 1.4, d: "0.4s"  },
];

// ── Filled palm silhouette — proper solid silhouette ─────────
function PalmSilhouette({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none absolute bottom-0 ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined, transformOrigin: "50% 100%" }}
    >
      <svg viewBox="0 0 160 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Trunk — tapered, slightly curved */}
        <path
          d="M72 340 C68 280 62 210 66 155 C68 125 70 100 74 70 C78 100 80 125 82 155 C86 210 80 280 76 340 Z"
          fill="#06040e"
        />
        {/* Root bulge */}
        <ellipse cx="74" cy="338" rx="14" ry="6" fill="#06040e" />

        {/* Frond canopy — overlapping filled leaf shapes */}
        {/* Left sweep */}
        <path d="M74 70 C46 48 12 55 4 78 C26 60 54 58 74 70 Z" fill="#06040e" />
        {/* Right sweep */}
        <path d="M74 70 C102 48 136 55 144 78 C122 60 94 58 74 70 Z" fill="#06040e" />
        {/* Top center */}
        <path d="M74 70 C68 38 72 10 82 18 C78 40 76 58 74 70 Z" fill="#06040e" />
        {/* Upper left */}
        <path d="M74 70 C52 40 54 10 68 18 C68 40 72 56 74 70 Z" fill="#06040e" />
        {/* Upper right */}
        <path d="M74 70 C96 40 94 10 80 18 C80 40 76 56 74 70 Z" fill="#06040e" />
        {/* Lower left droop */}
        <path d="M74 70 C42 75 18 100 24 120 C38 96 58 80 74 70 Z" fill="#06040e" />
        {/* Lower right droop */}
        <path d="M74 70 C106 75 130 100 124 120 C110 96 90 80 74 70 Z" fill="#06040e" />
        {/* Far left droop */}
        <path d="M74 70 C38 82 10 115 18 138 C34 108 56 88 74 70 Z" fill="#06040e" />
        {/* Far right droop */}
        <path d="M74 70 C110 82 138 115 130 138 C114 108 92 88 74 70 Z" fill="#06040e" />
        {/* Coconuts */}
        <circle cx="68" cy="76" r="5" fill="#06040e" />
        <circle cx="80" cy="73" r="4.5" fill="#06040e" />
        <circle cx="72" cy="82" r="4" fill="#06040e" />
      </svg>
    </div>
  );
}

// ── City skyline silhouette at the horizon ───────────────────
function CitySkyline() {
  return (
    <div
      className="absolute pointer-events-none w-full"
      aria-hidden="true"
      style={{ bottom: "38%", left: 0 }}
    >
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        width="100%"
        height="90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,110 L0,68
            L30,68 L30,40 L44,40 L44,18 L58,18 L58,40 L72,40 L72,55
            L100,55 L100,28 L114,28 L114,8  L128,8  L128,28 L142,28 L142,55
            L165,55 L165,38 L180,38 L180,15 L194,15 L194,38 L215,38 L215,60
            L245,60 L245,30 L260,30 L260,10 L274,10 L274,30 L288,30 L288,55
            L318,55 L318,42 L335,42 L335,20 L349,20 L349,42 L370,42 L370,62
            L400,62 L400,35 L414,35 L414,12 L428,12 L428,35 L445,35 L445,58
            L478,58 L478,44 L495,44 L495,22 L509,22 L509,44 L530,44 L530,62
            L562,62 L562,32 L577,32 L577,9  L591,9  L591,32 L608,32 L608,55
            L638,55 L638,40 L655,40 L655,18 L669,18 L669,40 L688,40 L688,60
            L720,60 L720,36 L735,36 L735,14 L749,14 L749,36 L768,36 L768,58
            L800,58 L800,44 L817,44 L817,24 L831,24 L831,44 L848,44 L848,62
            L880,62 L880,34 L895,34 L895,11 L909,11 L909,34 L926,34 L926,55
            L956,55 L956,42 L971,42 L971,20 L985,20 L985,42 L1002,42 L1002,60
            L1034,60 L1034,30 L1048,30 L1048,8  L1062,8  L1062,30 L1080,30 L1080,55
            L1112,55 L1112,40 L1127,40 L1127,18 L1141,18 L1141,40 L1158,40 L1158,62
            L1190,62 L1190,35 L1204,35 L1204,13 L1218,13 L1218,35 L1236,35 L1236,58
            L1268,58 L1268,44 L1282,44 L1282,22 L1296,22 L1296,44 L1312,44 L1312,62
            L1345,62 L1345,36 L1360,36 L1360,15 L1374,15 L1374,36 L1390,36 L1390,58
            L1440,58 L1440,110 Z
          "
          fill="#06040e"
          opacity="0.92"
        />
      </svg>
    </div>
  );
}

// ── Main hero component ──────────────────────────────────────
export default function Header() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const textX = useSpring(useTransform(rawX, [-0.5, 0.5], [10, -10]), { stiffness: 50, damping: 18 });
  const textY = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]),   { stiffness: 50, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };
  const onMouseLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      {/* ── Layer 0: Synthwave sky gradient ────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #05030e 0%, #0e0520 16%, #280840 34%, #5e1050 54%, #aa1860 72%, #e01e82 88%, #e91e8c 100%)",
        }}
      />

      {/* ── Layer 1: Stars ──────────────────────────────────── */}
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute crt-star pointer-events-none"
          style={{
            top: s.top, left: s.left,
            width: s.r * 2, height: s.r * 2,
            borderRadius: "50%",
            background: "#ffffff",
            boxShadow: `0 0 ${s.r * 3}px ${s.r}px rgba(255,255,255,0.7)`,
            animationDelay: s.d,
          }}
        />
      ))}

      {/* ── Layer 2: Sun ────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(500px, 58vw)",
          zIndex: 1,
        }}
      >
        <svg viewBox="0 0 400 215" width="100%" aria-hidden="true" overflow="visible">
          <defs>
            <linearGradient id="hero-sun-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#fde68a" />
              <stop offset="22%"  stopColor="#fbbf24" />
              <stop offset="52%"  stopColor="#f97316" />
              <stop offset="100%" stopColor="#e91e8c" />
            </linearGradient>
            <filter id="hero-sun-bloom" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="10" result="b" />
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Half-circle */}
          <path
            d="M 5 202 A 195 195 0 0 1 395 202 Z"
            fill="url(#hero-sun-grad)"
            filter="url(#hero-sun-bloom)"
          />
          {/* Classic stripe mask */}
          <rect x="5" y="116" width="390" height="15" fill="#05030e" opacity="0.96"/>
          <rect x="5" y="139" width="390" height="13" fill="#05030e" opacity="0.96"/>
          <rect x="5" y="160" width="390" height="12" fill="#05030e" opacity="0.96"/>
          <rect x="5" y="179" width="390" height="11" fill="#05030e" opacity="0.96"/>
          <rect x="5" y="196" width="390" height="9"  fill="#05030e" opacity="0.96"/>
          {/* Atmospheric base halo */}
          <ellipse cx="200" cy="202" rx="200" ry="32" fill="rgba(249,115,22,0.22)"/>
        </svg>
      </div>

      {/* ── Layer 3: Horizon glow ───────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "38%",
          left: 0, right: 0,
          height: "2px",
          zIndex: 2,
          background: "linear-gradient(90deg, transparent 0%, #f97316 25%, #fde68a 50%, #f97316 75%, transparent 100%)",
          boxShadow: "0 0 18px 5px rgba(249,115,22,0.65), 0 0 55px 10px rgba(233,30,140,0.38)",
        }}
      />

      {/* ── Layer 4: City skyline ───────────────────────────── */}
      <div style={{ zIndex: 3, position: "absolute", inset: 0 }}>
        <CitySkyline />
      </div>

      {/* ── Layer 5: Perspective grid floor ────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: 0, left: 0, right: 0, height: "40%", zIndex: 4 }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(233,30,140,0.65) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(249,115,22,0.35) 1px, transparent 1px)",
            backgroundSize: "80px 52px",
            transform: "perspective(640px) rotateX(74deg) translateY(30%)",
            transformOrigin: "50% 100%",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 90%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 90%)",
          }}
        />
      </div>

      {/* ── Layer 6: Bottom fade to body bg ────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30%",
          zIndex: 5,
          background: "linear-gradient(to top, #07070e 0%, transparent 100%)",
        }}
      />

      {/* ── Layer 7: Palm silhouettes ───────────────────────── */}
      <div
        className="hidden sm:block absolute bottom-0 left-0 pointer-events-none"
        style={{ width: "17vw", maxWidth: 240, height: "78%", zIndex: 6 }}
      >
        <PalmSilhouette />
      </div>
      <div
        className="hidden sm:block absolute bottom-0 right-0 pointer-events-none"
        style={{ width: "22vw", maxWidth: 300, height: "90%", zIndex: 6 }}
      >
        <PalmSilhouette flip />
      </div>

      {/* ── Layer 8: Spotlight beam ─────────────────────────── */}
      <Spotlight />

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8" style={{ zIndex: 10 }}>
        <motion.div
          className="max-w-2xl py-44 lg:py-52"
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <h1 className="mb-8 leading-none">
            <span
              className="block font-michroma g-text uppercase tracking-[0.20em] mb-1"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                fontWeight: 900,
                filter:
                  "drop-shadow(0 0 1px rgba(233,30,140,1)) " +
                  "drop-shadow(0 0 4px rgba(233,30,140,0.95)) " +
                  "drop-shadow(0 0 12px rgba(233,30,140,0.75)) " +
                  "drop-shadow(0 0 28px rgba(249,115,22,0.40))",
              }}
            >
              Ajdin
            </span>
            <span
              className="block font-garamond font-bold italic leading-[0.88] g-text"
              style={{
                fontSize: "clamp(4.5rem, 12vw, 10rem)",
                filter: "drop-shadow(0 0 24px rgba(233,30,140,0.35))",
              }}
            >
              mehmedović.
            </span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg mb-10 max-w-md leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <MovingBorderButton href="/ajdin_mehmedovic_cv.pdf" target="_blank" rel="noopener noreferrer">
              {t.hero.downloadCV}
              <FaDownload className="size-3.5" />
            </MovingBorderButton>
            <Link
              href="https://github.com/Aydhiny"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
            >
              {t.hero.github}
              <FaGithub className="size-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll hint ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/40 text-[0.6rem] tracking-[0.25em] uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

    </section>
  );
}
