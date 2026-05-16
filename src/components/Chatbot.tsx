"use client";
import React, { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  text: string;
  answer: string;
}

const questions: Question[] = [
  {
    text: "What is your email?",
    answer: "You can reach me at ajdin.mehmedovic@edu.fit.ba",
  },
  {
    text: "When did you start music production?",
    answer: "I started producing beats 6 years ago, in 2018.",
  },
  {
    text: "What programming languages do you know?",
    answer: "Primarily C#, TypeScript, and JavaScript. I also work with SQL and C++.",
  },
  {
    text: "Where are you located?",
    answer: "Based in Kakanj, Bosnia and Herzegovina.",
  },
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Question | null>(null);

  const close = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-50 bottom-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.45)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaTimes className="size-4" aria-hidden />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <TbMessageChatbotFilled className="size-5" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-5 z-50 w-80 glass rounded-2xl border border-[var(--border-2)] overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.55), 0 0 60px rgba(124,58,237,0.12)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-white font-semibold text-sm">Ask Me</span>
              </div>
              <button
                onClick={close}
                className="glass-btn p-1.5 rounded-lg text-[var(--fg-3)] hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="size-3" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <AnimatePresence mode="wait" initial={false}>
                {!selected ? (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.18 }}
                    className="flex flex-col gap-2"
                  >
                    <p className="text-[var(--fg-3)] text-xs mb-1">Select a question</p>
                    {questions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => setSelected(q)}
                        className="glass-btn w-full text-left px-4 py-3 rounded-xl text-[var(--fg-2)] text-sm hover:text-white transition-colors duration-150"
                      >
                        {q.text}
                      </button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="text-[var(--fg-3)] text-xs mb-3">{selected.text}</p>
                    <p className="text-white text-sm leading-relaxed mb-5">{selected.answer}</p>
                    <button
                      onClick={() => setSelected(null)}
                      className="glass-btn px-4 py-2 rounded-xl text-[var(--fg-2)] hover:text-white text-sm font-medium transition-colors duration-150"
                    >
                      ← Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
