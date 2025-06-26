"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGamepad,
  FaMusic,
  FaStar,
  FaRocket,
  FaMagic,
  FaPuzzlePiece,
  FaGlobe,
  FaAward,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";
import Logo from "@images/sequel/logo.png";
import Screenshot1 from "@images/sequel/screenshot1.png";
import Screenshot2 from "@images/sequel/screenshot2.png";
import Screenshot3 from "@images/sequel/screenshot3.png";
import Screenshot4 from "@images/sequel/screenshot4.png";
import Character1 from "@images/sequel/character1.png";
import Character2 from "@images/sequel/character2.png";
import World1 from "@images/sequel/world1.png";
import World2 from "@images/sequel/world2.png";
import SoundtrackCover from "@images/sequel/soundtrack.png";

const Lightbox = ({ src, alt, onClose }: any) => {
  if (!src) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-4xl max-h-[90vh] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          layout="intrinsic"
          width={1200}
          height={800}
          objectFit="contain"
          className="rounded-lg"
        />
        <button
          className="absolute top-4 right-4 text-white hover:text-violet-400 transition-colors duration-200"
          onClick={onClose}
        >
          <FaTimes className="text-3xl" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default function Page() {
  const screenshots = [Screenshot1, Screenshot2, Screenshot3, Screenshot4];
  const characters = [Character1, Character2];
  const worlds = [World1, World2];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentAlt, setCurrentAlt] = useState("");

  const openLightbox = (imageSrc: any, imageAlt: any) => {
    setCurrentImage(imageSrc);
    setCurrentAlt(imageAlt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentAlt("");
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-24 p-6 md:p-12 bg-gradient-to-t from-[#2c277e] via-[#2a1155] to-[#2e116a] text-white overflow-hidden relative">
      {/* SVG Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239966cc' fill-opacity='0.4'%3E%3Cpath d='M36 34.237L31.782 30 36 25.763 40.218 30zM55 20.237L50.782 16 55 11.763 59.218 16zM36 4.237L31.782 0 36-4.237 40.218 0zM17 20.237L12.782 16 17 11.763 21.218 16zM36 55.237L31.782 51 36 46.763 40.218 51zM17 39.237L12.782 35 17 30.763 21.218 35zM36 40.237L31.782 36 36 31.763 40.218 36zM17 59.237L12.782 55 17 50.763 21.218 55zM17 1.237L12.782-3 17-7.237 21.218-3z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
      {/* Background Gradient Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
      {/* Header */}
      <motion.div
        className="mt-24 text-center relative z-10"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={Logo}
          alt="Hunter Mouse 2 Logo"
          className="mx-auto w-48 md:w-80 drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]"
        />
        <h1 className="text-6xl md:text-8xl font-extrabold text-violet-300 drop-shadow-[0_0_15px_rgba(192,132,252,0.6)] mt-8 tracking-tighter leading-tight">
          HUNTER MOUSE 2
        </h1>
        <p className="text-xl md:text-3xl mt-4 font-semibold text-gray-200 italic">
          A Modern Collectathon Adventure - Coming 2026
        </p>
      </motion.div>
      {/* Features */}
      <motion.section
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10 p-4 md:p-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: <FaRocket />,
            title: "Epic Adventure",
            desc: "Embark on a sprawling journey filled with danger, profound mystery, and countless hidden secrets awaiting your discovery.",
          },
          {
            icon: <FaPuzzlePiece />,
            title: "Thunderbolt Collectables",
            desc: "Collect thunderbolts to enter Reuf's castle, and to stop him from unleashing chaos across the realms.",
          },
          {
            icon: <FaMagic />,
            title: "Magical Worlds",
            desc: "Traverse seven breathtakingly stunning worlds, each a unique masterpiece bursting with distinct personality and charm.",
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow:
                "0 15px 30px rgba(114,90,219,0.7), 0 0 40px rgba(192,132,252,0.5)",
              borderColor: "#a78bfa",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="bg-gradient-to-br from-[#9000ff4f] to-[rgba(114,90,219,0.32)] border border-violet-500 backdrop-blur-lg p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center gap-5 transition-all duration-300 transform perspective-1000 group hover:z-20"
          >
            <div className="text-5xl text-violet-300 mb-2 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-3xl font-bold text-violet-200 drop-shadow-md">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-lg">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>
      {/* Game Overview / Screenshot Gallery */}
      <motion.section
        className="max-w-7xl w-full flex flex-col gap-8 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-violet-400 font-bold flex items-center gap-3 self-center md:self-start">
          <FaGamepad className="text-violet-300" /> Game Overview
        </h2>
        <p className="text-gray-300 text-lg mb-6 text-center md:text-left leading-relaxed max-w-4xl self-center md:self-start">
          Inspired by beloved classics like Banjo-Kazooie, Hunter Mouse 2
          delivers a{" "}
          <span className="font-bold text-violet-200">
            vibrant, thrilling collectathon adventure
          </span>
          . Embark on an epic quest to collect powerful thunderbolts, master an
          arsenal of exciting new moves, and meticulously uncover every secret
          hidden across expansive, beautifully crafted worlds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(114,90,219,0.5)",
                zIndex: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-pointer group rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              onClick={() => openLightbox(img, `Screenshot ${idx + 1}`)} // ONLY screenshots are zoomable
            >
              <Image
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <FaSearchPlus className="text-4xl text-violet-400 drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Characters */}
      <motion.section
        className="max-w-7xl w-full flex flex-col gap-8 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-violet-400 font-bold flex items-center gap-3 self-center md:self-start">
          <FaStar className="text-violet-300" /> Meet the Characters
        </h2>
        <p className="text-gray-300 text-lg mb-6 text-center md:text-left leading-relaxed max-w-4xl self-center md:self-start">
          Join Puntsy the Mouse, our intrepid hero, and a vibrant cast of
          eccentric allies and formidable rivals. Each unique character adds a
          layer of humor, poses a new challenge, or unveils a tantalizing
          mystery to your grand adventure across the realms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((character, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(114,90,219,0.5)",
                zIndex: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-default group rounded-xl overflow-hidden shadow-lg transition-all duration-300" // Cursor is default, no onClick
            >
              <Image
                src={character}
                alt={`Character ${idx + 1}`}
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                {/* No zoom icon for characters */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Worlds */}
      <motion.section
        className="max-w-7xl w-full flex flex-col gap-8 relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-violet-400 font-bold flex items-center gap-3 self-center md:self-start">
          <FaGlobe className="text-violet-300" /> Explore the Worlds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {worlds.map((world, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(114,90,219,0.5)",
                zIndex: 5,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative cursor-default group rounded-xl overflow-hidden shadow-lg transition-all duration-300" // Cursor is default, no onClick
            >
              <Image
                src={world}
                alt={`World ${idx + 1}`}
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                {/* No zoom icon for worlds */}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-gray-300 text-lg text-center md:text-left leading-relaxed max-w-4xl self-center md:self-start">
          From the vibrant ecosystems of lush jungles to the dazzling heights of
          futuristic cityscapes, every single world is meticulously designed and
          teeming with unique secrets, challenging enemies, and countless
          collectibles. Are you truly ready to uncover them all and claim your
          destiny?
        </p>
      </motion.section>
      {/* Soundtrack */}
      <motion.section
        className="max-w-7xl w-full flex flex-col gap-8 text-center relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-violet-400 font-bold flex justify-center items-center gap-3">
          <FaMusic className="text-violet-300" /> Original Soundtrack
        </h2>
        <motion.div
          whileHover={{
            scale: 1.08,
            boxShadow: "0 20px 40px rgba(114,90,219,0.7)",
            rotate: 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="mx-auto cursor-pointer p-4 bg-gradient-to-br from-violet-900 to-indigo-900 rounded-lg shadow-xl border border-violet-700"
        >
          <Image
            src={SoundtrackCover}
            alt="Hunter Mouse 2 Original Soundtrack Cover"
            className="rounded-lg shadow-2xl w-56 md:w-80 border-2 border-violet-500"
          />
        </motion.div>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Immerse yourself in a whimsical, energetic, and perfectly crafted
          soundtrack composed under the visionary direction of{" "}
          <span className="text-violet-300 font-bold text-xl drop-shadow-md">
            Aydhiny Beats
          </span>{" "}
          — designed to flawlessly complement and elevate every moment of your
          grand adventure.
        </p>
      </motion.section>
      {/* Awards */}
      <motion.section
        className="max-w-7xl w-full flex flex-col gap-8 text-center relative z-10 mb-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-violet-400 font-bold flex justify-center items-center gap-3">
          <FaAward className="text-violet-300" /> Award-Winning Title
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Hunter Mouse 2 proudly claimed{" "}
          <span className="font-extrabold text-white text-xl">1st place</span>{" "}
          at the highly competitive{" "}
          <span className="font-bold text-violet-200">
            FIT Coding Challenge v18
          </span>
          , earning significant national recognition for its groundbreaking
          innovation, superior design, and captivating gameplay experience.
        </p>
      </motion.section>
      {/* Render Lightbox if open */}
      {lightboxOpen && (
        <Lightbox src={currentImage} alt={currentAlt} onClose={closeLightbox} />
      )}
    </div>
  );
}
