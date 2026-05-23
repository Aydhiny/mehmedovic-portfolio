"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Commit {
  sha: string;
  commit: { message: string; author: { date: string } };
}

const ITEMS = [
  "Music Producer · Software Engineer · Game Developer",
  "5M+ streams worldwide as Aydhiny",
  "5,000+ beats released on BeatStars",
  "Hunter Mouse 2 — coming soon",
  "FIT Coding Challenge 2025 — 1st place",
];

function timeAgo(dateStr: string) {
  const h = Math.floor((Date.now() - new Date(dateStr).getTime()) / 3600000);
  return h < 24 ? `${h}h ago` : `${Math.floor(h / 24)}d ago`;
}

const SEP = <span className="mx-5 opacity-30">◆</span>;

export default function TopStrip() {
  const [commit, setCommit] = useState("");
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    fetch("https://api.github.com/repos/Aydhiny/mehmedovic-portfolio/commits?per_page=1")
      .then(r => r.ok ? r.json() : [])
      .then((data: Commit[]) => {
        if (data[0]) {
          const c = data[0];
          setCommit(
            `${c.sha.slice(0, 7)} — ${c.commit.message.split("\n")[0].slice(0, 50)}`
          );
        }
      })
      .catch(() => {});
  }, []);

  const items = commit ? [commit, ...ITEMS] : ITEMS;
  const doubled = [...items, ...items];

  return (
    <div
      className="hidden md:flex items-center overflow-hidden h-8"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid rgba(233,30,140,0.18)",
      }}
    >
      <div className="flex-1 overflow-hidden">
        <div className="strip-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center flex-shrink-0 text-[0.65rem] font-medium tracking-wide whitespace-nowrap"
              style={{ color: "#111018" }}
            >
              {i === 0 && commit ? (
                <Link
                  href="https://github.com/Aydhiny/mehmedovic-portfolio/commits/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                  style={{ color: "#e91e8c" }}
                >
                  git push · {item}
                </Link>
              ) : (
                <span>{item}</span>
              )}
              {SEP}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
