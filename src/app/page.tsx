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

export default function Home() {
  return (
    <div>
      {/* Misc */}
      <Chatbot />
      {/*<AcceptCookies /> */}
      {/* Pages */}
      <Header />
      <TrainTrack />
      <Featured />
      <Tech />
      <Clients />
      <Projects />
    </div>
  );
}
