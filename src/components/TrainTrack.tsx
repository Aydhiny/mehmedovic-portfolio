import React from "react";
import Train from "../images/train.gif";
import Image from "next/image";

export default function TrainTrack() {
  return (
    <div className="mt-36 mb-56 xl:mb-36 relative w-full h-32 overflow-hidden bg-gradient-to-t from-gray-800 to-main-background-grey">
      {/* Train Animation */}
      <div className="absolute top-0 animate-train">
        <Image src={Train} alt="train" className="w-36 h-auto transform" />
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
  );
}
