import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Programming, music production, and design projects by Ajdin Mehmedović — from indie games to full-stack apps and brand identities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
