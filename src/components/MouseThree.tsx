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

      const w = canvas.clientWidth  || 380;
      const h = canvas.clientHeight || 320;

      const scene  = new THREE.Scene();
      // Camera looks slightly down at chest/head height
      const camera = new THREE.PerspectiveCamera(44, w / h, 0.1, 100);
      camera.position.set(0, 1.4, 5.2);
      camera.lookAt(0, 0.6, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      // ── Lights ──────────────────────────────────────────────
      const key = new THREE.DirectionalLight(0xfbbf24, 2.6);
      key.position.set(2, 5, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x93c5fd, 1.4);
      fill.position.set(-3, 1, 2);
      scene.add(fill);
      const back = new THREE.PointLight(0xe91e8c, 2.2, 14);
      back.position.set(0, -1, -4);
      scene.add(back);
      scene.add(new THREE.AmbientLight(0x1e3a5f, 2.0));

      // ── Materials ──────────────────────────────────────────
      const blueFur   = new THREE.MeshPhongMaterial({ color: 0x1d4ed8, emissive: 0x071233, shininess: 50 });
      const lightBlue = new THREE.MeshPhongMaterial({ color: 0x93c5fd, emissive: 0x0d2448, shininess: 70 });
      const eyeM      = new THREE.MeshPhongMaterial({ color: 0x0f0f12, emissive: 0x000000, shininess: 200 });
      const eyeShine  = new THREE.MeshPhongMaterial({ color: 0xfde68a, emissive: 0x4a3800, shininess: 200 });
      const noseM     = new THREE.MeshPhongMaterial({ color: 0xff80ab, emissive: 0x2d0015, shininess: 80 });
      const capeM     = new THREE.MeshPhongMaterial({ color: 0xdc2626, emissive: 0x450a0a, shininess: 35, side: THREE.DoubleSide });
      const silverM   = new THREE.MeshPhongMaterial({ color: 0xe2e8f0, emissive: 0x1e2a3a, shininess: 220 });
      const goldM     = new THREE.MeshPhongMaterial({ color: 0xfbbf24, emissive: 0x302000, shininess: 100 });
      const darkM     = new THREE.MeshPhongMaterial({ color: 0x1c1917, emissive: 0x080605, shininess: 40 });

      // ── Mouse character — faces +Z (toward camera) ──────────
      const mouse = new THREE.Group();

      // Body
      const body = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 10), blueFur);
      body.scale.y = 0.88;
      mouse.add(body);

      // Head — clearly above and slightly forward from body
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.30, 12, 12), blueFur);
      head.position.set(0, 0.50, 0.06);
      mouse.add(head);

      // ── Ears: flat discs (CylinderGeometry, rotation.x = π/2 → face camera) ──
      const earGeo = new THREE.CylinderGeometry(0.20, 0.20, 0.04, 16);
      const lEar = new THREE.Mesh(earGeo, lightBlue);
      lEar.rotation.x = Math.PI / 2; // flat face toward camera
      lEar.position.set(-0.22, 0.76, 0.04);
      mouse.add(lEar);
      const rEar = new THREE.Mesh(earGeo, lightBlue);
      rEar.rotation.x = Math.PI / 2;
      rEar.position.set(0.22, 0.76, 0.04);
      mouse.add(rEar);

      // Snout — forward bump from head
      const snout = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), blueFur);
      snout.scale.set(1.0, 0.82, 1.25);
      snout.position.set(0, 0.42, 0.30);
      mouse.add(snout);

      // Eyes (dark iris + gold highlight)
      const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 10), eyeM);
      lEye.position.set(-0.13, 0.53, 0.27);
      mouse.add(lEye);
      const rEye = lEye.clone();
      rEye.position.x = 0.13;
      mouse.add(rEye);
      // Eye shine
      const lShine = new THREE.Mesh(new THREE.SphereGeometry(0.028, 6, 6), eyeShine);
      lShine.position.set(-0.10, 0.56, 0.33);
      mouse.add(lShine);
      const rShine = lShine.clone();
      rShine.position.x = 0.10;
      mouse.add(rShine);

      // Nose
      const nose = new THREE.Mesh(new THREE.SphereGeometry(0.046, 8, 8), noseM);
      nose.position.set(0, 0.41, 0.40);
      mouse.add(nose);

      // ── Cape — trapezoidal BufferGeometry, hangs behind ─────
      const capeGeo = new THREE.BufferGeometry();
      const capeVerts = new Float32Array([
        -0.28,  0.38,  0.00,   // top-left  (at shoulders)
         0.28,  0.38,  0.00,   // top-right
        -0.44, -0.24, -0.28,   // bottom-left (wider, further back)
         0.44, -0.24, -0.28,   // bottom-right
      ]);
      capeGeo.setAttribute("position", new THREE.BufferAttribute(capeVerts, 3));
      capeGeo.setIndex([0, 2, 1,  1, 2, 3]);
      capeGeo.computeVertexNormals();
      const cape = new THREE.Mesh(capeGeo, capeM);
      mouse.add(cape);

      // ── Sword — left hand, raised diagonally ─────────────
      const sword = new THREE.Group();
      sword.position.set(-0.42, 0.15, 0.18);
      sword.rotation.z =  0.70;
      sword.rotation.y =  0.20;

      const blade  = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.72, 0.045), silverM);
      blade.position.y = 0.38;
      sword.add(blade);

      const guard  = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.045, 0.055), goldM);
      sword.add(guard);

      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.22, 0.045), darkM);
      handle.position.y = -0.13;
      sword.add(handle);

      mouse.add(sword);

      // ── Tail — curves behind ──────────────────────────────
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.05, -0.26, 0),
        new THREE.Vector3(0.15, -0.38, -0.25),
        new THREE.Vector3(0.08, -0.28, -0.48),
        new THREE.Vector3(-0.08, -0.18, -0.52),
      ]);
      const tailGeo = new THREE.TubeGeometry(curve, 8, 0.026, 5, false);
      mouse.add(new THREE.Mesh(tailGeo, blueFur));

      // ── Root group — slight Y rotation for heroic 3/4 angle
      const root = new THREE.Group();
      root.add(mouse);
      root.rotation.y = 0.32;
      scene.add(root);

      // ── Scroll reaction ──────────────────────────────────────
      let scrollVel = 0, lastY = window.scrollY;
      const onScroll = () => { scrollVel = window.scrollY - lastY; lastY = window.scrollY; };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── Animation loop ───────────────────────────────────────
      let t = 0, animId: number;

      const tick = () => {
        if (disposed) return;
        t += 0.012;

        root.position.y = Math.sin(t * 0.75) * 0.12;
        root.rotation.z = Math.sin(t * 0.45) * 0.033;

        const tgt = THREE.MathUtils.clamp(-scrollVel * 0.04, -0.32, 0.32);
        root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, tgt, 0.08);
        scrollVel *= 0.87;

        // Cape bottom vertices wave
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cv = capeGeo.attributes.position as any;
        const w2 = Math.sin(t * 1.4) * 0.045;
        cv.setZ(2, -0.28 + w2);
        cv.setZ(3, -0.28 + w2);
        cv.needsUpdate = true;

        // Sword gentle raise
        sword.rotation.z = 0.70 + Math.sin(t * 0.85) * 0.038;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(tick);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("scroll", onScroll);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        scene.traverse((obj: any) => {
          if (obj.isMesh) {
            obj.geometry?.dispose?.();
            if (Array.isArray(obj.material)) obj.material.forEach((x: any) => x.dispose?.());
            else obj.material?.dispose?.();
          }
        });
        capeGeo.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return <canvas ref={canvasRef} className={`block ${className}`} />;
}
