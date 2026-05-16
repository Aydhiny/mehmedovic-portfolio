"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGamepad,
  FaPuzzlePiece,
  FaMusic,
  FaMousePointer,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function HunterMouseShowcase() {
  const { t } = useLanguage();
  const hm = t.hunterMouse;

  const features = [
    {
      icon: <FaGamepad className="size-5 text-pink-400 mt-0.5 flex-shrink-0" />,
      title: hm.features.production.title,
      desc: hm.features.production.desc,
    },
    {
      icon: <FaPuzzlePiece className="size-5 text-yellow-400 mt-0.5 flex-shrink-0" />,
      title: hm.features.worlds.title,
      desc: hm.features.worlds.desc,
    },
    {
      icon: <FaMusic className="size-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />,
      title: hm.features.soundtrack.title,
      desc: hm.features.soundtrack.desc,
    },
    {
      icon: <FaMousePointer className="size-5 text-green-400 mt-0.5 flex-shrink-0" />,
      title: hm.features.controls.title,
      desc: hm.features.controls.desc,
    },
  ];

  return (
    <div className="px-5 sm:px-8 py-20 max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10"
      >
        <p className="label-tag mb-3">{hm.tag}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">
          {hm.title}
          <span className="font-garamond font-bold italic g-text ml-3 text-5xl sm:text-6xl">
            {hm.subtitle}
          </span>
        </h2>
      </motion.div>

      {/* YouTube Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-2xl overflow-hidden border border-[var(--border)] mb-12 aspect-video"
      >
        <iframe
          src="https://www.youtube.com/embed/Glwv6vjXREs?rel=0&modestbranding=1"
          title="Hunter Mouse 2 Official Trailer 4K"
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[var(--fg-2)] text-base sm:text-lg leading-relaxed mb-10 max-w-3xl"
      >
        {hm.desc}
      </motion.p>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {features.map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass flex gap-4 p-5 rounded-xl"
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
        <Link href="/next-big-thing" className="btn-primary inline-flex">
          {hm.exploreBtn}
        </Link>
      </motion.div>

    </div>
  );
}
