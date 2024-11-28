import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import Line from "../images/line-1.svg";
import { TiNotes } from "react-icons/ti";
import { FaPenFancy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex p-12 xl:p-24 justify-center text-center cursor-default">
      <div className="text-left">
        <div className="flex-col flex xl:flex-row text-gray-50 xl:text-center items-start xl:items-center">
          <h1 className="font-bold text-6xl pb-2 pt-4 xl:mr-4">
            Ajdin Mehmedović
          </h1>
          <FaCodeBranch className=" xl:inline hidden size-10 mx-2" />
          <TiNotes className="xl:inline hidden size-10 mx-2" />
          <FaPenFancy className="xl:inline hidden size-10 mx-2" />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <p className="pb-4 text-gray-300">
              Software Engineering Student, Music Producer, <br /> Graphic
              Designer
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
            className="cursor-pointer w-64 xl:w-96 hover:opacity-65 bg-main-background-grey p-4 rounded-full shadow-2xl border-2 border-main-app-purple transition-all duration-300"
            src={Profile}
            alt="profile-pic"
            width={400}
            height={400}
          />
        </div>
      </div>
      <Image
        src={Line}
        alt="line-1"
        className="fixed top-96 z-[-1] space-x-reverse w-full left-10"
        width={2000}
        height={2000}
      />
    </div>
  );
}
