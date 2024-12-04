"use client";
import Header from "./Header";
import MusicCard from "@/components/MusicCard";
import Bona from "@images/projects/2bona.jpg";
import Bread from "@images/projects/bread.jpg";
import Vozis from "@images/projects/vozis.jpg";
import Hanoi from "@images/projects/hanoi.jpg";
import ClientCard from "./ClientCard";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#4a1b85",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.95, backgroundColor: "#8e44ad" },
};

const glowVariants = {
  hidden: { opacity: 0.5 },
  visible: { opacity: 1, transition: { yoyo: Infinity, duration: 1.5 } },
};

const rotatingDiscVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: [0, 360],
    transition: { duration: 10, repeat: Infinity, ease: "linear" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

export default function Page() {
  return (
    <div
      className="bg-[url('/music.svg')]"
      style={{
        backgroundRepeat: "repeat",
        backgroundSize: "300px auto",
      }}
    >
      <Header />
      <motion.div
        className="text-center items-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <ClientCard />
        <motion.h4
          className="py-4 my-8 font-bold text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Music Production Projects
        </motion.h4>

        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                text: "2Bona - Candy",
                link: "link",
                image: Bona,
                desc: "2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. 🎶🍬",
                producers: "Aydhiny x Call Me G x Nikola Tracks",
              },
              {
                text: "Shark Puppet x YBN NAHMIR - Gettin Bread",
                link: "link",
                image: Bread,
                desc: "A playful and energetic track with unique flavor and iconic vibes.",
                producers: "Aydhiny x Call Me G",
              },
              {
                text: "Danči - Voziš",
                link: "link",
                image: Vozis,
                desc: "Catchy and compelling, Voziš is a showcase of true musical artistry.",
                producers: "Aydhiny",
              },
              {
                text: "Hanoi Capital - Charles & Panda",
                link: "link",
                image: Hanoi,
                desc: "An experimental and futuristic sound that pushes boundaries.",
                producers: "Aydhiny x Call Me G x Nikola Tracks",
              },
            ].map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <MusicCard
                  text={project.text}
                  link={project.link}
                  image={project.image}
                  desc={project.desc}
                  producers={project.producers}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="py-4 font-bold text-2xl sm:text-3xl text-white">
            Biggest Hit:
          </h1>
          <h4 className="text-gray-300 text-xl">
            CANDY - Aydhiny x Call Me G x Nikola Tracks
          </h4>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-24 py-16 bg-main-background-grey border-y border-opacity-50 border-violet-500 bg-opacity-80 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Want to Collaborate?
        </h2>
        <p className="text-gray-400 mb-8 px-4">
          Whether you're an artist or a producer, join our network and create
          something extraordinary. Let's make the next big hit together!
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-main-app-purple to-purple-700 rounded-full text-white font-semibold"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Get in Touch
        </motion.button>
      </motion.div>

      {/* Scroll-Triggered Animated Section with Spin Animation */}
      <motion.div
        className="relative py-16 bg-gradient-to-tr from-violet-950 via-neutral-900 to-main-background-grey text-white text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Rotating Disc */}
        <motion.div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-violet-500 to-purple-700 rounded-full shadow-lg border-4 border-gray-800"
          variants={rotatingDiscVariants}
          initial="initial"
          animate="animate"
        />

        <h3 className="relative z-10 text-xl sm:text-3xl font-semibold mb-4">
          Fun Fact About Music:
        </h3>
        <p className="relative z-10 text-gray-400">
          Did you know that a single song can contain over 1,000 different
          elements? From layered vocals to complex drum patterns, music is a
          beautiful puzzle!
        </p>

        {/* Dynamic Glow Effect */}
        <motion.div className="absolute inset-0 bg-gradient-to-t from-main-background-grey via-transparent to-neutral-800 opacity-50 pointer-events-none" />
      </motion.div>
    </div>
  );
}
