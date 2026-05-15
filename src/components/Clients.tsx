"use client";
import React from "react";
import { motion } from "framer-motion";

const competitions = [
  {
    place: "1st Place",
    title: "FIT Coding Challenge v18 · 2025",
    project: "Hunter Mouse 2 — Collectathon Adventure Game",
    tags: ["Game Development", "Music Production", "Design"],
    highlight: true,
  },
  {
    place: "2nd Place",
    title: "FIT Coding Challenge v17",
    project: "Hunter Mouse — Linear Platformer Game",
    tags: ["Game Development", "Music Production", "Design"],
    highlight: false,
  },
  {
    place: "2nd Place",
    title: "HackAtHome Mostar · 2022",
    project: "Smart Parking System Solution",
    tags: ["Frontend Development", "Graphic Design"],
    highlight: false,
  },
  {
    place: "Certificate",
    title: "Sarajevo Telemach Good Hackathon · 2022",
    project: "Kubos Documents — Mobile E-Municipality Solution",
    tags: ["Web Development", "UI Design"],
    highlight: false,
  },
  {
    place: "Participant",
    title: "EVONA Hackathon · 2023",
    project: "Full-Stack in 24 Hours — Leaderboard App",
    tags: ["Web Development", "Frontend"],
    highlight: false,
  },
];

export default function Clients() {
  return (
    <div className="px-5 sm:px-8 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="label-tag mb-3">Competitions</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">Awards & Hackathons</h2>
      </motion.div>

      <div className="space-y-3">
        {competitions.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-5 py-4 rounded-xl border transition-colors duration-150 ${
              comp.highlight
                ? "border-[var(--accent)] bg-[var(--accent-muted)]"
                : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-2)]"
            }`}
          >
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap self-start sm:self-auto ${
                comp.highlight
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--surface-2)] text-[var(--fg-2)]"
              }`}
            >
              {comp.place}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold">{comp.title}</p>
              <p className="text-[var(--fg-2)] text-sm">{comp.project}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {comp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[var(--fg-3)] border border-[var(--border)] rounded-md px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
