"use client";
import React from "react";
import Link from "next/link";

interface MovingBorderButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function MovingBorderButton({
  href,
  children,
  target,
  rel,
  className = "",
}: MovingBorderButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`moving-border-btn relative inline-flex rounded-xl overflow-hidden ${className}`}
    >
      {/* Rotating conic gradient border */}
      <span className="moving-border-inner" aria-hidden="true" />
      {/* Dark fill inset by border thickness */}
      <span className="absolute inset-[1.5px] rounded-[10px] bg-[#07070e] z-[1]" />
      {/* Content — padding lives here so moving-border-btn's 1.5px doesn't override it */}
      <span className="relative z-[2] flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white">{children}</span>
    </Link>
  );
}
