"use client";
import { useEffect, useRef } from "react";

type ShapeType = "icosahedron" | "torus" | "octahedron" | "cube";

interface Props {
  shape?: ShapeType;
  color?: string;
  className?: string;
  speed?: number;
  wireOpacity?: number;
}

export default function ShapeCanvas({
  shape = "icosahedron",
  color = "#e91e8c",
  className = "",
  speed = 1,
  wireOpacity = 0.55,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Store cleanup so the effect's sync return can call it even after async import
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;

    let disposed = false;
    let visible  = true;

    const observer = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    import("three").then((THREE) => {
      if (disposed) return;

      const w = canvas.clientWidth || 200;
      const h = canvas.clientHeight || 200;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
      camera.position.z = 3.8;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      const geo =
        shape === "torus"       ? new THREE.TorusGeometry(0.9, 0.32, 14, 28)
        : shape === "octahedron" ? new THREE.OctahedronGeometry(1.15, 0)
        : shape === "cube"       ? new THREE.BoxGeometry(1.5, 1.5, 1.5)
        :                          new THREE.IcosahedronGeometry(1.15, 0);

      const edges = new THREE.EdgesGeometry(geo);
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: wireOpacity,
      });
      const mesh = new THREE.LineSegments(edges, mat);
      scene.add(mesh);

      let t = 0;
      let animId: number;

      function tick() {
        if (disposed) return;
        if (!visible) { animId = requestAnimationFrame(tick); return; }
        t += 0.004 * speed;
        mesh.rotation.x = t * 0.55;
        mesh.rotation.y = t;
        renderer.render(scene, camera);
        animId = requestAnimationFrame(tick);
      }
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        geo.dispose();
        edges.dispose();
        mat.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      observer.disconnect();
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [shape, color, speed, wireOpacity]);

  return <canvas ref={canvasRef} className={`block ${className}`} aria-hidden="true" />;
}
