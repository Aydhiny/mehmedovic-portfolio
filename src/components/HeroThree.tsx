"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}

export default function HeroThree({ mouseRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Skip Three.js on mobile — WebGL is expensive on low-end devices and
    // the scene is purely decorative. The hero reads fine without it.
    if (window.innerWidth < 768) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // off — LineSegments don't benefit, saves ~20% GPU
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const setSize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    // ── Inner sphere — magenta wireframe ──
    const innerGeo = new THREE.SphereGeometry(1.45, 9, 9);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const inner = new THREE.LineSegments(
      innerEdges,
      new THREE.LineBasicMaterial({
        color: 0xe91e8c,
        transparent: true,
        opacity: 0.42,
      })
    );
    inner.position.x = 1.6;
    scene.add(inner);

    // ── Outer sphere — orange, counter-rotating ──
    const outerGeo = new THREE.SphereGeometry(1.85, 7, 7);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outer = new THREE.LineSegments(
      outerEdges,
      new THREE.LineBasicMaterial({
        color: 0xf97316,
        transparent: true,
        opacity: 0.14,
      })
    );
    outer.position.x = 1.6;
    scene.add(outer);

    // ── Octahedron accent — hot pink, floating nearby ──
    const octaGeo = new THREE.OctahedronGeometry(0.4, 0);
    const octaEdges = new THREE.EdgesGeometry(octaGeo);
    const octa = new THREE.LineSegments(
      octaEdges,
      new THREE.LineBasicMaterial({
        color: 0xf0097a,
        transparent: true,
        opacity: 0.55,
      })
    );
    octa.position.set(3.2, 1.2, 0);
    scene.add(octa);

    // ── Icosahedron — gold, bottom left of sphere ──
    const icoGeo = new THREE.IcosahedronGeometry(0.28, 0);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);
    const ico = new THREE.LineSegments(
      icoEdges,
      new THREE.LineBasicMaterial({
        color: 0xfbbf24,
        transparent: true,
        opacity: 0.5,
      })
    );
    ico.position.set(0.1, -1.6, 0.3);
    scene.add(ico);

    // Particles removed — they added a draw call for minimal visual value

    setSize();

    let raf = 0;
    let t = 0;
    let frame = 0;
    const camTarget = new THREE.Vector3();

    const tick = () => {
      raf = requestAnimationFrame(tick);
      // Skip odd frames — decorative wireframes don't need 60fps
      if (++frame % 2) return;
      t += 0.008;

      // Sphere rotations
      inner.rotation.y = t * 0.75;
      inner.rotation.x = t * 0.18;
      outer.rotation.y = -t * 0.38;
      outer.rotation.z = t * 0.22;

      // Accent shapes
      octa.rotation.x = t * 1.1;
      octa.rotation.y = t * 0.8;
      ico.rotation.y = -t * 0.9;
      ico.rotation.z = t * 0.6;

      // Smooth camera parallax from mouse
      const mx = mouseRef.current?.x ?? 0;
      const my = mouseRef.current?.y ?? 0;
      camTarget.set(mx * 0.5, -my * 0.3, 5);
      camera.position.lerp(camTarget, 0.04);
      camera.lookAt(1.6, 0, 0);

      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      outerGeo.dispose();
      outerEdges.dispose();
      octaGeo.dispose();
      octaEdges.dispose();
      icoGeo.dispose();
      icoEdges.dispose();
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
