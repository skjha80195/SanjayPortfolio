const experiences = [
  {
    role: "Production Supervisor and Maintainer",
    company: "Tibrewala Electronics Ltd.",
    duration: "2021 - Present",
    points: [
      "Supervised daily production operations ensuring compliance with safety, quality, and efficiency standards.",
      "Led a team of 7 technicians and developers, delegating tasks and providing training to enhance productivity.",
      "Oversaw maintenance, troubleshooting, and repair of machinery, equipment, and production lines to minimize downtime.",
      "Maintained accurate documentation of maintenance activities, production reports, and compliance records.",
    ],
  },
  {
    role: "Metalizing Operator and Maintenance",
    company: "Tibrewala Electronics Ltd.",
    duration: "2009 - 2021",
    points: [
      "Operated and maintained metalizing machinery to ensure consistent coating quality and adherence to production standards.",
      "Performed preventive and corrective maintenance on equipment, reducing downtime and improving machine reliability.",
      "Monitored production processes, conducted inspections, and ensured safety, quality, and efficiency in daily operations.",
    ],
  },
  {
    role: "Mechanical and Electrical Appliance Maintenance",
    company: "Tibrewala Electronics Ltd.",
    duration: "2005 - 2009",
    points: [
      "Assisted in operating and maintaining mechanical & electrical equipment.",
      "Performed preventive checks and supported senior technicians in troubleshooting.",
      "Followed safety protocols and ensured efficiency in daily plant operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div className="relative border-l-4 border-blue-500 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="mb-12 ml-8 relative group transition-all"
          >
            <div className="absolute -left-[34px] top-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-900 group-hover:scale-110 transition-transform" />

            <div className="bg-slate-800/70 p-6 rounded-xl shadow-lg border border-slate-700 group-hover:border-blue-500 transition">
              <h3 className="text-2xl font-semibold text-white">
                {exp.role}
              </h3>
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-sm px-3 py-1 rounded-full mt-2 mb-3 shadow-md">
                {exp.duration}
              </span>

              <p className="italic text-gray-300 mb-4">{exp.company}</p>

              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {exp.points.map((p, j) => (
                  <li key={j} className="leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
