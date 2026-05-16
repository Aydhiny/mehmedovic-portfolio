"use client";
import ProjectBox from "@/components/ProjectBox";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  homepage?: string;
};

const LANG_COLORS: Record<string, string> = {
  JavaScript: "yellow",
  TypeScript: "blue",
  "C#": "green",
  "C++": "red",
  TSQL: "orange",
  Python: "blue",
};

export default function Page() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Aydhiny/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => setRepos(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-5 sm:px-8 py-20"
    >
      <div className="mb-10">
        <p className="label-tag mb-3">{t.repos.tag}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {t.repos.title.includes(" ")
            ? <>{t.repos.title.split(" ").slice(0, -1).join(" ")}{" "}<span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.repos.title.split(" ").slice(-1)[0]}</span></>
            : <span className="font-garamond font-bold italic text-4xl sm:text-5xl g-text">{t.repos.title}</span>
          }
        </h2>
        <div className="mt-4 h-px bg-[var(--border)]" />
      </div>

      <div className="flex flex-col gap-4">
        {loading && (
          <p className="text-[var(--fg-3)] text-sm">{t.repos.loading}</p>
        )}
        {error && (
          <p className="text-[var(--fg-3)] text-sm">
            {t.repos.error}{" "}
            <Link
              href="https://github.com/Aydhiny"
              className="text-[var(--accent)] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.repos.viewOnGitHub}
            </Link>
          </p>
        )}
        {!loading && !error && repos.length === 0 && (
          <p className="text-[var(--fg-3)] text-sm">{t.repos.noRepos}</p>
        )}
        {repos.map((repo) => (
          <ProjectBox
            key={repo.id}
            name={repo.name}
            description={repo.description || "No description"}
            tech={repo.language || "Other"}
            color={LANG_COLORS[repo.language as keyof typeof LANG_COLORS] || "gray"}
            link={repo.homepage || repo.html_url}
            github={repo.html_url}
          />
        ))}
      </div>

      <Link
        href="https://github.com/Aydhiny"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--fg-2)] hover:text-white transition-colors duration-150"
      >
        <FaGithub className="size-4" />
        {t.repos.seeAll}
      </Link>
    </motion.div>
  );
}
