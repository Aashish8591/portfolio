import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiApachemaven,
  SiIntellijidea,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { AiFillApi } from "react-icons/ai";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Hibernate", icon: <SiHibernate />},
      { name: "JSP", icon:  <FaJava />},
      { name: "REST API", icon: <AiFillApi />},
      { name: "JWT", icon: <FaJava />},
      { name: "JDBC", icon: <FaJava />},
      { name: "Servlets", icon: <FaJava />},
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Maven", icon: <SiApachemaven /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-4 md:px-8 py-32 relative overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-0 top-20 w-80 h-80 bg-lime-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}

      <div className="text-center mb-20">
        <p className="text-lime-400 uppercase tracking-[4px]">Skills</p>

        <h2 className="text-5xl font-bold mt-3">Technologies I Work With</h2>

        <div className="w-24 h-1 bg-lime-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Skill Groups */}

      <div className="max-w-7xl mx-auto space-y-16">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8">{group.title}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10

                  rounded-3xl

                  p-8

                  flex
                  flex-col
                  items-center
                  justify-center

                  hover:border-lime-400/40

                  transition-all
                  duration-300
                  "
                >
                  <div className="text-5xl mb-4 text-lime-400">
                    {skill.icon}
                  </div>

                  <p className="font-semibold">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
