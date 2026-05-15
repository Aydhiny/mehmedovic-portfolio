"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence } from "framer-motion";

const HIDE_FOOTER_PAGES = ["/next-big-thing", "/projects/music", "/journey"];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      function raf(time: number) {
        lenis!.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

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
