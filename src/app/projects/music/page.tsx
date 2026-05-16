"use client";
import Image from "next/image";
import Bona from "@images/projects/2bona.jpg";
import Bread from "@images/projects/bread.jpg";
import Vozis from "@images/projects/vozis.jpg";
import Hanoi from "@images/projects/hanoi.jpg";
import Candy from "@images/music/candy.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaPlay } from "react-icons/fa";
import { SiBeatstars, SiSoundcloud, SiSpotify } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";
import { NeonSun } from "@/components/SynthwaveDecor";

const tracks = [
  {
    text: "2Bona - Candy",
    link: "https://www.youtube.com/watch?v=GMIQ8ZWRQXo",
    image: Bona,
    producers: "Aydhiny x Call Me G x Nikola Tracks",
  },
  {
    text: "Shark Puppet x YBN NAHMIR - Gettin Bread",
    link: "https://www.youtube.com/watch?v=dEqu-7yvzhk",
    image: Bread,
    producers: "Aydhiny x Call Me G",
  },
  {
    text: "Danči - Voziš",
    link: "https://www.youtube.com/watch?v=f6zvcjW95cs",
    image: Vozis,
    producers: "Aydhiny",
  },
  {
    text: "Hanoi Capital - Charles & Panda",
    link: "https://www.youtube.com/watch?v=iYK4cKJC0QQ",
    image: Hanoi,
    producers: "Aydhiny x Call Me G x Nikola Tracks",
  },
];

const platforms = [
  {
    label: "BeatStars",
    href: "https://www.beatstars.com/aydhiny",
    icon: SiBeatstars,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/Aydhiny",
    icon: FaYoutube,
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/aydhiny",
    icon: SiSoundcloud,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/aydhiny",
    icon: SiSpotify,
  },
];

export default function MusicPage() {
  const { t } = useLanguage();
  const stats = [
    { value: "5M+", label: t.music.stats.streams },
    { value: "6+", label: t.music.stats.years },
    { value: "5,000+", label: t.music.stats.beats },
    { value: "100+", label: t.music.stats.artists },
  ];
  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[75vh] px-5 sm:px-8 overflow-hidden pt-28 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07070e] pointer-events-none z-[3]" />

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

        <motion.p
          className="label-tag mb-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {t.music.tag}
        </motion.p>

        <motion.h1
          className="mb-6 leading-none relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="block text-2xl font-semibold tracking-[0.28em] uppercase text-white/50">
            {t.music.heroTitle}
          </span>
          <span className="block font-garamond font-bold italic text-[5rem] sm:text-[7rem] lg:text-[8rem] g-text leading-[0.9]">
            {t.music.heroSubtitle}
          </span>
        </motion.h1>

        <motion.p
          className="relative z-10 text-[var(--fg-2)] text-lg max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.music.tagline}
        </motion.p>

        <motion.div
          className="relative z-10 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="https://instagram.com/aydhiny_beatz"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            <FaInstagram className="size-4" /> {t.music.follow}
          </Link>
          <Link
            href="https://www.youtube.com/Aydhiny"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            <FaYoutube className="size-4" /> {t.music.youtube}
          </Link>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <p className="font-garamond font-bold italic text-4xl g-text leading-none mb-1">{s.value}</p>
              <p className="text-[var(--fg-3)] text-xs uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Biggest Hit */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8">
        <motion.div
          className="glass rounded-2xl overflow-hidden border border-[var(--accent)]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="relative h-64 lg:h-auto lg:w-80 xl:w-96 flex-shrink-0">
              <Image
                src={Candy}
                alt="2Bona - Candy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#07070e] via-[#07070e]/40 to-transparent" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center min-h-[280px]">
              <p className="label-tag mb-3">{t.music.biggestHit}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 leading-tight">
                2Bona — <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">candy.</span>
              </h2>
              <p className="text-[var(--fg-3)] text-sm mb-6">Aydhiny x Call Me G x Nikola Tracks</p>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <p className="font-garamond font-bold italic text-5xl g-text-teal leading-none">5M+</p>
                  <p className="text-[var(--fg-3)] text-xs uppercase tracking-widest mt-1">{t.music.streamsWorldwide}</p>
                </div>
              </div>
              <Link
                href="https://www.youtube.com/watch?v=GMIQ8ZWRQXo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold w-fit"
              >
                <FaYoutube className="size-4" /> {t.music.watchYoutube}
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Track Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-tag mb-2">{t.music.discographyTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.music.discographyTitle.includes(" ")
              ? <>{t.music.discographyTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.music.discographyTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.music.discographyTitle}</span>
            }
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl overflow-hidden flex flex-col block"
              >
                {/* Image top half */}
                <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
                  <Image
                    src={track.image}
                    alt={track.text}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Pink play button — bottom-right on hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e91e8c] shadow-lg shadow-[#e91e8c]/40">
                      <FaPlay className="size-3.5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                {/* Track info */}
                <div className="p-4 flex flex-col gap-1">
                  <p className="text-white font-semibold text-sm leading-snug line-clamp-2">{track.text}</p>
                  <p className="text-[var(--fg-3)] text-xs">{track.producers}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-12">
        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 hover:border-[var(--accent)]/50 border border-transparent"
              >
                <Icon className="size-4" />
                {p.label}
              </Link>
            );
          })}
        </motion.div>
      </section>

      {/* Collab CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          className="glass rounded-2xl p-10 sm:p-14 text-center border border-[var(--border-2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-tag mb-4">{t.music.collaborateTag}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.music.collaborateTitle.includes(" ")
              ? <>{t.music.collaborateTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.music.collaborateTitle.split(" ").slice(-1)[0]}</span></>
              : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.music.collaborateTitle}</span>
            }
          </h2>
          <p className="text-[var(--fg-2)] max-w-xl mx-auto mb-8 leading-relaxed">
            {t.music.collaborateDesc}
          </p>
          <Link
            href="https://instagram.com/aydhiny_beatz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold"
          >
            <FaInstagram className="size-4" /> {t.music.getInTouch}
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
