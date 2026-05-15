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

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="label-tag mb-2">{tag}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 h-px bg-[var(--border)]" />
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20">

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="label-tag mb-4">Work</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
          My <span className="font-garamond font-bold italic text-[var(--accent)] text-7xl sm:text-8xl">Projects</span>
        </h1>
      </motion.div>

      {/* PROGRAMMING */}
      <section className="mb-20">
        <SectionHeader tag="Code" title="Programming" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <ProjectBox
            name="FIT-Faculty-Work"
            description="Faculty of Information Technologies Repository — professional work in C++, C#, .NET, SQL, and others."
            tech="TSQL"
            color="orange"
            github="https://github.com/Aydhiny/FIT-Faculty-Work"
            link="https://github.com/Aydhiny/FIT-Faculty-Work"
          />
          <ProjectBox
            name="unity-hunter-mouse"
            description="Thrilling 3D platformer adventure built from scratch in Unity — the award-winning indie game."
            tech="C#"
            color="green"
            github="https://github.com/Aydhiny/unity-hunter-mouse"
            link="https://github.com/Aydhiny/unity-hunter-mouse"
          />
          <ProjectBox
            name="filmatic-app"
            description="A Next.js movie discovery app with server-side rendering and dynamic search."
            tech="JavaScript"
            color="yellow"
            github="https://github.com/Aydhiny/filmatic-app"
            link="https://filmatic-app.vercel.app/"
          />
        </motion.div>
      </section>

      {/* MUSIC */}
      <section className="mb-20">
        <SectionHeader tag="Sound" title="Music Production" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
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
            desc="Regional hit featuring smooth production by Aydhiny. A blend of regional trap and melodic rap for the Balkan market."
            producers="Aydhiny"
          />
          <MusicCard
            text="Hanoi Capital - Charles & Panda"
            link="https://www.youtube.com/results?search_query=Hanoi+Capital+Charles+Panda"
            image={Hanoi}
            desc="Moody, atmospheric production crafted by Aydhiny, Call Me G, and Nikola Tracks in collaboration with Hanoi Capital."
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
        </motion.div>
      </section>

      {/* DESIGN */}
      <section>
        <SectionHeader tag="Visual" title="Graphic Design" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <DesignCard
            image={FLS}
            title="Future Leaders Summit 2024"
            link="https://bhfuturesfoundation.org/"
            category="Social Media Graphic Design"
            desc="Designed every visual element for the Futures Leaders Summit — from branding to all promotional materials."
          />
          <DesignCard
            image={Bliss}
            title="Eternal Bliss : Music Tips"
            link="https://www.instagram.com/eternal_bliss_official/"
            category="Social Media Graphic Design"
            desc="Instagram brand for music producer Ediba Deville, educating newer producers in the business."
          />
          <DesignCard
            image={Plansio}
            title="Plansio : Marketing Agency"
            link="https://www.instagram.com/plansio_central"
            category="Marketing, Social Media Design, Video Editing"
            desc="Full digital marketing and branding work for Plansio — social media content, video editing, and design campaigns."
          />
        </motion.div>
      </section>

    </div>
  );
}
