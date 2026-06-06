"use client";
import { useEffect, useRef } from "react";

// Full-viewport canvas so shapes live inside the actual sky,
// not a tiny clipped box that lands at the wrong height.
export default function HeroThree() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;
    let disposed = false;

    // Internal mouse tracking for camera parallax
    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth  - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("mousemove", onMove);

    import("three").then((THREE) => {
      if (disposed) return;

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.set(0, 0, 5);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      const setSize = () => {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      };
      setSize();
      window.addEventListener("resize", setSize);

      // ── Helpers ────────────────────────────────────────
      const mkRing = (r: number, color: number, opacity: number) => {
        const geo = new THREE.RingGeometry(r - 0.014, r + 0.014, 72);
        const mat = new THREE.MeshBasicMaterial({
          color, transparent: true, opacity, side: THREE.DoubleSide,
        });
        return new THREE.Mesh(geo, mat);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mkEdge = (geo: any, color: number, opacity: number) =>
        new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          new THREE.LineBasicMaterial({ color, transparent: true, opacity })
        );

      // ── Orrery — upper right of 3D space ───────────────
      // At camera z=5, FOV=42: x=2.2 maps to ~82% from left,
      // y=0.8 maps to ~29% from top — upper-right sky area.
      const orrery = new THREE.Group();
      orrery.position.set(2.2, 0.8, 0);
      scene.add(orrery);

      const r1 = mkRing(0.64, 0xe91e8c, 0.78);
      r1.rotation.x = 0.22;

      const r2 = mkRing(0.80, 0xf97316, 0.60);
      r2.rotation.x = Math.PI * 0.30;
      r2.rotation.y = 0.38;

      const r3 = mkRing(0.96, 0xfbbf24, 0.44);
      r3.rotation.x = Math.PI * 0.50;
      r3.rotation.z = 0.52;

      const gem = mkEdge(new THREE.IcosahedronGeometry(0.28, 1), 0xfde68a, 0.88);
      orrery.add(r1, r2, r3, gem);

      // ── Small accent floater (upper left of scene) ─────
      const oct = mkEdge(new THREE.OctahedronGeometry(0.14, 0), 0xf97316, 0.55);
      oct.position.set(-0.9, 1.6, 0.2);
      scene.add(oct);

      // ── Animation ──────────────────────────────────────
      let t = 0, frame = 0, animId: number;
      const camTarget = new THREE.Vector3(0, 0, 5);

      const tick = () => {
        animId = requestAnimationFrame(tick);
        if (++frame % 2) return; // ~30 fps cap

        t += 0.008;

        orrery.rotation.y = t * 0.20;
        r1.rotation.z =  t * 0.52;
        r2.rotation.z = -t * 0.38;
        r3.rotation.z =  t * 0.60;
        gem.rotation.y =  t * 0.85;
        gem.rotation.x =  t * 0.35;

        oct.rotation.y = t * 1.10;
        oct.position.y = 1.6 + Math.sin(t * 0.72) * 0.14;

        // Subtle camera parallax
        camTarget.set(mx * 0.35, -my * 0.22, 5);
        camera.position.lerp(camTarget, 0.03);
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", setSize);
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
      window.removeEventListener("mousemove", onMove);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    />
  );
}
