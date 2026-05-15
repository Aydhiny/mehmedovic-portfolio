"use client";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Aydhiny from "../images/ay.png";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Journey", href: "/journey" },
  { label: "Next Big Thing", href: "/next-big-thing" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative border-t border-[var(--border)] mt-10 overflow-hidden">

      {/* Spinning watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <Image
          src={Aydhiny}
          alt=""
          width={360}
          height={360}
          className="opacity-[0.025] animate-spin-slow"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-2.5">
            <Image alt="Aydhiny logo" src={Aydhiny} width={24} height={24} className="opacity-70" />
            <div>
              <span className="text-sm text-white font-medium">Ajdin </span>
              <span className="font-garamond font-bold italic text-[var(--accent)] text-xl">Mehmedović</span>
            </div>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors duration-150 ${
                      pathname === href
                        ? "text-white font-medium"
                        : "text-[var(--fg-3)] hover:text-[var(--fg-2)]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:ajdin.mehmedovic@edu.fit.ba"
                  className="text-sm text-[var(--fg-3)] hover:text-[var(--fg-2)] transition-colors duration-150"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-[var(--fg-3)]">
            © {new Date().getFullYear()} Aydhiny
          </p>

        </div>
      </div>
    </footer>
  );
}
