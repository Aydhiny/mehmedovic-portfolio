"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PlyrSource } from "plyr-react";
import "plyr-react/plyr.css";
import {
  FaGamepad,
  FaPuzzlePiece,
  FaMusic,
  FaMousePointer,
} from "react-icons/fa";
import dynamic from "next/dynamic";

const Plyr = dynamic(() => import("plyr-react"), { ssr: false });

export default function HunterMouseShowcase() {
  const videoSources: PlyrSource = {
    type: "video",
    sources: [
      {
        src: "/videos/huntermouse2.mp4",
        type: "video/mp4",
        size: 1080,
      },
      {
        src: "/videos/huntermouse2.mp4",
        type: "video/mp4",
        size: 720,
      },
    ],
  };

  return (
    <div className="relative p-2 xl:p-24 mt-16 overflow-hidden text-center space-y-14 max-w-7xl mx-auto">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-6"
      >
        Hunter Mouse 2 Official Trailer 4K
      </motion.h2>

      {/* VIDEO PLAYER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-auto w-full max-w-6xl rounded-2xl overflow-hidden border-1 border-violet-500 shadow-2xl"
      >
        <Plyr source={videoSources} />
      </motion.div>

      {/* GAME INFO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-300 p-8 bg-main-background-grey text-lg md:text-xl space-y-6 max-w-4xl mx-auto"
      >
        <p>
          Embark on an epic collectathon adventure where platforming,
          puzzle-solving, and exploration collide. In **Hunter Mouse 2**, you
          play as the determined little mouse navigating vast, colorful worlds
          filled with secrets, enemies, and challenges.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="flex items-start gap-4">
            <FaGamepad className="text-pink-400 text-3xl mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg">
                Full Indie Production
              </h3>
              <p>
                Designed, coded, and produced entirely solo — a true indie
                project built with passion.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPuzzlePiece className="text-yellow-400 text-3xl mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg">
                Challenging Puzzles
              </h3>
              <p>
                Solve brain-bending puzzles that block your path and uncover
                hidden secrets.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMusic className="text-main-app-purple text-3xl mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg">
                Original Soundtrack
              </h3>
              <p>
                A fully composed soundtrack crafted to enhance every moment of
                your journey.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMousePointer className="text-green-400 text-3xl mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg">Precise Controls</h3>
              <p>
                Tight platforming mechanics inspired by the classics — your
                skills determine your success.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link href="/next-big-thing">
          <button className="px-10 py-4 bg-violet-600 hover:bg-violet-800 text-white font-bold rounded-xl text-xl transition-colors shadow-lg">
            Explore the Game
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
