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

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(0.4, 1.2, 6.5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // ── Lights ──────────────────────────────────────────────
      const sun = new THREE.DirectionalLight(0xfbbf24, 2.2);
      sun.position.set(3, 5, 4);
      scene.add(sun);

      const rim = new THREE.PointLight(0xe91e8c, 2.0, 14);
      rim.position.set(-3, -1, 3);
      scene.add(rim);

      const fill = new THREE.AmbientLight(0xf97316, 0.45);
      scene.add(fill);

      // ── Materials ───────────────────────────────────────────
      const mkMat = (hex: number, emHex: number, shininess = 50) =>
        new THREE.MeshPhongMaterial({ color: hex, emissive: emHex, shininess, flatShading: true });

      const fusMat   = mkMat(0xe91e8c, 0x3d0025, 70);
      const wingMat  = mkMat(0xf97316, 0x301200, 50);
      const accMat   = mkMat(0xfbbf24, 0x302000, 90);
      const furMat   = mkMat(0x2d1b35, 0x100b18, 20);
      const earMat   = mkMat(0xff6b9d, 0x3d0020, 40);
      const eyeMat   = new THREE.MeshPhongMaterial({ color: 0xfde68a, emissive: 0x4a3800, shininess: 120 });
      const noseMat  = new THREE.MeshPhongMaterial({ color: 0xff80ab, emissive: 0x2d0015, shininess: 60 });

      // ── Airplane ────────────────────────────────────────────
      const plane = new THREE.Group();

      // Fuselage — elongated sphere
      const fuseGeo = new THREE.SphereGeometry(0.48, 9, 6);
      fuseGeo.applyMatrix4(new THREE.Matrix4().makeScale(2.8, 1, 1));
      plane.add(new THREE.Mesh(fuseGeo, fusMat));

      // Nose cone
      const noseGeo = new THREE.ConeGeometry(0.32, 0.7, 7);
      const noseCone = new THREE.Mesh(noseGeo, fusMat);
      noseCone.position.set(1.55, 0, 0);
      noseCone.rotation.z = -Math.PI / 2;
      plane.add(noseCone);

      // Main wings
      const wingGeo = new THREE.BoxGeometry(1.1, 0.06, 2.8);
      const wing = new THREE.Mesh(wingGeo, wingMat);
      wing.position.set(-0.1, -0.15, 0);
      plane.add(wing);

      // Tail horizontal
      const tailGeo = new THREE.BoxGeometry(0.65, 0.05, 1.0);
      const tail = new THREE.Mesh(tailGeo, wingMat);
      tail.position.set(-1.2, 0, 0);
      plane.add(tail);

      // Tail fin
      const finGeo = new THREE.BoxGeometry(0.55, 0.55, 0.06);
      const fin = new THREE.Mesh(finGeo, fusMat);
      fin.position.set(-1.1, 0.28, 0);
      plane.add(fin);

      // Engine pod under wing
      const podGeo = new THREE.CylinderGeometry(0.16, 0.14, 0.65, 7);
      const pod = new THREE.Mesh(podGeo, accMat);
      pod.rotation.z = Math.PI / 2;
      pod.position.set(-0.1, -0.35, 0.8);
      plane.add(pod);

      // Propeller pivot
      const propPivot = new THREE.Group();
      propPivot.position.set(1.92, 0, 0);
      const propGeo = new THREE.BoxGeometry(0.07, 1.6, 0.14);
      const propBlade = new THREE.Mesh(propGeo, accMat);
      propPivot.add(propBlade);
      const propGeo2 = new THREE.BoxGeometry(1.6, 0.07, 0.14);
      const propBlade2 = new THREE.Mesh(propGeo2, accMat);
      propPivot.add(propBlade2);
      plane.add(propPivot);

      // ── Mouse character ──────────────────────────────────────
      const mouse = new THREE.Group();

      // Body
      const bodyGeo = new THREE.SphereGeometry(0.4, 6, 5);
      mouse.add(new THREE.Mesh(bodyGeo, furMat));

      // Head
      const headGeo = new THREE.SphereGeometry(0.3, 6, 5);
      const head = new THREE.Mesh(headGeo, furMat);
      head.position.set(0.42, 0.2, 0);
      mouse.add(head);

      // Snout
      const snoutGeo = new THREE.SphereGeometry(0.14, 5, 4);
      const snout = new THREE.Mesh(snoutGeo, furMat);
      snout.position.set(0.7, 0.1, 0);
      snout.scale.x = 1.2;
      mouse.add(snout);

      // Ears
      const earGeo = new THREE.SphereGeometry(0.17, 5, 4);
      const lEar = new THREE.Mesh(earGeo, earMat);
      lEar.scale.z = 0.38;
      lEar.position.set(0.28, 0.52, 0.22);
      mouse.add(lEar);
      const rEar = lEar.clone();
      rEar.position.z = -0.22;
      mouse.add(rEar);

      // Eyes
      const eyeGeo = new THREE.SphereGeometry(0.055, 5, 4);
      const lEye = new THREE.Mesh(eyeGeo, eyeMat);
      lEye.position.set(0.64, 0.24, 0.17);
      mouse.add(lEye);
      const rEye = lEye.clone();
      rEye.position.z = -0.17;
      mouse.add(rEye);

      // Nose tip
      const noseTip = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 4), noseMat);
      noseTip.position.set(0.78, 0.09, 0);
      mouse.add(noseTip);

      // Tail — bezier tube
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.38, -0.1, 0),
        new THREE.Vector3(-0.6, -0.22, 0.15),
        new THREE.Vector3(-0.7, -0.08, 0.3),
        new THREE.Vector3(-0.55, 0.12, 0.38),
      ]);
      const tailTubeGeo = new THREE.TubeGeometry(curve, 8, 0.028, 5, false);
      mouse.add(new THREE.Mesh(tailTubeGeo, furMat));

      // Sit on top of fuselage
      mouse.position.set(-0.25, 0.5, 0);
      mouse.rotation.y = -0.25;

      // ── Root group ───────────────────────────────────────────
      const root = new THREE.Group();
      root.add(plane);
      root.add(mouse);
      root.rotation.y = 0.35;
      scene.add(root);

      // ── Scroll reaction ──────────────────────────────────────
      let scrollVel  = 0;
      let lastY      = window.scrollY;
      const onScroll = () => {
        scrollVel = window.scrollY - lastY;
        lastY     = window.scrollY;
      };
      window.addEventListener("scroll", onScroll, { passive: true });

      // ── Animation loop ───────────────────────────────────────
      let t = 0, animId: number;

      const tick = () => {
        if (disposed) return;
        t += 0.012;

        // Float
        root.position.y = Math.sin(t * 0.75) * 0.14;

        // Gentle roll
        root.rotation.z = Math.sin(t * 0.45) * 0.045;

        // Scroll tilt
        const tgt = THREE.MathUtils.clamp(-scrollVel * 0.045, -0.38, 0.38);
        root.rotation.x = THREE.MathUtils.lerp(root.rotation.x, tgt, 0.08);
        scrollVel *= 0.87;

        // Propeller
        propPivot.rotation.x += 0.28;

        // Camera breathe
        camera.position.y = 1.2 + Math.sin(t * 0.3) * 0.04;

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
