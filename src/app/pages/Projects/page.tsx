"use client";
import ProjectBox from "@/components/ProjectBox";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  homepage?: string;
};

const LANG_COLORS: Record<string, string> = {
  JavaScript: "yellow",
  TypeScript: "blue",
  "C#": "green",
  "C++": "red",
  TSQL: "orange",
  Python: "blue",
};

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/Aydhiny/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
      })
      .catch((err) => {
        console.error("Failed to fetch GitHub repos:", err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 sm:px-8 xl:px-52 flex flex-col"
    >
      <h1 className="xl:text-6xl text-3xl font-bold mb-6">
        Github Repositories
      </h1>
      <div>
        {loading && (
          <p className="text-gray-400 mb-4">Loading repositories...</p>
        )}
        {error && (
          <p className="text-gray-400 mb-4">
            Couldn&apos;t load repositories.{" "}
            <Link
              href="https://github.com/Aydhiny"
              className="text-main-app-teal underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View them on GitHub →
            </Link>
          </p>
        )}
        {!loading && !error && repos.length === 0 && (
          <p className="text-gray-400 mb-4">No repositories found.</p>
        )}
        {repos.map((repo) => (
          <ProjectBox
            key={repo.id}
            name={repo.name}
            description={repo.description || "No description"}
            tech={repo.language || "Other"}
            color={
              LANG_COLORS[repo.language as keyof typeof LANG_COLORS] || "gray"
            }
            link={repo.homepage || repo.html_url}
            github={repo.html_url}
          />
        ))}
      </div>
      <Link href="https://github.com/Aydhiny" passHref>
        <p className="text-gray-400 font-semibold my-4 cursor-pointer hover:text-main-app-teal transition-colors duration-150">
          See all repositories →
        </p>
      </Link>
    </motion.div>
  );
}
