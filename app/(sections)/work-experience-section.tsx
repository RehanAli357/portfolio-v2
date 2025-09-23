"use client";

import { motion ,Variants} from "framer-motion";

const experiences = [
  {
    company: "BITCS",
    role: "Software Engineer Developer",
    period: "May 2024 - Present",
    description:
      "Developed and maintained scalable web applications using React, TypeScript, and MUI. Collaborated with designers and backend engineers to deliver seamless user experiences.",
  },
  {
    company: "Vega6 Webware Technologies",
    role: "React Developer",
    period: "May 2023 - May 2024",
    description:
      "Building and deploying the responsive web applications using React.js. Worked closely with cross-functional teams to define, design, and ship new features.",
  },
  {
    company: "ThinkBiz Technologies Pvt. Ltd.",
    role: "React Developer Intern",
    period: "Sep 2022 - Feb 2023",
    description:
      "Worked on internal projects using React.js and contributed to front-end development tasks. Gained hands-on experience in building user interfaces and collaborating with senior developers.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.7 } },
};

const WorkExperienceSection = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center relative ">
      <div className="inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-md relative"></div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 tracking-wide text-center"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="w-full max-w-3xl px-2 sm:px-6"
      >
        <ol className="relative border-l-4 border-amber-400">
          {experiences.map((exp) => (
            <motion.li
              key={exp.company}
              variants={itemVariants}
              className="mb-8 sm:mb-10 ml-6"
            >
              <span className="absolute flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-amber-400 rounded-full -left-4 ring-4 ring-black">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V7h2v2z" />
                </svg>
              </span>
              <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="block text-xs sm:text-sm text-amber-300 font-medium mb-1">
                  {exp.company}
                </span>
                <span className="block text-xs text-gray-400 mb-2">
                  {exp.period}
                </span>
                <p className="text-gray-300 text-xs sm:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
};

export default WorkExperienceSection;
