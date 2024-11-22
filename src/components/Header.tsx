import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import Line from "../images/line-1.svg";
import Line2 from "../images/line-2.svg";
import { TiNotes } from "react-icons/ti";
import { FaPenFancy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex p-24 justify-center text-center cursor-default">
      <div className="text-left">
        <div className="flex text-gray-50 text-center items-center">
          <h1 className="font-bold text-6xl pb-2 pt-4 mr-4">
            Ajdin Mehmedović
          </h1>
          <FaCodeBranch className="size-10 mx-2" />
          <TiNotes className="size-10 mx-2" />
          <FaPenFancy className="size-10 mx-2" />
        </div>
        <p className="pb-4 text-gray-300">
          Software Engineering Student, Music Producer, <br /> Graphic Designer
        </p>
        <div className="flex">
          <div className="flex mr-4 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center rounded-xl text-center px-4 py-2 bg-main-app-purple text-white">
            <Link className="pr-2" href="">
              Download CV
            </Link>
            <FaDownload className="size-5" />
          </div>
          <div className="flex font-bold cursor-pointer items-center rounded-xl border px-4 py-2 hover:text-main-app-purple hover:border-main-app-purple hover:bg-main-background-grey transition-all duration-150 border-white text-center">
            <Link className="pr-2" href="https://github.com/Aydhiny">
              Github
            </Link>
            <FaGithub className="size-5" />
          </div>
        </div>
      </div>
      <Image
        className="cursor-pointer bg-main-background-grey p-4 rounded-full shadow-2xl border-2 border-main-app-purple transition-all duration-300"
        src={Profile}
        alt="profile-pic"
        width={400}
        height={400}
      />
      <Image
        src={Line}
        alt="line-1"
        className="fixed top-96 z-[-1] left-10"
        width={2000}
        height={2000}
      />
      <Image
        src={Line2}
        alt="line-2"
        className="fixed right-0 rotate-90 z-[-1]"
        width={2000}
        height={2000}
      />
    </div>
  );
}
