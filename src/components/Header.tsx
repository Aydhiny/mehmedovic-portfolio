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
    <div className="flex flex-col xl:flex-row p-6 sm:p-12 xl:p-24 justify-center text-center cursor-default">
      <div className="">
        {/* Header Section */}
        <div className="flex flex-col text-start items-center xl:items-center xl:flex-row text-gray-50 xl:text-center">
          <h1 className="font-bold text-4xl sm:text-5xl xl:text-6xl pb-2 pt-4 xl:mr-4">
            Ajdin Mehmedović
          </h1>
          <div className="hidden xl:flex">
            <FaCodeBranch className="size-10 mx-2" />
            <TiNotes className="size-10 mx-2" />
            <FaPenFancy className="size-10 mx-2" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-0 sm:flex-row items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 sm:mr-6">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              Software Engineering Student, Music Producer,{" "}
              <br className="hidden sm:block" />
              Graphic Designer
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-6">
              <div className="flex cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center rounded-xl text-center px-4 py-2 bg-main-app-purple text-white mb-4 sm:mb-0">
                <Link className="pr-2" href="">
                  Download CV
                </Link>
                <FaDownload className="size-5" />
              </div>
              <div className="flex font-bold cursor-pointer items-center justify-center rounded-xl border px-4 py-2 hover:text-main-app-purple hover:border-main-app-purple hover:bg-main-background-grey transition-all duration-150 border-white text-center">
                <Link className="pr-2" href="https://github.com/Aydhiny">
                  Github
                </Link>
                <FaGithub className="size-5" />
              </div>
            </div>
          </div>
          <Image
            className="w-52 sm:w-48 xl:w-96 hover:opacity-65 bg-main-background-grey p-2 sm:p-4 rounded-full shadow-2xl border-2 border-main-app-purple transition-all duration-300"
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
        className="fixed top-96 z-[-1] w-full left-10"
        width={2000}
        height={2000}
      />
    </div>
  );
}
