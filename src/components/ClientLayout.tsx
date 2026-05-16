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
      {/* Noise grain texture — mix-blend-mode:overlay adds texture to colored orbs */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9995,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "250px 250px",
          opacity: 0.028,
          mixBlendMode: "overlay",
        }}
      />
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
