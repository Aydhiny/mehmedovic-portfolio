import React from "react";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="p-4 text-lg shadow-2xl bg-gradient-to-l from-main-background-grey via-neutral-800 to-purple-950">
      <nav>
        <ul className="flex justify-center items-center">
          <li className="mr-4 font-bold text-main-app-purple transition-colors duration-150">
            <a href="/">Home</a>
          </li>
          <li className="mr-4 hover:text-main-app-purple transition-colors duration-150">
            <a href="/projects">Projects</a>
          </li>
          <li className="mr-4 hover:text-main-app-purple transition-colors duration-150">
            <a href="/blog">Blog</a>
          </li>
          <li className="hover:text-main-app-purple transition-colors duration-150">
            <a href="/about">About</a>
          </li>
          <div className="flex text-center items-center">
            <TiSocialInstagramCircular
              href="instagram.com/ajdinmehmedovix"
              className="text-white cursor-pointer ml-4 size-6 hover:text-main-app-purple transition-colors duration-150"
            />
            <SiBeatstars
              href="beatstars.com/aydhiny"
              className="text-white cursor-pointer ml-4 size-4 hover:text-main-app-purple transition-colors duration-150"
            />
            <FaYoutube
              href="youtube.com/Aydhiny"
              className="text-white cursor-pointer ml-4 size-6 hover:text-main-app-purple transition-colors duration-150"
            />
          </div>
        </ul>
      </nav>
    </div>
  );
}
