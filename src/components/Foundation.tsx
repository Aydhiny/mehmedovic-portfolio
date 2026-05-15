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
      className="px-5 sm:px-8 py-20 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* Text */}
        <div className="flex-1 w-full">
          <div className="mb-8">
            <Image
              src={BhfLogo}
              alt="BH Futures Foundation Logo"
              width={160}
              height={160}
              className="brightness-90"
            />
          </div>

          <p className="label-tag mb-3">Fellowship</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
            BH Futures Foundation
          </h2>
          <p className="text-[var(--accent)] text-base font-semibold mb-5">
            Senior Scholar & Marketing Team Member
          </p>
          <p className="text-[var(--fg-2)] text-base leading-relaxed mb-8 max-w-xl">
            As a proud Senior Scholar and active member of the marketing team at{" "}
            <span className="text-white font-medium">
              Bosnia & Herzegovina Futures Foundation
            </span>
            , I help empower youth, promote STEM education, and build a brighter
            future for Bosnia and Herzegovina through digital campaigns, event
            promotion, and community engagement.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { href: "https://bhfuturesfoundation.org/", icon: <FaGlobe />, label: "Website" },
              { href: "https://www.linkedin.com/company/bhfuturesfoundation/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://instagram.com/bhfuturesfoundation", icon: <FaInstagram />, label: "Instagram" },
            ].map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-2)] text-[var(--fg-2)] hover:border-[var(--accent)] hover:text-white text-sm font-medium transition-colors duration-150"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src={ScholarImg}
              alt="BH Futures Foundation Scholar"
              width={540}
              height={540}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}
