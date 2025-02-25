"use client";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="px-12 xl:px-52 py-20 flex flex-col items-center text-center">
      {/* Animated Heading */}
      <motion.h1
        className="text-6xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Blog Section
      </motion.h1>
      
      <motion.p
        className="text-gray-400 text-lg mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        This section is currently in development. Stay tuned for updates!
      </motion.p>

      {/* Animated Loader */}
      <motion.div
        className="mt-10 w-16 h-16 border-4 border-gray-500 border-t-main-app-purple rounded-full animate-spin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}
