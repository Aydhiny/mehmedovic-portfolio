"use client";
import React, { useState } from "react";
import Train from "../images/train.gif";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function TrainTrack() {
  const { t } = useLanguage();
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Label */}
      <div className="text-center pt-14 pb-4">
        <p
          className="font-michroma text-[0.6rem] tracking-[0.28em] uppercase"
          style={{ color: "#fda4af" }}
        >
          {t.trainTrack.catchText}
        </p>
      </div>

      {/* Track container */}
      <div
        className="relative w-full h-28 overflow-hidden"
        style={{
          background: "linear-gradient(to top, rgba(10,5,15,0.95) 0%, transparent 100%)",
        }}
      >
        {/* Grid floor lines matching the hero */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(233,30,140,0.15) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Car */}
        <div className="absolute top-2 animate-train">
          <Image
            src={Train}
            alt="car"
            width={144}
            height={72}
            className={`w-36 h-auto cursor-pointer transition-transform ${
              isJumping ? "animate-jump" : ""
            }`}
            onClick={handleClick}
          />
        </div>

        {/* Track rail */}
        <div
          className="absolute bottom-0 w-full h-7"
          style={{
            background: "linear-gradient(to right, rgba(233,30,140,0.08), rgba(249,115,22,0.08))",
            borderTop: "1px solid rgba(233,30,140,0.35)",
          }}
        >
          <div className="h-full flex items-center justify-evenly px-2">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{
                  background: i % 3 === 0
                    ? "rgba(233,30,140,0.55)"
                    : i % 3 === 1
                    ? "rgba(249,115,22,0.45)"
                    : "rgba(251,191,36,0.35)",
                  boxShadow: i % 3 === 0 ? "0 0 4px rgba(233,30,140,0.4)" : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-6 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(7,7,14,0.8), transparent)",
          }}
        />
      </div>
    </div>
  );
}
