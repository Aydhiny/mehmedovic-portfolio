"use client";
import React from "react";
import { motion } from "framer-motion";

/* ── Retro neon sun ─────────────────────────────────────── */
export function NeonSun({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#f97316" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#e91e8c" stopOpacity="0.70" />
            <stop offset="100%" stopColor="#be185d" stopOpacity="0.20" />
          </linearGradient>
          <clipPath id="sunClip">
            <rect x="0" y="50" width="200" height="70" />
          </clipPath>
        </defs>
        {/* Sun disc */}
        <circle cx="100" cy="60" r="50" fill="url(#sunGrad)" />
        {/* Horizontal scan lines over bottom half */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect
            key={i}
            x="50"
            y={62 + i * 7}
            width="100"
            height="3"
            fill="#07070e"
            opacity="0.75"
          />
        ))}
        {/* Outer glow ring */}
        <circle cx="100" cy="60" r="52" stroke="#f97316" strokeWidth="1" strokeOpacity="0.30" fill="none" />
        <circle cx="100" cy="60" r="56" stroke="#e91e8c" strokeWidth="0.5" strokeOpacity="0.18" fill="none" />
      </svg>
    </div>
  );
}

/* ── Palm tree silhouette ───────────────────────────────── */
export function PalmTree({
  className = "",
  flip = false,
  color = "#e91e8c",
  opacity = 0.45,
}: {
  className?: string;
  flip?: boolean;
  color?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Trunk */}
        <path
          d="M38 160 C36 130 34 100 38 70 C40 55 42 40 40 20"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity={opacity}
        />
        {/* Fronds */}
        <path d="M40 20 C20 10 2 18 0 30" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={opacity} />
        <path d="M40 20 C55 5 72 8 76 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity={opacity} />
        <path d="M40 20 C25 2 30 -10 44 -4" stroke={color} strokeWidth="2" strokeLinecap="round" opacity={opacity * 0.8} />
        <path d="M40 20 C50 0 62 -6 66 6" stroke={color} strokeWidth="2" strokeLinecap="round" opacity={opacity * 0.8} />
        <path d="M40 20 C18 22 4 34 8 46" stroke={color} strokeWidth="2" strokeLinecap="round" opacity={opacity * 0.7} />
        <path d="M40 20 C60 24 72 38 66 50" stroke={color} strokeWidth="2" strokeLinecap="round" opacity={opacity * 0.7} />
        {/* Coconuts */}
        <circle cx="34" cy="26" r="3" fill={color} opacity={opacity * 0.9} />
        <circle cx="44" cy="24" r="2.5" fill={color} opacity={opacity * 0.9} />
      </svg>
    </div>
  );
}

/* ── Retro Lamborghini-style car silhouette ─────────────── */
export function RetroCar({
  className = "",
  color = "#e91e8c",
  opacity = 0.5,
  flip = false,
}: {
  className?: string;
  color?: string;
  opacity?: number;
  flip?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Body outline — low, wedge-shaped 80s supercar profile */}
        <path
          d="M10 55 L18 55 L22 45 L40 28 L75 22 L105 20 L145 22 L170 30 L188 45 L202 55 L210 55 L210 62 L10 62 Z"
          fill={color}
          fillOpacity={opacity * 0.15}
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity={opacity}
        />
        {/* Windshield */}
        <path
          d="M75 22 L80 28 L130 28 L145 22"
          stroke={color}
          strokeWidth="1.2"
          strokeOpacity={opacity * 0.8}
          fill={color}
          fillOpacity={opacity * 0.08}
        />
        {/* Rear spoiler */}
        <path d="M170 30 L175 22 L185 22 L188 28" stroke={color} strokeWidth="1.5" strokeOpacity={opacity} fill="none" />
        {/* Wheels */}
        <circle cx="55" cy="62" r="14" fill={color} fillOpacity={opacity * 0.08} stroke={color} strokeWidth="1.8" strokeOpacity={opacity} />
        <circle cx="55" cy="62" r="7" fill={color} fillOpacity={opacity * 0.12} stroke={color} strokeWidth="1" strokeOpacity={opacity * 0.6} />
        <circle cx="165" cy="62" r="14" fill={color} fillOpacity={opacity * 0.08} stroke={color} strokeWidth="1.8" strokeOpacity={opacity} />
        <circle cx="165" cy="62" r="7" fill={color} fillOpacity={opacity * 0.12} stroke={color} strokeWidth="1" strokeOpacity={opacity * 0.6} />
        {/* Headlights */}
        <rect x="12" y="45" width="12" height="6" rx="2" fill={color} fillOpacity={opacity * 0.6} />
        <rect x="196" y="45" width="10" height="5" rx="2" fill={color} fillOpacity={opacity * 0.4} />
        {/* Door line */}
        <line x1="110" y1="24" x2="112" y2="55" stroke={color} strokeWidth="0.8" strokeOpacity={opacity * 0.5} />
        {/* Glow under car */}
        <ellipse cx="110" cy="76" rx="90" ry="6" fill={color} fillOpacity={opacity * 0.12} />
      </svg>
    </div>
  );
}

/* ── Retro sunglasses ───────────────────────────────────── */
export function RetroSunglasses({
  className = "",
  color = "#f97316",
  opacity = 0.5,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Bridge */}
        <path d="M45 22 C50 18 70 18 75 22" stroke={color} strokeWidth="2" strokeOpacity={opacity} fill="none" />
        {/* Left lens — retro rectangular wrap */}
        <rect x="4" y="10" width="40" height="28" rx="6" fill={color} fillOpacity={opacity * 0.1} stroke={color} strokeWidth="2" strokeOpacity={opacity} />
        {/* Right lens */}
        <rect x="76" y="10" width="40" height="28" rx="6" fill={color} fillOpacity={opacity * 0.1} stroke={color} strokeWidth="2" strokeOpacity={opacity} />
        {/* Arms */}
        <path d="M4 20 L0 22" stroke={color} strokeWidth="2" strokeOpacity={opacity} strokeLinecap="round" />
        <path d="M116 20 L120 22" stroke={color} strokeWidth="2" strokeOpacity={opacity} strokeLinecap="round" />
        {/* Lens reflection */}
        <line x1="10" y1="16" x2="18" y2="16" stroke="white" strokeWidth="1" strokeOpacity={opacity * 0.4} strokeLinecap="round" />
        <line x1="82" y1="16" x2="90" y2="16" stroke="white" strokeWidth="1" strokeOpacity={opacity * 0.4} strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ── Floating animated wrapper ──────────────────────────── */
export function FloatWrap({
  children,
  delay = 0,
  amplitude = 10,
  duration = 5,
}: {
  children: React.ReactNode;
  delay?: number;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* ── CRT scanline overlay ───────────────────────────────── */
export function Scanlines({ opacity = 0.025 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9994]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
        opacity,
      }}
    />
  );
}
