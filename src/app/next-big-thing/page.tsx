"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
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

const featureIcons = [<FaRocket key="0" />, <FaPuzzlePiece key="1" />, <FaMagic key="2" />];

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Page() {
  const { t } = useLanguage();
  const features = t.nextBigThing.features.map((f, i) => ({ ...f, icon: featureIcons[i] }));
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
          <p className="label-tag mx-auto mb-6">{t.nextBigThing.tag}</p>
          <h1 className="font-garamond font-bold italic g-text leading-[0.9] mb-5"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
            {t.nextBigThing.title}
          </h1>
          <p className="text-[var(--fg-2)] text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
            {t.nextBigThing.subtitle} — <span className="text-white font-semibold">{t.nextBigThing.coming}</span>
          </p>
        </motion.div>
      </section>

      {/* ── Features ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          className="mb-10 text-center"
          variants={inView} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <p className="label-tag mx-auto mb-3">{t.nextBigThing.gameplayTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.nextBigThing.specialTitle.includes(" ")
              ? <>{t.nextBigThing.specialTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.nextBigThing.specialTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.nextBigThing.specialTitle}</span>
            }
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
          <p className="label-tag mb-3">{t.nextBigThing.galleryTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaGamepad className="text-[var(--accent)]" />
            {t.nextBigThing.overviewTitle.includes(" ")
              ? <>{t.nextBigThing.overviewTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.overviewTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.overviewTitle}</span>
            }
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>

        <p className="text-[var(--fg-2)] text-base mb-8 max-w-3xl leading-relaxed">
          {t.nextBigThing.overviewDesc}
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
          <p className="label-tag mb-3">{t.nextBigThing.castTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaStar className="text-[var(--accent-gold)]" />
            {t.nextBigThing.charactersTitle.includes(" ")
              ? <>{t.nextBigThing.charactersTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.charactersTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.charactersTitle}</span>
            }
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>
        <p className="text-[var(--fg-2)] text-base mb-8 max-w-3xl leading-relaxed">
          {t.nextBigThing.castDesc}
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
          <p className="label-tag mb-3">{t.nextBigThing.worldsTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <FaGlobe className="text-[var(--accent-gold)]" />
            {t.nextBigThing.realmsTitle.includes(" ")
              ? <>{t.nextBigThing.realmsTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.realmsTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text ml-2">{t.nextBigThing.realmsTitle}</span>
            }
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
          {t.nextBigThing.worldsDesc}
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
            <p className="label-tag mb-4"><FaMusic className="inline mr-1" /> {t.nextBigThing.soundtrackTag}</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              {t.nextBigThing.soundtrackTitle.includes(" ")
                ? <>{t.nextBigThing.soundtrackTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl g-text">{t.nextBigThing.soundtrackTitle.split(" ").slice(-1)[0]}</span></>
                : <span className="font-garamond font-bold italic text-4xl g-text">{t.nextBigThing.soundtrackTitle}</span>
              }
            </h2>
            <p className="text-[var(--fg-2)] leading-relaxed max-w-xl">
              {t.nextBigThing.soundtrackDesc}
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
          <p className="label-tag mx-auto mb-4">{t.nextBigThing.recognitionTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.nextBigThing.awardTitle.includes(" ")
              ? <>{t.nextBigThing.awardTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.nextBigThing.awardTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.nextBigThing.awardTitle}</span>
            }
          </h2>
          <p className="text-[var(--fg-2)] max-w-2xl mx-auto leading-relaxed">
            {t.nextBigThing.awardDesc}
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
