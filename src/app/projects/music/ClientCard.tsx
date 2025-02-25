import React from "react";

export default function ClientCard() {
  return (
    <div>
      <div className="p-4 mt-12 bg-gradient-to-r border-y border-violet-500 border-opacity-50 from-zinc-800 to-main-background-grey shadow-2xl">
        <div className="flex justify-evenly flex-wrap gap-8">
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">3.6k+ Subscribers</p>
            <p className="text-lg text-gray-500">600k+ views</p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">10 MILLION+ VIEWS</p>
            <p className="text-lg text-gray-500">
              Projects with 2Bona, QBIK, YBN Nahmir, etc
            </p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">BIGGEST HIT CANDY</p>
            <p className="text-lg text-gray-500">
              CANDY FEATURING CALL ME G AND NIKOLA TRACKS SOLD OVER 500+ UNITS
            </p>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-125 cursor-pointer transition-transform duration-300 ease-in-out">
            <p className="mt-4 text-xl font-semibold">
              100+ Collaborations with other producers
            </p>
            <p className="text-lg text-gray-500">5000+ Music Pieces Created</p>
          </div>
        </div>
      </div>
    </div>
  );
}
