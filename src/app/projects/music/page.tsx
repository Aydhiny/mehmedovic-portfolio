"use client";
import Image from "next/image";
import MusicCard from "@/components/MusicCard";
import Bona from "@images/projects/2bona.jpg";
import Bread from "@images/projects/bread.jpg";
import Vozis from "@images/projects/vozis.jpg";
import Hanoi from "@images/projects/hanoi.jpg";
import Candy from "@images/music/candy.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const tracks = [
  {
    text: "2Bona - Candy",
    link: "https://www.youtube.com/watch?v=GMIQ8ZWRQXo",
    image: Bona,
    desc: "An irresistible beat with sugary-sweet melodies — over 5 million plays worldwide.",
    producers: "Aydhiny x Call Me G x Nikola Tracks",
  },
  {
    text: "Shark Puppet x YBN NAHMIR - Gettin Bread",
    link: "https://www.youtube.com/watch?v=dEqu-7yvzhk",
    image: Bread,
    desc: "A high-energy hip-hop collab featuring Shark Puppet and YBN NAHMIR.",
    producers: "Aydhiny x Call Me G",
  },
  {
    text: "Danči - Voziš",
    link: "https://www.youtube.com/watch?v=f6zvcjW95cs",
    image: Vozis,
    desc: "Regional hit blending Balkan trap with melodic rap production.",
    producers: "Aydhiny",
  },
  {
    text: "Hanoi Capital - Charles & Panda",
    link: "https://www.youtube.com/watch?v=iYK4cKJC0QQ",
    image: Hanoi,
    desc: "Moody, atmospheric production crafted in collaboration with Hanoi Capital.",
    producers: "Aydhiny x Call Me G x Nikola Tracks",
  },
];

const stats = [
  { value: "5M+", label: "Total Streams" },
  { value: "6+", label: "Years Producing" },
  { value: "50+", label: "Beats Released" },
  { value: "10+", label: "Artists Featured" },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[75vh] px-5 sm:px-8 overflow-hidden pt-28 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07070e] pointer-events-none" />

        <motion.p
          className="label-tag mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sound
        </motion.p>

        <motion.h1
          className="mb-6 leading-none relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="block text-2xl font-semibold tracking-[0.28em] uppercase text-white/50">
            Music
          </span>
          <span className="block font-garamond font-bold italic text-[5rem] sm:text-[7rem] lg:text-[8rem] g-text leading-[0.9]">
            production.
          </span>
        </motion.h1>

        <motion.p
          className="relative z-10 text-[var(--fg-2)] text-lg max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Six years crafting beats under the alias <strong className="text-white">Aydhiny</strong> — from bedroom studio to millions of streams worldwide.
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
            <FaInstagram className="size-4" /> Follow
          </Link>
          <Link
            href="https://www.youtube.com/Aydhiny"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
          >
            <FaYoutube className="size-4" /> YouTube
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
              <p className="label-tag mb-3">Biggest Hit</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 leading-tight">
                2Bona — <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">candy.</span>
              </h2>
              <p className="text-[var(--fg-3)] text-sm mb-6">Aydhiny x Call Me G x Nikola Tracks</p>
              <div className="flex items-center gap-6 mb-6">
                <div>
                  <p className="font-garamond font-bold italic text-5xl g-text-teal leading-none">5M+</p>
                  <p className="text-[var(--fg-3)] text-xs uppercase tracking-widest mt-1">Streams Worldwide</p>
                </div>
              </div>
              <Link
                href="https://www.youtube.com/watch?v=GMIQ8ZWRQXo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-semibold transition-colors w-fit"
              >
                <FaYoutube className="size-4" /> Watch on YouTube
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
          <p className="label-tag mb-2">Discography</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Production <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">projects.</span>
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
              <MusicCard
                text={track.text}
                link={track.link}
                image={track.image}
                desc={track.desc}
                producers={track.producers}
              />
            </motion.div>
          ))}
        </div>
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
          <p className="label-tag mb-4">Collaborate</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Make Something <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">extraordinary.</span>
          </h2>
          <p className="text-[var(--fg-2)] max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you&apos;re an artist or a producer — reach out and let&apos;s build the next big track together.
          </p>
          <Link
            href="https://instagram.com/aydhiny_beatz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition-colors"
          >
            <FaInstagram className="size-4" /> Get in Touch
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
