import React from "react";
import { FaUserFriends, FaBook, FaClock, FaTrophy } from "react-icons/fa";

export default function Clients() {
  return (
    <div>
      <div className="p-12 mb-56 bg-gradient-to-r from-zinc-800 to-main-background-grey shadow-2xl">
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="flex flex-col items-center text-center rotate-2 hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">
              HackAtHome Mostar 2022 Certificate
            </p>
            <p className="text-lg text-gray-500">
              Graphic Design, Video Editing
            </p>
          </div>
          <div className="flex flex-col items-center rotate-2 text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">NetworkBH</p>
            <p className="text-lg text-gray-500">Staff Member 2 years.</p>
          </div>
          <div className="flex flex-col items-center -rotate-3 text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">
              Sarajevo Telemach Good Hackathon 2022 Certificate
            </p>
            <p className="text-lg text-gray-500">Web Development, UI Design</p>
          </div>
          <div className="flex flex-col -rotate-1 items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">EVONA Hackathon 2023</p>
            <p className="text-lg text-gray-500">Web Development, Frontend</p>
          </div>
        </div>
      </div>
    </div>
  );
}
