import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Production",
  description: "6 years of music production as Aydhiny — over 5 million streams worldwide, beats, and collaborations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
