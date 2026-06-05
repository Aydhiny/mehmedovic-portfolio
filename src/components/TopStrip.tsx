"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Commit {
  sha: string;
  commit: { message: string };
}

const ITEMS = [
  "Software Engineer · Music Producer · Game Developer",
  "5M+ Streams · 5,000+ Beats · Hunter Mouse 2 Coming Soon",
];

const SEP = <span className="mx-6 opacity-25">◆</span>;

export default function TopStrip() {
  const [commit, setCommit] = useState("");
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    fetch("https://api.github.com/repos/Aydhiny/mehmedovic-portfolio/commits?per_page=1")
      .then(r => r.ok ? r.json() : [])
      .then((data: Commit[]) => {
        if (data[0])
          setCommit(`${data[0].sha.slice(0, 7)} — ${data[0].commit.message.split("\n")[0].slice(0, 52)}`);
      })
      .catch(() => {});
  }, []);

  const items = commit ? [commit, ...ITEMS] : ITEMS;
  const doubled = [...items, ...items];

  return (
    <div
      className="hidden md:flex items-center overflow-hidden h-8"
      style={{
        background: "#060e1a",
        borderBottom: "1px solid rgba(249,115,22,0.2)",
      }}
    >
      <div className="flex-1 overflow-hidden">
        <div className="strip-track">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="flex items-center flex-shrink-0 text-[0.64rem] font-medium tracking-wide whitespace-nowrap"
              style={{ color: "#6b9ab8" }}
            >
              {i === 0 && commit ? (
                <Link
                  href="https://github.com/Aydhiny/mehmedovic-portfolio/commits/master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
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
