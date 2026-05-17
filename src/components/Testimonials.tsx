"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    quote:
      "Ajdin consistently delivered clean, well-structured code during his time at HTEC. His ability to pick up new technologies quickly and contribute meaningfully to real-world projects stood out from day one.",
    name: "HTEC Internship Mentor",
    role: "Senior Engineer, HTEC Group",
    initials: "HM",
    accent: "#e91e8c",
  },
  {
    quote:
      "The beats Aydhiny produces are incredibly polished — he has a rare ear for sound design. Every track he's touched for our releases has elevated the final product.",
    name: "Collaborating Artist",
    role: "Independent Music Artist",
    initials: "CA",
    accent: "#f97316",
  },
  {
    quote:
      "Ajdin won first place at FIT Coding Challenge 2025 outright. His solution was elegant under pressure — exactly the kind of engineering thinking we look for.",
    name: "FIT Challenge Organiser",
    role: "Faculty of Information Technologies",
    initials: "FIT",
    accent: "#fbbf24",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <motion.p
        className="label-tag text-center block mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Kind Words
      </motion.p>
      <motion.h2
        className="text-center mb-14"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="block font-michroma g-text uppercase tracking-[0.2em] text-base font-bold mb-1">
          What people
        </span>
        <span className="block font-garamond italic g-text text-5xl sm:text-6xl leading-none">
          are saying.
        </span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-5 sm:px-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="glass rounded-2xl p-7 flex flex-col gap-5"
          >
            <FaQuoteLeft style={{ color: t.accent }} className="text-xl opacity-70" />

            <blockquote className="text-[var(--fg-2)] text-sm leading-relaxed flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ background: `${t.accent}33`, border: `1.5px solid ${t.accent}55` }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">{t.name}</p>
                <p className="text-[var(--fg-3)] text-xs">{t.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-center text-[var(--fg-3)] text-xs mt-8 italic">
        Replace placeholder quotes in{" "}
        <code className="text-[var(--accent)] text-xs">src/components/Testimonials.tsx</code>{" "}
        with real ones when you have them.
      </p>
    </section>
  );
}
