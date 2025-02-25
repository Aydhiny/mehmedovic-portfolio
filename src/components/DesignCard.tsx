import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface DesignCardProps {
  image: StaticImageData;
  title: string;
  link: string;
  category: ReactNode;
  desc: string;
}

const DesignCard: React.FC<DesignCardProps> = ({
  image,
  title,
  link,
  category,
  desc,
}) => {
  return (
    <div className="w-full xl:w-96 h-[600px] flex flex-col p-4 border rounded-xl border-gray-500 bg-gray-900 transition-all duration-300 hover:shadow-xl hover:shadow-main-app-purple hover:scale-[1.02]">
      {/* Image Section */}
      <div className="relative rounded-xl overflow-hidden">
        <Image
          width={420}
          height={250}
          alt={title}
          src={image}
          className="h-96 w-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
          View Design
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 flex flex-col flex-grow">
        <h1 className="font-bold text-2xl text-white truncate">{title}</h1>
        <h3 className="text-main-app-purple flex items-center gap-2 mt-1">
          {category}
        </h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">{desc}</p>

        {/* Button Section */}
        <div className="mt-auto pt-4">
          <Link
            className="w-full block text-center font-semibold py-2 px-4 bg-main-app-purple text-white rounded-lg hover:bg-purple-500 transition-all duration-200"
            href={link}
          >
            View Design
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
