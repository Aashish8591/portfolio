import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import civicEarthImg from "../assets/images/civicearth.png";
import weatherImg from "../assets/images/wetherimg.png";
import eventImg from "../assets/images/eventImg.png";
import portfolioImg from "../assets/images/portfolioImg.png";
import jarvisImg from "../assets/images/jarvisImg.gif";
import feedbackimg from "../assets/images/feedbackimg.png";

const projects = [
  {
    title: "EventPulse",
    image: feedbackimg,
    description:
      "A full-stack event feedback management system that allows users to explore upcoming events, submit feedback with ratings, and view participant reviews. Built with secure REST APIs, responsive UI, and cloud deployment using Spring Boot, React, MySQL, Railway, and Render.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "MySQL",
      "JPA",
      "REST API",
      "Railway",
      "Render",
    ],
    github: "https://github.com/Aashish8591/EventPulse_frontend.git",
    demo: "https://event-pulse-frontend.vercel.app/",
  },

  {
    title: "CivicEarth",
    image: civicEarthImg,
    description:
      "CivicEarth is a full-stack web application that enables users to report environmental issues, participate in community initiatives, and promote sustainable development through technology-driven solutions.",
    tech: [
      "Java",
      "Spring Boot",
      "MongoDB",
      "REST API",
      "React.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/Aashish8591/CivicEarth",
    demo: "https://civic-earth.vercel.app/",
  },

  {
    title: "Event management Website",
    image: eventImg,
    description:
      "Developed a responsive event management platform that allows users to explore events, view event details, and manage registrations through an intuitive and user-friendly interface.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/SairajVichare/Event-P-O",
    demo: "https://eventsmanagementweb.netlify.app/",
  },

  {
    title: "Portfolio Website",
    image: portfolioImg,
    description:
      "Personal portfolio built with React, Tailwind CSS and Framer Motion featuring modern UI and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Aashish8591/portfolio",
    demo: "https://portfolio-iota-amber-93.vercel.app/",
  },

  {
    title: "Weather App",
    image: weatherImg,
    description:
      "A responsive weather application that provides real-time weather updates, temperature forecasts, humidity levels, and location-based weather information through API integration.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Aashish8591/weather-app",
    demo: "https://weather-app-done.netlify.app/",
  },

  {
    title: "JARVIS Voice AI Assistant",
    image: jarvisImg,
    description:
      "A Python-based voice AI assistant that automates desktop tasks, performs web searches, and executes system commands through voice interaction.",
    tech: ["Python", "SpeechRecognition", "pyttsx3", "OpenCV", "FastAPI"],
    github: "https://github.com/Aashish8591/Jarvis-Ai",
  },
];

export default function Projects() {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <section
      id="projects"
      className="
  min-h-screen
  px-4
  md:px-8
  py-24
  relative
  overflow-hidden
  "
    >
      {/* Glow Effect */}

      <div className="absolute top-40 right-10 w-80 h-80 bg-lime-500/10 blur-[120px] rounded-full"></div>

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-lime-400 uppercase tracking-[4px]">Projects</p>

        <h2 className="text-5xl font-bold mt-3">Some Things I've Built</h2>

        <div className="w-24 h-1 bg-lime-400 mx-auto mt-6 rounded-full"></div>
      </motion.div>

      {/* Infinite Scrolling Projects */}

      {/* Desktop Infinite Scrolling */}
      <div className="overflow-hidden hidden md:block">
        <motion.div
          className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1500, right: 0 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onDragStart={() => setPaused(true)}
          onDragEnd={() => setPaused(false)}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
        w-[380px]
        min-h-[500px]
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        overflow-hidden
        hover:border-lime-400/40
        transition-all
        duration-300
        "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
  w-full
  h-48
  object-cover
  "
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-400 mb-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                px-3
                py-1
                rounded-full
                text-sm
                bg-lime-500/10
                border
                border-lime-500/20
                "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              bg-white/10
              hover:bg-lime-500
              hover:text-black
              transition
              "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              border border-white/20
              hover:border-lime-400
              transition
              "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Cards */}
      <div
        className="
  md:hidden
  flex
  gap-5
  overflow-x-auto
  snap-x
  snap-mandatory
  pb-4
  scrollbar-hide
  "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.98 }}
            className="
      min-w-[280px]
      max-w-[280px]
      snap-center
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      overflow-hidden
      "
          >
            {/* FULL CARD CONTENT HERE */}
            <img
              src={project.image}
              alt={project.title}
              className="
  w-full
  h-40
  object-cover
  "
            />

            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
        px-2
        py-1
        rounded-full
        text-xs
        bg-lime-500/10
        border
        border-lime-500/20
        "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="
      flex items-center gap-2
      px-3 py-2
      rounded-xl
      bg-white/10
      "
                >
                  <FaGithub />
                </a>

                <a
                  href={project.demo}
                  className="
      flex items-center gap-2
      px-3 py-2
      rounded-xl
      border border-white/20
      "
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
