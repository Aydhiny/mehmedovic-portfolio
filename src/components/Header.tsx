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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* CSS Spotlight background — replaces broken WebGL Hyperspeed */}
      <Spotlight />

      {/* Bottom fade into page background */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#070707] pointer-events-none" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl w-full mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-32 lg:py-40">

          {/* ── Left: Text ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Live indicator */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-emerald-400">
                Open · Available for Collaboration
              </span>
            </motion.div>

            {/* Name — split DM Sans + Garamond */}
            <motion.h1
              className="mb-8 leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            >
              {/* "Ajdin" — small, tracked, uppercase DM Sans */}
              <span className="block text-2xl sm:text-3xl font-light tracking-[0.22em] uppercase text-[var(--fg-3)] mb-1">
                Ajdin
              </span>
              {/* "Mehmedović" — dominant Garamond, bold italic, LARGE */}
              <span className="block font-garamond font-bold italic text-[5.5rem] sm:text-[7rem] lg:text-[8.5rem] xl:text-[10rem] text-[var(--accent)] leading-[0.88]">
                Mehmedović
              </span>
            </motion.h1>

            <motion.p
              className="text-[var(--fg-2)] text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              Software Engineer · Music Producer · Game Developer · Graphic Designer
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          {/* ── Right: Profile + floating badges ── */}
          <motion.div
            className="flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
          >
            {/* Profile image */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-3xl scale-125" />
              <div className="absolute inset-0 rounded-full border border-[var(--accent)]/20 animate-pulse" />
              <Image
                src={Profile}
                alt="Ajdin Mehmedović profile photo"
                width={340}
                height={340}
                priority
                draggable={false}
                className="relative rounded-full border border-white/10 object-cover w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
              />
            </div>

            {/* Floating badge — top left */}
            <motion.div
              className="absolute -top-6 -left-8 glass rounded-xl px-4 py-2.5 hidden sm:flex items-center gap-2.5 border border-yellow-400/20"
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-xl">🏆</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">1st Place</p>
                <p className="text-[var(--fg-3)] text-[0.65rem] leading-none">FIT Challenge v18</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              className="absolute -bottom-4 -right-6 glass rounded-xl px-4 py-2.5 hidden sm:flex items-center gap-2.5 border border-[var(--accent-teal)]/20"
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-xl">🎵</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">5M+ Streams</p>
                <p className="text-[var(--fg-3)] text-[0.65rem] leading-none">Worldwide</p>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-4 -right-10 glass rounded-xl px-4 py-2.5 hidden lg:flex items-center gap-2.5 border border-[var(--accent)]/20"
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-white font-semibold text-xs leading-none mb-0.5">6+ Years</p>
                <p className="text-[var(--fg-3)] text-[0.65rem] leading-none">Creating</p>
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
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="text-[var(--fg-3)] text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-3)] to-transparent" />
      </motion.div>

    </section>
  );
}
