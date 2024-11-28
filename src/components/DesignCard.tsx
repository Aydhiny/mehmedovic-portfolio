import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface DesignCardProps {
  image: StaticImageData;
  title: string;
  link: string;
  category: string;
  desc: string;
}

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const DesignCard: React.FC<DesignCardProps> = ({
  image,
  title,
  link,
  category,
  desc,
}) => {
  return (
    <div className="w-full xl:w-96 h-[600px] hover:shadow-2xl hover:shadow-main-app-purple transition-shadow duration-150 flex flex-col p-4 border rounded-xl border-gray-400">
      <Image
        width={420}
        alt="Design Thumbnail"
        src={image}
        className="rounded-xl h-96 w-full object-cover"
      />
      <h1 className="font-bold text-2xl mt-2 truncate">
        {truncateText(title, 50)}
      </h1>
      <h3 className="text-main-app-purple truncate mt-1">
        Category: {truncateText(category, 30)}
      </h3>
      <p className="text-sm text-gray-500 mt-2 overflow-hidden">
        {truncateText(desc, 150)}
      </p>
      <div className="flex mt-auto">
        <Link
          className="cursor-pointer hover:bg-main-app-purple hover:text-white transition-all duration-150 font-bold items-center rounded-xl text-center px-4 py-2 bg-gray-200 text-main-background-grey"
          href={link}
        >
          View Design
        </Link>
      </div>
    </div>
  );
};

export default DesignCard;
