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
      className={`moving-border-btn relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white overflow-hidden ${className}`}
    >
      {/* Rotating conic gradient border */}
      <span className="moving-border-inner" aria-hidden="true" />
      {/* Dark bg inside */}
      <span className="absolute inset-[1.5px] rounded-[10px] bg-[#07070e] z-[1]" />
      {/* Content */}
      <span className="relative z-[2] flex items-center gap-2">{children}</span>
    </Link>
  );
}
