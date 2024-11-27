import Image from "next/image";
import React from "react";
import { FaCodeBranch, FaPenFancy } from "react-icons/fa";
import { TiNotes } from "react-icons/ti";
import Profile from "../../images/profile-pic.png";
export default function page() {
  return (
    <div className="p-12 justify-center text-center cursor-default">
      <div className="text-left">
        <div className="flex text-gray-50 text-center items-center">
          <Image
            className="cursor-pointer hover:opacity-65 m-6 bg-main-background-grey rounded-full shadow-2xl border-2 border-main-app-purple transition-all duration-300"
            src={Profile}
            alt="profile-pic"
            width={400}
            height={400}
          />
          <div className="flex text-left flex-col">
            <div className="flex text-center items-center">
              <h1 className="font-bold text-6xl">Ajdin Mehmedović</h1>
              <FaCodeBranch className="size-10 mx-2" />
              <TiNotes className="size-10 mx-2" />
              <FaPenFancy className="size-10 mx-2" />
            </div>
            <p className="pt-4 text-xl text-gray-300">
              Software Engineering Student, Music Producer, Graphic Designer
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex-col flex">
            <p className="text-gray-400 text-lg">
              Currently a student at the Faculty of Information Technologies in
              Mostar. My main focus of study is software engineering, but I also
              have experience in music production and design. As a Music
              Producer, I am known under the pseudonym Aydhiny. I have been
              developing my passion for music for over 6 years, and today I am
              proud to say that I have perfected my skills. The creativity that
              I use in music, I transfer to my work in software engineering and
              design. These three fields inspire me to constantly grow and
              improve myself. In addition to my academic work and work in music,
              I am also involved in Graphic, UI design, and I apply my knowledge
              and skills at my profile Plansio, where I have the opportunity to
              work on designing social media posts and applications. I am
              excited about everything I do and am preparing to use my knowledge
              and skills to contribute to the world and create something
              valuable. If you are interested in collaboration or knowledge
              exchange, please feel free to contact me on LinkedIn.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-6xl">Music Production</h1>
      </div>
    </div>
  );
}
