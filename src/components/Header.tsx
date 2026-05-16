"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import { motion } from "framer-motion";
import Spotlight from "@/components/Spotlight";
import MovingBorderButton from "@/components/MovingBorderButton";

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow">

      {/* CSS Spotlight — strong atmospheric beams */}
      <Spotlight />

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070e] to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl w-full mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-36 lg:py-44">

          {/* ── Left: Text ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Live indicator */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                Available for Collaboration
              </span>
            </div>

            {/* Name — split DM Sans + Garamond gradient */}
            <h1 className="mb-8 leading-none">
              {/* "Ajdin" — small, visible, tracked uppercase */}
              <span className="block text-xl sm:text-2xl font-semibold tracking-[0.28em] uppercase text-white/50 mb-2">
                Ajdin
              </span>
              {/* "Mehmedović" — massive gradient Garamond */}
              <span className="block font-garamond font-bold italic leading-[0.88] g-text"
                style={{ fontSize: "clamp(4.5rem, 12vw, 10rem)" }}>
                Mehmedović
              </span>
            </h1>

            <p className="text-[var(--fg-2)] text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Software Engineer · Music Producer · Game Developer · Graphic Designer
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <MovingBorderButton href="/ajdin_mehmedovic_cv.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
                <FaDownload className="size-3.5" />
              </MovingBorderButton>
              <Link
                href="https://github.com/Aydhiny"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold"
              >
                GitHub
                <FaGithub className="size-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Profile + floating badges ── */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          >
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-full opacity-30 blur-3xl scale-125"
              style={{ background: "radial-gradient(circle, #7c3aed 0%, #00cfb4 60%, transparent 75%)" }} />

            <Image
              src={Profile}
              alt="Ajdin Mehmedović"
              width={340}
              height={340}
              priority
              draggable={false}
              className="relative rounded-full border border-white/10 object-cover w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
            />

            {/* Floating badge — top left */}
            <motion.div
              className="absolute -top-6 -left-10 glass rounded-xl px-4 py-2.5 hidden sm:flex items-center gap-2.5"
              style={{ border: "1px solid rgba(250,204,21,0.2)" }}
              initial={{ opacity: 0, x: -16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <span className="text-lg">🏆</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">1st Place</p>
                <p className="text-[var(--fg-3)] text-[0.6rem] leading-none">FIT Challenge v18</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              className="absolute -bottom-4 -right-8 glass rounded-xl px-4 py-2.5 hidden sm:flex items-center gap-2.5"
              style={{ border: "1px solid rgba(0,207,180,0.2)" }}
              initial={{ opacity: 0, x: 16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
            >
              <span className="text-lg">🎵</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">5M+ Streams</p>
                <p className="text-[var(--fg-3)] text-[0.6rem] leading-none">Worldwide</p>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-3 -right-12 glass rounded-xl px-4 py-2.5 hidden lg:flex items-center gap-2.5"
              style={{ border: "1px solid rgba(124,58,237,0.25)" }}
              initial={{ opacity: 0, x: 16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <span className="text-lg">⚡</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">6+ Years</p>
                <p className="text-[var(--fg-3)] text-[0.6rem] leading-none">Creating</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[var(--fg-3)] text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-3)] to-transparent" />
      </motion.div>

    </section>
  );
}
