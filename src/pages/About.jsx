import { ArrowDownToLine } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 md:px-20 py-20"
    >
      <div className="max-w-3xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 relative inline-block">
          About
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg">
          Passionate about crafting high-quality electronic components with
          precision, testing, and industry-standard compliance.
        </p>
      </div>

      <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="flex-1 text-center md:text-left">
          <h4 className="uppercase text-sm tracking-widest text-blue-400 mb-3">
            Hello There
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
            Hi, I'm{" "}
            <span className="text-purple-400">Sanjay</span> – a{" "}
            <span className="text-pink-400">
              Electronics Manufacturing Professional
            </span>{" "}
            crafting high-quality components
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Dedicated and detail-oriented{" "}
            <span className="font-semibold text-purple-400">
              Electronics Manufacturing Professional
            </span>{" "}
            with hands-on experience in{" "}
            <span className="font-semibold text-blue-400">
              capacitor assembly and production operations
            </span>
            , at Tibcon. Skilled in assembling, testing, and maintaining
            electronic components with a strong focus on{" "}
            <span className="font-semibold text-pink-400">
              quality assurance and compliance with industry standards.
            </span>{" "}
            Proficient in handling capacitor assembly processes, inspecting
            defects, and ensuring optimal performance of components through
            rigorous testing. Adept at supporting production efficiency,
            equipment maintenance, and safety protocols while contributing to
            high-quality manufacturing output.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-medium rounded-lg shadow-lg transition"
            >
              View My Work →
            </a>
            <a
              href="./profile-pic.png"
              download="Sanjay_Resume.pdf"
              className="flex gap-1 px-6 py-3 border border-gray-500 text-gray-200 hover:bg-gray-800/50 font-medium rounded-lg shadow-md transition backdrop-blur-md"
            >
              Download Resume <ArrowDownToLine />
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <img
              src="./profile-pic.png"
              alt="Profile"
              className="relative rounded-2xl shadow-lg w-72 h-72 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
