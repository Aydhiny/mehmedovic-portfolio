"use client";
import React from "react";
import { motion } from "framer-motion";
import Mouse from "../programming/Mouse";
import Pasta from "../programming/Pasta";

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
    </div>
  );
}
