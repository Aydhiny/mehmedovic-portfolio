import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey",
  description: "The story of Ajdin Mehmedović — from music production in 2018 to software engineering, game development, and winning First Place at FIT Coding Challenge v18.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
