"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

interface Commit {
  sha: string;
  commit: { message: string };
}

export default function TopStrip() {
  const [commit, setCommit] = useState<Commit | null>(null);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;
    fetch("https://api.github.com/repos/Aydhiny/mehmedovic-portfolio/commits?per_page=1")
      .then(r => r.ok ? r.json() : [])
      .then((data: Commit[]) => { if (data[0]) setCommit(data[0]); })
      .catch(() => {});
  }, []);

  return (
    <div
      className="hidden md:flex items-center justify-center h-8 px-6"
      style={{
        background: "#060e1a",
        borderBottom: "1px solid rgba(249,115,22,0.18)",
      }}
    >
      {commit ? (
        <Link
          href="https://github.com/Aydhiny/mehmedovic-portfolio/commits/master"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:opacity-75 transition-opacity"
        >
          <span
            className="text-[0.6rem] font-mono tracking-wider uppercase"
            style={{ color: "#e91e8c" }}
          >
            latest commit
          </span>
          <span className="w-px h-3 opacity-20" style={{ background: "#6b9ab8" }} />
          <span
            className="text-[0.64rem] font-mono"
            style={{ color: "#6b9ab8" }}
          >
            {commit.sha.slice(0, 7)}
          </span>
          <span
            className="text-[0.64rem] font-medium truncate max-w-sm"
            style={{ color: "#8bafc4" }}
          >
            {commit.commit.message.split("\n")[0].slice(0, 60)}
          </span>
        </Link>
      ) : (
        <span
          className="text-[0.64rem] font-medium tracking-widest uppercase"
          style={{ color: "#3a5a70" }}
        >
          Ajdin Mehmedović · Software Engineer · Music Producer
        </span>
      )}
    </div>
  );
}
