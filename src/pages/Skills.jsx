import React from "react";
import { FaMicrochip, FaCogs, FaTools, FaClipboardCheck, FaShieldAlt } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaMicrochip className="text-3xl text-purple-500" />,
      title: "Capacitor Assembly",
      description:
        "Hands-on expertise in capacitor assembly processes ensuring precision and efficiency in production.",
    },
    {
      icon: <FaCogs className="text-3xl text-green-500" />,
      title: "Testing & Quality Assurance",
      description:
        "Skilled in testing, defect analysis, and compliance with industry standards for optimal performance.",
    },
    {
      icon: <FaTools className="text-3xl text-yellow-500" />,
      title: "Equipment Handling",
      description:
        "Proficient in operating and maintaining manufacturing machines for smooth production workflow.",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-pink-500" />,
      title: "Production Operations",
      description:
        "Strong experience in managing production line operations and improving efficiency.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: "Safety & Compliance",
      description:
        "Knowledge of safety protocols and compliance with ISO and IPC standards in electronics manufacturing.",
    },
  ];

  return (
    <section className="bg-[#0f172a] py-20 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-4 relative inline-block">
          Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
          Highlighting technical skills and expertise in electronics manufacturing, 
          capacitor assembly, and production operations with strong focus on quality and efficiency.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform text-left"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
