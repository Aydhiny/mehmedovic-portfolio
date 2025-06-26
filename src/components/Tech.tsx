"use client";
import React, { useRef } from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";
import { DiDotnet } from "react-icons/di";
import { FaReact, FaGithub } from "react-icons/fa";
import { SiAngular, SiBootstrap, SiAzuredevops } from "react-icons/si";
import { motion, useInView } from "framer-motion";

export default function Tech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    {
      icon: <RiNextjsFill size={80} className="text-white" />,
      label: "Next.js",
    },
    { icon: <FaReact size={80} className="text-blue-600" />, label: "React" },
    {
      icon: <RiTailwindCssFill size={80} className="text-blue-500" />,
      label: "Tailwind",
    },
    { icon: <DiDotnet size={80} className="text-sky-500" />, label: ".NET" },
    { icon: <FaUnity size={80} className="text-white" />, label: "Unity" },
    { icon: <FaGithub size={80} className="text-gray-700" />, label: "GitHub" },
    {
      icon: <SiAngular size={80} className="text-red-600" />,
      label: "Angular",
    },
    {
      icon: <SiBootstrap size={80} className="text-purple-600" />,
      label: "Bootstrap",
    },
    {
      icon: <SiAzuredevops size={80} className="text-blue-700" />,
      label: "DevOps",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="font-bold px-12 py-4 mt-12 xl:mt-36 mb-4 sm:px-52 text-4xl sm:text-5xl xl:text-6xl">
        Tech Stack
      </h1>
      <div className="p-8 mb-12 bg-gradient-to-r from-zinc-800 to-main-background-grey border-y shadow-2xl border-gray-500 overflow-hidden">
        {/* Subtle horizontal motion */}
        <motion.div
          className="flex justify-evenly flex-wrap gap-8"
          animate={{ x: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
            >
              {tech.icon}
              <p className="text-white mt-2 text-sm sm:text-base">
                {tech.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
