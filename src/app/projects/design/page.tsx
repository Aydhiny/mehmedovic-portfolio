import React from "react";
import Plansio from "@images/projects/plansio.png";
import DesignCard from "@/components/DesignCard";
import FLS from "@images/projects/fls.jpg";
import Bliss from "@images/projects/bliss.png";
import Image from "next/image";
export default function Page() {
  return (
    <div className="px-12 pt-24 xl:px-24 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold">Design & Marketing Work</h1>
      <h4 className="text-xl text-gray-400 pb-4">
        Social Media Agency Profile PLANSIO
      </h4>
      <Image
        alt="plansio-logo"
        src={Plansio}
        className="rounded-full size-56 cursor-pointer border mx-auto p-4 mb-12 border-opacity-50 border-violet-400 bg-gradient-to-t from-[#9000ff8f] to-[rgba(60,37,160,0.34)] shadow-xl hover:shadow-2xl transition-all duration-150 animate-slide-down"
      />
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
