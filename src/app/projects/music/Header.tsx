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
  hover: { scale: 1.3, rotate: 5, transition: { duration: 0.3 } },
  initial: { scale: 1 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const descVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
  },
};

export default function Header() {
  return (
    <div className="px-6 xl:px-48 pt-24 text-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          alt="Producer Aydhiny"
          src={ay}
          className="rounded-full cursor-pointer border mx-auto p-4 mb-8 border-opacity-50 border-violet-400 
          bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl 
          transition-all duration-300"
        />
      </motion.div>

      <motion.div
        className="p-4 rounded-full flex w-fit justify-center text-md gap-6 border mx-auto border-violet-400 
        bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        {[{ href: "https://www.beatstars.com/aydhiny", icon: <SiBeatstars /> },
          { href: "https://www.spotify.com/aydhiny", icon: <FaSpotify /> },
          { href: "https://www.youtube.com/Aydhiny", icon: <FaYoutube /> },
          { href: "https://www.instagram.com/aydhiny_beatz", icon: <GrInstagram /> }].map(({ href, icon }, index) => (
          <Link key={index} href={href} passHref>
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="cursor-pointer text-white transition-colors hover:text-main-app-purple"
            >
              {icon}
            </motion.div>
          </Link>
        ))}
      </motion.div>

      <motion.h1
        className="text-6xl font-extrabold mt-6"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Aydhiny <span className="text-main-app-purple">Beats</span>
      </motion.h1>
      <motion.h4
        className="text-xl text-gray-300 pb-6 max-w-2xl mx-auto"
        variants={descVariants}
        initial="hidden"
        animate="visible"
      >
        Multi-genre music producer with 6+ years of experience, collaborating with multi-platinum global producers.
      </motion.h4>
    </div>
  );
}
