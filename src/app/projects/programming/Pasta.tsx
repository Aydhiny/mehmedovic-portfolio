"use client";
import Image from "next/image";
import { useState } from "react";
import one from "../../../images/pasta/s1.png";
import two from "../../../images/pasta/s2.png";
import three from "../../../images/pasta/s3.png";
import four from "../../../images/pasta/s4.png";
import pasta from "../../../images/pasta/logo.svg";
import Link from "next/link";

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [one, two, three, four];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 xl:px-24 py-32 md:py-16">
      {/* TJESTENINA LEJLA WEBSITE */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column (Carousel) */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-xl transition-all duration-150 hover:shadow-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
            onClick={handleNext}
          >
            ▶
          </button>
        </div>

        {/* Right Column (Text and Buttons) */}
        <div className=" flex flex-col text-right">
          <Image
            alt="pasta"
            src={pasta}
            width={400}
            height={400}
            className="animate-bounce hover:cursor-pointer hover:opacity-50 mx-auto md:mx-0"
          />
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-right mt-4">
            Tjestenina Lejla Website
          </h1>
          <h4 className="text-lg md:text-2xl text-gray-500 font-bold text-right mt-2">
            React, Tailwind, Framer Motion website.
          </h4>
          <p className="text-sm md:text-lg text-gray-400 mt-4 flex flex-col gap-2 text-right">
            <span>Clean and effective UI</span>
            <span>Fast loading, beautiful navigation.</span>
            <span>Functionality, clean design.</span>
          </p>
          <div className="flex justify-right gap-4 mt-8">
            <Link
              className="flex border-b-4 border-b-white items-center justify-center text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-main-app-purple text-white font-bold hover:bg-white hover:text-main-background-grey transition-all duration-150"
              href="https://gamejolt.com/games/huntermouse/902524"
            >
              Download
            </Link>
            <Link
              className="flex border-b-4 border-b-white items-center justify-center text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-main-app-teal text-main-background-grey font-bold hover:bg-white hover:text-main-background-grey transition-all duration-150"
              href="https://www.linkedin.com/posts/ajdin-mehmedovic_hunter-mouse-gameplay-trailer-dive-activity-7195486411205046272-nEZg?utm_source=share&utm_medium=member_desktop"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
