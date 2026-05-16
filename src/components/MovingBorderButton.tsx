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
    <Link href={href} target={target} rel={rel} className={`btn-primary ${className}`}>
      {children}
    </Link>
  );
}
