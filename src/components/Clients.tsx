import React from "react";
import { FaUserFriends, FaBook, FaClock, FaTrophy } from "react-icons/fa";

export default function Clients() {
  return (
    <div>
      <div className="p-12 mb-12 bg-main-background-grey bg-opacity-75">
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaUserFriends size={80} className="text-blue-600 sm:text-100" />
            <p className="mt-4 text-xl font-semibold">Satisfied Clients</p>
            <p className="text-lg text-gray-500">1000+ Clients</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaBook size={80} className="text-green-600 sm:text-100" />
            <p className="mt-4 text-xl font-semibold">Learning Hours</p>
            <p className="text-lg text-gray-500">5000+ Hours</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaClock size={80} className="text-orange-600 sm:text-100" />
            <p className="mt-4 text-xl font-semibold">Time Spent</p>
            <p className="text-lg text-gray-500">3000+ Hours</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <FaTrophy size={80} className="text-yellow-500 sm:text-100" />
            <p className="mt-4 text-xl font-semibold">Achievements</p>
            <p className="text-lg text-gray-500">50+ Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
