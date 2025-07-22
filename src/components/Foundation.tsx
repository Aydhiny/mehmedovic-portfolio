"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import BhfLogo from "../images/bhfuturesfoundation-logo.png";
import ScholarImg from "../images/bhfutures-scholar.jpg";
import { motion } from "framer-motion";

export default function Foundation() {
  return (
    <motion.section
      className="w-full max-w-6xl mx-auto px-2 sm:px-8 py-16 text-white mt-20 mb-20 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Logo at the top */}
      <div className="w-full flex justify-center mb-10">
        <Image
          src={BhfLogo}
          alt="BH Futures Foundation Logo"
          width={260}
          height={260}
          className="drop-shadow-xl"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-14">
        {/* Text Content */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight text-center lg:text-left">
            BH Futures Foundation
          </h2>
          <p className="text-main-app-purple text-xl font-semibold mb-4 text-center lg:text-left">
            Senior Scholar & Marketing Team Member
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            As a proud Senior Scholar and active member of the marketing team at{" "}
            <span className="font-semibold text-white">
              Bosnia & Herzegovina Futures Foundation
            </span>
            , I help empower youth, promote STEM education, and build a brighter
            future for Bosnia and Herzegovina. My work includes digital
            campaigns, event promotion, and community engagement, collaborating
            with an inspiring network of scholars and professionals. I am
            dedicated to making a positive impact and supporting the next
            generation of leaders in Bosnia and Herzegovina through innovative
            outreach and teamwork.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <Link
              href="https://bhfuturesfoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex border-b-4 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center text-center px-5 py-3 bg-main-app-purple text-white"
            >
              <FaGlobe className="text-xl mr-2" />
              Website
            </Link>
            <Link
              href="https://www.linkedin.com/company/bhfuturesfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex border-b-4 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center text-center px-5 py-3 bg-main-app-purple text-white"
            >
              <FaLinkedin className="text-xl mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://instagram.com/bhfuturesfoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex border-b-4 cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center text-center px-5 py-3 bg-main-app-purple text-white"
            >
              <FaInstagram className="text-xl mr-2" />
              Instagram
            </Link>
          </div>
        </div>
        {/* Scholar Image */}
        <div className="flex-1 flex justify-center items-center mb-10 lg:mb-0">
          <Image
            src={ScholarImg}
            alt="BH Futures Foundation Scholar"
            width={540}
            height={540}
            className="shadow-2xl object-cover w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </motion.section>
  );
}
