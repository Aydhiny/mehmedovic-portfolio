import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";

interface BlogCardProps {
  name: string;
  link: string;
  description: string;
  views: string;
  image: string | null;
}

const BlogCard: React.FC<BlogCardProps> = ({
  name,
  description,
  views,
  link,
  image,
}) => {
  return (
    <div className="p-[1px] rounded-lg shadow-xl bg-gradient-to-r from-main-app-teal to-main-app-purple">
      <div className="bg-gradient-to-t from-gray-800 to-main-background-grey h-full cursor-pointer transition-all duration-100 hover:shadow-2xl hover:shadow-main-app-teal rounded-lg flex flex-col p-4">
        <img
          src={image || "/placeholder-image.jpg"}
          alt={name}
          className="rounded-md mb-4 h-40 object-cover w-full"
        />
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-500 pb-12">{description}</p>
        <div className="flex justify-between">
          <Link href={link} className="text-white cursor-pointer">
            Read More
          </Link>
          <div className="flex items-center justify-end text-center">
            <p className="mr-4">{views}</p>
            <FaEye className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
