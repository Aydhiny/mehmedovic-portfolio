"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  homepage: string | null;
  github_url: string;
  topics: string[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  "C#": "#9b59b6",
  "C++": "#00b4d8",
  HTML: "#e44d26",
  default: "#888",
};

const REPOS: Repo[] = [
  {
    name: "musicle-ai",
    description: "AI-powered music platform — actively in development.",
    language: "TypeScript",
    stars: 0,
    homepage: null,
    github_url: "https://github.com/Aydhiny/musicle-ai",
    topics: ["ai", "music", "nextjs"],
  },
  {
    name: "zlatni-kvadrat",
    description: "Full-Stack Real Estate Solution built with React, GoLang, Vite & ShadcnUI. Dockerized, CI/CD with GitHub Actions.",
    language: "TypeScript",
    stars: 1,
    homepage: "https://zlatni-kvadrat.vercel.app",
    github_url: "https://github.com/Aydhiny/zlatni-kvadrat",
    topics: ["golang", "react", "vite", "shadcnui"],
  },
  {
    name: "midnight-riches",
    description: "Sleek TypeScript web app with a modern dark aesthetic.",
    language: "TypeScript",
    stars: 0,
    homepage: "https://midnight-riches.vercel.app",
    github_url: "https://github.com/Aydhiny/midnight-riches",
    topics: ["nextjs", "typescript"],
  },
  {
    name: "budget-management-system",
    description: "Full-Stack SQLite C# WinForms app for tracking expenses, income, and personal finances.",
    language: "C#",
    stars: 2,
    homepage: null,
    github_url: "https://github.com/Aydhiny/budget-management-system",
    topics: ["c-sharp", "winforms", "sqlite"],
  },
  {
    name: "fkrudar-kakanj-website",
    description: "FK Rudar Kakanj Football Club website — original design built from scratch with Next.js.",
    language: "TypeScript",
    stars: 1,
    homepage: "https://fkrudar-kakanj-website.vercel.app",
    github_url: "https://github.com/Aydhiny/fkrudar-kakanj-website",
    topics: ["nextjs", "football", "typescript"],
  },
  {
    name: "threejs-journey",
    description: "Mini-projects from Bruno Simon's Three.js Journey — WebGL, shaders, and 3D graphics deep-dives.",
    language: "JavaScript",
    stars: 2,
    homepage: null,
    github_url: "https://github.com/Aydhiny/threejs-journey",
    topics: ["threejs", "webgl", "javascript"],
  },
  {
    name: "inkril-books-web",
    description: "WIP eReader app with gamification — reader leaderboards, daily streaks, and reading challenges. Built with Next.js.",
    language: "TypeScript",
    stars: 0,
    homepage: null,
    github_url: "https://github.com/Aydhiny/inkril-books-web",
    topics: ["nextjs", "gamification", "ereader"],
  },
  {
    name: "iot-agroncloak",
    description: "IoT security detection app using TensorFlow, Next.js & .NET — detects pests via ESP32 CAM & PIR Sensor.",
    language: "TypeScript",
    stars: 2,
    homepage: "https://iot-agroncloak.vercel.app",
    github_url: "https://github.com/Aydhiny/iot-agroncloak",
    topics: ["iot", "tensorflow", "dotnet", "esp32"],
  },
  {
    name: "chaos-makers-multiplayer",
    description: "Casual multiplayer Unity game — Corekeepers on mission objectives in a chaotic arena.",
    language: "C#",
    stars: 0,
    homepage: null,
    github_url: "https://github.com/Aydhiny/chaos-makers-multiplayer",
    topics: ["unity", "multiplayer", "game"],
  },
  {
    name: "mehmedovic-portfolio",
    description: "This portfolio — Next.js 15, Three.js, Framer Motion, TypeScript, synthwave aesthetic, multilingual (EN/BS).",
    language: "TypeScript",
    stars: 1,
    homepage: "https://mehmedovic-portfolio.vercel.app",
    github_url: "https://github.com/Aydhiny/mehmedovic-portfolio",
    topics: ["nextjs", "portfolio", "threejs", "framer-motion"],
  },
];

const PER_PAGE = 6;

export default function GitHubGrid() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(REPOS.length / PER_PAGE);
  const visible = REPOS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-[#fda4af] mb-2">Open Source</p>
          <h2 className="font-michroma g-text uppercase text-3xl sm:text-4xl tracking-wide">
            GitHub Repos
          </h2>
        </div>
        <Link
          href="https://github.com/Aydhiny"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary flex items-center gap-2 text-sm"
        >
          <FaGithub className="size-4" />
          View All on GitHub
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((repo) => {
          const langColor = LANG_COLORS[repo.language ?? ""] ?? LANG_COLORS.default;
          return (
            <div
              key={repo.name}
              className="group flex flex-col justify-between rounded-2xl border border-[var(--border-2)] bg-white/[0.03] p-5 gap-4 hover:border-[var(--accent)]/40 transition-colors duration-300"
            >
              {/* Top */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-michroma text-white text-sm leading-tight group-hover:text-[var(--accent)] transition-colors">
                    {repo.name}
                  </h3>
                  {repo.stars > 0 && (
                    <span className="flex items-center gap-1 text-[#fbbf24] text-xs shrink-0">
                      <FaStar size={10} />
                      {repo.stars}
                    </span>
                  )}
                </div>

                <p className="text-[var(--fg-2)] text-xs leading-relaxed line-clamp-3">
                  {repo.description ?? "No description yet."}
                </p>

                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[0.6rem] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--fg-3)] tracking-wide"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between gap-2 pt-1">
                {/* Language */}
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-xs text-[var(--fg-2)]">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColor }}
                    />
                    {repo.language}
                  </span>
                )}

                {/* Links */}
                <div className="flex items-center gap-2 ml-auto">
                  <Link
                    href={repo.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn p-2 rounded-lg text-[var(--fg-2)] hover:text-[var(--accent)] transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={14} />
                  </Link>
                  {repo.homepage && (
                    <Link
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-btn p-2 rounded-lg text-[var(--fg-2)] hover:text-[var(--accent)] transition-colors"
                      aria-label="Live site"
                    >
                      <FaExternalLinkAlt size={12} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="glass-btn p-2.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <FaChevronLeft size={14} className="text-[var(--accent)]" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === page ? "bg-[var(--accent)] w-5" : "bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="glass-btn p-2.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <FaChevronRight size={14} className="text-[var(--accent)]" />
          </button>
        </div>
      )}
    </div>
  );
}
