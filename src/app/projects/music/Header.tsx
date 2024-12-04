"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import ay from "@images/music/aydhiny.jpg";
import { SiBeatstars } from "react-icons/si";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const iconVariants = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
  initial: { scale: 1 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const descVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
  },
};

export default function Header() {
  return (
    <div className="px-6 xl:px-48 pt-24 text-center items-center">
      {/* Animated Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          alt="Producer Aydhiny"
          src={ay}
          className="rounded-full cursor-pointer border mx-auto p-4 mb-12 border-opacity-50 border-violet-400 
          bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl 
          transition-all duration-150"
        />
      </motion.div>

      {/* Animated Social Icons */}
      <motion.div
        className="p-4 m-4 rounded-full flex w-fit justify-center text-4xl border mx-auto border-violet-400 
        bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <Link href="https://www.beatstars.com/aydhiny" passHref>
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="mr-4 cursor-pointer"
          >
            <SiBeatstars className="text-white hover:text-red-600" />
          </motion.div>
        </Link>
        <Link href="https://www.spotify.com/aydhiny" passHref>
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="mr-4 cursor-pointer"
          >
            <FaSpotify className="text-white hover:text-green-500" />
          </motion.div>
        </Link>
        <Link href="https://www.youtube.com/Aydhiny" passHref>
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="mr-4 cursor-pointer"
          >
            <FaYoutube className="text-white hover:text-red-600" />
          </motion.div>
        </Link>
        <Link href="https://www.instagram.com/aydhiny_beatz" passHref>
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="cursor-pointer"
          >
            <GrInstagram className="text-white hover:text-gray-700" />
          </motion.div>
        </Link>
      </motion.div>

      {/* Animated Title and Description */}
      <motion.h1
        className="text-6xl font-bold"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Aydhiny <span className="text-main-app-purple">Beats</span>
      </motion.h1>
      <motion.h4
        className="text-xl text-gray-400 pb-4"
        variants={descVariants}
        initial="hidden"
        animate="visible"
      >
        Music Producer of 6+ years, worked with multi-platinum worldwide
        renowned music producers.
      </motion.h4>
    </div>
  );
}
