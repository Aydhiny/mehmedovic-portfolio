"use client";
import { useEffect, useRef } from "react";

// Lightweight Three.js scene — torus + octahedron + icosahedron
// Single WebGL context, ~30fps cap, alpha transparent background
export default function HeroScene({ className = "" }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;
    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;

      const w = canvas.clientWidth  || 420;
      const h = canvas.clientHeight || 420;

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(48, w / h, 0.1, 100);
      camera.position.z = 4.8;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const line = (geo: any, color: number, opacity: number) =>
        new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color, transparent: true, opacity })
        );

      // Large torus — magenta, main shape
      const torus = line(new THREE.TorusGeometry(1.05, 0.36, 14, 40), 0xe91e8c, 0.72);
      scene.add(torus);

      // Octahedron — orange, floats upper-right
      const octa = line(new THREE.OctahedronGeometry(0.50, 0), 0xf97316, 0.75);
      octa.position.set(1.5, 1.1, 0.2);
      scene.add(octa);

      // Icosahedron — gold, floats lower-left
      const ico = line(new THREE.IcosahedronGeometry(0.28, 0), 0xfbbf24, 0.65);
      ico.position.set(-1.4, -1.0, 0.4);
      scene.add(ico);

      // Outer sphere — very faint magenta, gives depth
      const sphere = line(new THREE.SphereGeometry(2.1, 8, 8), 0xe91e8c, 0.07);
      scene.add(sphere);

      let t = 0, frame = 0, animId: number;

      const tick = () => {
        animId = requestAnimationFrame(tick);
        if (++frame % 2) return; // ~30fps
        t += 0.008;

        torus.rotation.x = t * 0.38;
        torus.rotation.y = t * 0.52;

        octa.rotation.x  = t * 0.95;
        octa.rotation.y  = t * 0.68;
        octa.position.y  = 1.1 + Math.sin(t * 0.75) * 0.16;

        ico.rotation.y   = -t * 0.88;
        ico.rotation.z   =  t * 0.55;
        ico.position.y   = -1.0 + Math.sin(t * 0.60 + 1.4) * 0.13;

        sphere.rotation.y = t * 0.12;
        sphere.rotation.x = t * 0.07;

        renderer.render(scene, camera);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        scene.traverse((obj: any) => {
          if (obj.isLine) { obj.geometry?.dispose(); obj.material?.dispose(); }
        });
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return <canvas ref={canvasRef} className={`block ${className}`} aria-hidden="true" />;
}
