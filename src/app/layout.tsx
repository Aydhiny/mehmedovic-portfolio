"use client";
import { usePathname } from "next/navigation";
import ScrollProgressBar from "@/components/ProgressBar";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { AnimatePresence, motion } from "framer-motion";

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
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const hideFooterPages = ["/next-big-thing", "/projects/music", "/journey"];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <div>{children}</div>
        </AnimatePresence>
        {!hideFooterPages.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
