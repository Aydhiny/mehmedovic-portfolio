"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ChaosImage from "@images/game/1.png";
import MusicImage from "@images/music/aydhiny.jpg";
import CodeImage from "@images/code.png";

export default function Journey() {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-black to-gray-900 text-gray-100 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          From Dreamer to Doer
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A journey of passion, creativity, and relentless pursuit of growth.
          Discover how music, coding, and design merge to create something
          extraordinary.
        </motion.p>
        <motion.div
          className="mt-8 w-full h-2 bg-gray-700 rounded-xl relative overflow-hidden"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute top-0 left-0 h-full bg-indigo-500 w-full animate-pulse"></div>
        </motion.div>
      </section>

      {/* Milestones Section */}
      <section className="relative py-16 px-6">
        <motion.div
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="bg-gradient-to-b from-gray-800 to-black opacity-30 rounded-full h-[500px] w-[500px] mx-auto"></div>
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          The Milestones
        </h2>
        <div className="flex flex-col space-y-12">
          {/* Milestone 1 */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:space-x-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={MusicImage}
              alt="Music Journey"
              className="w-48 sm:w-60 rounded-lg shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-2">Early Days</h3>
              <p className="text-gray-300">
                My love for music started it all. Producing beats and melodies
                taught me the power of creativity and perseverance.
              </p>
            </div>
          </motion.div>
          {/* Milestone 2 */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:space-x-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={CodeImage}
              alt="Coding Journey"
              className="w-48 sm:w-60 rounded-lg shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-2">Discovering Code</h3>
              <p className="text-gray-300">
                Coding opened a new world. The ability to bring ideas to life
                through logic and creativity has been transformative.
              </p>
            </div>
          </motion.div>
          {/* Milestone 3 */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:space-x-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={ChaosImage}
              alt="Hunter Mouse"
              className="w-48 sm:w-60 rounded-lg shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-2">Hunter Mouse</h3>
              <p className="text-gray-300">
                My first major game project! &quot;HUNTER MOUSE&quot; is a
                testament to how passion and collaboration can create something
                magical. Combining all of my skills into one big game project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Path Ahead Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">The Path Ahead</h2>
        <motion.p
          className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The journey continues as I explore new horizons, blending the power of
          code, design, and sound to make a difference in the world.
        </motion.p>
      </section>
    </div>
  );
}
