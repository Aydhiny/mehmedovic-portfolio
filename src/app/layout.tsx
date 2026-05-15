import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://mehmedovic-portfolio.vercel.app";

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ajdin Mehmedović",
    template: "%s | Ajdin Mehmedović",
  },
  description:
    "Software engineering student, music producer (Aydhiny), game developer, and graphic designer from Bosnia & Herzegovina. Award-winning at FIT Coding Challenge 2025.",
  keywords: [
    "Ajdin Mehmedovic",
    "Aydhiny",
    "software engineer",
    "music producer",
    "game developer",
    "graphic designer",
    "Bosnia Herzegovina",
    "Next.js",
    "Unity",
    "Hunter Mouse 2",
  ],
  authors: [{ name: "Ajdin Mehmedović", url: BASE_URL }],
  creator: "Ajdin Mehmedović",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ajdin Mehmedović",
    title: "Ajdin Mehmedović — Developer · Producer · Designer",
    description:
      "Award-winning software engineering student, indie game developer (Hunter Mouse 2), music producer, and graphic designer.",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Ajdin Mehmedović Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajdin Mehmedović — Developer · Producer · Designer",
    description:
      "Award-winning software engineering student, indie game developer (Hunter Mouse 2), music producer, and graphic designer.",
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
