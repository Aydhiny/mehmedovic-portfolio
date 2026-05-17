"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopStrip from "@/components/TopStrip";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/context/LanguageContext";
import EasterEggs from "@/components/EasterEggs";

const HIDE_FOOTER_PAGES = ["/next-big-thing", "/projects/music", "/journey"];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.innerWidth < 768) return; // skip smooth scroll on mobile — too heavy
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
    <LanguageProvider>
      {/* Noise grain — static PNG tile, no SVG filter cost. Add /grain.png to public/ to enable. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none hidden md:block"
        style={{
          zIndex: 9995,
          backgroundImage: "url('/grain.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "250px 250px",
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />
      <EasterEggs />
      <ScrollProgressBar />
      <CustomCursor />
      {/* TopStrip sits above navbar — fixed, z-60, hidden on mobile */}
      <div className="fixed top-0 left-0 right-0 z-[60] hidden md:block">
        <TopStrip />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <div>{children}</div>
      </AnimatePresence>
      {!HIDE_FOOTER_PAGES.includes(pathname) && <Footer />}
    </LanguageProvider>
  );
}
