import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

export default function page() {
  return (
    <div className="mx-52 my-20 flex flex-col cursor-default">
      <h1 className="text-6xl font-bold">Ajdin Mehmedović</h1>
      <h4 className="text-4xl text-gray-500 py-4">
        Software Engineering Student, Music Producer, Graphic Designer
      </h4>
      <p className="text-2xl text-gray-400">
        Currently a student at the{" "}
        <span className="font-bold text-main-app-teal">
          Faculty of Information Technologies in Mostar
        </span>{" "}
        . My main focus of study is software engineering, but I also have
        experience in music production and design. As a Music Producer, I am
        known under the pseudonym Aydhiny. I have been developing my passion for
        music for over 6 years, and today I am proud to say that I have
        perfected my skills. The creativity that I use in music, I transfer to
        my work in software engineering and design. <br /> <br /> These three
        fields inspire me to constantly grow and improve myself. In addition to
        my academic work and work in music, I am also involved in Graphic, UI
        design, and I apply my knowledge and skills at my profile Plansio, where
        I have the opportunity to work on designing social media posts and
        applications. <br /> <br /> I am excited about everything I do and am
        preparing to use my knowledge and skills to contribute to the world and
        create something valuable. If you are interested in collaboration or
        knowledge exchange, please feel free to contact me on LinkedIn.
      </p>
      <p className="text-2xl py-4 text-gray-200">
        You can browse all of my programming, music production and design work
        on these links below:
      </p>
      <div className="flex py-4 justify-center">
        <a
          className="mr-4 p-4 border-2 hover:border-main-app-purple hover:text-main-app-purple transition-all duration-150 border-gray-400 rounded-full"
          href="https://github.com/Aydhiny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="size-12" />
        </a>
        <a
          className="mr-4 p-4 border-2 hover:border-main-app-purple hover:text-main-app-purple transition-all duration-150 border-gray-400 rounded-full"
          href="https://www.beatstars.com/aydhiny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBeatstars className="size-12" />
        </a>
        <a
          className="p-4 border-2 hover:border-main-app-purple hover:text-main-app-purple transition-all duration-150 border-gray-400 rounded-full"
          href="https://www.instagram.com/plansio_central"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-12" />
        </a>
      </div>
    </div>
  );
}