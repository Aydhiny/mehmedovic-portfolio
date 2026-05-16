"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaCircle } from "react-icons/fa6";

interface Commit {
  sha: string;
  commit: { message: string; author: { date: string } };
  html_url: string;
}

const STATIC_ITEMS = [
  "✦ Music Producer · Software Engineer · Game Developer",
  "✦ Check out Hunter Mouse 2 — the next big thing",
  "✦ 5M+ streams worldwide as Aydhiny",
  "✦ Latest project: Mehmedović Portfolio v3",
];

function timeAgo(dateStr: string): string {
  const diff  = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export default function TopStrip() {
  const [commitLine, setCommitLine] = useState("");
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    fetch("https://api.github.com/repos/Aydhiny/mehmedovic-portfolio/commits?per_page=1")
      .then((r) => r.ok ? r.json() : [])
      .then((data: Commit[]) => {
        if (data[0]) {
          const c = data[0];
          setCommitLine(`${c.sha.slice(0, 7)} · ${c.commit.message.split("\n")[0].slice(0, 55)} · ${timeAgo(c.commit.author.date)}`);
        }
      })
      .catch(() => {});
  }, []);

  // Build items list: latest commit + static items, duplicated for seamless loop
  const items = commitLine
    ? [commitLine, ...STATIC_ITEMS]
    : STATIC_ITEMS;
  const doubled = [...items, ...items];

  return (
    <div
      className="hidden md:flex items-center overflow-hidden h-9 border-b border-[var(--border)]"
      style={{ background: "rgba(7,7,14,0.97)" }}
    >
      {/* Left badge */}
      <div className="flex-shrink-0 flex items-center gap-1.5 px-3 h-full border-r border-[var(--border)]">
        <FaCircle className="size-1.5 text-[var(--accent)]" style={{ animation: "none", opacity: 0.8 }} />
        <FaGithub className="size-3 text-[var(--fg-3)]" />
      </div>

      {/* Slow marquee */}
      <div className="flex-1 overflow-hidden">
        <div className="strip-track">
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center flex-shrink-0">
              {i === 0 && commitLine ? (
                <Link
                  href="https://github.com/Aydhiny/mehmedovic-portfolio/commits/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 text-[0.68rem] font-mono text-[var(--accent)] hover:text-white transition-colors whitespace-nowrap"
                >
                  {item}
                </Link>
              ) : (
                <span className="px-6 text-[0.68rem] text-[var(--fg-3)] whitespace-nowrap">
                  {item}
                </span>
              )}
              <span className="text-[var(--border-2)] select-none px-1">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
