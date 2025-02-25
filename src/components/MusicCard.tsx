import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";

interface MusicCardProps {
  image: StaticImageData;
  text: string;
  link: string;
  producers: string;
  desc: string;
}

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const MusicCard: React.FC<MusicCardProps> = ({
  image,
  text,
  link,
  producers,
  desc,
}) => {
  return (
    <div className="w-full xl:w-80 h-[500px] hover:shadow-2xl hover:shadow-main-app-teal transition-shadow duration-300 flex flex-col p-6 rounded-2xl border border-opacity-50 border-violet-400 bg-gradient-to-b from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-lg relative">
      <Image
        width={320}
        height={180}
        alt="image"
        src={image}
        className="rounded-xl object-cover w-full shadow-lg"
      />
      <h1 className="font-bold text-2xl mt-4 text-white truncate">
        {truncateText(text, 20)}
      </h1>
      <h3 className="text-main-app-teal text-lg font-medium truncate mt-2">
        Produced by: {truncateText(producers, 30)}
      </h3>
      <p className="text-sm text-gray-300 mt-3 pb-12 overflow-hidden">
        {truncateText(desc, 250)}
      </p>
      <div className="flex mt-auto justify-center">
        <Link
          className="flex items-center gap-2 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-200 font-bold rounded-full text-center px-5 py-3 bg-main-app-purple text-white shadow-md"
          href={link}
        >
          <FaYoutube size={20} /> Watch on YouTube
        </Link>
      </div>
    </div>
  );
};

export default MusicCard;