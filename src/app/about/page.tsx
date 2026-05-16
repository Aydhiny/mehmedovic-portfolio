"use client";
import React, { useState } from "react";
import {
  FaGithub, FaInstagram, FaLinkedin, FaEnvelope,
  FaUser, FaRegEnvelope, FaRegComment,
} from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ShapeCanvas from "@/components/ShapeCanvas";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Aydhiny", label: "GitHub" },
  { icon: <SiBeatstars />, href: "https://www.beatstars.com/aydhiny", label: "BeatStars" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/ajdinmehmedovix", label: "Instagram" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ajdin-mehmedovic", label: "LinkedIn" },
];

export default function Page() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [statusOk, setStatusOk] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    setStatusOk(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _hp: honeypot }),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus(t.about.successMsg);
        setStatusOk(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error ?? t.about.failMsg);
      }
    } catch {
      setStatus(t.about.networkError);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen text-white">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[55vh] px-5 sm:px-8 overflow-hidden pt-28 pb-16 hero-glow">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07070e]/80 pointer-events-none" />

        {/* Three.js wireframe accents */}
        <ShapeCanvas shape="octahedron" color="#f97316" wireOpacity={0.35} speed={0.7}
          className="absolute top-8 right-6 w-32 h-32 opacity-30 pointer-events-none hidden sm:block" />
        <ShapeCanvas shape="cube" color="#e91e8c" wireOpacity={0.3} speed={0.5}
          className="absolute bottom-6 left-6 w-24 h-24 opacity-25 pointer-events-none hidden sm:block" />

        <motion.p
          className="label-tag mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {t.about.tag}
        </motion.p>

        <motion.h1
          className="relative z-10 leading-none mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-2xl font-semibold tracking-[0.28em] uppercase text-white/50 mb-1">
            Ajdin
          </span>
          <span className="block font-garamond font-bold italic g-text"
            style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)", lineHeight: 0.88 }}>
            mehmedović.
          </span>
        </motion.h1>

        <motion.p
          className="relative z-10 text-[var(--fg-2)] text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.about.tagline}
        </motion.p>

        {/* Floating role chips */}
        <motion.div
          className="relative z-10 flex flex-wrap gap-2 justify-center mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {t.about.chips.map((chip) => (
            <span
              key={chip}
              className="glass inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-[var(--fg-2)] border border-[var(--border)]"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </section>

    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Bio column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="space-y-5 text-[var(--fg-2)] leading-relaxed mb-10">
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
          </div>

          <div className="mb-10">
            <p className="text-xs text-[var(--fg-3)] uppercase tracking-widest mb-5">{t.about.exploreWork}</p>
            <div className="flex gap-3">
              {socials.map(({ icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-btn p-3 rounded-xl text-[var(--fg-2)] hover:text-white text-xl transition-colors duration-150"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: t.about.stats.musicYears, value: "6+" },
              { label: t.about.stats.fitChallenge, value: "1st Place" },
              { label: t.about.stats.streams, value: "5M+" },
              { label: t.about.stats.projects, value: "10+" },
            ].map(({ label, value }) => (
              <div key={label} className="glass rounded-xl p-5 text-center">
                <p className="font-garamond font-bold italic text-3xl g-text leading-none mb-1">{value}</p>
                <p className="text-xs text-[var(--fg-3)] uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p className="text-xs text-[var(--fg-3)] uppercase tracking-widest mb-6">{t.about.contactTag}</p>
          <h2 className="text-3xl font-bold text-white mb-8">
            {t.about.contactTitle.includes(" ")
              ? <>{t.about.contactTitle.split(" ")[0]}{" "}<span className="font-garamond font-bold italic text-4xl g-text">{t.about.contactTitle.split(" ").slice(1).join(" ")}</span></>
              : <span className="font-garamond font-bold italic text-4xl g-text">{t.about.contactTitle}</span>
            }
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Honeypot */}
            <input
              type="text"
              name="_hp"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <div className="glass-input flex items-center rounded-xl p-4">
              <FaUser className="text-[var(--fg-3)] mr-3 flex-shrink-0" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.about.namePlaceholder}
                maxLength={100}
                required
                className="w-full bg-transparent text-white placeholder:text-[var(--fg-3)] focus:outline-none text-sm"
              />
            </div>

            <div className="glass-input flex items-center rounded-xl p-4">
              <FaRegEnvelope className="text-[var(--fg-3)] mr-3 flex-shrink-0" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.about.emailPlaceholder}
                maxLength={254}
                required
                className="w-full bg-transparent text-white placeholder:text-[var(--fg-3)] focus:outline-none text-sm"
              />
            </div>

            <div className="glass-input flex items-start rounded-xl p-4">
              <FaRegComment className="text-[var(--fg-3)] mr-3 mt-0.5 flex-shrink-0" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.about.messagePlaceholder}
                maxLength={2000}
                required
                rows={5}
                className="w-full bg-transparent text-white placeholder:text-[var(--fg-3)] focus:outline-none text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed glow-button"
            >
              <FaEnvelope />
              {sending ? t.about.sending : t.about.sendBtn}
            </button>
          </form>

          {status && (
            <p
              role="status"
              className={`mt-4 text-sm font-medium ${
                statusOk ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </motion.div>

      </div>
    </div>
    </div>
  );
}
