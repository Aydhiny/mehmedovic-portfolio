"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRss } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen hero-glow">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="label-tag mb-4">{t.blog.tag}</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
          {t.blog.title.includes(" ")
            ? <>{t.blog.title.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-6xl sm:text-7xl g-text">{t.blog.title.split(" ").slice(-1)[0]}</span></>
            : <span className="font-garamond font-bold italic text-6xl sm:text-7xl g-text">{t.blog.title}</span>
          }
        </h1>
        <p className="text-[var(--fg-2)] text-lg max-w-xl leading-relaxed">
          {t.blog.desc}
        </p>
      </motion.div>

      {/* Placeholder cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {t.blog.posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 cursor-default"
          >
            <span className="label-tag mb-4 block">{post.tag}</span>
            <h3 className="text-white font-semibold text-lg leading-snug mb-3">{post.title}</h3>
            <div className="h-px bg-[var(--border)] my-4" />
            <p className="text-xs text-[var(--fg-3)]">{t.blog.comingSoon}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-8"
      >
        <FaRss className="text-[var(--accent)] text-3xl flex-shrink-0" />
        <div>
          <p className="text-white font-semibold mb-1">{t.blog.launchTitle}</p>
          <p className="text-[var(--fg-2)] text-sm">
            {t.blog.launchDesc}{" "}
            <Link href="https://www.instagram.com/ajdinmehmedovix" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              Instagram
            </Link>{" "}
            {t.blog.or}{" "}
            <Link href="https://www.youtube.com/Aydhiny" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">
              YouTube
            </Link>
            .
          </p>
        </div>
      </motion.div>

    </div>
    </div>
  );
}
