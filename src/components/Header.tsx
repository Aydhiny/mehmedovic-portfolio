"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 sm:px-8 pt-16">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20">

          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="label-tag mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Portfolio
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              Ajdin
              <br />
              <span className="text-[var(--accent)]">Mehmedović</span>
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
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border-2)] text-[var(--fg-2)] hover:border-[var(--accent)] hover:text-white text-sm font-semibold transition-colors duration-150"
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
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[var(--accent)] opacity-20 blur-3xl scale-110" />
              <Image
                src={Profile}
                alt="Ajdin Mehmedović profile photo"
                width={340}
                height={340}
                priority
                draggable={false}
                className="relative rounded-full border border-[var(--border)] object-cover w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
