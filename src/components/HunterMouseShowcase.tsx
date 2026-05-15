"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PlyrSource } from "plyr-react";
import "plyr-react/plyr.css";
import {
  FaGamepad,
  FaPuzzlePiece,
  FaMusic,
  FaMousePointer,
} from "react-icons/fa";
import dynamic from "next/dynamic";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

const features = [
  {
    icon: <FaGamepad className="size-5 text-pink-400 mt-0.5 flex-shrink-0" />,
    title: "Full Indie Production",
    desc: "Coded, designed & implemented entirely solo — custom game mechanics, music & UI design.",
  },
  {
    icon: <FaPuzzlePiece className="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />,
    title: "Vibrant Worlds",
    desc: "Explore 7 unique worlds, each with its own theme and challenges, from lush jungles to icy peaks.",
  },
  {
    icon: <FaMusic className="size-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />,
    title: "Original Soundtrack",
    desc: "A fully composed soundtrack — 10+ tracks of original music crafted to enhance every moment.",
  },
  {
    icon: <FaMousePointer className="size-5 text-green-400 mt-0.5 flex-shrink-0" />,
    title: "Precise Controls",
    desc: "Tight platforming mechanics inspired by the classics — your skills determine your success.",
  },
];

export default function HunterMouseShowcase() {
  const videoSources: PlyrSource = {
    type: "video",
    sources: [
      { src: "/videos/huntermouse2.mp4", type: "video/mp4", size: 1080 },
      { src: "/videos/huntermouse2.mp4", type: "video/mp4", size: 720 },
    ],
  };

  return (
    <div className="px-5 sm:px-8 py-20 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p className="label-tag mb-3">Showcase</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          Hunter Mouse 2 — Official Trailer
        </h2>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden border border-[var(--border)] mb-12"
      >
        <Plyr source={videoSources} />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[var(--fg-2)] text-base sm:text-lg leading-relaxed mb-10 max-w-3xl"
      >
        Enter Jungle Scapes, where worlds impress & adventure awaits. Your
        journey is to retrieve thunderbolts, so you can once and for all stop
        and defeat the traitor of the mice —{" "}
        <span className="text-white font-semibold">Reuf.</span> ⚡ Explore
        various insanely detailed worlds & defeat the enemy!
      </motion.p>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {features.map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="flex gap-4 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
          >
            {icon}
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
              <p className="text-[var(--fg-2)] text-sm leading-relaxed">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/next-big-thing"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors duration-150 glow-button"
        >
          Explore the Game
        </Link>
      </motion.div>

    </div>
  );
}
