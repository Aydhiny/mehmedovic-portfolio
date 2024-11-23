import React from "react";
import { FaEye } from "react-icons/fa";

interface BlogCardProps {
  name: string;
  link: string;
  description: string;
  views: string;
}
export default function BlogCard({ name, description, views, link }) {
  return (
    <div className="p-[3px]  rounded-lg shadow-xl bg-gradient-to-r from-main-app-teal to-main-app-purple">
      <div className="bg-main-background-grey h-full cursor-pointer transition-all duration-100 hover:shadow-2xl hover:shadow-main-app-teal rounded-lg flex flex-col p-4">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-500 pb-12">{description}</p>
        <div className="flex justify-between">
          <p className="text-white cursor-pointer">Read More</p>
          <div className="flex items-center justify-end text-center">
            <p className="mr-4">{views}</p>
            <FaEye className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
