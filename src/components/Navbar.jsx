import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-violet-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">

        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SanjayJha
        </h1>


        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.id} className="relative group">
              <a
                href={`#${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`pb-1 font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
      
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[6px] focus:outline-none"
        >
          <span className="w-7 h-[3px] bg-white rounded"></span>
          <span className="w-7 h-[3px] bg-white rounded"></span>
          <span className="w-7 h-[3px] bg-white rounded"></span>
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-800/95 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                onClick={() => handleClick(link.id)}
                className={`pb-1 block font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-blue-400"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${
                    active === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
