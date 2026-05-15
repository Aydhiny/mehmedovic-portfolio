"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GrInstagram } from "react-icons/gr";
import { SiBeatstars } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Aydhiny from "../images/ay.png";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    pathname === path ? "text-white" : "text-[var(--fg-2)] hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#070707]/90 border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              alt="Ajdin Mehmedović"
              src={Aydhiny}
              width={28}
              height={28}
              className="opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-sm font-semibold text-white tracking-tight hidden sm:block">
              Ajdin Mehmedović
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Journey", href: "/journey" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors duration-150 ${isActive(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Projects dropdown */}
            <li className="relative">
              <button
                onClick={() => setProjectsOpen((p) => !p)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors duration-150 ${isActive("/projects")}`}
              >
                Projects
                <MdKeyboardArrowDown
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {projectsOpen && (
                <ul className="absolute top-full left-0 mt-2 w-52 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                  {[
                    { label: "Programming", href: "/projects/programming" },
                    { label: "Music Production", href: "/projects/music" },
                    { label: "Design & Marketing", href: "/projects/design" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setProjectsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-[var(--fg-2)] hover:text-white hover:bg-[var(--surface-2)] transition-colors duration-150"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href="/next-big-thing"
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors duration-150 ${
                  pathname === "/next-big-thing"
                    ? "border-[var(--accent)] text-white bg-[var(--accent-muted)]"
                    : "border-[var(--border-2)] text-[var(--fg-2)] hover:border-[var(--accent)] hover:text-white"
                }`}
              >
                Next Big Thing
              </Link>
            </li>
          </ul>

          {/* Desktop social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://instagram.com/ajdinmehmedovix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--fg-2)] hover:text-white transition-colors duration-150"
            >
              <GrInstagram aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="https://beatstars.com/aydhiny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BeatStars"
              className="text-[var(--fg-2)] hover:text-white transition-colors duration-150"
            >
              <SiBeatstars aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="https://youtube.com/Aydhiny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-[var(--fg-2)] hover:text-white transition-colors duration-150"
            >
              <FaYoutube aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/about"
              className="ml-2 px-4 py-1.5 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors duration-150"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--fg-2)] hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <HiX aria-hidden="true" className="size-5" />
            ) : (
              <HiMenu aria-hidden="true" className="size-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#070707]/95 backdrop-blur-2xl animate-slide-down">
          <ul className="px-5 py-4 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Journey", href: "/journey" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive(href)}`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-[var(--fg-2)] hover:text-white transition-colors"
                onClick={() => setProjectsOpen((p) => !p)}
              >
                <span>Projects</span>
                <MdKeyboardArrowDown
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {projectsOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-[var(--border)] pl-4">
                  {[
                    { label: "Programming", href: "/projects/programming" },
                    { label: "Music Production", href: "/projects/music" },
                    { label: "Design & Marketing", href: "/projects/design" },
                  ].map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-sm text-[var(--fg-2)] hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                href="/next-big-thing"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm text-[var(--fg-2)] hover:text-white transition-colors"
              >
                Next Big Thing
              </Link>
            </li>
          </ul>
          <div className="px-5 pb-5 pt-2 border-t border-[var(--border)] flex items-center gap-5">
            {[
              { label: "Instagram", href: "https://instagram.com/ajdinmehmedovix", icon: <GrInstagram aria-hidden="true" className="size-4" /> },
              { label: "BeatStars", href: "https://beatstars.com/aydhiny", icon: <SiBeatstars aria-hidden="true" className="size-4" /> },
              { label: "YouTube", href: "https://youtube.com/Aydhiny", icon: <FaYoutube aria-hidden="true" className="size-4" /> },
            ].map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={() => setMenuOpen(false)}
                className="text-[var(--fg-2)] hover:text-white transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
