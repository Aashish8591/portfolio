import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-5 inset-x-0 z-50 px-2">
      <div
        className="
  max-w-7xl
  mx-auto
  px-4 md:px-8
  py-2
  flex
  justify-between
  items-center

  rounded-full

  bg-white/5
  backdrop-blur-xl

  border
  border-white/10

  shadow-[0_8px_32px_rgba(0,0,0,0.3)]
"
      >
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          <span className="text-white font-bold text-3xl">
            Aashish<span className="text-lime-400">.</span>
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <li>
            <a
              href="#home"
              className="
relative
group
text-gray-300
hover:text-white
transition
duration-300
"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="
relative
group
text-gray-300
hover:text-white
transition
duration-300
"
            >
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="
relative
group
text-gray-300
hover:text-white
transition
duration-300
"
            >
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="
relative
group
text-gray-300
hover:text-white
transition
duration-300
"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
  hidden
  md:block

  bg-lime-500
  text-black

  px-7
  py-3

  rounded-full

  font-semibold

  hover:shadow-[0_0_25px_rgba(132,204,22,0.6)]

  transition-all
  duration-300
  "
        >
          Contact Me
        </motion.a>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="
    md:hidden
    mt-4

    rounded-3xl

    bg-white/5
    backdrop-blur-2xl

    border
    border-white/10

    shadow-[0_0_30px_rgba(132,204,22,0.15)]

    overflow-hidden
    "
        >
          <ul className="p-4 space-y-3">
            {[
              { name: "Home", link: "#home" },
              { name: "Projects", link: "#projects" },
              { name: "Skills", link: "#skills" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="
            flex
            items-center
            justify-between

            px-5
            py-4

            rounded-2xl

            bg-white/5

            border
            border-white/10

            text-gray-300

            hover:text-white
            hover:bg-lime-500/10
            hover:border-lime-400/30

            transition-all
            duration-300
            "
                >
                  <span>{item.name}</span>

                  <span className="text-lime-400">→</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
