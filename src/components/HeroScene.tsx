"use client";
import { useEffect, useRef } from "react";

// Three orbiting rings (orrery / gyroscope) + central gem
// Much more synthwave than a misaligned torus
export default function HeroScene({ className = "" }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;
    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;

      const w = canvas.clientWidth  || 340;
      const h = canvas.clientHeight || 340;

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(46, w / h, 0.1, 100);
      camera.position.z = 4.2;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      // ── Central gem — icosahedron wireframe ─────────────
      const gemGeo   = new THREE.IcosahedronGeometry(0.55, 1);
      const gemEdges = new THREE.EdgesGeometry(gemGeo);
      const gem = new THREE.LineSegments(
        gemEdges,
        new THREE.LineBasicMaterial({ color: 0xfde68a, transparent: true, opacity: 0.90 })
      );
      scene.add(gem);

      // ── Helper: flat orbit ring (RingGeometry, solid) ────
      const makeRing = (r: number, color: number, opacity: number) => {
        const geo = new THREE.RingGeometry(r - 0.018, r + 0.018, 80);
        const mat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity,
          side: THREE.DoubleSide,
        });
        return new THREE.Mesh(geo, mat);
      };

      // Ring 1 — magenta, near-horizontal
      const ring1 = makeRing(1.10, 0xe91e8c, 0.80);
      ring1.rotation.x = 0.22;
      scene.add(ring1);

      // Ring 2 — orange, tilted ~55°
      const ring2 = makeRing(1.22, 0xf97316, 0.65);
      ring2.rotation.x = Math.PI * 0.32;
      ring2.rotation.y = 0.35;
      scene.add(ring2);

      // Ring 3 — gold, tilted ~80°
      const ring3 = makeRing(1.38, 0xfbbf24, 0.50);
      ring3.rotation.x = Math.PI * 0.48;
      ring3.rotation.z = 0.55;
      scene.add(ring3);

      // ── Outer ghost sphere for depth ────────────────────
      const ghostEdges = new THREE.EdgesGeometry(new THREE.SphereGeometry(1.6, 9, 9));
      const ghost = new THREE.LineSegments(
        ghostEdges,
        new THREE.LineBasicMaterial({ color: 0xe91e8c, transparent: true, opacity: 0.06 })
      );
      scene.add(ghost);

      // ── All objects in a group that slowly rotates ───────
      const group = new THREE.Group();
      group.add(gem, ring1, ring2, ring3, ghost);
      scene.add(group);

      let t = 0, frame = 0, animId: number;

      const tick = () => {
        animId = requestAnimationFrame(tick);
        if (++frame % 2) return; // ~30fps
        t += 0.008;

        // Slow global tumble
        group.rotation.y = t * 0.28;
        group.rotation.x = Math.sin(t * 0.15) * 0.12;

        // Individual ring orbits
        ring1.rotation.z =  t * 0.55;
        ring2.rotation.z = -t * 0.40;
        ring3.rotation.z =  t * 0.65;

        // Gem spins faster
        gem.rotation.y =  t * 0.90;
        gem.rotation.x =  t * 0.40;

        renderer.render(scene, camera);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        scene.traverse((obj: any) => {
          obj.geometry?.dispose?.();
          obj.material?.dispose?.();
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
