import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-20 px-4 md:px-8">
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-96 bg-lime-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Card */}

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-5 md:p-10
          "
        >
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}

            <div>
              <h2 className="text-4xl font-bold">
                Aashish
                <span className="text-lime-400">.</span>
              </h2>

              <p className="text-gray-400 mt-4 leading-7">
                Java Full Stack Developer passionate about building scalable web
                applications and modern digital experiences.
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/Aashish8591"
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-lime-500
                  hover:text-black
                  hover:-translate-y-1
                  transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/aashish-patil-cs/"
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-lime-500
                  hover:text-black
                  hover:-translate-y-1
                  transition
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:aashupatil2104@gmail.com"
                  className="
                  w-12
                  h-12
                  rounded-xl
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-lime-500
                  hover:text-black
                  hover:-translate-y-1
                  transition
                  "
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Quick Links */}

            <div>
              <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

              <div className="flex flex-col gap-3 text-gray-400">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            {/* Status */}

            <div>
              <h3 className="text-xl font-semibold mb-5">Status</h3>

              <div
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-lime-500/10
                border
                border-lime-500/20
                "
              >
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                Available For Opportunities
              </div>

              <p className="text-gray-400 mt-4">
                Open to Full Stack Developer roles, internships and freelance
                projects.
              </p>
            </div>
          </div>

          {/* Bottom */}

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2026 Aashish Patil. All rights reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
              mt-4 md:mt-0

              w-12
              h-12

              rounded-full

              bg-lime-500

              text-black

              flex
              items-center
              justify-center

              hover:scale-110

              transition
              "
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
