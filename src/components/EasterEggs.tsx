"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];
const SECRET_WORD = "aydhiny";

export default function EasterEggs() {
  const [konamiActive, setKonamiActive] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const seqRef  = useRef<string[]>([]);
  const wordRef = useRef("");
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(msg: string) {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast(msg);
    toastTimerRef.current = setTimeout(() => setToast(null), 3200);
  }

  // Tab-away title swap
  useEffect(() => {
    let real = document.title;
    const onViz = () => {
      if (document.hidden) {
        real = document.title;
        document.title = "👀 Come back! | Ajdin M.";
      } else {
        document.title = real;
      }
    };
    document.addEventListener("visibilitychange", onViz);
    return () => document.removeEventListener("visibilitychange", onViz);
  }, []);

  // Konami + secret word
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Konami sequence
      const next = [...seqRef.current, e.key].slice(-KONAMI.length);
      seqRef.current = next;
      if (next.join(",") === KONAMI.join(",")) {
        seqRef.current = [];
        wordRef.current = "";
        setKonamiActive(true);
        setTimeout(() => setKonamiActive(false), 4500);
        return;
      }

      // Secret word — only accumulate printable single chars
      if (e.key.length === 1) {
        const w = (wordRef.current + e.key.toLowerCase()).slice(-SECRET_WORD.length);
        wordRef.current = w;
        if (w === SECRET_WORD) {
          wordRef.current = "";
          showToast("hey, that's me 👋");
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Konami overlay ─────────────────────────────── */}
      <AnimatePresence>
        {konamiActive && (
          <motion.div
            key="konami"
            className="fixed inset-0 z-[9998] pointer-events-none flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* Neon border flash */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.4, 0.8, 0, 0.5, 0] }}
              transition={{ duration: 1.2, times: [0, 0.06, 0.12, 0.2, 0.35, 0.5, 1] }}
              style={{
                boxShadow: "inset 0 0 80px #e91e8c, inset 0 0 160px #f97316",
                border: "1px solid rgba(233,30,140,0.4)",
              }}
            />

            {/* Content */}
            <motion.div
              className="relative text-center px-8"
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
            >
              <p
                className="font-michroma uppercase tracking-[0.45em] text-[var(--accent)] mb-3"
                style={{ fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)" }}
              >
                Cheat Code
              </p>
              <p
                className="font-garamond italic g-text leading-none"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7.5rem)" }}
              >
                Activated.
              </p>
              <p className="font-michroma text-[var(--fg-3)] tracking-[0.3em] mt-5 text-[0.6rem] uppercase">
                ↑ ↑ ↓ ↓ ← → ← → B A
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toast ──────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9997] px-5 py-3 rounded-2xl border border-[var(--accent)]/35 backdrop-blur-md"
            style={{ background: "rgba(7,7,14,0.92)" }}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <p className="font-michroma text-sm text-[var(--accent)] uppercase tracking-wider whitespace-nowrap">
              {toast}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
