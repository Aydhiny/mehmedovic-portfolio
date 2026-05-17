"use client";
import { useEffect, useRef } from "react";

export default function MouseThree({ className = "" }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;

    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;

      const w = canvas.clientWidth  || 384;
      const h = canvas.clientHeight || 320;

      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0, 1.7, 4.4);
      camera.lookAt(0, 0.8, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      // ── Lights ──────────────────────────────────────────────
      const key = new THREE.DirectionalLight(0xfde68a, 2.8);
      key.position.set(2, 4, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x93c5fd, 1.6);
      fill.position.set(-3, 0.5, 2);
      scene.add(fill);
      const back = new THREE.PointLight(0xe91e8c, 1.8, 12);
      back.position.set(0, -2, -4);
      scene.add(back);
      scene.add(new THREE.AmbientLight(0x1e3a8a, 2.2));

      // ── Materials ───────────────────────────────────────────
      const blueMat  = new THREE.MeshPhongMaterial({ color: 0x1d4ed8, emissive: 0x040e26, shininess: 55 });
      const hoodMat  = new THREE.MeshPhongMaterial({ color: 0x1d4ed8, emissive: 0x040e26, shininess: 80, flatShading: true });
      const faceMat  = new THREE.MeshPhongMaterial({ color: 0xe8ddd2, emissive: 0x080604, shininess: 25 });
      const earOutM  = new THREE.MeshPhongMaterial({ color: 0x93c5fd, emissive: 0x0d2448, shininess: 50, flatShading: true });
      const earInM   = new THREE.MeshPhongMaterial({ color: 0xfb7185, emissive: 0x3d000f, shininess: 40, side: THREE.DoubleSide });
      const irisM    = new THREE.MeshPhongMaterial({ color: 0xd97706, emissive: 0x3d1500, shininess: 130 });
      const pupilM   = new THREE.MeshPhongMaterial({ color: 0x0d0d10, shininess: 200 });
      const shineM   = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0x888888, shininess: 300 });
      const noseM    = new THREE.MeshPhongMaterial({ color: 0xfb7185, emissive: 0x3d000f, shininess: 90 });
      const capeM    = new THREE.MeshPhongMaterial({ color: 0xdc2626, emissive: 0x450a0a, shininess: 35, side: THREE.DoubleSide });
      const silverM  = new THREE.MeshPhongMaterial({ color: 0xe2e8f0, emissive: 0x1e2a3a, shininess: 240 });
      const goldM    = new THREE.MeshPhongMaterial({ color: 0xfbbf24, emissive: 0x302000, shininess: 100 });
      const darkM    = new THREE.MeshPhongMaterial({ color: 0x1c1917, shininess: 40 });

      // ── Scene groups ────────────────────────────────────────
      const root  = new THREE.Group();
      const mouse = new THREE.Group();
      root.add(mouse);
      scene.add(root);
      root.rotation.y = 0.10; // mostly frontal

      // Body
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.30, 8, 8), blueMat);
      body.scale.y = 0.82;
      body.position.y = -0.02;
      mouse.add(body);

      // Cape — trapezoidal quad hanging behind body
      const capeGeo = new THREE.BufferGeometry();
      const capeV   = new Float32Array([
        -0.24,  0.18,  0.02,
         0.24,  0.18,  0.02,
        -0.40, -0.28, -0.22,
         0.40, -0.28, -0.22,
      ]);
      capeGeo.setAttribute("position", new THREE.BufferAttribute(capeV, 3));
      capeGeo.setIndex([0, 2, 1,  1, 2, 3]);
      capeGeo.computeVertexNormals();
      mouse.add(new THREE.Mesh(capeGeo, capeM));

      // Sword (attached to body, right side)
      const sword = new THREE.Group();
      sword.position.set(0.40, 0.10, 0.18);
      sword.rotation.set(0, 0.18, 0.68);
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.040, 0.72, 0.040), silverM);
      blade.position.y = 0.38;
      sword.add(blade);
      sword.add(new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.040, 0.050), goldM));
      const hndl = new THREE.Mesh(new THREE.BoxGeometry(0.040, 0.22, 0.040), darkM);
      hndl.position.y = -0.13;
      sword.add(hndl);
      mouse.add(sword);

      // ── Head group (tracks cursor independently) ─────────────
      const headGroup = new THREE.Group();
      headGroup.position.set(0, 0.50, 0.04);
      mouse.add(headGroup);

      // Head sphere (smooth, larger)
      headGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.34, 14, 14), blueMat));

      // Hood cap — top hemisphere, flatShaded for low-poly faceted look
      const hoodGeo = new THREE.SphereGeometry(0.355, 10, 5, 0, Math.PI * 2, 0, Math.PI * 0.52);
      headGroup.add(new THREE.Mesh(hoodGeo, hoodMat));

      // Face patch — cream oval on front
      const face = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), faceMat);
      face.scale.set(0.96, 0.86, 0.46);
      face.position.set(0, -0.07, 0.28);
      headGroup.add(face);

      // Ears — triangular (3-sided cone) with inner pink
      const makeEar = (side: number) => {
        const g = new THREE.Group();
        const out = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.42, 3), earOutM);
        out.scale.z = 0.22;
        g.add(out);
        const inn = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.30, 3), earInM);
        inn.scale.z = 0.16;
        inn.position.z = 0.018;
        inn.position.y = -0.04;
        g.add(inn);
        g.position.set(side * 0.28, 0.28, 0.04);
        g.rotation.z = side * -0.22; // tilt outward
        return g;
      };
      headGroup.add(makeEar(-1));
      headGroup.add(makeEar( 1));

      // Eyes — amber iris + dark pupil + white shine
      const makeEye = (sx: number) => {
        const g = new THREE.Group();
        g.position.set(sx * 0.126, -0.040, 0.300);
        g.add(new THREE.Mesh(new THREE.SphereGeometry(0.090, 10, 10), irisM));
        const pup = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 8), pupilM);
        pup.position.z = 0.046;
        g.add(pup);
        const sh = new THREE.Mesh(new THREE.SphereGeometry(0.026, 6, 6), shineM);
        sh.position.set(sx * 0.025, 0.030, 0.085);
        g.add(sh);
        return g;
      };
      headGroup.add(makeEye(-1));
      headGroup.add(makeEye( 1));

      // Nose
      const nose = new THREE.Mesh(new THREE.SphereGeometry(0.052, 8, 8), noseM);
      nose.position.set(0, -0.085, 0.340);
      headGroup.add(nose);

      // ── Interaction state ────────────────────────────────────
      let targetHeadX = 0, targetHeadY = 0;
      let swingPhase  = 0;

      const onMove = (e: MouseEvent) => {
        const r = canvas.getBoundingClientRect();
        targetHeadX = ((e.clientX - r.left) / r.width  - 0.5) * 0.70;
        targetHeadY = ((e.clientY - r.top)  / r.height - 0.5) * 0.50;
      };
      const onTap = () => { swingPhase = 1.0; };
      canvas.addEventListener("mousemove", onMove);
      canvas.addEventListener("click",     onTap);
      canvas.style.cursor = "pointer";

      // ── Scroll reaction ──────────────────────────────────────
      let scrollVel = 0, lastY = window.scrollY;
      const onScroll = () => { scrollVel = window.scrollY - lastY; lastY = window.scrollY; };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── Animation loop ───────────────────────────────────────
      let t = 0, animId: number;

      const tick = () => {
        if (disposed) return;
        t += 0.012;

        root.position.y = Math.sin(t * 0.75) * 0.10;
        root.rotation.z = Math.sin(t * 0.45) * 0.026;

        const tilt = THREE.MathUtils.clamp(-scrollVel * 0.04, -0.28, 0.28);
        root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, tilt, 0.08);
        scrollVel *= 0.87;

        // Head tracks cursor
        headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetHeadX * 0.55, 0.06);
        headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetHeadY * 0.35, 0.06);

        // Sword swing on click
        if (swingPhase > 0) {
          swingPhase -= 0.036;
          sword.rotation.z = 0.68 + Math.sin(swingPhase * Math.PI) * 1.5;
          sword.rotation.y = 0.18 + Math.sin(swingPhase * Math.PI * 0.7) * 0.9;
        } else {
          sword.rotation.z = THREE.MathUtils.lerp(sword.rotation.z, 0.68, 0.08);
          sword.rotation.y = THREE.MathUtils.lerp(sword.rotation.y, 0.18, 0.08);
        }

        // Cape bottom vertices wave
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cv = capeGeo.attributes.position as any;
        const wv = Math.sin(t * 1.3) * 0.042;
        cv.setZ(2, -0.22 + wv);
        cv.setZ(3, -0.22 + wv);
        cv.needsUpdate = true;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(tick);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("click",     onTap);
        window.removeEventListener("scroll",    onScroll);
        capeGeo.dispose();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        scene.traverse((obj: any) => {
          if (obj.isMesh) {
            obj.geometry?.dispose?.();
            if (Array.isArray(obj.material)) obj.material.forEach((x: any) => x.dispose?.());
            else obj.material?.dispose?.();
          }
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

  return (
    <canvas
      ref={canvasRef}
      className={`block ${className}`}
      role="img"
      aria-label="Animated 3D mouse character — click to trigger sword swing, move cursor to turn head"
    />
  );
}
