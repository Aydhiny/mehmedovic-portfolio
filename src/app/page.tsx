import Header from "@/components/Header";
import Featured from "@/app/pages/Featured/page";
import Projects from "@/app/pages/Projects/page";
import Chatbot from "@/components/Chatbot";
import "./globals.css";
{
  /* import AcceptCookies from "@/components/AcceptCookies"; */
}
import Tech from "@/components/Tech";
import Clients from "@/components/Clients";
import TrainTrack from "@/components/TrainTrack";
import Lines from "@/components/Lines";

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
      <Featured />
      <Tech />
      <Clients />
      <Projects />
    </div>
  );
}
