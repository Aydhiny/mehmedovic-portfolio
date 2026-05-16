"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGamepad, FaMusic, FaStar, FaRocket,
  FaMagic, FaPuzzlePiece, FaGlobe, FaAward,
  FaSearchPlus, FaTimes,
} from "react-icons/fa";
import { StaticImageData } from "next/image";
import Logo from "@images/sequel/logo.png";
import Screenshot1 from "@images/sequel/screenshot1.png";
import Screenshot2 from "@images/sequel/screenshot2.png";
import Screenshot3 from "@images/sequel/screenshot3.png";
import Screenshot4 from "@images/sequel/screenshot4.png";
import Character1 from "@images/sequel/character1.png";
import Character2 from "@images/sequel/character2.png";
import World1 from "@images/sequel/world1.png";
import World2 from "@images/sequel/world2.png";
import SoundtrackCover from "@images/sequel/soundtrack.png";

interface LightboxProps {
  src: StaticImageData | null;
  alt: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
  if (!src) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 40 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl max-h-[90vh] glass rounded-2xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={src} alt={alt} width={1200} height={800} className="rounded-2xl object-contain" />
        <button
          className="absolute top-4 right-4 glass-btn p-2 rounded-lg text-white/70 hover:text-white transition-colors"
          onClick={onClose}
        >
          <FaTimes className="text-lg" />
        </button>
      </motion.div>
    </motion.div>
  );
};

const features = [
  {
    icon: <FaRocket />,
    title: "Epic Adventure",
    desc: "Embark on a sprawling journey filled with danger, profound mystery, and countless hidden secrets awaiting your discovery.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Thunderbolt Collectables",
    desc: "Collect thunderbolts to enter Reuf's castle, and stop him from unleashing chaos across the realms.",
  },
  {
    icon: <FaMagic />,
    title: "Magical Worlds",
    desc: "Traverse seven breathtakingly stunning worlds, each a unique masterpiece bursting with distinct personality and charm.",
  },
];

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Page() {
  const screenshots = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];
  const [lightboxSrc, setLightboxSrc] = useState<StaticImageData | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  return (
    <div className="min-h-screen text-white">

      {/* ── Hero ── */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[85vh] px-5 sm:px-8 overflow-hidden pt-28 pb-16 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070e]/70 pointer-events-none" />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={Logo}
            alt="Hunter Mouse 2 Logo"
            className="mx-auto w-44 md:w-72 drop-shadow-[0_0_40px_rgba(124,58,237,0.6)] mb-8"
          />
          <p className="label-tag mx-auto mb-6">Next Big Thing</p>
          <h1 className="font-garamond font-bold italic g-text leading-[0.9] mb-5"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
            hunter mouse 2.
          </h1>
          <p className="text-[var(--fg-2)] text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
            A Modern Collectathon Adventure — <span className="text-white font-semibold">Coming 2026</span>
          </p>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          className="mb-10 text-center"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="label-tag mx-auto mb-3">Gameplay</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Makes It <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">special.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 flex flex-col items-center text-center gap-4 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors duration-300"
            >
              <div className="text-3xl text-[var(--accent)] p-3 rounded-xl bg-[var(--accent-muted)]">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-[var(--fg-2)] text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Screenshots ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <motion.div
          className="mb-10"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="label-tag mb-3">Gallery</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaGamepad className="text-[var(--accent)]" />
            Game <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">overview.</span>
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>

        <p className="text-[var(--fg-2)] text-base mb-8 max-w-3xl leading-relaxed">
          Inspired by beloved classics like Banjo-Kazooie, Hunter Mouse 2 delivers a{" "}
          <span className="text-white font-semibold">vibrant collectathon adventure</span>. Collect thunderbolts, master new moves, and uncover every secret across expansive, beautifully crafted worlds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {screenshots.map((img, i) => (
            <motion.div
              key={i}
              variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative cursor-pointer group rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors duration-300"
              onClick={() => { setLightboxSrc(img); setLightboxAlt(`Screenshot ${i + 1}`); }}
            >
              <Image
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="w-full h-48 object-cover transition-transform duration-400 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaSearchPlus className="text-3xl text-white drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Characters ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          className="mb-10"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="label-tag mb-3">Cast</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaStar className="text-[var(--accent-gold)]" />
            Meet the <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">characters.</span>
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>
        <p className="text-[var(--fg-2)] text-base mb-8 max-w-3xl leading-relaxed">
          Join Puntsy the Mouse and a vibrant cast of eccentric allies and formidable rivals — each adding humor, challenge, or tantalizing mystery to your grand adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[Character1, Character2].map((char, i) => (
            <motion.div
              key={i}
              variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-[var(--border)] group hover:border-[var(--accent)]/30 transition-colors duration-300"
            >
              <Image src={char} alt={`Character ${i + 1}`} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Worlds ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <motion.div
          className="mb-10"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="label-tag mb-3">Worlds</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaGlobe className="text-[var(--accent-gold)]" />
            Explore the <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">realms.</span>
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[World1, World2].map((world, i) => (
            <motion.div
              key={i}
              variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-[var(--border)] group hover:border-[var(--accent)]/30 transition-colors duration-300"
            >
              <Image src={world} alt={`World ${i + 1}`} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
        <p className="text-[var(--fg-2)] text-base max-w-3xl leading-relaxed">
          From lush jungles to futuristic cityscapes — every world is meticulously designed and teeming with secrets, enemies, and collectibles.
        </p>
      </section>

      {/* ── Soundtrack ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          className="glass rounded-2xl p-10 sm:p-14 flex flex-col sm:flex-row items-center gap-10 border border-[var(--border)]"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex-shrink-0"
          >
            <Image
              src={SoundtrackCover}
              alt="Hunter Mouse 2 Original Soundtrack"
              className="rounded-xl shadow-2xl w-44 md:w-56 border border-white/10"
            />
          </motion.div>
          <div>
            <p className="label-tag mb-4"><FaMusic className="inline mr-1" /> Soundtrack</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Original <span className="font-garamond font-bold italic text-4xl g-text">soundtrack.</span>
            </h2>
            <p className="text-[var(--fg-2)] leading-relaxed max-w-xl">
              Immerse yourself in a whimsical, energetic score composed under the direction of{" "}
              <span className="text-white font-semibold">Aydhiny Beats</span> — crafted to complement every moment of your adventure.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Award ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          className="glass rounded-2xl p-10 sm:p-14 text-center border border-[var(--border-2)]"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="text-4xl text-[var(--accent-gold)] mb-4 flex justify-center">
            <FaAward />
          </div>
          <p className="label-tag mx-auto mb-4">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Award-<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">winning</span> title.
          </h2>
          <p className="text-[var(--fg-2)] max-w-2xl mx-auto leading-relaxed">
            Hunter Mouse 2 claimed <span className="text-white font-bold">1st place</span> at the{" "}
            <span className="text-white font-semibold">FIT Coding Challenge v18</span>, earning national recognition for its groundbreaking innovation, superior design, and captivating gameplay.
          </p>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightboxSrc && (
          <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={() => setLightboxSrc(null)} />
        )}
      </AnimatePresence>

    </div>
  );
}
