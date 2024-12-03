import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

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
    <div className="w-full xl:w-80 h-[500px] hover:shadow-2xl hover:shadow-main-app-teal transition-shadow duration-150 flex flex-col p-4 rounded-xl border border-opacity-50 border-violet-400 bg-gradient-to-b from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-md">
      <Image
        width={320}
        height={180}
        alt="image"
        src={image}
        className="rounded-xl object-cover w-full"
      />
      <h1 className="font-bold text-2xl mt-2 truncate">
        {truncateText(text, 20)}
      </h1>
      <h3 className="text-main-app-teal truncate mt-1">
        Produced by: {truncateText(producers, 30)}
      </h3>
      <p className="text-sm text-gray-400 mt-2 pb-12 overflow-hidden">
        {truncateText(desc, 250)}
      </p>
      <div className="flex mt-auto">
        <Link
          className="cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center rounded-xl text-center px-4 py-2 bg-main-app-purple text-white"
          href={link}
        >
          Youtube
        </Link>
      </div>
    </div>
  );
};

export default MusicCard;
