"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ScrollProgressBar from "@/components/ProgressBar";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence, motion } from "framer-motion";
import CloudLoader from "@/components/CloudLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 900); // match your loader duration
      prevPath.current = pathname;
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  const hideFooterPages = ["/next-big-thing", "/projects/music", "/journey"];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CloudLoader show={loading} />
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        {!hideFooterPages.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
