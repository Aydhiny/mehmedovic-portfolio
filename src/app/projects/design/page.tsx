"use client";
import React from "react";
import Plansio from "@images/projects/plansio.png";
import FLS from "@images/projects/fls.jpg";
import Bliss from "@images/projects/bliss.png";
import DesignCard from "@/components/DesignCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPaintBrush, FaBullhorn, FaVideo } from "react-icons/fa";

export default function Page() {
  return (
    <div className="px-6 pt-24 xl:px-24 flex flex-col items-center text-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Design & Marketing Work
        </h1>
        <h4 className="text-xl sm:text-2xl text-gray-400 pb-4">
          Social Media Agency Profile PLANSIO
        </h4>
        <Image
          alt="plansio-logo"
          src={Plansio}
          className="rounded-full w-56 h-56 cursor-pointer border mx-auto p-4 border-opacity-50 border-violet-400 bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl transition-all duration-150"
        />
      </motion.div>

      {/* Graphic Design Section */}
      <div className="mt-16">
        <motion.h4
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="py-4 font-bold text-2xl sm:text-3xl text-white"
        >
          Graphic Design & Marketing
        </motion.h4>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <DesignCard
            image={FLS}
            title="Future Leaders Summit 2024"
            link="link"
            category={
              <>
                <FaPaintBrush className="inline text-main-app-purple mr-2" />{" "}
                Social Media Graphic Design
              </>
            }
            desc="Futures Leaders Summit is an annual event for future leaders to help them rethink the present and reimagine the future by featuring world speakers, interactive workshops, and company visits."
          />
          <DesignCard
            image={Bliss}
            title="Eternal Bliss : Music Tips"
            link="link"
            category={
              <>
                <FaBullhorn className="inline text-main-app-purple mr-2" />{" "}
                Social Media Graphic Design
              </>
            }
            desc="Eternal Bliss is an Instagram account run by music producer Ediba Deville for educating new producers."
          />
          <DesignCard
            image={Plansio}
            title="Plansio : Design & Marketing Agency"
            link="link"
            category={
              <>
                <FaVideo className="inline text-main-app-purple mr-2" />{" "}
                Marketing, Social Media Design, Video Editing
              </>
            }
            desc="Marketing and social media agency work for various clients."
          />
        </motion.div>
      </div>
    </div>
  );
}
