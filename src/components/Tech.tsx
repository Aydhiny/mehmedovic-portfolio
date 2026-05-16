"use client";
import React, { useRef } from "react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaUnity, FaReact, FaGithub } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { SiAngular, SiBootstrap, SiAzuredevops } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  { icon: <RiNextjsFill className="size-8 text-white" />, label: "Next.js" },
  { icon: <FaReact className="size-8 text-sky-400" />, label: "React" },
  { icon: <RiTailwindCssFill className="size-8 text-sky-500" />, label: "Tailwind" },
  { icon: <DiDotnet className="size-8 text-sky-400" />, label: ".NET" },
  { icon: <FaUnity className="size-8 text-white" />, label: "Unity" },
  { icon: <FaGithub className="size-8 text-[var(--fg-2)]" />, label: "GitHub" },
  { icon: <SiAngular className="size-8 text-red-500" />, label: "Angular" },
  { icon: <SiBootstrap className="size-8 text-purple-500" />, label: "Bootstrap" },
  { icon: <SiAzuredevops className="size-8 text-blue-500" />, label: "DevOps" },
];

function TechItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 px-6 flex-shrink-0">
      {icon}
      <span className="text-[var(--fg-2)] text-sm font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function Tech() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const doubled = [...techStack, ...techStack];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <div className="px-5 sm:px-8 max-w-7xl mx-auto mb-10">
        <p className="label-tag mb-3">{t.tech.tag}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white">{t.tech.title}</h2>
      </div>

      <div className="border-y border-[var(--border)] overflow-hidden py-6 bg-[var(--surface)]">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <TechItem key={i} icon={tech.icon} label={tech.label} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
