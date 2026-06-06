"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import Spotlight from "@/components/Spotlight";
import MovingBorderButton from "@/components/MovingBorderButton";
import { useLanguage } from "@/context/LanguageContext";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

// Stars
const STARS = [
  { top: "6%",  left: "5%",  r: 1.6, d: "0s"   },
  { top: "11%", left: "14%", r: 1.0, d: "0.6s"  },
  { top: "4%",  left: "28%", r: 1.4, d: "1.2s"  },
  { top: "8%",  left: "42%", r: 1.0, d: "0.3s"  },
  { top: "15%", left: "60%", r: 1.6, d: "1.8s"  },
  { top: "5%",  left: "72%", r: 1.0, d: "0.8s"  },
  { top: "12%", left: "84%", r: 1.4, d: "0.2s"  },
  { top: "7%",  left: "93%", r: 1.0, d: "1.4s"  },
  { top: "19%", left: "20%", r: 1.0, d: "2.0s"  },
  { top: "22%", left: "50%", r: 1.2, d: "0.5s"  },
  { top: "3%",  left: "56%", r: 1.0, d: "1.6s"  },
  { top: "17%", left: "90%", r: 1.4, d: "1.0s"  },
];

// Filled palm silhouette
function PalmSilhouette({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none absolute bottom-0 ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined, transformOrigin: "50% 100%" }}
    >
      <svg viewBox="0 0 160 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M72 340 C68 280 62 210 66 155 C68 125 70 100 74 70 C78 100 80 125 82 155 C86 210 80 280 76 340 Z" fill="#03010a" />
        <ellipse cx="74" cy="338" rx="14" ry="6" fill="#03010a" />
        <path d="M74 70 C46 48 12 55 4 78 C26 60 54 58 74 70 Z" fill="#03010a" />
        <path d="M74 70 C102 48 136 55 144 78 C122 60 94 58 74 70 Z" fill="#03010a" />
        <path d="M74 70 C68 38 72 10 82 18 C78 40 76 58 74 70 Z" fill="#03010a" />
        <path d="M74 70 C52 40 54 10 68 18 C68 40 72 56 74 70 Z" fill="#03010a" />
        <path d="M74 70 C96 40 94 10 80 18 C80 40 76 56 74 70 Z" fill="#03010a" />
        <path d="M74 70 C42 75 18 100 24 120 C38 96 58 80 74 70 Z" fill="#03010a" />
        <path d="M74 70 C106 75 130 100 124 120 C110 96 90 80 74 70 Z" fill="#03010a" />
        <path d="M74 70 C38 82 10 115 18 138 C34 108 56 88 74 70 Z" fill="#03010a" />
        <path d="M74 70 C110 82 138 115 130 138 C114 108 92 88 74 70 Z" fill="#03010a" />
        <circle cx="68" cy="76" r="5" fill="#03010a" />
        <circle cx="80" cy="73" r="4.5" fill="#03010a" />
        <circle cx="72" cy="82" r="4" fill="#03010a" />
      </svg>
    </div>
  );
}

