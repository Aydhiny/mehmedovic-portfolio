"use client";
import Header from "./Header";
import MusicCard from "@/components/MusicCard";
import Bona from "@images/projects/2bona.jpg";
import Bread from "@images/projects/bread.jpg";
import Vozis from "@images/projects/vozis.jpg";
import Hanoi from "@images/projects/hanoi.jpg";
import Candy from "@images/music/candy.jpg";
import ClientCard from "./ClientCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        backgroundSize: "100px auto",
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
          className="mt-12 flex flex-col items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            Biggest Hit:
          </h1>
          <h4 className="text-gray-300 text-xl">
            CANDY - Aydhiny x Call Me G x Nikola Tracks
          </h4>
          <h1 className="w-full m-4 p-4 text-6xl font-bold border-y border-opacity-50 border-violet-400 bg-main-background-grey">
            1.3 MILLION+ VIEWS
          </h1>
          <Image
            alt="candy"
            src={Candy}
            className="border-opacity-50 border-violet-400 rounded-2xl border p-4
          bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl 
          transition-all duration-150"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 py-16 bg-main-background-grey border-y border-opacity-50 border-violet-500 bg-opacity-80 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Want to Collaborate?
        </h2>
        <p className="text-gray-400 mb-8 px-4">
          Whether you&apos;re an artist or a producer, join our network and
          create something extraordinary. Let&apos;s make the next big hit
          together!
        </p>
        <Link
          className="cursor-pointer hover:bg-white hover:text-main-background-grey transition-all duration-150 font-bold items-center justify-center rounded-xl text-center px-8 py-2 bg-main-app-purple text-white mb-4 sm:mb-0"
          href="https://instagram.com/aydhiny_beatz"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
}
