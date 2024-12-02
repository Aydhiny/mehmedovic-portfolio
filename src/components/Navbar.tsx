"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { GrInstagram } from "react-icons/gr";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Aydhiny from "../images/ay.png";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const toggleProjectsMenu = () => {
    setProjectsOpen(!projectsOpen);
  };

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="p-4 shadow-sm border-b border-opacity-50 border-violet-400 bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-md lg:static fixed w-full top-0 z-50">
      <nav>
        <ul className="flex justify-between xl:justify-evenly items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            <Image alt="logo" src={Aydhiny} width={30} height={30} />
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Main Links for Larger Screens */}
          <div className="hidden md:flex items-center">
            <li
              className={`mr-4 transition-colors duration-150 ${isActive("/")}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li className="relative group mr-4">
              <button
                className={`relative transition-colors duration-150 ${isActive(
                  "/projects"
                )}`}
              >
                Projects
                {/* Line Indicator */}
                <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-main-app-purple group-hover:w-6 transition-all duration-200"></span>
              </button>
              {/* Dropdown Menu */}
              <ul className="absolute hidden group-hover:block bg-main-background-grey transition-all duration-150 text-gray-100 rounded shadow-md mt-2 z-10">
                <li className="px-4 cursor-pointer py-2 hover:bg-neutral-900">
                  <Link href="/projects/programming">Programming</Link>
                </li>
                <li className="px-4 cursor-pointer py-2 hover:bg-neutral-900">
                  <Link href="/projects/music">Music</Link>
                </li>
                <li className="px-4 cursor-pointer py-2 hover:bg-neutral-900">
                  <Link href="/projects/design">Design</Link>
                </li>
              </ul>
            </li>

            <li
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/blog"
              )}`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`transition-colors duration-150 ${isActive("/about")}`}
            >
              <Link href="/about">About</Link>
            </li>
          </div>

          {/* Social Links for Larger Screens */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://instagram.com/ajdinmehmedovix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram className="text-white text-2xl ml-4 size-5 hover:text-main-app-purple transition-colors duration-150" />
            </Link>
            <Link
              href="https://beatstars.com/aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBeatstars className="text-white text-2xl ml-4 size-5 hover:text-main-app-purple transition-colors duration-150" />
            </Link>
            <Link
              href="https://youtube.com/Aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-white text-2xl ml-4 hover:text-main-app-purple transition-colors duration-150" />
            </Link>
          </div>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="mt-4 bg-gradient-to-b from-[#242424] to-[rgba(38,23,102,0.7)] text-white text-center space-y-4 p-4 rounded-lg shadow-xl border border-gray-700 animate-slide-down">
            {/* Main Links */}
            <li
              className={`transition-all duration-200 border-b border-gray-700 pb-2 ${isActive(
                "/"
              )}`}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li
              className={`transition-all duration-200 border-b border-gray-700 pb-2 relative`}
            >
              <button
                className="w-full text-center flex justify-center items-center transition-colors duration-150"
                onClick={toggleProjectsMenu}
              >
                Projects
                <span
                  className={`transform transition-transform pr-2 duration-200 ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                >
                  <MdKeyboardArrowDown className="ml-2" />
                </span>
              </button>

              {/* Nested Mini-Menu */}
              {projectsOpen && (
                <ul className="bg-gradient-to-b from-[#1f1f1f] to-[rgba(20,10,50,0.7)] text-white rounded mt-2 space-y-2 pl-4">
                  <li className="hover:bg-gray-700 px-2 py-2 rounded">
                    <Link
                      href="/projects/programming"
                      onClick={() => setMenuOpen(false)}
                    >
                      Programming
                    </Link>
                  </li>
                  <li className="hover:bg-gray-700 px-2 py-2 rounded">
                    <Link
                      href="/projects/music"
                      onClick={() => setMenuOpen(false)}
                    >
                      Music
                    </Link>
                  </li>
                  <li className="hover:bg-gray-700 px-2 py-2 rounded">
                    <Link
                      href="/projects/design"
                      onClick={() => setMenuOpen(false)}
                    >
                      Design
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`transition-all duration-200 border-b border-gray-700 pb-2 ${isActive(
                "/blog"
              )}`}
            >
              <Link href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li
              className={`transition-all duration-200 pb-2 ${isActive(
                "/about"
              )}`}
            >
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            {/* Social Links */}
            <div className="mt-4 pt-2 border-t border-gray-700">
              <h3 className="text-md text-gray-400">Follow Me</h3>
              <div className="flex justify-center items-center py-4 space-x-4 mt-2">
                <Link
                  href="https://instagram.com/ajdinmehmedovix"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <GrInstagram className="text-3xl size-5 hover:text-main-app-purple transition duration-150" />
                </Link>
                <Link
                  href="https://beatstars.com/aydhiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <SiBeatstars className="text-3xl size-5 hover:text-main-app-purple transition duration-150" />
                </Link>
                <Link
                  href="https://youtube.com/Aydhiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaYoutube className="text-3xl size-5 hover:text-main-app-purple transition duration-150" />
                </Link>
              </div>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
