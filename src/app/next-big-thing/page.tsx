"use client";
import React, { useState, useEffect, useRef } from "react";
import Sequel from "@images/sequel/huntermouse2.png";
import Second from "@images/game/2.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Page() {
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setConfettiTriggered(true);

    // Check if we are in the client-side and containerRef is available
    if (typeof window !== "undefined" && containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, []); // Empty dependency array ensures this effect runs only once, after component mounts

  return (
    <div
      className="h-screen max-w-screen w-auto bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Sequel.src})` }}
      ref={containerRef} // Attach the ref to the container
    >
      {/* Confetti Component */}
      {confettiTriggered && (
        <Confetti width={containerWidth} height={containerHeight} />
      )}

      <motion.div
        className="flex flex-col hover:p-8 transition-all duration-150 cursor-pointer md:flex-row items-center text-center gap-6 p-4 border border-opacity-50 border-violet-400 bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-sm rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Animated Image */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            alt="sequel"
            src={Second}
            className="w-40 h-40 md:w-56 md:h-56 animate-pulse-fast"
            priority
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-6xl font-bold text-violet-400 drop-shadow-lg">
            COMING 2026
          </h1>
          <motion.h1
            className="text-xl md:text-4xl font-semibold text-white mt-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Stay tuned.
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
