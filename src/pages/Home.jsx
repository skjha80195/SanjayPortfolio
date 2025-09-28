import { MoveRight, UserPen } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Capacitor Assembler",
  "Production Technician",
  "Capacitor Manufacturing",
  "Maintenance & Testing Technician",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, subIndex));

      if (forward) {
        if (subIndex < roles[index].length) {
          setSubIndex(subIndex + 1);
        } else {
          setForward(false);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex(subIndex - 1);
        } else {
          setForward(true);
          setIndex((index + 1) % roles.length);
        }
      }
    }, forward ? 180 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl opacity-40 animate-pulse"></div>

      <div className="flex-1 relative z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Sanjay Jha
          </span>
        </h1>

        <p
          className={`text-lg md:text-2xl mt-6 font-semibold text-gray-200 transition-opacity duration-500`}
        >
          {text}
          <span className="ml-1 text-blue-400">{blink ? "|" : " "}</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#experience"
            className="flex gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:scale-105 transition-all shadow-lg"
          >
            View My Work <MoveRight />
          </a>
          <a
            href="#contact"
            className="flex gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            <UserPen /> Contact Me
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mb-10 md:mb-0 relative z-10">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <img
            src="./profile-pic.png"
            alt="profile"
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-slate-800 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
