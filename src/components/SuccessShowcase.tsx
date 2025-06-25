"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
  FaTrophy,
  FaMusic,
  FaGamepad,
  FaPaintBrush,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";

export default function SuccessShowcase() {
  const successes = [
    {
      title: "First Place - National Game Development",
      description:
        "Crowned the best in the country for game development with my own project.",
      image: "/images/success/game_award.jpg",
      icon: <FaTrophy className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Hunter Mouse 2 - Full Indie Collectathon",
      description:
        "Coded, designed, and composed music for Hunter Mouse 2 - a complete indie collectathon experience.",
      image: "/images/success/huntermouse2.png",
      icon: <FaGamepad className="text-pink-400 text-4xl" />,
    },
    {
      title: "Platinum Music Productions",
      description:
        "Produced platinum tracks and collaborated with multi-platinum producers worldwide. Over 5000 beats created.",
      image: "/images/success/platinum_music.jpg",
      icon: <FaMusic className="text-main-app-purple text-4xl" />,
    },
    {
      title: "Futures Leaders Summit - Full Conference Design",
      description:
        "Designed every visual element for the entire Futures Leaders Summit, from branding to promotional materials.",
      image: "/images/success/fls_design.png",
      icon: <FaPaintBrush className="text-green-400 text-4xl" />,
    },
  ];

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMe = document.getElementById("about-me");
      if (aboutMe) {
        const rect = aboutMe.getBoundingClientRect();
        setShowConfetti(rect.top >= 0 && rect.bottom <= window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-8 xl:p-16 mt-16 space-y-16 relative overflow-hidden">
      {/* CONFETTI */}
      {showConfetti && (
        <Confetti width={width} height={height} numberOfPieces={200} />
      )}

      {/* ABOUT ME SECTION */}
      <motion.div
        id="about-me"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          I'm a multidisciplinary creative — game developer, music producer,
          designer, and tech enthusiast. Whether it's crafting award-winning
          games, producing platinum music, or building slick designs, I do it
          all with passion and precision.
        </p>
        <div className="flex justify-center gap-6 text-3xl text-white">
          <a
            href="https://www.instagram.com/ajdinmehmedovix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/aydhiny"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/ajdin-mehmedovic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/aydhiny"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.beatstars.com/aydhiny"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-main-app-purple transition-colors"
          >
            <SiBeatstars />
          </a>
        </div>
      </motion.div>

      {/* SUCCESS SHOWCASE */}
      <div>
        <h2 className="text-3xl md:text-5xl text-white font-bold text-center mb-12">
          Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successes.map((success, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.07,
                rotate: [0, 2, -2, 0],
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              }}
              transition={{ duration: 0.4, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="bg-main-background-grey border border-violet-400 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={success.image}
                  alt={success.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {success.icon}
                  <h3 className="ml-4 text-xl md:text-2xl text-white font-bold">
                    {success.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  {success.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
