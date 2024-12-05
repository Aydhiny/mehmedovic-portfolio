"use client";
import ProjectBox from "@/components/ProjectBox";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-12 xl:px-52 flex flex-col"
    >
      <h1 className="xl:text-6xl text-3xl font-bold">Github Repositories</h1>
      <div>
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
      </div>
      <Link href="https://github.com/Aydhiny" passHref>
        <p className="text-gray-400 font-semibold my-4 cursor-pointer">
          See all repositories --{">"}{" "}
        </p>
      </Link>
    </motion.div>
  );
}
