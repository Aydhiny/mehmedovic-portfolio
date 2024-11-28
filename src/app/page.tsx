import Header from "@/components/Header";
import Featured from "@/app/pages/Featured/page";
import Projects from "@/app/pages/Projects/page";
import Chatbot from "@/components/Chatbot";
import AcceptCookies from "@/components/AcceptCookies";

export default function Home() {
  return (
    <div>
      {/* Misc */}
      <Chatbot />
      <AcceptCookies />
      {/* Pages */}
      <Header />
      <Featured />
      <Projects />
    </div>
  );
}
