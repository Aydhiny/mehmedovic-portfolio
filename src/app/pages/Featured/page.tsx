"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-12 xl:px-52 justify-center cursor-default"
    >
      <div className="text-left">
        <h1 className="font-bold text-6xl">Blog in Development</h1>
        <p className="mb-12 text-gray-500">
          Our blog is under development, but we are working hard to bring you exciting posts soon!
        </p>
      </div>

      {/* Placeholder for Blog Content */}
      <div className="flex justify-center items-center py-16">
        <div className="text-center">
          <p className="text-lg text-gray-400 mb-6">
            We are currently preparing new content. Stay tuned for fresh updates and news!
          </p>
          <Link href="/home">
            <p className="text-main-app-purple font-semibold cursor-pointer">
              Go back to homepage {"--"}{" "}
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
