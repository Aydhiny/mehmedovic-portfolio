"use client";

import { ReactNode, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface ProjectShowcaseProps {
  images: StaticImageData[];
  logo: StaticImageData;
  title: string;
  subtitle: string;
  description: string | ReactNode;
  hashtags?: string[];
  button1Text: string;
  button1Link: string;
  button1Icon?: ReactNode;
  button2Text?: string;
  button2Link?: string;
  button2Icon?: ReactNode;
  reverse?: boolean;
}

export default function ProjectShowcase({
  images,
  logo,
  title,
  subtitle,
  description,
  hashtags,
  button1Text,
  button1Link,
  button1Icon,
  button2Text,
  button2Link,
  button2Icon,
  reverse = false,
}: ProjectShowcaseProps) {
  const [index, setIndex] = useState(0);

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-12 px-6 md:px-24`}
    >
      {/* Image Slider */}
      <div className="relative w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src: StaticImageData, i: number) => (
            <Image
              key={i}
              src={src}
              alt={`${title} Slide ${i + 1}`}
              className="w-full"
            />
          ))}
        </div>
        <button
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-main-app-purple text-white rounded-full hover:bg-main-app-teal"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-main-app-purple text-white rounded-full hover:bg-main-app-teal"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <Image
          alt={`${title} logo`}
          src={logo}
          width={200}
          height={200}
          className="animate-bounce mx-auto md:mx-0"
        />
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        <h4 className="text-lg md:text-xl text-gray-300 font-bold">
          {subtitle}
        </h4>
        <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0">
          {description}
        </p>

        {/* Hashtags */}
        {hashtags && (
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {hashtags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link
            className="flex items-center gap-2 px-6 py-3 bg-main-app-teal text-main-background-grey font-bold rounded-lg hover:bg-white hover:text-main-background-grey border-b-4 border-white transition"
            href={button1Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button1Text} {button1Icon}
          </Link>
          {button2Text && button2Link && (
            <Link
              className="flex items-center gap-2 px-6 py-3 bg-main-app-purple text-white font-bold rounded-lg hover:bg-white hover:text-main-background-grey border-b-4 border-white transition"
              href={button2Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {button2Text} {button2Icon}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
