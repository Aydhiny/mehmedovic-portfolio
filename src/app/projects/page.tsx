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
        <div className="flex flex-col space-y-6">
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
      </div>

      {/* MUSIC PRODUCTION */}
      <div className="mt-16">
        <h4 className="py-4 font-bold text-2xl sm:text-3xl text-gray-400">
          Music Production
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MusicCard
            text="2Bona - Candy"
            link="link"
            image={Bona}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny x Call Me G x Nikola Tracks"
          />
          <MusicCard
            text="Shark Puppet x YBN NAHMIR - Gettin Bread"
            link="link"
            image={Bread}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny x Call Me G"
          />
          <MusicCard
            text="Danči - Voziš"
            link="link"
            image={Vozis}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
            producers="Aydhiny"
          />
          <MusicCard
            text="Hanoi Capital - Charles & Panda"
            link="link"
            image={Hanoi}
            desc="2BONA - Candy, a music project crafted by the talented trio of Aydhiny, Call Me G, and Nikola Tracks. With its irresistible beat and sugary-sweet melodies, Candy is sure to leave you wanting more. So go ahead and take a bite you won't be disappointed! 🎶🍬"
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
            link="link"
            category="Social Media Graphic Design"
            desc="Futures Leaders Summit is an annual event for future leaders to help them rethink the present and reimagine the future by featuring world speakers, interactive workshops, and company visits.

The running engine behind the event are the incredible scholars, alumni, volunteers, and staffers of the Foundation, supported by our mentors, donors, ambassadors, and many others that find our cause close to their hearts."
          />
          <DesignCard
            image={Bliss}
            title="Eternal Bliss : Music Tips"
            link="link"
            category="Social Media Graphic Design"
            desc="Eternal Bliss is an instagram account ran by music producer Ediba Deville created for educating newer producers in the business."
          />
          <DesignCard
            image={Plansio}
            title="Plansio : Marketing Agency"
            link="link"
            category="Marketing, Social Media Design, Video Editing"
            desc="Future Leaders Summit"
          />
        </div>
      </div>
    </div>
  );
}
