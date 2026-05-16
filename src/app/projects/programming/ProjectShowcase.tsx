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
      className={`flex flex-col gap-8 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center`}
    >
      {/* Image Slider */}
      <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden border border-[var(--border-2)] bg-[var(--bg)]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src: StaticImageData, i: number) => (
            <Image
              key={i}
              src={src}
              alt={`${title} Slide ${i + 1}`}
              className="w-full flex-shrink-0"
              style={{ minWidth: "100%" }}
            />
          ))}
        </div>

        {/* Prev arrow */}
        <button
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
          className="glass-btn absolute top-1/2 left-3 -translate-y-1/2 p-2 rounded-full"
          aria-label="Previous image"
        >
          <FaArrowLeft size={16} className="text-[var(--accent)]" />
        </button>

        {/* Next arrow */}
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="glass-btn absolute top-1/2 right-3 -translate-y-1/2 p-2 rounded-full"
          aria-label="Next image"
        >
          <FaArrowRight size={16} className="text-[var(--accent)]" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index
                  ? "bg-[var(--accent)]"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-5">
        {/* Logo */}
        <Image
          alt={`${title} logo`}
          src={logo}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />

        {/* Subtitle label */}
        <p className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-[#fda4af]">
          {subtitle}
        </p>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>

        {/* Description */}
        <p className="text-[var(--fg-2)] text-sm sm:text-base leading-relaxed">
          {description}
        </p>

        {/* Hashtags */}
        {hashtags && (
          <div className="flex flex-wrap gap-2">
            {hashtags.map((tag, i) => (
              <span
                key={i}
                className="glass-btn text-xs px-2.5 py-1 rounded-full text-[var(--fg-2)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-1">
          <Link
            className="btn-primary flex items-center gap-2"
            href={button1Link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button1Text} {button1Icon}
          </Link>
          {button2Text && button2Link && (
            <Link
              className="btn-secondary flex items-center gap-2"
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
