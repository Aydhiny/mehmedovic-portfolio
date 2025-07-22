"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const CURSOR_SIZE = 40;
const CURSOR_IMAGE =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><circle cx='12' cy='12' r='9' fill='%23A500FF' stroke='%23FFFFFF' stroke-width='4'></circle></svg>";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [poof, setPoof] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Don't render on touch devices
  if (isTouch) return null;

  // Smooth position
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e: any) => {
      animate(x, e.clientX - CURSOR_SIZE / 2, {
        type: "spring",
        stiffness: 500,
        damping: 40,
      });
      animate(y, e.clientY - CURSOR_SIZE / 2, {
        type: "spring",
        stiffness: 500,
        damping: 40,
      });
    };
    window.addEventListener("mousemove", move);

    // Hover logic
    const addHover = (e: any) => {
      if (e.target.closest("a, button, .cursor-hover")) setHovered(true);
    };
    const removeHover = (e: any) => {
      if (e.target.closest("a, button, .cursor-hover")) setHovered(false);
    };
    window.addEventListener("mouseover", addHover);
    window.addEventListener("mouseout", removeHover);

    // Poof on click
    const handleClick = () => {
      setPoof(true);
      setTimeout(() => setPoof(false), 350);
    };
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", addHover);
      window.removeEventListener("mouseout", removeHover);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        x,
        y,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: "50%",
        background: `url("${CURSOR_IMAGE}") center/cover no-repeat`,
        boxShadow: hovered
          ? "0 0 0 8px rgba(165,0,255,0.15)"
          : "0 0 0 0px transparent",
        scale: hovered ? 1.5 : poof ? 2.2 : 1,
        opacity: poof ? 0 : 1,
        transition: "box-shadow 0.2s, opacity 0.3s, scale 0.2s",
        willChange: "transform, opacity",
        mixBlendMode: "exclusion",
      }}
      animate={{
        scale: hovered ? 1.5 : poof ? 2.2 : 1,
        opacity: poof ? 0 : 1,
      }}
    />
  );
}
