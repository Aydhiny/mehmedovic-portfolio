"use client";
import { useEffect, useRef, useState } from "react";

const CURSOR_SIZE = 40;
const CURSOR_IMAGE =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><circle cx='12' cy='12' r='9' fill='%23A500FF' stroke='%23FFFFFF' stroke-width='4'></circle></svg>";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [poof, setPoof] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkTouch = () => setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    // Target position from raw mousemove — no spring solver
    let tx = -100, ty = -100;
    // Current (lerped) position
    let cx = -100, cy = -100;
    let rafId: number;

    const move = (e: MouseEvent) => {
      tx = e.clientX - CURSOR_SIZE / 2;
      ty = e.clientY - CURSOR_SIZE / 2;
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      // Lerp factor 0.18 — snappy but smooth, no spring overhead
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx}px, ${cy}px)`;
      }
    };
    rafId = requestAnimationFrame(tick);

    const addHover = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, .cursor-hover")) setHovered(true);
    };
    const removeHover = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, .cursor-hover")) setHovered(false);
    };
    const handleClick = () => {
      setPoof(true);
      setTimeout(() => setPoof(false), 350);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", addHover);
    window.addEventListener("mouseout", removeHover);
    window.addEventListener("mousedown", handleClick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", addHover);
      window.removeEventListener("mouseout", removeHover);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        borderRadius: "50%",
        background: `url("${CURSOR_IMAGE}") center/cover no-repeat`,
        boxShadow: hovered ? "0 0 0 8px rgba(165,0,255,0.15)" : "0 0 0 0px transparent",
        opacity: poof ? 0 : 1,
        scale: hovered ? "1.5" : poof ? "2.2" : "1",
        transition: "box-shadow 0.2s, opacity 0.3s, scale 0.2s",
        willChange: "transform",
        mixBlendMode: "exclusion",
      }}
    />
  );
}
