"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Link from "next/link";
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
      title: "First Place - FIT Coding Challenge v18",
      description:
        "Crowned the best in the country for game development with my own project - Hunter Mouse 2. A collectathon adventure game combining platforming, exploration, and puzzle-solving.",
      image: "/images/success/game_award.jpg",
      icon: <FaTrophy className="text-yellow-400 text-4xl" />,
      link: "https://www.bhfuturesfoundation.org/news/2025/6/5/ajdin-mehmedovi-wins-first-place-at-fit-coding-challenge-v18",
    },
    {
      title: "Hunter Mouse 2 - Full Indie Collectathon",
      description:
        "Coded, designed, and composed music for Hunter Mouse 2 - a complete indie collectathon experience.",
      image: "/images/success/huntermouse2.png",
      icon: <FaGamepad className="text-pink-400 text-4xl" />,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7333864485666951168/",
    },
    {
      title: "Platinum Music Production",
      description:
        "Music Producer of 6+ years. Produced 2Bona Candy with over 5 Million plays worldwide, collaborated with multi-platinum producers. Over 5000 beats created.",
      image: "/images/success/platinum_music.jpg",
      icon: <FaMusic className="text-main-app-purple text-4xl" />,
      link: "https://www.youtube.com/watch?v=GMIQ8ZWRQXo",
    },
    {
      title: "Futures Leaders Summit - Full Conference Design",
      description:
        "Designed every visual element for the entire Futures Leaders Summit, from branding to promotional materials.",
      image: "/images/success/fls_design.png",
      icon: <FaPaintBrush className="text-green-400 text-4xl" />,
      link: "https://your-futures-summit-link.com",
    },
  ];

  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowConfetti(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (aboutMeRef.current) observer.observe(aboutMeRef.current);

    return () => {
      if (aboutMeRef.current) observer.unobserve(aboutMeRef.current);
    };
  }, []);

  return (
    <div className="p-8 xl:p-16 mt-16 space-y-8 relative overflow-hidden">
      {showConfetti && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        >
          <Confetti width={width} height={height} numberOfPieces={200} />
        </motion.div>
      )}

      {/* ABOUT ME SECTION */}
      <motion.div
        ref={aboutMeRef}
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
          Hey there! I&apos;m a software engineering student, game developer,
          music producer, designer, and tech enthusiast. I love building stuff
          in general & that passion led me to create amazing projects across
          these fields. Browse my work below and see what I&apos;ve been up to!
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
          Achievements
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successes.map((success, index) => (
            <Link
              href={success.link}
              target="_blank"
              key={index}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.07,
                  rotate: [0, 2, -2, 0],
                  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                viewport={{ once: true }}
                className="bg-main-background-grey border border-violet-400 rounded-2xl overflow-hidden shadow-xl cursor-pointer w-full h-full"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={success.image}
                    alt={success.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
