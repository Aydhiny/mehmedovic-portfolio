"use client";
import React from "react";
import Train from "../images/train.gif";
import Image from "next/image";
import { useState } from "react";
export default function TrainTrack() {
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };
  return (
    <div>
      <div className="text-center mt-[111px]">
        <h1 className="bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-md cursor-pointer animate-pulse hover:text-main-app-teal  py-1 font-bold text-xl text-slate-300">
          Catch the car by clicking it.
        </h1>
      </div>
      <div className="mb-12 shadow-2xl xl:mb-36 relative w-full h-32 overflow-hidden bg-gradient-to-t from-gray-800 to-main-background-grey">
        {/* Train Animation */}
        <div className="absolute top-0 animate-train">
          <Image
            src={Train}
            alt="train"
            className={`w-36 h-auto transform cursor-pointer transition-transform ${
              isJumping ? "animate-jump" : ""
            }`}
            onClick={handleClick}
          />
        </div>

        {/* Track */}
        <div className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-gray-800 to-main-background-grey border-t-2 border-b-2 border-purple-950">
          <div className="h-full flex items-center justify-evenly">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-main-app-purple rounded-sm mx-1 shadow-sm"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
