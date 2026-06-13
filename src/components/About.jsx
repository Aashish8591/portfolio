import { motion } from "framer-motion";
import profile from "../assets/images/about.jpeg";

export default function About() {
  return (
    <section id="about" className="min-h-screen px-4 md:px-8 py-32 relative">
      {/* Section Title */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-18"
      >
        <p className="text-lime-400 uppercase tracking-widest">About Me</p>

        <h2 className="text-5xl font-bold mt-2">My Journey as a Developer</h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[420px_1fr] gap-15 items-center">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute w-80 h-80 bg-lime-500/20 blur-[120px] rounded-full"></div>

          <img
            src={profile}
            alt="About"
            className="
  relative
w-full
max-w-[380px]
h-auto
  object-cover
  rounded-3xl
  border
  border-lime-500/20
  "
          />
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6">Java Full Stack Developer</h3>

          <p className="text-gray-400 leading-8 mb-10">
            I'm Aashish Patil, a Final Year Engineering student and aspiring
            Java Full Stack Developer. I specialize in building scalable web
            applications using Java, Spring Boot, React.js, MongoDB, and MySQL.
            I enjoy solving real-world problems through technology, developing
            efficient backend systems, designing responsive user interfaces, and
            creating seamless user experiences. I'm continuously learning new
            technologies and improving my skills to build impactful software
            solutions and grow as a Software Engineer.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="text-3xl font-bold text-lime-400">5+</h4>
              <p className="text-gray-400">Certifications</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="text-3xl font-bold text-lime-400">10+</h4>
              <p className="text-gray-400">Projects Built</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="text-3xl font-bold text-lime-400">Java</h4>
              <p className="text-gray-400">Primary Language</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <h4 className="text-3xl font-bold text-lime-400">2026</h4>
              <p className="text-gray-400">Graduate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
