import React from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDotnet } from "react-icons/di";
import { FaReact, FaGithub } from "react-icons/fa";

export default function Tech() {
  return (
    <div>
      <h1 className="font-bold px-12 py-4 sm:px-52 text-4xl sm:text-5xl xl:text-6xl">
        Tech Stack
      </h1>
      <div className="p-12 mb-12 bg-main-background-grey border-y shadow-2xl border-gray-700">
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <RiNextjsFill size={80} className="text-white sm:text-100" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaReact size={80} className="text-blue-600 sm:text-100" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <RiTailwindCssFill
              size={80}
              className="text-blue-500 sm:text-100"
            />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <DiDotnet size={80} className="text-sky-500 sm:text-100" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaGithub size={80} className="text-gray-700 sm:text-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
