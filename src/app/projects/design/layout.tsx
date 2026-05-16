import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design & Marketing",
  description: "Brand identity, social media campaigns, and visual storytelling by Ajdin Mehmedović — crafted for artists, events, and agencies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
