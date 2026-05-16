"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaDownload, FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import Spotlight from "@/components/Spotlight";
import MovingBorderButton from "@/components/MovingBorderButton";
import HeroThree from "@/components/HeroThree";
import { useLanguage } from "@/context/LanguageContext";

function FloatingDiamond({
  size,
  color,
  top,
  left,
  delay,
  rotateDuration = 10,
}: {
  size: number;
  color: string;
  top: string;
  left: string;
  delay: number;
  rotateDuration?: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, left, width: size, height: size }}
      animate={{ y: [0, -14, 0], rotateZ: [0, 360] }}
      transition={{
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
        rotateZ: { duration: rotateDuration, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <svg viewBox="0 0 100 100" fill="none">
        <polygon
          points="50,3 97,50 50,97 3,50"
          stroke={color}
          strokeWidth="2"
          fill={color}
          fillOpacity="0.05"
        />
        <polygon
          points="50,22 78,50 50,78 22,50"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  // Shared mouse ref — written by mouse handler, read by Three.js tick loop (no re-render)
  const mouseRef = useRef({ x: 0, y: 0 });

  // framer-motion values for the card tilt
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 80, damping: 18 };

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [14, -14]), spring);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-14, 14]), spring);

  // Moving glare sheen on profile
  const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [15, 85]), spring);
  const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [15, 85]), spring);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.08) 0%, transparent 55%)`;

  // Opposite-direction text parallax for depth perception
  const textX = useSpring(useTransform(rawX, [-0.5, 0.5], [8, -8]), { stiffness: 50, damping: 18 });
  const textY = useSpring(useTransform(rawY, [-0.5, 0.5], [4, -4]), { stiffness: 50, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    mouseRef.current = { x, y };
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    mouseRef.current = { x: 0, y: 0 };
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-glow"
    >
      <Spotlight />

      {/* WebGL scene — rotating spheres + particles + accent shapes */}
      <HeroThree mouseRef={mouseRef} />

      {/* 3D perspective grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[52%] pointer-events-none z-[1]">
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(233,30,140,0.22) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(249,115,22,0.14) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            transform: "perspective(480px) rotateX(70deg) translateY(38%)",
            transformOrigin: "50% 100%",
            maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 80%)",
          }}
        />
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-[#07070e] via-[#07070e]/60 to-transparent pointer-events-none z-[1]" />

      {/* Floating 2D diamond accents — sit in front of WebGL, behind content */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <FloatingDiamond size={30} color="rgba(233,30,140,0.65)" top="16%" left="6%" delay={0} rotateDuration={11} />
        <FloatingDiamond size={20} color="rgba(249,115,22,0.55)" top="21%" left="88%" delay={1.6} rotateDuration={13} />
        <FloatingDiamond size={16} color="rgba(240,9,122,0.55)" top="66%" left="4%" delay={0.9} rotateDuration={8} />
        <FloatingDiamond size={24} color="rgba(251,191,36,0.45)" top="74%" left="91%" delay={2.3} rotateDuration={12} />
        <FloatingDiamond size={14} color="rgba(233,30,140,0.55)" top="44%" left="2%" delay={1.8} rotateDuration={9} />
      </div>

      {/* Main content */}
      <div className="relative z-[2] max-w-7xl w-full mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-36 lg:py-44">

          {/* ── Left: Text — counter-parallax ── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Name */}
            <h1 className="mb-8 leading-none">
              <span
                className="block font-michroma g-text uppercase tracking-[0.20em] mb-1"
                style={{
                  fontSize: "clamp(2.2rem, 6vw, 5rem)",
                  fontWeight: 900,
                  filter:
                    "drop-shadow(0 0 1px rgba(233,30,140,1)) " +
                    "drop-shadow(0 0 2px rgba(233,30,140,0.95)) " +
                    "drop-shadow(0 0 6px rgba(233,30,140,0.80)) " +
                    "drop-shadow(0 0 16px rgba(233,30,140,0.55)) " +
                    "drop-shadow(0 0 32px rgba(249,115,22,0.30))",
                }}
              >
                Ajdin
              </span>
              <span
                className="block font-garamond font-bold italic leading-[0.88] g-text"
                style={{ fontSize: "clamp(4.5rem, 12vw, 10rem)" }}
              >
                mehmedović.
              </span>
            </h1>

            <p className="text-[var(--fg-2)] text-base sm:text-lg mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
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

          {/* ── Right: 3D tilting profile card ── */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
            style={{ perspective: "1100px" }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative flex items-center justify-center"
            >
              {/* Ambient glow — pushed back in Z */}
              <div
                className="absolute rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{
                  width: 340,
                  height: 340,
                  background: "radial-gradient(circle, #e91e8c 0%, #f97316 60%, #fbbf24 100%)",
                  transform: "translateZ(-20px) scale(1.15)",
                }}
              />

              {/* Profile picture — floats forward */}
              <Image
                src={Profile}
                alt="Ajdin Mehmedović"
                width={340}
                height={340}
                priority
                draggable={false}
                className="relative rounded-full border border-white/10 object-cover w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 shadow-2xl"
                style={{ transform: "translateZ(30px)" }}
              />

              {/* Moving glare sheen */}
              <motion.div
                className="absolute rounded-full pointer-events-none w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                style={{ background: glare, transform: "translateZ(34px)" }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[var(--fg-3)] text-[0.6rem] tracking-[0.25em] uppercase">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-3)] to-transparent" />
      </motion.div>
    </section>
  );
}
