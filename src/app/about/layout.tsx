import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ajdin Mehmedović — software engineering student, music producer (Aydhiny), game developer, and graphic designer from Bosnia & Herzegovina.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
