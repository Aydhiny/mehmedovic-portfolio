import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/app/pages/Featured/page";
import Chatbot from "@/components/Chatbot";
import AcceptCookies from "@/components/AcceptCookies";

export default function Home() {
  return (
    <div>
      {/* Misc */}
      <Chatbot />
      <AcceptCookies />
      {/* Pages */}
      <Navbar />
      <Header />
      <Featured />
    </div>
  );
}
