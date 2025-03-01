"use client";
import Image from "next/image";
import { useState } from "react";
import one from "@images/pasta/pastaone.png";
import two from "@images/pasta/pastatwo.png";
import three from "@images/pasta/pastathree.png";
import four from "@images/pasta/pastafour.png";
import pasta from "@images/pasta/logo.svg";
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
    <div className="px-4 sm:px-8 md:px-12 xl:px-24 py-12 xl:py-32 md:py-16">
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
        <div className="flex flex-col xl:items-end xl:text-right items-center text-center">
          <Image
            alt="pasta"
            src={pasta}
            width={400}
            height={400}
            className="animate-bounce hover:cursor-pointer hover:opacity-50 self-end"
          />
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mt-4">
            Tjestenina Lejla Website
          </h1>
          <h4 className="text-lg md:text-2xl text-gray-500 font-bold mt-2">
            React, Tailwind, Framer Motion website.
          </h4>
          <p className="text-sm md:text-lg text-gray-400 mt-4 flex flex-col gap-2">
            <span>Clean and effective UI</span>
            <span>Fast loading, beautiful navigation.</span>
            <span>Functionality, clean design.</span>
          </p>
          <div className="flex gap-4 mt-8 xl:mx-0 mx-auto">
            <Link
              className="flex border-b-4 border-b-white items-center justify-center text-sm md:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-main-app-teal text-main-background-grey font-bold hover:bg-white hover:text-main-background-grey transition-all duration-150"
              href="https://tjestenina-lejla-website.vercel.app/"
            >
              Vercel Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
