import Image from "next/image";
import React from "react";
import Aydhiny from "../images/ay.png";
export default function Footer() {
  return (
    <div className="px-52 py-4">
      <nav>
        <ul className="flex justify-center">
          <li>
            <a className="mr-4" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="mr-4" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="mr-4" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="mr-4" href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/email">Email Me</a>
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
