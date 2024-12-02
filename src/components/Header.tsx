"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Profile from "../images/profile-pic.png";
import { TiNotes } from "react-icons/ti";
import { FaPenFancy } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      className="flex flex-col xl:flex-row p-6 sm:p-12 xl:p-24 mt-24 xl:m-0 justify-center text-center cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div>
        {/* Header Section */}
        <motion.div
          className="flex flex-col text-start items-center xl:items-center xl:flex-row text-gray-50 xl:text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="font-bold text-4xl sm:text-5xl xl:text-6xl pb-2 pt-4 xl:mr-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Typewriter
              words={["Ajdin Mehmedović"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </motion.div>
          <motion.div
            className="hidden xl:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaCodeBranch className="size-10 mx-2" />
            <TiNotes className="size-10 mx-2" />
            <FaPenFancy className="size-10 mx-2" />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col p-0 sm:flex-row items-center sm:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 sm:mr-6">
            <motion.p
              className="text-gray-300 text-sm sm:text-base text-center sm:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Software Engineering Student, Music Producer,{" "}
              <br className="hidden sm:block" />
              Graphic Designer
            </motion.p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-4 sm:mt-6">
              <motion.div
                className="flex border-b-4 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center rounded-xl text-center px-4 py-2 bg-main-app-purple text-white mb-4 sm:mb-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link className="pr-2" href="">
                  Download CV
                </Link>
                <FaDownload className="size-5" />
              </motion.div>
              <motion.div
                className="flex border-b-4 font-bold cursor-pointer items-center justify-center rounded-xl border px-4 py-2 hover:text-main-app-purple hover:border-main-app-purple hover:bg-main-background-grey transition-all duration-150 border-white text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Link className="pr-2" href="https://github.com/Aydhiny">
                  Github
                </Link>
                <FaGithub className="size-5" />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Image
              className="w-52 border-b-8 border-b-white sm:w-48 xl:w-96 hover:opacity-65 bg-main-background-grey p-2 sm:p-4 rounded-full shadow-xl border-2 border-violet-500 transition-all duration-300"
              src={Profile}
              alt="profile-pic"
              width={400}
              height={400}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
