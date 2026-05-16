import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming Projects",
  description: "Software engineering projects by Ajdin Mehmedović — Next.js web apps, Unity games, and full-stack platforms.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
