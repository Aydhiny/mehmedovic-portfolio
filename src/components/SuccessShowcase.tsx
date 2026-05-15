"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaTrophy,
  FaMusic,
  FaGamepad,
  FaPaintBrush,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";

const successes = [
  {
    title: "First Place — FIT Coding Challenge v18",
    description:
      "Crowned best in the country for game development with Hunter Mouse 2. A collectathon adventure game combining platforming, exploration, and puzzle-solving.",
    image: "/images/success/game_award.jpg",
    icon: <FaTrophy className="size-5 text-yellow-400" />,
    link: "https://www.bhfuturesfoundation.org/news/2025/6/5/ajdin-mehmedovi-wins-first-place-at-fit-coding-challenge-v18",
  },
  {
    title: "Hunter Mouse 2 — Full Indie Collectathon",
    description:
      "Coded, designed, and composed music for Hunter Mouse 2 — a complete indie collectathon built entirely solo.",
    image: "/images/success/huntermouse2.png",
    icon: <FaGamepad className="size-5 text-pink-400" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7333864485666951168/",
  },
  {
    title: "Platinum Music Production",
    description:
      "Music Producer of 6+ years. Produced 2Bona Candy with over 5 million plays worldwide, collaborated with multi-platinum producers.",
    image: "/images/success/platinum_music.jpg",
    icon: <FaMusic className="size-5 text-[var(--accent)]" />,
    link: "https://www.youtube.com/watch?v=GMIQ8ZWRQXo",
  },
  {
    title: "Futures Leaders Summit — Full Conference Design",
    description:
      "Designed every visual element for the Futures Leaders Summit, from branding to all promotional materials.",
    image: "/images/success/fls_design.png",
    icon: <FaPaintBrush className="size-5 text-green-400" />,
    link: "https://bhfuturesfoundation.org/",
  },
];

const socials = [
  { icon: <FaInstagram />, href: "https://www.instagram.com/ajdinmehmedovix", label: "Instagram", hoverClass: "hover:text-pink-400" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/aydhiny", label: "YouTube", hoverClass: "hover:text-red-500" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ajdin-mehmedovic/", label: "LinkedIn", hoverClass: "hover:text-blue-400" },
  { icon: <FaGithub />, href: "https://github.com/aydhiny", label: "GitHub", hoverClass: "hover:text-white" },
  { icon: <SiBeatstars />, href: "https://www.beatstars.com/aydhiny", label: "BeatStars", hoverClass: "hover:text-[var(--accent)]" },
];

export default function SuccessShowcase() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="px-5 sm:px-8 py-20 max-w-7xl mx-auto">

      {/* About Me */}
      <motion.div
        ref={aboutRef}
        id="about-me"
        className="text-center max-w-2xl mx-auto mb-24"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="label-tag mb-3">About</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
          Who I Am
        </h2>
        <p className="text-[var(--fg-2)] text-base sm:text-lg leading-relaxed mb-8">
          Software engineering student, game developer, music producer, and designer.
          I build across disciplines — code, sound, and visuals — and that cross-domain
          curiosity drives everything I create.
        </p>
        <div className="flex justify-center gap-5 text-xl text-[var(--fg-2)]">
          {socials.map(({ icon, href, label, hoverClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`transition-colors duration-150 ${hoverClass}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="label-tag mb-3">Highlights</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10">
          Achievements
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {successes.map((item, i) => (
          <Link href={item.link} target="_blank" key={i} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden transition-colors duration-200 group-hover:border-[var(--accent)] h-full"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-opacity duration-200 group-hover:opacity-80"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-white font-semibold text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[var(--fg-2)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
