"use client";
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaUser, FaRegEnvelope, FaRegComment } from "react-icons/fa";
import { SiBeatstars } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      setStatus("An error occurred.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="mx-12 xl:mx-52 my-20 flex flex-col cursor-default text-center xl:text-start"
    >
      <h1 className="xl:text-6xl text-4xl font-bold text-white mb-6">Ajdin Mehmedović</h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        Passionate Software Engineering Student | Music Producer (Aydhiny) | Graphic & UI Designer
      </p>
      <p className="text-lg text-gray-300 mb-6">
        I&apos;m currently pursuing my studies at the{" "}
        <span className="font-bold text-main-app-teal">
          Faculty of Information Technologies in Mostar
        </span>, with a primary focus on Software Engineering. With over 6 years of experience in music production, I go by the name{" "}
        <span className="font-bold text-main-app-teal">Aydhiny</span>. My unique blend of creativity in music flows into my software development and design work.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        I also specialize in Graphic & UI design and contribute to{" "}
        <span className="font-bold text-main-app-teal">Plansio</span>, where I create engaging social media content and user-friendly applications.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        I&apos;m always looking to collaborate on innovative projects. Feel free to reach out via LinkedIn or explore my work through the links below.
      </p>

      <p className="text-2xl py-4 text-gray-200 mb-6">Explore my work:</p>

      <div className="flex justify-center space-x-6 mb-8">
        <Link
          className="p-4 border-2 hover:border-main-app-teal hover:text-main-app-teal transition-all duration-200 border-gray-400 rounded-full"
          href="https://github.com/Aydhiny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl text-white" />
        </Link>
        <Link
          className="p-4 border-2 hover:border-main-app-teal hover:text-main-app-teal transition-all duration-200 border-gray-400 rounded-full"
          href="https://www.beatstars.com/aydhiny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBeatstars className="text-3xl text-white" />
        </Link>
        <Link
          className="p-4 border-2 hover:border-main-app-teal hover:text-main-app-teal transition-all duration-200 border-gray-400 rounded-full"
          href="https://www.instagram.com/plansio_central"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl text-white" />
        </Link>
        <Link
          className="p-4 border-2 hover:border-main-app-teal hover:text-main-app-teal transition-all duration-200 border-gray-400 rounded-full"
          href="https://www.linkedin.com/in/ajdin-mehmedovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-white" />
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl text-white mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg border-2 border-gray-600">
            <FaUser className="text-xl mr-4" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent text-white focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center bg-gray-800 text-white p-4 rounded-lg border-2 border-gray-600">
            <FaRegEnvelope className="text-xl mr-4" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-transparent text-white focus:outline-none"
              required
            />
          </div>
          <div className="flex items-start bg-gray-800 text-white p-4 rounded-lg border-2 border-gray-600">
            <FaRegComment className="text-xl mr-4" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent text-white focus:outline-none h-32 resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="flex w-fit items-center px-6 py-3 bg-main-app-teal text-zinc-700 rounded-lg text-xl font-bold hover:bg-main-app-purple transition-all duration-150"
          >
            <FaEnvelope className="mr-2" />
            Send Message
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-lg ${status === "Message sent successfully!" ? "text-green-500" : "text-red-500"}`}
          >
            {status}
          </p>
        )}
      </div>
    </motion.div>
  );
}
