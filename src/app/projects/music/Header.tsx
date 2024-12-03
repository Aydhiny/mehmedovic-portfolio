import Image from "next/image";
import React from "react";
import ay from "@images/music/aydhiny.jpg";

export default function Header() {
  return (
    <div className="px-6 xl:px-48 py-24 text-center items-center">
      <Image
        alt="producer"
        src={ay}
        className="rounded-full border mx-auto p-4 mb-12 border-opacity-50 border-violet-400 bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl transition-all duration-150 animate-slide-down"
      />
      <h1 className="text-6xl font-bold">
        Aydhiny <span className="text-main-app-purple">Beats</span>
      </h1>
      <h4 className="text-xl text-gray-400">
        Music Producer of 6+ years, worked with multi-platinum worldwide
        renowned music producers.
      </h4>
    </div>
  );
}
