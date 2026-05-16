"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const LINES = [
  "> initializing... mehmedovic.dev/secret",
  "> access granted.",
  "> loading hidden records...",
  "",
  "  ██████████████████████████████████",
  "  █  CLASSIFIED — DEVELOPER NOTES  █",
  "  ██████████████████████████████████",
  "",
  "> this portfolio was built late at night,",
  "  listening to synthwave on repeat.",
  "",
  "> the retro grid? coded from scratch with css perspective.",
  "> the neon sun? pure svg, no libraries.",
  "> the 3d scene? vanilla three.js, no react-three-fiber.",
  "",
  "> easter eggs hidden across the site:",
  "  [x] you found this page",
  "  [ ] konami code — try it",
  "  [ ] type 'aydhiny' anywhere",
  "  [ ] click the sun three times",
  "  [ ] switch tabs and come back",
  "",
  "> stack: next.js 15 · three.js · framer-motion · tailwind",
  "> deployed on vercel · designed & built by ajdin mehmedović",
  "",
  "> current mood: [ synthwave intensifies ]",
  "",
  "> end of file.",
  "  _",
];

export default function SecretPage() {
  const [revealed, setRevealed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setRevealed((prev) => [...prev, LINES[i]]);
      i++;
      if (i >= LINES.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#07070e] flex flex-col items-center justify-center px-5 py-24 overflow-hidden">
      {/* CRT scanline overlay — local, more intense */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
          opacity: 0.06,
        }}
      />

      {/* Neon glow orb */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(233,30,140,0.08) 0%, transparent 65%)",
        }}
      />

      <motion.div
        className="relative z-20 w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Terminal window chrome */}
        <div className="rounded-xl overflow-hidden border border-[rgba(233,30,140,0.25)] shadow-[0_0_40px_rgba(233,30,140,0.12)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(233,30,140,0.15)]"
            style={{ background: "rgba(233,30,140,0.07)" }}>
            <span className="w-3 h-3 rounded-full bg-[#e91e8c] opacity-70" />
            <span className="w-3 h-3 rounded-full bg-[#f97316] opacity-70" />
            <span className="w-3 h-3 rounded-full bg-[#fbbf24] opacity-70" />
            <span className="ml-3 font-michroma text-[0.6rem] text-[var(--fg-3)] uppercase tracking-widest">
              terminal — /secret
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="p-6 sm:p-8 font-mono text-sm leading-7 min-h-[420px]"
            style={{ background: "rgba(7,7,14,0.95)" }}
          >
            {revealed.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  line.startsWith(">")
                    ? "text-[var(--accent)]"
                    : line.includes("██")
                    ? "text-[var(--accent)] opacity-60"
                    : line.startsWith("  [x]")
                    ? "text-[#4ade80]"
                    : line.startsWith("  [ ]")
                    ? "text-[var(--fg-3)]"
                    : "text-[var(--fg-2)]"
                }
              >
                {line || " "}
              </motion.div>
            ))}

            {/* Blinking cursor */}
            {done && (
              <motion.span
                className="inline-block w-2 h-4 bg-[var(--accent)] ml-0.5 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Back link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="font-michroma text-[0.65rem] uppercase tracking-[0.3em] text-[var(--fg-3)] hover:text-[var(--accent)] transition-colors"
          >
            ← return to surface
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
