import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hunter Mouse 2",
  description: "Hunter Mouse 2 — an award-winning indie collectathon adventure. First Place at FIT Coding Challenge v18. Coded, designed, and scored entirely by Ajdin Mehmedović.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
