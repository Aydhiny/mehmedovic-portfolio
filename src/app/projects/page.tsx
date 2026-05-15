"use client";
import MusicCard from "@/components/MusicCard";
import ProjectBox from "@/components/ProjectBox";
import React from "react";
import Bona from "../../images/projects/2bona.jpg";
import Bread from "../../images/projects/bread.jpg";
import Vozis from "../../images/projects/vozis.jpg";
import Hanoi from "../../images/projects/hanoi.jpg";
import FLS from "../../images/projects/fls.jpg";
import Bliss from "../../images/projects/bliss.png";
import Plansio from "../../images/projects/plansio.png";
import DesignCard from "@/components/DesignCard";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="px-4 mt-20 sm:px-10 lg:px-52 my-10 lg:my-20 cursor-default">
      <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
        My Projects
      </h1>

      {/* PROGRAMMING */}
      <div className="mt-10">
        <h4 className="py-2 font-bold text-2xl sm:text-3xl text-gray-400">
          Programming
        </h4>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col space-y-6"
        >
          <ProjectBox
            name="FIT-Faculty-Work"
            description="Faculty of Information Technologies Repository. Used for professional Faculty work in various programming technologies such as C++, C#, DOTNET, SQL and others"
            tech="TSQL"
            color="orange"
            github="https://github.com/Aydhiny/FIT-Faculty-Work"
            link="https://github.com/Aydhiny/FIT-Faculty-Work"
          />
          <ProjectBox
            name="unity-hunter-mouse"
            description="Embark on a thrilling adventure through vibrant worlds and challenging obstacles in this meticulously crafted 3D platformer, handcrafted from scratch using Unity."
            tech="C#"
            color="green"
            github="https://github.com/Aydhiny/unity-hunter-mouse"
            link="https://github.com/Aydhiny/unity-hunter-mouse"
          />
          <ProjectBox
            name="filmatic-app"
            description="A Next.js app for browsing and discovering movies with server-side rendering and dynamic search."
            tech="JavaScript"
            color="yellow"
            github="https://github.com/Aydhiny/filmatic-app"
            link="https://github.com/Aydhiny/filmatic-app"
          />
        </motion.div>
      </div>

      {/* MUSIC PRODUCTION */}
      <div className="mt-16">
        <h4 className="py-4 font-bold text-2xl sm:text-3xl text-gray-400">
          Music Production
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MusicCard
            text="2Bona - Candy"
            link="https://www.youtube.com/watch?v=GMIQ8ZWRQXo"
            image={Bona}
            desc="Candy is a collaboration between Aydhiny, Call Me G, and Nikola Tracks. An irresistible beat with sugary-sweet melodies — over 5 million plays worldwide."
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
          <MusicCard
            text="Shark Puppet x YBN NAHMIR - Gettin Bread"
            link="https://www.youtube.com/results?search_query=Shark+Puppet+YBN+Nahmir+Gettin+Bread"
            image={Bread}
            desc="A high-energy hip-hop collab featuring Shark Puppet and YBN NAHMIR. Produced and mixed by Aydhiny and Call Me G."
            producers="Aydhiny x Call Me G"
          />
          <MusicCard
            text="Danči - Voziš"
            link="https://www.youtube.com/results?search_query=Danci+Vozis"
            image={Vozis}
            desc="Voziš is a regional hit featuring smooth production by Aydhiny. A blend of regional trap and melodic rap tailored for the Balkan market."
            producers="Aydhiny"
          />
          <MusicCard
            text="Hanoi Capital - Charles & Panda"
            link="https://www.youtube.com/results?search_query=Hanoi+Capital+Charles+Panda"
            image={Hanoi}
            desc="A creative collab with Hanoi Capital — moody, atmospheric production crafted by Aydhiny, Call Me G, and Nikola Tracks."
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
        </div>
      </div>

      {/* DESIGN */}
      <div className="mt-16">
        <h4 className="py-4 font-bold text-2xl sm:text-3xl text-gray-400">
          Graphic Design
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DesignCard
            image={FLS}
            title="Future Leaders Summit 2024"
            link="https://bhfuturesfoundation.org/"
            category="Social Media Graphic Design"
            desc="Futures Leaders Summit is an annual event for future leaders to help them rethink the present and reimagine the future — featuring world speakers, interactive workshops, and company visits."
          />
          <DesignCard
            image={Bliss}
            title="Eternal Bliss : Music Tips"
            link="https://www.instagram.com/eternal_bliss_official/"
            category="Social Media Graphic Design"
            desc="Eternal Bliss is an Instagram account run by music producer Ediba Deville, created for educating newer producers in the business."
          />
          <DesignCard
            image={Plansio}
            title="Plansio : Marketing Agency"
            link="https://www.instagram.com/plansio_central"
            category="Marketing, Social Media Design, Video Editing"
            desc="Full digital marketing and branding work for Plansio — social media content creation, video editing, and user-facing design across multiple campaigns."
          />
        </div>
      </div>
    </div>
  );
}
