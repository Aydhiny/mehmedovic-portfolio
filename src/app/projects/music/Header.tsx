import Image from "next/image";
import React from "react";
import ay from "@images/music/aydhiny.jpg";
import { SiBeatstars } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export default function Header() {
  return (
    <div className="px-6 xl:px-48 pt-24 text-center items-center">
      <Image
        alt="producer"
        src={ay}
        className="rounded-full cursor-pointer border mx-auto p-4 mb-12 border-opacity-50 border-violet-400 bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl transition-all duration-150 animate-slide-down"
      />
      <div className="p-4 m-4 rounded-full flex w-fit justify-center text-4xl border mx-auto border-violet-400 bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl">
        <SiBeatstars className="hover:text-red-600 mr-4 transition-all duration-100 cursor-pointer" />
        <FaSpotify className="hover:text-green-500 mr-4 transition-all duration-100 cursor-pointer" />
        <FaYoutube className="hover:text-red-600 mr-4 transition-all duration-100 cursor-pointer" />
        <GrInstagram className="hover:text-gray-700 transition-all duration-100 cursor-pointer" />
      </div>
      <h1 className="text-6xl font-bold">
        Aydhiny <span className="text-main-app-purple">Beats</span>
      </h1>
      <h4 className="text-xl text-gray-400 pb-4">
        Music Producer of 6+ years, worked with multi-platinum worldwide
        renowned music producers.
      </h4>
    </div>
  );
}
