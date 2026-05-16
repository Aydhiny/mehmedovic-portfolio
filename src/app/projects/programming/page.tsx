import Image from "next/image";
import Projects from "@/app/pages/Projects/page";
import ProjectShowcase from "./ProjectShowcase";
import {
  FaDownload,
  FaPlay,
  FaUnity,
  FaReact,
  FaMapMarkedAlt,
  FaFilm,
  FaRunning,
  FaGamepad,
  FaCode,
} from "react-icons/fa";
import Link from "next/link";

import one from "@images/game/s1.png";
import two from "@images/game/s2.png";
import three from "@images/game/s3.png";
import four from "@images/game/s4.png";
import mouseLogo from "@images/game/1.png";

import pastaLogo from "@images/pasta/logo.svg";
import pasta1 from "@images/pasta/pastaone.png";
import pasta2 from "@images/pasta/pastatwo.png";
import pasta3 from "@images/pasta/pastathree.png";
import pasta4 from "@images/pasta/pastafour.png";

import ponijeriLogo from "@images/ponijeri/logo.png";
import ponijeri1 from "@images/ponijeri/one.png";
import ponijeri2 from "@images/ponijeri/two.png";
import ponijeri3 from "@images/ponijeri/three.png";

import datemeLogo from "@images/dateme/logo.png";
import dateme1 from "@images/dateme/one.png";
import dateme2 from "@images/dateme/two.png";

import filmaticLogo from "@images/filmatic/logo.png";
import filmatic1 from "@images/filmatic/one.png";
import filmatic2 from "@images/filmatic/two.png";
import filmatic3 from "@images/filmatic/three.png";

import tkbLogo from "@images/tkb/logo.png";
import tkb1 from "@images/tkb/one.png";
import tkb2 from "@images/tkb/two.png";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto space-y-24 mt-24 px-6 md:px-12">
      {/* Hero */}
      <div className="text-center space-y-4">
        <p className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-[#fda4af] mb-3">
          Work
        </p>
        <h1 className="flex flex-col items-center gap-1">
          <span className="font-michroma g-text uppercase text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
            Programming
          </span>
          <span className="font-garamond italic g-text text-5xl sm:text-6xl">
            projects.
          </span>
        </h1>
        <p className="text-[var(--fg-2)] max-w-3xl mx-auto text-base sm:text-lg">
          Explore a selection of my most impactful projects — from game
          development to polished, real-world websites — built with modern
          technologies, creativity, and clean code.
        </p>
      </div>

      {/* Major Projects First */}
      <ProjectShowcase
        images={[one, two, three, four]}
        logo={mouseLogo}
        title="The Hunter Mouse"
        subtitle="Retro Platformer Made in Unity"
        description={
          <>
            <FaUnity className="inline text-[var(--accent)] mr-2" />
            Thrilling 3D adventure through vibrant worlds packed with
            platforming challenges. Handcrafted from scratch in Unity — retro
            spirit with modern polish.
          </>
        }
        hashtags={["Unity", "CSharp", "IndieGame"]}
        button1Text="Download"
        button1Link="https://gamejolt.com/games/huntermouse/902524"
        button1Icon={<FaDownload />}
        button2Text="Watch Trailer"
        button2Link="https://linkedin.com/..."
        button2Icon={<FaPlay />}
      />

      <ProjectShowcase
        images={[dateme1, dateme2]}
        logo={datemeLogo}
        title="DateMePlease.org"
        subtitle="Website Created at HTEC Internship"
        description={
          <>
            <FaCode className="inline text-[var(--accent)] mr-2" />
            Real-world project from my HTEC internship. Dating platform focused
            on clean UI, accessibility, and modern industry standards.
          </>
        }
        hashtags={["HTEC", "NextJS", "UXDesign"]}
        button1Text="Visit Site"
        button1Link="https://github.com/Aydhiny/datemeplease-org"
        reverse
      />

      <ProjectShowcase
        images={[filmatic1, filmatic2, filmatic3]}
        logo={filmaticLogo}
        title="Filmatic App"
        subtitle="Movie Discovery Next.js Application"
        description={
          <>
            <FaFilm className="inline text-[var(--accent)] mr-2" />
            Modern movie discovery app with fast search, clean UI, and
            responsive layout — built using Next.js and Tailwind CSS.
          </>
        }
        hashtags={["NextJS", "Tailwind", "Movies"]}
        button1Text="Visit Site"
        button1Link="https://filmatic-app.vercel.app/"
      />

      {/* Middle Banner */}
      <div className="relative w-full h-48 md:h-64 xl:h-80 overflow-hidden rounded-2xl border border-[var(--border)]">
        <Image
          src="/images/banner.png"
          alt="Hunter Mouse 2 Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hunter Mouse 2 Feature */}
      <div id="next-big-thing" className="text-center space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Hunter Mouse 2
        </h2>
        <p className="text-[var(--fg-2)] max-w-4xl mx-auto text-lg">
          <FaGamepad className="inline text-[var(--accent)] mr-2" />
          The biggest game project I&apos;ve ever taken on. Featuring improved
          graphics, deeper levels, and refined gameplay. Powered by Unity,
          driven by pure passion.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/next-big-thing" className="btn-primary flex items-center">
            See The Next Big Thing
          </Link>
        </div>
      </div>

      {/* Remaining Projects */}
      <ProjectShowcase
        images={[ponijeri1, ponijeri2, ponijeri3]}
        logo={ponijeriLogo}
        title="Explore Ponijeri"
        subtitle="Tourism & Exploration Website"
        description={
          <>
            <FaMapMarkedAlt className="inline text-[var(--accent)] mr-2" />
            Interactive tourism website promoting the natural beauty of
            Ponijeri. Clean design, galleries, and useful local information.
          </>
        }
        hashtags={["React", "Tourism", "ResponsiveDesign"]}
        button1Text="Visit Site"
        button1Link="https://explore-ponijeri.vercel.app/"
        reverse
      />

      <ProjectShowcase
        images={[tkb1, tkb2]}
        logo={tkbLogo}
        title="Taekwondo Kolektiv Bosna Rudar"
        subtitle="Sports Club Presentation Website"
        description={
          <>
            <FaRunning className="inline text-[var(--accent)] mr-2" />
            Official website for one of the region&apos;s most respected
            Taekwondo clubs. Event info, achievements, and a clean online
            presence.
          </>
        }
        hashtags={["React", "Sports", "Community"]}
        button1Text="Visit Site"
        button1Link="https://tkb-bosna-rudar.vercel.app/"
      />

      <ProjectShowcase
        images={[pasta1, pasta2, pasta3, pasta4]}
        logo={pastaLogo}
        title="Tjestenina Lejla"
        subtitle="React, Tailwind, Framer Motion Website"
        description={
          <>
            <FaReact className="inline text-[var(--accent)] mr-2" />
            Sleek, modern, and responsive website for a local pasta brand. Built
            for performance with Tailwind and React. Smooth animations and clean
            design.
          </>
        }
        hashtags={["React", "TailwindCSS", "FramerMotion"]}
        button1Text="Visit Site"
        button1Link="https://tjestenina-lejla-website.vercel.app/"
        reverse
      />

      <Projects />
    </div>
  );
}
