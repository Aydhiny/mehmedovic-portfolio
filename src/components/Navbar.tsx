"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import Aydhiny from "../images/ay.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="p-4 shadow-sm border-b border-opacity-50 border-violet-400 bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-md lg:static sticky top-0 z-50">
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
            <li
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/projects"
              )}`}
            >
              <Link href="/projects">Projects</Link>
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
              <TiSocialInstagramCircular className="text-white text-2xl ml-4 hover:text-main-app-purple transition-colors duration-150" />
            </Link>
            <Link
              href="https://beatstars.com/aydhiny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiBeatstars className="text-white text-2xl ml-4 hover:text-main-app-purple transition-colors duration-150" />
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
          <ul className="mt-4 bg-main-background-grey text-white text-center space-y-4 p-4 rounded-lg shadow-xl border border-gray-700 animate-slide-down">
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
              className={`transition-all duration-200 border-b border-gray-700 pb-2 ${isActive(
                "/projects"
              )}`}
            >
              <Link href="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
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
              <div className="flex justify-center space-x-4 mt-2">
                <Link
                  href="https://instagram.com/ajdinmehmedovix"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <TiSocialInstagramCircular className="text-3xl hover:text-main-app-purple transition duration-150" />
                </Link>
                <Link
                  href="https://beatstars.com/aydhiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <SiBeatstars className="text-3xl hover:text-main-app-purple transition duration-150" />
                </Link>
                <Link
                  href="https://youtube.com/Aydhiny"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaYoutube className="text-3xl hover:text-main-app-purple transition duration-150" />
                </Link>
              </div>
            </div>
          </ul>
        )}
      </nav>
    </div>
  );
}
