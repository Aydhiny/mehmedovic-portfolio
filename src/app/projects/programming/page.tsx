"use client";
import React from "react";
import { motion } from "framer-motion";
import Mouse from "../programming/Mouse";
import Pasta from "../programming/Pasta";
import ProjectBox from "@/components/ProjectBox";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Mouse />
      </motion.div>

      <motion.div
        className="py-2 mx-24 border-violet-400 bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] backdrop-blur-md"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Pasta />
      </motion.div>
      <div className="p-12 xl:px-24">
        <h1 className="xl:text-6xl text-3xl font-bold">Github Repositories</h1>
        <ProjectBox
          name="FIT-Faculty-Work"
          description="Faculty of Information Technologies Repository. Used for professional Faculty work in various programming technologies such as C++, C#, DOTNET, SQL and others"
          tech="TSQL"
          color="orange"
        />
        <ProjectBox
          name="unity-hunter-mouse"
          description="Embark on a thrilling adventure through vibrant worlds and challenging obstacles in this meticulously crafted 3D platformer, handcrafted from scratch using Unity."
          tech="C#"
          color="green"
        />
        <ProjectBox
          name="filmatic-app"
          description="🎬 A Next.js app for browsing and discovering movies with server-side rendering and dynamic search."
          tech="JavaScript"
          color="yellow"
        />
        <Link href="https://github.com/Aydhiny" passHref>
          <p className="text-gray-400 font-semibold my-4 cursor-pointer">
            See all repositories --{">"}{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}
