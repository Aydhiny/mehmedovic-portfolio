"use client";
import React from "react";

export default function Spotlight() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* SVG spotlight beams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="blur-heavy">
            <feGaussianBlur stdDeviation="60" />
          </filter>
          <filter id="blur-medium">
            <feGaussianBlur stdDeviation="35" />
          </filter>
          <filter id="blur-light">
            <feGaussianBlur stdDeviation="20" />
          </filter>
        </defs>

        {/* Large purple ambient glow — top center */}
        <ellipse
          cx="50%"
          cy="-5%"
          rx="45%"
          ry="55%"
          fill="rgba(124,58,237,0.18)"
          filter="url(#blur-heavy)"
        />

        {/* Teal accent — upper left */}
        <ellipse
          cx="10%"
          cy="20%"
          rx="30%"
          ry="40%"
          fill="rgba(0,207,180,0.08)"
          filter="url(#blur-heavy)"
        />

        {/* Bright purple beam — top right diagonal */}
        <ellipse
          cx="80%"
          cy="0%"
          rx="20%"
          ry="30%"
          fill="rgba(124,58,237,0.22)"
          filter="url(#blur-medium)"
        />

        {/* Narrow teal beam — right side */}
        <ellipse
          cx="95%"
          cy="35%"
          rx="12%"
          ry="25%"
          fill="rgba(0,207,180,0.12)"
          filter="url(#blur-medium)"
        />
      </svg>

      {/* CSS diagonal beam lines — Midnight Riches style */}
      <div
        className="absolute top-0 left-1/4 w-px h-3/4 opacity-[0.07]"
        style={{
          background: "linear-gradient(to bottom, rgba(124,58,237,0.9), transparent)",
          transform: "rotate(-15deg) scaleX(3)",
          transformOrigin: "top center",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 w-px h-2/3 opacity-[0.05]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,207,180,0.9), transparent)",
          transform: "rotate(8deg) scaleX(4)",
          transformOrigin: "top center",
          filter: "blur(3px)",
        }}
      />
      <div
        className="absolute top-0 right-1/4 w-px h-1/2 opacity-[0.08]"
        style={{
          background: "linear-gradient(to bottom, rgba(124,58,237,0.9), transparent)",
          transform: "rotate(20deg) scaleX(2)",
          transformOrigin: "top center",
          filter: "blur(2px)",
        }}
      />

      {/* Noise grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />
    </div>
  );
}
