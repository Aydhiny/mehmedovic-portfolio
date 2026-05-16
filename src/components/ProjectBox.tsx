"use client";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

const LANG_DOT: Record<string, string> = {
  yellow: "#eab308",
  blue: "#60a5fa",
  green: "#4ade80",
  red: "#f87171",
  orange: "#fb923c",
  gray: "#71717a",
};

interface ProjectBoxProps {
  name: string;
  description: string;
  tech: string;
  color: string;
  link?: string;
  github?: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ name, description, tech, color, link, github }) => {
  const dot = LANG_DOT[color] ?? "#71717a";
  return (
    <div className="glass rounded-2xl p-5 flex items-center justify-between gap-4 border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300">
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-white text-base mb-1 truncate">{name}</h4>
        <p className="text-[var(--fg-2)] text-sm leading-relaxed line-clamp-2">{description}</p>
        <div className="flex items-center gap-1.5 mt-2.5">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: dot }} />
          <span className="text-[var(--fg-3)] text-xs">{tech}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass-btn p-2.5 rounded-xl text-[var(--fg-2)] hover:text-white transition-colors duration-150"
          >
            <FaGithub className="size-4" />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live site"
            className="glass-btn p-2.5 rounded-xl text-[var(--fg-2)] hover:text-white transition-colors duration-150"
          >
            <FaLink className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
