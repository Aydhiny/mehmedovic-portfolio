"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Hyperspeed = dynamic(() => import("@/components/Hyperspeed"), { ssr: false });

export default function Header() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Hyperspeed WebGL background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Hyperspeed />
      </div>

      {/* Gradient vignette so text stays readable */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#070707]/60 via-transparent to-[#070707]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#070707]/80 via-transparent to-[#070707]/80" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl w-full mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-28">

          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.p
              className="label-tag mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Portfolio · 2025
            </motion.p>

            {/* Split typography: DM Sans + Garamond Italic */}
            <motion.h1
              className="mb-6 leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            >
              <span className="block text-5xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                Ajdin
              </span>
              <span className="block font-garamond italic text-6xl sm:text-7xl xl:text-[5.5rem] text-[var(--accent)] leading-tight">
                Mehmedović
              </span>
            </motion.h1>

            <motion.p
              className="text-[var(--fg-2)] text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Software Engineer · Music Producer · Game Developer · Graphic Designer
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <Link
                href="/ajdin_mehmedovic_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors duration-150 glow-button"
              >
                Download CV
                <FaDownload className="size-3.5" />
              </Link>
              <Link
                href="https://github.com/Aydhiny"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold"
              >
                GitHub
                <FaGithub className="size-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-25 blur-3xl scale-125" />
              <div className="absolute inset-0 rounded-full border border-[var(--accent)]/20 animate-pulse" />
              <Image
                src={Profile}
                alt="Ajdin Mehmedović profile photo"
                width={340}
                height={340}
                priority
                draggable={false}
                className="relative rounded-full border border-white/10 object-cover w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[var(--fg-3)] text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-3)] to-transparent" />
      </motion.div>

    </section>
  );
}
