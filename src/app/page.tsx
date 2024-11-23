import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Featured from "@/app/pages/Featured/page";
import Projects from "@/app/pages/Projects/page";
import Chatbot from "@/components/Chatbot";
import AcceptCookies from "@/components/AcceptCookies";
import Footer from "@/components/Footer";

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
      <Projects />
      <Footer />
    </div>
  );
}
