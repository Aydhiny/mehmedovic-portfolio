import React from "react";

export default function Clients() {
  return (
    <div>
      <h1 className="font-bold px-12 py-4 mt-4 xl:mt-4 mb-4 sm:px-52 text-4xl sm:text-5xl xl:text-6xl">
        Competitions
      </h1>
      <div className="p-6 sm:p-8 md:p-12 mb-12 xl:mb-36 bg-gradient-to-r from-zinc-800 to-main-background-grey shadow-2xl">
        <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              HackAtHome Mostar 2022 Second Place
            </p>
            <p className="text-md sm:text-lg text-gray-200">
              Smart Parking System Solution
            </p>
            <p className="text-sm sm:text-md text-gray-500">
              Frontend Development, Graphic Design
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex mx-4 flex-col items-center text-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-2xl sm:text-4xl font-semibold">
              FIT Coding Challenge 2025 -{" "}
              <span className="font-bold text-violet-500">FIRST PLACE</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-200">
              Collectathon Adventure Game - Hunter Mouse 2
            </p>
            <p className="text-md sm:text-lg text-gray-500">
              Game Development, Music Production & Design
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              FIT Coding Challenge v17 Second Place Winner
            </p>
            <p className="text-md sm:text-lg text-gray-200">
              Linear Platformer Game - Hunter Mouse
            </p>
            <p className="text-md sm:text-lg text-gray-500">
              Game Development, Music Production & Design
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              Sarajevo Telemach Good Hackathon 2022 Certificate
            </p>
            <p className="text-md sm:text-lg text-gray-200">
              Kubos Documents - Mobile E-Municipality Solution
            </p>
            <p className="text-md sm:text-lg text-gray-500">
              Web Development, UI Design
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center text-center hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-lg sm:text-xl font-semibold">
              EVONA Hackathon 2023
            </p>
            <p className="text-md sm:text-lg text-gray-200">
              Full-Stack in 24 Hours - Leaderboard App
            </p>
            <p className="text-md sm:text-lg text-gray-500">
              Web Development, Frontend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
