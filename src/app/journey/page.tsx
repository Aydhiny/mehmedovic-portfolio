"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ChaosImage from "@images/game/1.png";
import MusicImage from "@images/music/aydhiny.jpg";
import CodeImage from "@images/code.png";
import { useLanguage } from "@/context/LanguageContext";
import {
  NeonSun,
  PalmTree,
  RetroCar,
  RetroSunglasses,
  FloatWrap,
} from "@/components/SynthwaveDecor";
import ShapeCanvas from "@/components/ShapeCanvas";

const milestoneImages = [MusicImage, CodeImage, ChaosImage];
const milestoneAccents = ["#e91e8c", "#f97316", "#fbbf24"];

export default function Journey() {
  const { t } = useLanguage();
  const milestones = t.journey.milestones.map((m, i) => ({
    ...m,
    image: milestoneImages[i],
    accent: milestoneAccents[i],
  }));

  const aheadWords = t.journey.aheadTitle.split(" ");
  const aheadLast = aheadWords[aheadWords.length - 1];
  const aheadRest = aheadWords.slice(0, -1).join(" ");

  return (
    <div className="min-h-screen text-white">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 sm:px-8 overflow-hidden hero-glow">

        {/* Perspective grid floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none z-[1]">
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(233,30,140,0.18) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(249,115,22,0.12) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              transform: "perspective(480px) rotateX(70deg) translateY(38%)",
              transformOrigin: "50% 100%",
              maskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 75%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 75%)",
            }}
          />
        </div>

        {/* NeonSun horizon */}
        <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-64 sm:w-96 pointer-events-none z-[1] opacity-50">
          <NeonSun className="w-full" />
        </div>

        {/* Palm trees */}
        <div className="absolute bottom-0 left-0 w-24 sm:w-36 h-52 sm:h-72 pointer-events-none z-[1]">
          <FloatWrap delay={0.4} amplitude={6} duration={6}>
            <PalmTree className="w-full h-full" color="#e91e8c" opacity={0.35} />
          </FloatWrap>
        </div>
        <div className="absolute bottom-0 right-0 w-24 sm:w-36 h-52 sm:h-72 pointer-events-none z-[1]">
          <FloatWrap delay={1.1} amplitude={7} duration={7}>
            <PalmTree className="w-full h-full" color="#f97316" opacity={0.30} flip />
          </FloatWrap>
        </div>

        {/* Retro car */}
        <div className="absolute bottom-[10%] right-[8%] w-40 sm:w-52 pointer-events-none z-[1] opacity-40 hidden sm:block">
          <RetroCar className="w-full" color="#e91e8c" opacity={0.50} />
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070e] to-transparent pointer-events-none z-[2]" />

        {/* Heading */}
        <div className="relative z-[3]">
          <motion.p
            className="label-tag mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.journey.tag}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span
              className="block font-michroma g-text uppercase tracking-[0.28em] mb-3"
              style={{ fontSize: "clamp(0.7rem, 1.8vw, 1rem)", fontWeight: 700 }}
            >
              {t.journey.heroTitle}
            </span>
            <span
              className="block font-garamond italic g-text leading-none"
              style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)" }}
            >
              {t.journey.dreamer}
            </span>
            <span
              className="block font-michroma g-text uppercase tracking-[0.28em] my-4"
              style={{ fontSize: "clamp(0.7rem, 1.8vw, 1rem)", fontWeight: 700 }}
            >
              {t.journey.heroTo}
            </span>
            <span
              className="block font-garamond italic g-text-teal leading-none"
              style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)" }}
            >
              {t.journey.doer}
            </span>
          </motion.div>

          <motion.p
            className="text-[var(--fg-2)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.journey.heroDesc}
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="text-[var(--fg-3)] text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--fg-3)] to-transparent" />
        </motion.div>
      </section>

      {/* ── Milestones ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-28">
        <div className="space-y-36">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Image */}
              <div
                className="flex-1 relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${m.accent}28` }}
              >
                {/* Top neon line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px z-20 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.accent}90, transparent)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070e]/70 to-transparent z-10" />
                <Image
                  src={m.image}
                  alt={`${m.titlePlain} ${m.titleAccent}`.trim()}
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                {/* Year badge on image */}
                <span
                  className="absolute bottom-4 left-4 z-20 font-michroma tracking-widest text-[0.65rem] px-3 py-1 rounded-lg"
                  style={{
                    color: m.accent,
                    background: `${m.accent}16`,
                    border: `1px solid ${m.accent}40`,
                  }}
                >
                  {m.year}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Big year watermark */}
                <p
                  className="font-michroma font-bold leading-none mb-2 opacity-[0.06] select-none pointer-events-none"
                  style={{ fontSize: "clamp(5rem, 14vw, 10rem)", color: m.accent }}
                >
                  {m.year}
                </p>

                <p className="label-tag mb-3 -mt-6 relative">{m.subtitle}</p>

                {m.titlePlain && (
                  <h2
                    className="font-michroma uppercase tracking-wide text-lg sm:text-xl mb-1"
                    style={{ color: m.accent }}
                  >
                    {m.titlePlain}
                  </h2>
                )}
                <h2 className="font-garamond font-bold italic g-text text-5xl sm:text-6xl leading-none mb-5">
                  {m.titleAccent}
                </h2>
                <p className="text-[var(--fg-2)] leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Path Ahead ───────────────────────────────────────── */}
      <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 text-center overflow-hidden">
        {/* Three.js torus accent */}
        <ShapeCanvas shape="torus" color="#fbbf24" wireOpacity={0.3} speed={0.6}
          className="absolute top-4 left-4 w-28 h-28 opacity-25 pointer-events-none hidden sm:block" />
        <ShapeCanvas shape="icosahedron" color="#f97316" wireOpacity={0.28} speed={0.8}
          className="absolute top-4 right-4 w-24 h-24 opacity-22 pointer-events-none hidden sm:block" />

        {/* Floating sunglasses accents */}
        <div className="absolute top-6 right-6 w-28 pointer-events-none opacity-30 hidden sm:block">
          <FloatWrap delay={0.3} amplitude={8} duration={5}>
            <RetroSunglasses className="w-full" color="#fbbf24" opacity={0.9} />
          </FloatWrap>
        </div>
        <div className="absolute top-6 left-6 w-28 pointer-events-none opacity-25 hidden sm:block">
          <FloatWrap delay={0.9} amplitude={6} duration={6.5}>
            <RetroSunglasses className="w-full" color="#e91e8c" opacity={0.9} />
          </FloatWrap>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-[var(--border-2)] p-10 sm:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(233,30,140,0.07) 0%, rgba(7,7,14,0.85) 50%, rgba(249,115,22,0.07) 100%)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32"
            style={{ background: "linear-gradient(90deg, transparent, #e91e8c, transparent)" }}
          />

          <p className="label-tag mb-5">{t.journey.aheadTag}</p>

          {aheadRest && (
            <h2 className="font-michroma uppercase tracking-wide text-2xl sm:text-3xl text-white mb-1">
              {aheadRest}
            </h2>
          )}
          <h2 className="font-garamond font-bold italic g-text text-5xl sm:text-6xl mb-6">
            {aheadLast}
          </h2>

          <p className="text-[var(--fg-2)] text-lg max-w-2xl mx-auto leading-relaxed">
            {t.journey.aheadDesc}
          </p>
        </motion.div>
      </section>

    </div>
  );
}
