"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaHome, FaProjectDiagram, FaBlog, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="p-4 text-lg shadow-2xl bg-gradient-to-l from-main-background-grey via-neutral-800 to-main-background-grey">
      <nav>
        <ul className="flex text-center justify-center items-center">
          {/* Main Links */}
          <div className="flex items-center">
            <li
              className={`mr-4 transition-colors duration-150 ${isActive("/")}`}
            >
              {/* Text on larger screens, Icon on smaller screens */}
              <Link href="/" className="block md:hidden">
                <FaHome className="text-white text-xl hover:text-main-app-purple transition-colors duration-150" />
              </Link>
              <Link href="/" className="hidden md:block">
                Home
              </Link>
            </li>
            <li
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/projects"
              )}`}
            >
              <Link href="/projects" className="block md:hidden">
                <FaProjectDiagram className="text-white text-xl hover:text-main-app-purple transition-colors duration-150" />
              </Link>
              <Link href="/projects" className="hidden md:block">
                Projects
              </Link>
            </li>
            <li
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/blog"
              )}`}
            >
              <Link href="/blog" className="block md:hidden">
                <FaBlog className="text-white text-xl hover:text-main-app-purple transition-colors duration-150" />
              </Link>
              <Link href="/blog" className="hidden md:block">
                Blog
              </Link>
            </li>
            <li
              className={`transition-colors duration-150 ${isActive("/about")}`}
            >
              <Link href="/about" className="block md:hidden">
                <FaInfoCircle className="text-white text-xl hover:text-main-app-purple transition-colors duration-150" />
              </Link>
              <Link href="/about" className="hidden md:block">
                About
              </Link>
            </li>
          </div>

          {/* Social Links */}
          <div className="flex items-center">
            <Link
              href="https://instagram.com/ajdinmehmedovix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagramCircular className="text-white text-2xl ml-4 xl:inline hidden hover:text-main-app-purple transition-colors duration-150" />
            </Link>
            <Link
              href="https://beatstars.com/aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBeatstars className="text-white text-2xl ml-4 hover:text-main-app-purple xl:inline hidden transition-colors duration-150" />
            </Link>
            <Link
              href="https://youtube.com/Aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-2xl ml-4 hover:text-main-app-purple xl:inline hidden transition-colors duration-150" />
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
