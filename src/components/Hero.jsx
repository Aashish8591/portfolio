import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="
  min-h-screen
  text-white
  flex
  items-center
  justify-center
  relative
  overflow-hidden

  pt-32
  md:pt-0
"
    >
      {/* Glow Effects */}
      <div className="absolute w-[400px] h-[400px] bg-lime-500 opacity-20 blur-[150px] rounded-full top-20 left-20"></div>

      <div className="absolute w-[350px] h-[350px] bg-blue-500 opacity-20 blur-[150px] rounded-full bottom-20 right-20"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="text-gray-400 text-lg mb-3">Hi, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">Aashish Patil</h1>

          <div className="text-2xl md:text-4xl font-semibold text-lime-400 h-16">
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React Developer",
                2000,
                "Freelancer",
                2000,
                "Full Stack Engineer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
            Java Full Stack Developer skilled in Java, Spring Boot, React.js,
            and MongoDB. I enjoy developing responsive web applications,
            designing REST APIs, and creating user-friendly digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download="Aashish_Patil_Resume.pdf"
              className="
  bg-lime-500
  text-black
  px-6
  py-3
  rounded-full
  font-semibold
  hover:scale-105
  transition
  "
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Aashish8591"
              target="_blank"
              rel="noreferrer"
              className="
              border
              border-white
              px-6
              py-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition
              "
            >
              GitHub
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 justify-center md:justify-start text-2xl">
            <a
              href="https://github.com/Aashish8591"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aashish-patil-cs/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lime-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aashupatil2104@gmail.com"
              className="hover:text-lime-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative"
        >
          {/* Glass Background Card */}
          <div
            className="
            absolute
           w-[260px] h-[340px]
sm:w-[300px] sm:h-[400px]
md:w-80 md:h-[420px]
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            rounded-[40px]
            rotate-[12deg]
            top-4
            left-4
          "
          />

          {/* Secondary Card */}
          <div
            className="
            absolute
         w-[260px] h-[340px]
sm:w-[300px] sm:h-[400px]
md:w-80 md:h-[420px]
            bg-white/70
            rounded-[40px]
            rotate-[6deg]
            top-2
            left-2
          "
          />

          {/* Main Card */}
          <div
            className="
            relative
         w-[260px] h-[340px]
sm:w-[300px] sm:h-[400px]
md:w-80 md:h-[420px]
            rounded-[40px]
            overflow-hidden
            bg-lime-400
            rotate-[4deg]
            shadow-[0_0_50px_rgba(74,222,128,0.3)]
          "
          >
            <img
              src={profile}
              alt="Profile"
              className="
              w-full
              h-full
              object-cover
              object-top
            "
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="text-gray-400 text-sm">Scroll Down</div>

          <div className="text-lime-400 text-center text-xl">↓</div>
        </motion.div>
      )}
    </section>
  );
}
