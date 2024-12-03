"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Aydhiny from "../images/ay.png";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-main-app-purple font-bold"
      : "hover:text-main-app-purple";

  return (
    <div className="px-4 py-6 md:px-16 lg:px-52">
      <div className="mb-8 border-t border-gray-500"></div>
      <nav>
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive("/")}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive("/blog")}`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive(
                "/journey"
              )}`}
              href="/journey"
            >
              Journey
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive(
                "/next-big-thing"
              )}`}
              href="/next-big-thing"
            >
              Next Big Thing
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive("/about")}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`transition-colors duration-150 ${isActive("/email")}`}
              href="/email"
            >
              Email Me
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col items-center mt-6 text-center">
        <p className="text-gray-400 text-sm md:text-base">
          Powered by <span className="text-main-app-purple">Next.js</span> and{" "}
          <span className="text-main-app-purple">TailwindCSS.</span> <br />
          Hosted on Vercel @Plansio, Aydhiny Beats 2024
        </p>
        <Image alt="ay-logo" className="p-2 mt-4" src={Aydhiny} />
      </div>
    </div>
  );
}
