"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const totalScroll = docHeight - winHeight;
      const scrollPercentage = (scrollTop / totalScroll) * 100;

      setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 100));
    };

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 border-violet-400 bg-gradient-to-r from-[#9000ff8f] to-[rgba(60,37,160,0.34)] z-[100]">
      <div
        className="h-full bg-main-app-teal transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
