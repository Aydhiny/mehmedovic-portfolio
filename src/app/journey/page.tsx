"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ChaosImage from "@images/game/1.png";
import MusicImage from "@images/music/aydhiny.jpg";
import CodeImage from "@images/code.png";
import { useLanguage } from "@/context/LanguageContext";

const milestoneImages = [MusicImage, CodeImage, ChaosImage];
const milestoneStyles = [
  { accent: "text-[var(--accent-teal)]", border: "border-[var(--accent-teal)]/30" },
  { accent: "text-[var(--accent)]",      border: "border-[var(--accent)]/30" },
  { accent: "text-yellow-400",           border: "border-yellow-400/30" },
];

export default function Journey() {
  const { t } = useLanguage();
  const milestones = t.journey.milestones.map((m, i) => ({
    ...m,
    image: milestoneImages[i],
    ...milestoneStyles[i],
  }));

  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-5 sm:px-8 overflow-hidden hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07070e] pointer-events-none" />

        <motion.p
          className="label-tag mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.journey.tag}
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {t.journey.heroTitle}
          <span className="font-garamond font-bold italic ml-3 text-6xl sm:text-8xl g-text">{t.journey.dreamer}</span>
          <br />
          {t.journey.heroTo} <span className="font-garamond font-bold italic text-6xl sm:text-8xl g-text-teal">{t.journey.doer}</span>
        </motion.h1>

        <motion.p
          className="text-[var(--fg-2)] text-lg sm:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.journey.heroDesc}
        </motion.p>

        <motion.div
          className="mt-10 w-32 h-px bg-[var(--accent)] mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
      </section>

      {/* Milestones */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="space-y-24">
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
              <div className={`flex-1 relative rounded-2xl overflow-hidden border ${m.border}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent z-10" />
                <Image
                  src={m.image}
                  alt={`${m.titlePlain} ${m.titleAccent}`.trim()}
                  width={600}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <p className={`text-7xl font-bold ${m.accent} opacity-20 leading-none mb-2 font-garamond italic`}>
                  {m.year}
                </p>
                <p className="label-tag mb-3">{m.subtitle}</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
                  {m.titlePlain && <>{m.titlePlain} </>}
                  <span className="font-garamond font-bold italic g-text text-5xl sm:text-6xl">{m.titleAccent}</span>
                </h2>
                <p className="text-[var(--fg-2)] leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Path Ahead */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-12"
        >
          <p className="label-tag mb-4">{t.journey.aheadTag}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {t.journey.aheadTitle.includes(" ")
              ? <>{t.journey.aheadTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-5xl sm:text-6xl g-text">{t.journey.aheadTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-5xl sm:text-6xl g-text">{t.journey.aheadTitle}</span>
            }
          </h2>
          <p className="text-[var(--fg-2)] text-lg max-w-2xl mx-auto leading-relaxed">
            {t.journey.aheadDesc}
          </p>
        </motion.div>
      </section>

    </div>
  );
}
