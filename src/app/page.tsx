import Header from "@/components/Header";
import Projects from "@/app/pages/Projects/page";
import Chatbot from "@/components/Chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajdin Mehmedović",
  description:
    "Ajdin Mehmedovic portfolio website created using Nextjs, Tailwind and Vercel.",
};
import Tech from "@/components/Tech";
import Clients from "@/components/Clients";
import TrainTrack from "@/components/TrainTrack";
import Lines from "@/components/Lines";
import SuccessShowcase from "@/components/SuccessShowcase";
import HunterMouseShowcase from "@/components/HunterMouseShowcase";
import Foundation from "@/components/Foundation";
import MusicSection from "@/components/MusicSection";

export default function Home() {
  return (
    <div>
      <Chatbot />
      <Header />
      <Lines />
      <TrainTrack />
      <SuccessShowcase />
      <Tech />
      <HunterMouseShowcase />
      <MusicSection />
      <Clients />
      <Projects />
      <Foundation />
    </div>
  );
}
