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
        className="relative mx-auto w-full max-w-6xl border-b-8 overflow-hidden border border-violet-500"
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
          Enter Jungle Scapes, where worlds impress & adventure awaits. Your
          journey is to retrieve thunderbolts, so you can once and for all stop
          and defeat the traitor of the mice -{" "}
          <span className="text-white font-bold">Reuf.</span> ⚡ Explore various
          insanely detailed worlds & defeat the enemy!
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
                Coded, designed & implemented entirely solo — a true indie
                project built with passion. Custom game mechanics, music & UI
                design
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPuzzlePiece className="text-yellow-400 text-3xl mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg">Vibrant Worlds</h3>
              <p>
                Explore 7 unique worlds, each with its own theme and challenges,
                from lush jungles to icy peaks.
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
                your journey. 10+ tracks of original music to immerse you in the
                game.
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
          <button className="px-10 py-4 bg-violet-600 hover:bg-white hover:text-violet-600 text-white font-bold rounded-full text-xl transition-colors border-b-2 border-white">
            Explore the Game
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
