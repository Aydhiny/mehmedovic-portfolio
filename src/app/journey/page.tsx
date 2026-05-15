"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ChaosImage from "@images/game/1.png";
import MusicImage from "@images/music/aydhiny.jpg";
import CodeImage from "@images/code.png";

const milestones = [
  {
    year: "2018",
    title: "The Sound",
    subtitle: "Music Production Begins",
    description:
      "My love for music started it all. Producing beats and melodies taught me the power of creativity and perseverance. Six years later, over 5 million streams worldwide.",
    image: MusicImage,
    accent: "text-[var(--accent-teal)]",
    border: "border-[var(--accent-teal)]/30",
  },
  {
    year: "2021",
    title: "The Code",
    subtitle: "Discovering Software Engineering",
    description:
      "Coding opened a new world. The ability to bring ideas to life through logic and creativity has been transformative — from web apps to full-stack systems.",
    image: CodeImage,
    accent: "text-[var(--accent)]",
    border: "border-[var(--accent)]/30",
  },
  {
    year: "2024",
    title: "The Game",
    subtitle: "Hunter Mouse 2 — First Place",
    description:
      'My biggest project yet. "Hunter Mouse 2" combines all disciplines — code, music, and design — into one indie collectathon that won First Place at FIT Coding Challenge v18.',
    image: ChaosImage,
    accent: "text-yellow-400",
    border: "border-yellow-400/30",
  },
];

export default function Journey() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent pointer-events-none" />

        <motion.p
          className="label-tag mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          The Story
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          From
          <span className="font-garamond italic text-[var(--accent)] ml-3">Dreamer</span>
          <br />
          to <span className="font-garamond italic text-[var(--accent-teal)]">Doer</span>
        </motion.h1>

        <motion.p
          className="text-[var(--fg-2)] text-lg sm:text-xl max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A journey of passion, creativity, and relentless pursuit of growth.
          How music, coding, and design merged into something extraordinary.
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
                  alt={m.title}
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
                  {m.title.split(" ").map((word, wi) =>
                    wi === 1 ? (
                      <span key={wi} className={`font-garamond italic ${m.accent}`}> {word}</span>
                    ) : (
                      word + (wi === 0 ? " " : "")
                    )
                  )}
                </h2>
                <p className="text-[var(--fg-2)] leading-relaxed">{m.description}</p>
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
          <p className="label-tag mb-4">What&apos;s Next</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Path <span className="font-garamond italic text-[var(--accent)]">Ahead</span>
          </h2>
          <p className="text-[var(--fg-2)] text-lg max-w-2xl mx-auto leading-relaxed">
            The journey continues as I explore new horizons, blending the power of
            code, design, and sound to build things that matter — and make a difference
            in the world.
          </p>
        </motion.div>
      </section>

    </div>
  );
}
