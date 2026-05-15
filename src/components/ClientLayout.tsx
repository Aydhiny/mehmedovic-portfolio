"use client";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence } from "framer-motion";

const HIDE_FOOTER_PAGES = ["/next-big-thing", "/projects/music", "/journey"];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <div>{children}</div>
      </AnimatePresence>
      {!HIDE_FOOTER_PAGES.includes(pathname) && <Footer />}
    </>
  );
}
