"use client";
import { useEffect, useRef } from "react";

export default function PianoThree({ className = "" }: { className?: string }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || window.innerWidth < 768) return;

    let disposed = false;

    import("three").then((THREE) => {
      if (disposed) return;

      const w = canvas.clientWidth  || 520;
      const h = canvas.clientHeight || 280;

      const scene    = new THREE.Scene();
      const camera   = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
      camera.position.set(0, 5.8, 9.5);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Lights
      const sun = new THREE.DirectionalLight(0xfbbf24, 2.2);
      sun.position.set(4, 10, 6);
      scene.add(sun);
      const rim = new THREE.PointLight(0xe91e8c, 3.0, 22);
      rim.position.set(-5, 3, 5);
      scene.add(rim);
      const back = new THREE.PointLight(0xf97316, 1.8, 18);
      back.position.set(5, -2, -4);
      scene.add(back);
      scene.add(new THREE.AmbientLight(0x2d1030, 1.2));

      // Key dimensions
      const WW = 0.38, WH = 0.20, WD = 1.8;
      const BW = 0.22, BH = 0.30, BD = 1.1;
      const GAP = 0.025;

      const baseMat   = new THREE.MeshPhongMaterial({ color: 0xfff3e0, emissive: 0x120005, shininess: 100 });
      const baseBkMat = new THREE.MeshPhongMaterial({ color: 0x180820, emissive: 0x060010, shininess: 150 });

      const pianoGroup = new THREE.Group();
      scene.add(pianoGroup);
      pianoGroup.rotation.x = -0.08;

      const totalW = 14 * (WW + GAP) - GAP;
      const startX = -totalW / 2;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const whiteKeys: any[] = [];
      for (let i = 0; i < 14; i++) {
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(WW, WH, WD), baseMat.clone());
        mesh.position.set(startX + i * (WW + GAP) + WW / 2, 0, 0);
        pianoGroup.add(mesh);
        whiteKeys.push(mesh);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blackKeys: any[] = [];
      const bkOffsets = [0, 1, 3, 4, 5];
      for (let oct = 0; oct < 2; oct++) {
        for (const off of bkOffsets) {
          const wi   = oct * 7 + off;
          const x1   = startX + wi       * (WW + GAP) + WW / 2;
          const x2   = startX + (wi + 1) * (WW + GAP) + WW / 2;
          const mesh = new THREE.Mesh(new THREE.BoxGeometry(BW, BH, BD), baseBkMat.clone());
          mesh.position.set((x1 + x2) / 2, (BH + WH) / 2, -(WD - BD) / 2 - 0.02);
          pianoGroup.add(mesh);
          blackKeys.push(mesh);
        }
      }

      // Piano case
      const caseBody = new THREE.Mesh(
        new THREE.BoxGeometry(totalW + 0.4, 0.18, WD + 0.3),
        new THREE.MeshPhongMaterial({ color: 0x0a0412, emissive: 0x05020a, shininess: 180 }),
      );
      caseBody.position.set(0, -(WH / 2 + 0.09), 0.15);
      pianoGroup.add(caseBody);

      // Accent strip
      const strip = new THREE.Mesh(
        new THREE.BoxGeometry(totalW + 0.36, 0.04, 0.3),
        new THREE.MeshPhongMaterial({ color: 0xe91e8c, emissive: 0x4d0030, shininess: 200 }),
      );
      strip.position.set(0, WH / 2 + 0.02, -(WD / 2 + 0.15));
      pianoGroup.add(strip);

      const allKeys = [...whiteKeys, ...blackKeys];
      const phases  = new Float32Array(allKeys.length);
      const dirs    = new Int8Array(allKeys.length);

      const accentColors = [0xe91e8c, 0xf97316, 0xfbbf24, 0xa855f7];
      let t = 0, animId: number;

      const tick = () => {
        if (disposed) return;
        t++;

        if (t % 68 === 0 || t % 83 === 0) {
          const idx = Math.floor(Math.random() * allKeys.length);
          if (dirs[idx] === 0) {
            dirs[idx] = 1;
            const accent = accentColors[Math.floor(Math.random() * accentColors.length)];
            allKeys[idx].material.color.setHex(accent);
            allKeys[idx].material.emissive.setHex(accent >> 1 & 0x7f7f7f);
          }
        }

        for (let i = 0; i < allKeys.length; i++) {
          if (dirs[i] === 1) {
            phases[i] = Math.min(phases[i] + 0.055, 1);
            allKeys[i].rotation.x = phases[i] * 0.14;
            if (phases[i] >= 1) dirs[i] = -1;
          } else if (dirs[i] === -1) {
            phases[i] = Math.max(phases[i] - 0.035, 0);
            allKeys[i].rotation.x = phases[i] * 0.14;
            if (phases[i] <= 0) {
              dirs[i] = 0;
              const isBlack = i >= whiteKeys.length;
              allKeys[i].material.color.setHex(isBlack ? 0x180820 : 0xfff3e0);
              allKeys[i].material.emissive.setHex(isBlack ? 0x060010 : 0x120005);
            }
          }
        }

        pianoGroup.position.y = Math.sin(t * 0.009) * 0.12;
        pianoGroup.rotation.y = Math.sin(t * 0.006) * 0.10;

        renderer.render(scene, camera);
        animId = requestAnimationFrame(tick);
      };
      animId = requestAnimationFrame(tick);

      cleanupRef.current = () => {
        cancelAnimationFrame(animId);
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
