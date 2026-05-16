import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on music production, game development, software engineering, and the creative process by Ajdin Mehmedović.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
