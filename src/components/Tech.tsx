import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa"; // Example tech icons

export default function Tech() {
  return (
    <div>
      <h1 className="font-bold py-4 px-52 text-4xl sm:text-5xl xl:text-6xl">
        Tech Stack
      </h1>
      <div className="p-12 mb-12 bg-main-background-grey border-y shadow-2xl border-gray-700">
        <h1 className="font-bold text-4xl sm:text-5xl xl:text-6xl pb-2 pt-4 xl:mr-4"></h1>
        <div className="flex justify-around">
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaReact size={100} className="text-blue-500" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaHtml5 size={100} className="text-orange-500" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaCss3Alt size={100} className="text-blue-600" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaNodeJs size={100} className="text-green-500" />
          </div>
          <div className="tech-icon hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaGithub size={100} className="text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
