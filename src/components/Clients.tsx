import React from "react";

export default function Clients() {
  return (
    <div>
      <div className="p-12 mb-12 xl:mb-36 bg-gradient-to-r from-zinc-800 to-main-background-grey shadow-2xl">
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">
              HackAtHome Mostar 2022 Second Place
            </p>
            <p className="text-lg text-gray-500">
              Frontend Development, Graphic Design
            </p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">FIT Coding Challenge v17 Second Place Winner</p>
            <p className="text-lg text-gray-500">Game Development & Design</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">
              Sarajevo Telemach Good Hackathon 2022 Certificate
            </p>
            <p className="text-lg text-gray-500">Web Development, UI Design</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">EVONA Hackathon 2023</p>
            <p className="text-lg text-gray-500">Web Development, Frontend</p>
          </div>
        </div>
      </div>
    </div>
  );
}
