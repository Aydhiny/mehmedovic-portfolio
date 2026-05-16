"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PianoThree from "@/components/PianoThree";
import { SiBeatstars, SiSoundcloud, SiSpotify } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const STATS = [
  { value: "5M+",  label: "Streams" },
  { value: "6+",   label: "Years producing" },
  { value: "50+",  label: "Beats released" },
  { value: "10+",  label: "Artists worked with" },
];

const PLATFORMS = [
  { label: "BeatStars",  href: "https://beatstars.com/aydhiny",          icon: <SiBeatstars  className="size-4" />, color: "#e91e8c" },
  { label: "YouTube",    href: "https://youtube.com/Aydhiny",             icon: <FaYoutube    className="size-4" />, color: "#f97316" },
  { label: "SoundCloud", href: "https://soundcloud.com/aydhiny",         icon: <SiSoundcloud className="size-4" />, color: "#fbbf24" },
  { label: "Spotify",    href: "https://open.spotify.com/artist/aydhiny", icon: <SiSpotify    className="size-4" />, color: "#a855f7" },
];

export default function MusicSection() {
  const { t } = useLanguage();

  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-8 py-28">

      {/* Section tag */}
      <motion.p
        className="label-tag text-center block mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {t.music.tag}
      </motion.p>

      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="block font-michroma g-text uppercase tracking-[0.22em] text-lg sm:text-2xl font-bold mb-1">
          {t.music.titleTop}
        </span>
        <span className="block font-garamond italic g-text text-5xl sm:text-6xl leading-none">
          {t.music.titleAccent}
        </span>
      </motion.div>

      {/* Main grid */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* Left: stats + platforms */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-[var(--border-2)] p-5 text-center"
                style={{ background: "rgba(233,30,140,0.06)" }}
              >
                <p
                  className="font-michroma font-bold leading-none mb-1"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    background: "linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #e91e8c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-[var(--fg-3)] text-xs tracking-widest uppercase font-semibold">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[var(--fg-2)] leading-relaxed mb-8 text-sm sm:text-base">
            {t.music.desc}
          </p>

          {/* Platform links */}
          <div className="flex flex-wrap gap-3">
            {PLATFORMS.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white border border-[var(--border-2)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: `${p.color}18`,
                  borderColor: `${p.color}40`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${p.color}50`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}80`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}40`;
                }}
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                {p.label}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/projects/music" className="btn-primary inline-flex">
              {t.music.cta}
            </Link>
          </div>
        </motion.div>

        {/* Right: 3D piano */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden border border-[var(--border-2)]"
            style={{ background: "rgba(7,7,14,0.6)", backdropFilter: "blur(12px)" }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, #e91e8c, #f97316, transparent)" }}
            />
            <PianoThree className="w-full h-64 sm:h-72" />
            {/* Glow overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(233,30,140,0.10) 0%, transparent 70%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              <span className="font-michroma text-[0.6rem] tracking-[0.25em] text-[var(--fg-3)] uppercase">Live 3D</span>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full"
                    style={{
                      height: `${10 + i * 4}px`,
                      background: ["#e91e8c", "#f97316", "#fbbf24"][i],
                      opacity: 0.7,
                      animation: `float ${1.2 + i * 0.3}s ease-in-out infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
