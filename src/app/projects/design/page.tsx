"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plansio from "@images/projects/plansio.png";
import FLS from "@images/projects/fls.jpg";
import Bliss from "@images/projects/bliss.png";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    image: FLS,
    title: "Future Leaders Summit 2024",
    href: "https://bhfuturesfoundation.org/",
    category: "Social Media Graphic Design",
    tags: ["Branding", "Social Media", "Events"],
    desc: "Designed every visual element for the Futures Leaders Summit 2024 â€” from brand identity and promotional graphics to all event materials.",
  },
  {
    image: Bliss,
    title: "Eternal Bliss",
    href: "https://www.instagram.com/eternal_bliss_official/",
    category: "Social Media Brand",
    tags: ["Brand Identity", "Instagram", "Music"],
    desc: "Instagram brand for music producer Ediba Deville â€” educating newer producers in the craft and business of music production.",
  },
  {
    image: Plansio,
    title: "Plansio Agency",
    href: "https://www.instagram.com/plansio_central",
    category: "Marketing Â· Social Media Â· Video",
    tags: ["Marketing", "Video Editing", "Design"],
    desc: "Full digital marketing and branding work for Plansio â€” social media content strategy, video editing, and design campaigns for multiple clients.",
  },
];

const services = [
  { label: "Brand Identity", icon: "â—ˆ" },
  { label: "Social Media Design", icon: "â—‰" },
  { label: "Video Editing", icon: "â–¶" },
  { label: "Event Graphics", icon: "â—†" },
];

export default function DesignPage() {
  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-5 sm:px-8 overflow-hidden pt-28 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#07070e] pointer-events-none" />

        <motion.p
          className="label-tag mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Visual
        </motion.p>

        <motion.h1
          className="mb-6 leading-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <span className="block text-2xl font-semibold tracking-[0.28em] uppercase text-white/50">
            Design &amp;
          </span>
          <span className="block font-garamond font-bold italic text-[5rem] sm:text-[7rem] lg:text-[8rem] g-text leading-[0.9]">
            Marketing
          </span>
        </motion.h1>

        <motion.p
          className="text-[var(--fg-2)] text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Brand identity, social media campaigns, and visual storytelling â€” crafted for artists, events, and agencies.
        </motion.p>

        {/* Service pills */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {services.map((s) => (
            <span
              key={s.label}
              className="glass inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-[var(--fg-2)] border border-[var(--border)]"
            >
              <span className="text-[var(--accent)]">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="label-tag mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Selected <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">Work</span>
          </h2>
          <div className="mt-4 h-px bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border border-[var(--border)] group hover:border-[var(--accent)]/30 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070e]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[var(--fg-3)] text-[0.65rem] uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-white font-bold text-xl mb-3 leading-snug">{project.title}</h3>
                <p className="text-[var(--fg-2)] text-sm leading-relaxed mb-4">{project.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:text-white transition-colors duration-150"
                >
                  View Project
                  <FaExternalLinkAlt className="size-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <motion.div
          className="glass rounded-2xl p-10 sm:p-14 text-center border border-[var(--border-2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="label-tag mb-4">Hire</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">Designer?</span>
          </h2>
          <p className="text-[var(--fg-2)] max-w-xl mx-auto mb-8 leading-relaxed">
            Looking for brand identity, social media design, or visual content? Let&apos;s create something that stands out.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