// City skyline
function CitySkyline() {
  return (
    <div className="absolute pointer-events-none w-full" aria-hidden="true" style={{ bottom: "36%", left: 0 }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" width="100%" height="80">
        <path
          d="M0,100 L0,65 L35,65 L35,38 L48,38 L48,16 L62,16 L62,38 L76,38 L76,55
          L105,55 L105,26 L119,26 L119,7 L133,7 L133,26 L147,26 L147,55
          L172,55 L172,36 L188,36 L188,14 L202,14 L202,36 L224,36 L224,60
          L255,60 L255,28 L270,28 L270,9 L284,9 L284,28 L299,28 L299,55
          L330,55 L330,40 L347,40 L347,19 L361,19 L361,40 L382,40 L382,62
          L415,62 L415,33 L430,33 L430,11 L444,11 L444,33 L462,33 L462,58
          L496,58 L496,42 L513,42 L513,21 L527,21 L527,42 L549,42 L549,62
          L583,62 L583,30 L598,30 L598,8 L612,8 L612,30 L630,30 L630,55
          L662,55 L662,38 L679,38 L679,16 L693,16 L693,38 L714,38 L714,60
          L748,60 L748,34 L763,34 L763,13 L777,13 L777,34 L798,34 L798,58
          L832,58 L832,42 L849,42 L849,22 L863,22 L863,42 L882,42 L882,62
          L916,62 L916,32 L931,32 L931,10 L945,10 L945,32 L964,32 L964,55
          L998,55 L998,38 L1013,38 L1013,17 L1027,17 L1027,38 L1048,38 L1048,60
          L1082,60 L1082,28 L1097,28 L1097,7 L1111,7 L1111,28 L1130,28 L1130,55
          L1164,55 L1164,40 L1179,40 L1179,18 L1193,18 L1193,40 L1214,40 L1214,62
          L1248,62 L1248,33 L1263,33 L1263,12 L1277,12 L1277,33 L1296,33 L1296,58
          L1330,58 L1330,44 L1345,44 L1345,23 L1359,23 L1359,44 L1378,44 L1378,62
          L1410,62 L1410,36 L1425,36 L1425,15 L1440,15 L1440,100 Z"
          fill="#03010a" opacity="0.92"
        />
      </svg>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const textX = useSpring(useTransform(rawX, [-0.5, 0.5], [8, -8]), { stiffness: 50, damping: 18 });
  const textY = useSpring(useTransform(rawY, [-0.5, 0.5], [4, -4]), { stiffness: 50, damping: 18 });

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

      {/* Sky gradient */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(to bottom, #05030d 0%, #0d0420 16%, #20063a 32%, #3e0848 50%, #620d4e 64%, #871050 76%, #a51452 86%, #b81756 100%)",
      }} />

      {/* Stars */}
      {STARS.map((s, i) => (
        <div key={i} className="absolute crt-star pointer-events-none" style={{
          top: s.top, left: s.left,
          width: s.r * 2, height: s.r * 2,
          borderRadius: "50%", background: "#fff",
          boxShadow: `0 0 ${s.r * 3}px ${s.r}px rgba(255,255,255,0.6)`,
          animationDelay: s.d,
        }} />
      ))}

      {/* Sun — right of center so it sits behind the Three.js shapes */}
      <div className="absolute pointer-events-none" style={{
        bottom: "36%", left: "56%", transform: "translateX(-50%)",
        width: "min(400px, 42vw)", zIndex: 1,
      }}>
        <svg viewBox="0 0 400 215" width="100%" aria-hidden="true" overflow="visible">
          <defs>
            <linearGradient id="sun-g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#fde68a" />
              <stop offset="24%"  stopColor="#fbbf24" />
              <stop offset="55%"  stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2185b" />
            </linearGradient>
            <filter id="sun-f" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          <path d="M 5 202 A 195 195 0 0 1 395 202 Z" fill="url(#sun-g)" filter="url(#sun-f)" />
          <rect x="5" y="118" width="390" height="14" fill="#05030d" opacity="0.95"/>
          <rect x="5" y="140" width="390" height="12" fill="#05030d" opacity="0.95"/>
          <rect x="5" y="160" width="390" height="11" fill="#05030d" opacity="0.95"/>
          <rect x="5" y="179" width="390" height="10" fill="#05030d" opacity="0.95"/>
          <rect x="5" y="196" width="390" height="8"  fill="#05030d" opacity="0.95"/>
          <ellipse cx="200" cy="202" rx="200" ry="28" fill="rgba(249,115,22,0.20)"/>
        </svg>
      </div>

      {/* Horizon glow */}
      <div className="absolute pointer-events-none" style={{
        bottom: "36%", left: 0, right: 0, height: "2px", zIndex: 2,
        background: "linear-gradient(90deg, transparent 0%, #f97316 25%, #fde68a 50%, #f97316 75%, transparent 100%)",
        boxShadow: "0 0 16px 4px rgba(249,115,22,0.55), 0 0 50px 8px rgba(233,30,140,0.30)",
      }} />

      {/* City skyline */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3 }}><CitySkyline /></div>

      {/* Grid floor */}
      <div className="absolute pointer-events-none" style={{ bottom: 0, left: 0, right: 0, height: "38%", zIndex: 4 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(233,30,140,0.60) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(249,115,22,0.30) 1px, transparent 1px)",
          backgroundSize: "80px 50px",
          transform: "perspective(600px) rotateX(72deg) translateY(28%)",
          transformOrigin: "50% 100%",
          maskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 90%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 90%)",
        }} />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{
        height: "28%", zIndex: 5,
        background: "linear-gradient(to top, #07070e 0%, transparent 100%)",
      }} />

      {/* Palm silhouettes */}
      <div className="hidden sm:block absolute bottom-0 left-0 pointer-events-none" style={{ width: "15vw", maxWidth: 210, height: "74%", zIndex: 6 }}>
        <PalmSilhouette />
      </div>
      <div className="hidden sm:block absolute bottom-0 right-0 pointer-events-none" style={{ width: "19vw", maxWidth: 270, height: "86%", zIndex: 6 }}>
        <PalmSilhouette flip />
      </div>

      <Spotlight />

      {/* ── Three.js orrery — absolute in sky, upper-right ── */}
      <motion.div
        className="absolute hidden lg:block pointer-events-none"
        style={{ top: "12%", right: "5%", zIndex: 8 }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        {/* Neon glow orb behind shapes */}
        <div className="absolute pointer-events-none" style={{
          inset: "-30%",
          background: "radial-gradient(circle, rgba(233,30,140,0.20) 0%, rgba(249,115,22,0.10) 40%, transparent 70%)",
          filter: "blur(24px)",
        }} />
        <HeroScene className="w-[300px] h-[300px] xl:w-[360px] xl:h-[360px] relative" />
      </motion.div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8" style={{ zIndex: 10 }}>
        <div className="flex flex-col gap-10 py-36 lg:py-44">

          {/* Name — full width, never constrained to a column */}
          <motion.h1
            className="leading-none"
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <span
              className="block font-michroma g-text uppercase tracking-[0.18em]"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 5rem)",
                fontWeight: 900,
                filter:
                  "drop-shadow(0 0 2px rgba(233,30,140,1)) " +
                  "drop-shadow(0 0 8px rgba(233,30,140,0.85)) " +
                  "drop-shadow(0 0 24px rgba(249,115,22,0.40))",
              }}
            >
              Ajdin
            </span>
            <span
              className="block font-garamond font-bold italic leading-[0.85] g-text"
              style={{
                fontSize: "clamp(4.5rem, 9.5vw, 9.5rem)",
                filter:
                  "drop-shadow(0 0 4px rgba(233,30,140,0.70)) " +
                  "drop-shadow(0 0 20px rgba(233,30,140,0.35))",
              }}
            >
              mehmedović.
            </span>
          </motion.h1>

          {/* Tagline + buttons — left-aligned below the name */}
          <motion.div
            className="max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed">
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
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/35 text-[0.6rem] tracking-[0.25em] uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent" />
      </motion.div>

    </section>
  );
}
