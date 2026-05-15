"use client";
import React from "react";

export default function Spotlight() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Strong background gradient — always visible even without SVG */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 70% at 50% -10%, rgba(124,58,237,0.32) 0%, transparent 65%),
            radial-gradient(ellipse 50% 45% at 10% 55%, rgba(0,207,180,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 90% 30%, rgba(124,58,237,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 30% 25% at 80% 80%, rgba(0,207,180,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* SVG spotlight ellipses */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="blur-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="55" />
          </filter>
          <filter id="blur-medium" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
        </defs>

        {/* Main purple ambient glow */}
        <ellipse cx="50%" cy="-8%" rx="50%" ry="60%" fill="rgba(124,58,237,0.22)" filter="url(#blur-heavy)" />
        {/* Teal left glow */}
        <ellipse cx="8%"  cy="25%" rx="28%" ry="35%" fill="rgba(0,207,180,0.12)"  filter="url(#blur-heavy)" />
        {/* Purple right accent */}
        <ellipse cx="88%" cy="10%" rx="22%" ry="28%" fill="rgba(124,58,237,0.20)" filter="url(#blur-medium)" />
        {/* Teal right lower */}
        <ellipse cx="92%" cy="60%" rx="15%" ry="22%" fill="rgba(0,207,180,0.10)" filter="url(#blur-medium)" />
      </svg>

      {/* Diagonal beam lines */}
      <div className="absolute top-0 left-[30%] w-[2px] h-[70%] opacity-[0.06]"
        style={{ background: "linear-gradient(to bottom, rgba(168,85,247,1), transparent)", transform: "rotate(-12deg) scaleX(6)", transformOrigin: "top center", filter: "blur(3px)" }} />
      <div className="absolute top-0 left-[55%] w-[2px] h-[55%] opacity-[0.04]"
        style={{ background: "linear-gradient(to bottom, rgba(0,207,180,1), transparent)", transform: "rotate(6deg) scaleX(8)", transformOrigin: "top center", filter: "blur(4px)" }} />
      <div className="absolute top-0 right-[20%] w-[2px] h-[45%] opacity-[0.07]"
        style={{ background: "linear-gradient(to bottom, rgba(124,58,237,1), transparent)", transform: "rotate(18deg) scaleX(4)", transformOrigin: "top center", filter: "blur(2px)" }} />
    </div>
  );
}
