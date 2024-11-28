"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="p-4 text-lg shadow-2xl bg-gradient-to-l from-main-background-grey via-neutral-800 to-main-background-grey">
      <nav>
        <ul className="flex justify-center items-center">
          <li
            className={`mr-4 transition-colors duration-150 ${isActive("/")}`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`mr-4 transition-colors duration-150 ${isActive(
              "/projects"
            )}`}
          >
            <a href="/projects">Projects</a>
          </li>
          <li
            className={`mr-4 transition-colors duration-150 ${isActive(
              "/blog"
            )}`}
          >
            <a href="/blog">Blog</a>
          </li>
          <li
            className={`transition-colors duration-150 ${isActive("/about")}`}
          >
            <a href="/about">About</a>
          </li>
          <div className="flex text-center items-center">
            <a
              href="https://instagram.com/ajdinmehmedovix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagramCircular className="text-white cursor-pointer ml-4 size-6 hover:text-main-app-purple transition-colors duration-150" />
            </a>
            <a
              href="https://beatstars.com/aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBeatstars className="text-white cursor-pointer ml-4 size-4 hover:text-main-app-purple transition-colors duration-150" />
            </a>
            <a
              href="https://youtube.com/Aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white cursor-pointer ml-4 size-6 hover:text-main-app-purple transition-colors duration-150" />
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
}
