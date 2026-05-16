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
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0.4, 1.0, 6.5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      // Lights
      const sun = new THREE.DirectionalLight(0xfbbf24, 2.2);
      sun.position.set(3, 5, 4);
      scene.add(sun);
      const rim = new THREE.PointLight(0x60a5fa, 2.8, 16);
      rim.position.set(-3, 2, 3);
      scene.add(rim);
      scene.add(new THREE.AmbientLight(0x1e3a5f, 1.4));

      const mk = (hex: number, em: number, sh = 50) =>
        new THREE.MeshPhongMaterial({ color: hex, emissive: em, shininess: sh, flatShading: true });

      // ── Airship ──────────────────────────────────────────────
      const ship = new THREE.Group();

      // Envelope (blimp oval)
      const envGeo = new THREE.SphereGeometry(0.55, 8, 6);
      envGeo.applyMatrix4(new THREE.Matrix4().makeScale(2.5, 1, 1));
      ship.add(new THREE.Mesh(envGeo, mk(0x0f172a, 0x0d2341, 40)));

      // Gold trim band around middle
      const trimGeo = new THREE.TorusGeometry(0.55, 0.032, 5, 16);
      const trimRing = new THREE.Mesh(trimGeo, mk(0xfbbf24, 0x302000, 90));
      trimRing.rotation.y = Math.PI / 2;
      ship.add(trimRing);

      // Gondola (cabin)
      const gondola = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.22, 0.42), mk(0x1e293b, 0x080e18, 60));
      gondola.position.set(0, -0.68, 0);
      ship.add(gondola);

      // Gondola top trim
      const gTrim = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.04, 0.44), mk(0xfbbf24, 0x302000, 90));
      gTrim.position.set(0, -0.57, 0);
      ship.add(gTrim);

      // Side rotors — boom + spinning blades
      const makeRotor = (sideZ: number) => {
        const boom = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.055, 0.6), mk(0x334155, 0x0d1927, 40));
        boom.position.set(0, -0.14, sideZ * 0.62);
        ship.add(boom);
        const pivot = new THREE.Group();
        pivot.position.set(0, -0.14, sideZ * 0.94);
        pivot.add(new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.5, 0.055), mk(0xf97316, 0x301200, 70)));
        pivot.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.055, 0.055), mk(0xf97316, 0x301200, 70)));
        ship.add(pivot);
        return pivot;
      };
      const lRotor = makeRotor(-1);
      const rRotor = makeRotor(1);

      // Stern rudder fin
      const rudder = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.42, 0.04), mk(0x0f172a, 0x060e1e, 40));
      rudder.position.set(-1.28, 0.20, 0);
      ship.add(rudder);

      // ── Blue Mouse hero character ────────────────────────────
      const mouse = new THREE.Group();
      const blueFur  = mk(0x1d4ed8, 0x071233, 30);
      const blueEar  = mk(0x60a5fa, 0x0d2448, 40);

      // Body
      mouse.add(new THREE.Mesh(new THREE.SphereGeometry(0.38, 6, 5), blueFur));

      // Head
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 6, 5), blueFur);
      head.position.set(0.40, 0.18, 0);
      mouse.add(head);

      // Snout
      const snout = new THREE.Mesh(new THREE.SphereGeometry(0.13, 5, 4), blueFur);
      snout.scale.x = 1.2;
      snout.position.set(0.64, 0.09, 0);
      mouse.add(snout);

      // Ears (light blue)
      const lEar = new THREE.Mesh(new THREE.SphereGeometry(0.16, 5, 4), blueEar);
      lEar.scale.z = 0.38;
      lEar.position.set(0.26, 0.50, 0.21);
      mouse.add(lEar);
      const rEar = lEar.clone();
      rEar.position.z = -0.21;
      mouse.add(rEar);

      // Eyes
      const eyeMat = new THREE.MeshPhongMaterial({ color: 0xfde68a, emissive: 0x4a3800, shininess: 120 });
      const lEye = new THREE.Mesh(new THREE.SphereGeometry(0.052, 5, 4), eyeMat);
      lEye.position.set(0.60, 0.22, 0.16);
      mouse.add(lEye);
      const rEye = lEye.clone();
      rEye.position.z = -0.16;
      mouse.add(rEye);

      // Nose tip
      const noseMat = new THREE.MeshPhongMaterial({ color: 0xff80ab, emissive: 0x2d0015, shininess: 60 });
      const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.048, 4, 4), noseMat);
      noseTip.position.set(0.74, 0.08, 0);
      mouse.add(noseTip);

      // Cape — 3-sided cone flattened to look like flowing fabric
      const capeMat = mk(0xdc2626, 0x450a0a, 30);
      const capeGeo = new THREE.ConeGeometry(0.42, 0.68, 3);
      const cape    = new THREE.Mesh(capeGeo, capeMat);
      cape.scale.z   = 0.22;
      cape.rotation.x = Math.PI;       // flip so point is at top
      cape.rotation.z = -0.15;
      cape.position.set(-0.22, 0.06, 0);
      mouse.add(cape);

      // Sword group — raised at angle
      const swordGroup = new THREE.Group();
      swordGroup.position.set(0.48, 0.0, 0.22);
      swordGroup.rotation.z = 0.65;

      // Blade (silver)
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.62, 0.038), mk(0xd1d5db, 0x2c3246, 180));
      blade.position.y = 0.32;
      swordGroup.add(blade);

      // Crossguard (gold)
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.038, 0.038), mk(0xfbbf24, 0x302000, 90));
      swordGroup.add(guard);

      // Handle
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.038, 0.18, 0.038), mk(0x292524, 0x0a0808, 40));
      handle.position.y = -0.11;
      swordGroup.add(handle);

      mouse.add(swordGroup);

      // Sit in gondola
      mouse.position.set(-0.1, 0.08, 0);
      mouse.rotation.y = -0.2;

      // ── Root ─────────────────────────────────────────────────
      const root = new THREE.Group();
      root.add(ship);
      root.add(mouse);
      root.rotation.y = 0.30;
      scene.add(root);

      // ── Scroll reaction ──────────────────────────────────────
      let scrollVel = 0, lastY = window.scrollY;
      const onScroll = () => { scrollVel = window.scrollY - lastY; lastY = window.scrollY; };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── Tick ─────────────────────────────────────────────────
      let t = 0, animId: number;

      const tick = () => {
        if (disposed) return;
        t += 0.012;

        root.position.y   = Math.sin(t * 0.75) * 0.14;
        root.rotation.z   = Math.sin(t * 0.45) * 0.04;

        const tgt = THREE.MathUtils.clamp(-scrollVel * 0.045, -0.38, 0.38);
        root.rotation.x   = THREE.MathUtils.lerp(root.rotation.x, tgt, 0.08);
        scrollVel        *= 0.87;

        lRotor.rotation.z += 0.30;
        rRotor.rotation.z -= 0.30;

        // Subtle cape flutter
        cape.rotation.z = -0.15 + Math.sin(t * 1.4) * 0.055;

        // Sword gentle bob
        swordGroup.rotation.z = 0.65 + Math.sin(t * 0.9) * 0.04;

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
