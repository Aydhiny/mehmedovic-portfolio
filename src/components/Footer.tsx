"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Aydhiny from "../images/ay.png";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="px-52 py-4">
      <div className="mb-8 border border-gray-500"></div>
      <nav>
        <ul className="flex justify-center">
          <li>
            <a
              className={`mr-4 transition-colors duration-150 ${isActive("/")}`}
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/blog"
              )}`}
              href="/blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/projects"
              )}`}
              href="/projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`mr-4 transition-colors duration-150 ${isActive(
                "/about"
              )}`}
              href="/about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`transition-colors duration-150 ${isActive("/email")}`}
              href="/email"
            >
              Email Me
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col p-4 text-center items-center">
        <p className="text-gray-400">
          Powered by <span className="text-main-app-purple">Nextjs</span> and{" "}
          <span className="text-main-app-purple">Tailwindcss.</span> <br />{" "}
          Hosted on Vercel @Plansio, Aydhiny Beats 2024
        </p>
        <Image alt="ay-logo" className="p-2" src={Aydhiny} />
      </div>
    </div>
  );
}
