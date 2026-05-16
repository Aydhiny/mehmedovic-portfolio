"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaCircle } from "react-icons/fa6";

interface Commit {
  sha: string;
  commit: { message: string; author: { date: string } };
  html_url: string;
}

const BLOG_TEASERS = [
  { text: "Building a low-poly Three.js scene from scratch", href: "/blog" },
  { text: "Why I switched from Vite to Next.js App Router", href: "/blog" },
  { text: "Synthwave UI: crafting neon aesthetics with Tailwind", href: "/blog" },
  { text: "Unity game dev tips for indie beginners", href: "/blog" },
  { text: "My internship at HTEC — what I learned", href: "/blog" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 60)  return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

type Item =
  | { kind: "commit"; sha: string; msg: string; url: string; when: string }
  | { kind: "blog";   text: string; href: string };

export default function TopStrip() {
  const [items, setItems] = useState<Item[]>([]);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    fetch("https://api.github.com/repos/Aydhiny/mehmedovic-portfolio/commits?per_page=5")
      .then((r) => r.ok ? r.json() : [])
      .then((data: Commit[]) => {
        const commits: Item[] = data.slice(0, 5).map((c) => ({
          kind:  "commit",
          sha:   c.sha.slice(0, 7),
          msg:   c.commit.message.split("\n")[0].slice(0, 60),
          url:   c.html_url,
          when:  timeAgo(c.commit.author.date),
        }));
        const blogs: Item[] = shuffle(BLOG_TEASERS).map((b) => ({ kind: "blog", ...b }));
        setItems(shuffle([...commits, ...blogs]));
      })
      .catch(() => {
        const blogs: Item[] = shuffle(BLOG_TEASERS).map((b) => ({ kind: "blog", ...b }));
        setItems(blogs);
      });
  }, []);

  // Don't render until we have items
  if (items.length === 0) return null;

  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className="hidden md:flex items-center overflow-hidden h-9 border-b border-[var(--border)]"
      style={{ background: "rgba(7,7,14,0.95)", backdropFilter: "blur(12px)" }}
    >
      {/* Left badge */}
      <div className="flex-shrink-0 flex items-center gap-1.5 px-3 h-full border-r border-[var(--border)] bg-[#07070e]">
        <FaCircle className="size-1.5 text-[var(--accent)] animate-pulse" />
        <span className="font-michroma text-[0.55rem] tracking-[0.2em] uppercase text-[var(--fg-3)]">Live</span>
      </div>

      {/* Marquee */}
      <div className="flex-1 overflow-hidden relative">
        <div className="strip-track flex items-center gap-0">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              {item.kind === "commit" ? (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 text-[0.7rem] text-[var(--fg-2)] hover:text-white transition-colors duration-150 whitespace-nowrap group"
                >
                  <FaGithub className="size-3 text-[var(--fg-3)] group-hover:text-[var(--accent)] transition-colors" />
                  <span className="font-mono text-[var(--accent)] mr-1">{item.sha}</span>
                  <span>{item.msg}</span>
                  <span className="text-[var(--fg-3)] ml-1">{item.when}</span>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 px-5 text-[0.7rem] text-[var(--fg-2)] hover:text-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span className="text-[var(--accent-gold)] mr-0.5">✦</span>
                  {item.text}
                </Link>
              )}
              {/* Separator dot */}
              <span className="text-[var(--border-2)] text-xs select-none">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
