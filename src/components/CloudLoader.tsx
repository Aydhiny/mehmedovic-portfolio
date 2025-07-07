import { motion, AnimatePresence } from "framer-motion";

export default function CloudLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cloud-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-gradient-to-r from-[#e0e7ff] to-[#f3f4f6] dark:from-[#23203a] dark:to-[#18181b]"
        >
          {/* Cloud SVGs */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "100vw" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-0 top-1/3"
          >
            <svg width="220" height="80" viewBox="0 0 220 80" fill="none">
              <ellipse
                cx="60"
                cy="40"
                rx="60"
                ry="30"
                fill="#fff"
                opacity="0.8"
              />
              <ellipse
                cx="120"
                cy="40"
                rx="40"
                ry="25"
                fill="#e0e7ff"
                opacity="0.7"
              />
              <ellipse
                cx="180"
                cy="40"
                rx="30"
                ry="20"
                fill="#fff"
                opacity="0.8"
              />
            </svg>
          </motion.div>
          <motion.div
            initial={{ x: "-120vw" }}
            animate={{ x: "80vw" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-0 top-2/3"
          >
            <svg width="160" height="60" viewBox="0 0 160 60" fill="none">
              <ellipse
                cx="50"
                cy="30"
                rx="50"
                ry="20"
                fill="#fff"
                opacity="0.7"
              />
              <ellipse
                cx="110"
                cy="30"
                rx="30"
                ry="15"
                fill="#e0e7ff"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
