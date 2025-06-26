import Header from "@/components/Header";
import Projects from "@/app/pages/Projects/page";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajdin Mehmedović",
  description:
    "Ajdin Mehmedovic portfolio website created using Nextjs, Tailwind and Vercel.",
};
{
  /* import AcceptCookies from "@/components/AcceptCookies"; */
}
import Tech from "@/components/Tech";
import Clients from "@/components/Clients";
import TrainTrack from "@/components/TrainTrack";
import Lines from "@/components/Lines";
import SuccessShowcase from "@/components/SuccessShowcase";
import HunterMouseShowcase from "@/components/HunterMouseShowcase";

export default function Home() {
  return (
    <div>
      {/* Misc */}
      <Chatbot />
      {/*<AcceptCookies /> */}
      {/* Pages */}
      <Header />
      <Lines />
      <TrainTrack />
      <SuccessShowcase />
      <Tech />
      <HunterMouseShowcase />
      <Clients />
      <Projects />
    </div>
  );
}
