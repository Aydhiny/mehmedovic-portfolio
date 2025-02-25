"use client";
import React, { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";

interface Question {
  text: string;
  answer: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );

  const questions: Question[] = [
    {
      text: "What is your email?",
      answer: "You can reach me at ajdin.mehmedovic@edu.fit.ba",
    },
    {
      text: "When did you start your music production journey?",
      answer: "I started my music production journey 6 years ago.",
    },
    {
      text: "What programming languages do you know?",
      answer:
        "I am quite proficient in JavaScript and C++ mostly, although I understand the basics of SQL.",
    },
    {
      text: "Where are you located?",
      answer: "I am based in Kakanj, Bosnia and Herzegovina.",
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 bottom-2 right-4 bg-main-app-purple text-main-background-grey w-12 h-12 rounded-full shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110"
        style={{
          backgroundColor: "#9000FF",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <TbMessageChatbotFilled className="size-6 z-50" />
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div
          className="fixed bottom-16 z-50 right-4 bg-main-background-grey shadow-lg rounded-lg p-4 w-80"
          style={{
            backgroundColor: "#242424",
            color: "#01FEE1",
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div className="flex justify-between items-center border-b pb-2 border-main-app-teal">
            <h3 className="text-lg font-bold text-main-app-teal">Ask Me</h3>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedQuestion(null);
              }}
              className="text-main-app-teal font-bold text-xl"
              style={{ color: "#01FEE1" }}
            >
              x
            </button>
          </div>
          <div className="mt-4">
            {!selectedQuestion ? (
              // Questions List
              questions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuestion(q)}
                  className="block w-full text-left bg-main-background-grey p-2 rounded-lg mb-2 transition-all hover:bg-main-app-teal hover:text-main-background-grey"
                  style={{
                    border: "1px solid #01FEE1",
                  }}
                >
                  {q.text}
                </button>
              ))
            ) : (
              // Display Answer
              <div>
                <p className="text-main-app-teal mb-4">
                  {selectedQuestion.answer}
                </p>
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="bg-main-app-purple text-white py-2 px-4 rounded-lg transition-all hover:opacity-90"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
