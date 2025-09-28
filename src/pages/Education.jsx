import React from "react";

const experiences = [
  {
    role: "BA (Bachelor of Arts)",
    company: "MLSM, Darbhanga",
    duration: "2001 - 2004",
    points: ["Percentage: 67%"],
  },
  {
    role: "12th (Intermediate)",
    company: "MKSE (BSEB, Chandana)",
    duration: "1999 - 2001",
    points: ["Percentage: 62%"],
  },
  {
    role: "10th (Matriculation)",
    company: "JM High School (Kamtaul)",
    duration: "1999",
    points: ["Percentage: 62%"],
  },
];

const Education = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <h2 className="text-4xl font-bold mb-14 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Education
      </h2>

      <div className="relative max-w-4xl mx-auto border-l-2 border-blue-500">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-12 ml-8 relative">
            <div className="absolute -left-8.5 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-900"></div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-blue-400 mb-1">{exp.role}</h3>
              <span className="inline-block bg-blue-600/80 text-xs px-3 py-1 rounded-md mb-2">
                {exp.duration}
              </span>
              <p className="italic text-gray-300 mb-3">{exp.company}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
