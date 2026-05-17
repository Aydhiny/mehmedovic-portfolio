import Link from "next/link";
import type { Metadata } from "next";
import MouseThree from "@/components/MouseThree";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "This page doesn't exist. The mouse is just as confused as you are.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 hero-glow">
      <div className="max-w-lg w-full">
        {/* 3D mouse */}
        <MouseThree className="w-56 h-56 sm:w-72 sm:h-72 mx-auto" />

        {/* Error code */}
        <p
          className="font-michroma font-bold leading-none mb-2"
          style={{
            fontSize: "clamp(5rem, 20vw, 9rem)",
            background: "linear-gradient(180deg, #fbbf24 0%, #f97316 50%, #e91e8c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </p>

        <h1 className="font-garamond italic g-text text-3xl sm:text-4xl mb-4 leading-snug">
          lost in the dungeon.
        </h1>

        <p className="text-[var(--fg-2)] text-sm sm:text-base leading-relaxed mb-10 max-w-sm mx-auto">
          This page doesn&apos;t exist. Even the mouse couldn&apos;t find it —
          and he&apos;s been looking everywhere.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            See My Work
          </Link>
        </div>
      </div>
    </div>
  );
}
