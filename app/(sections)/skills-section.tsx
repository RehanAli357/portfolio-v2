'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Skill1 from "@/public/javascript.svg";
import Skill2 from "@/public/typescript.svg";
import Skill3 from "@/public/react.svg";
import Skill4 from "@/public/nodejs.svg";
import Skill5 from "@/public/Nest.js.svg";
import Skill6 from "@/public/nextjs.svg";
import Skills7 from "@/public/html.svg";
import Skill8 from "@/public/css.svg";
import Skill9 from "@/public/sass.svg";
import Skill10 from "@/public/tailwindcss.svg";
import Skill11 from "@/public/materialui.svg";
import Skill12 from "@/public/mongodb.svg";
import Skill13 from "@/public/firebase.svg";
import Skill14 from "@/public/github.svg";
import Skill15 from "@/public/jest.svg";
import Skill16 from "@/public/playwright.svg";

const skills = [
  { src: Skill1, alt: "JavaScript" },
  { src: Skill2, alt: "TypeScript" },
  { src: Skill3, alt: "React" },
  { src: Skill4, alt: "Node.js" },
  { src: Skill5, alt: "NestJS" },
  { src: Skill6, alt: "Next.js" },
  { src: Skills7, alt: "HTML" },
  { src: Skill8, alt: "CSS" },
  { src: Skill9, alt: "Sass" },
  { src: Skill10, alt: "TailwindCSS" },
  { src: Skill11, alt: "Material UI" },
  { src: Skill12, alt: "MongoDB" },
  { src: Skill13, alt: "Firebase" },
  { src: Skill14, alt: "GitHub" },
  { src: Skill15, alt: "Jest" },
  { src: Skill16, alt: "Playwright" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, delay: idx * 0.12 },
  }),
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="w-full flex flex-col items-center py-10 relative bg-black"
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-white text-2xl font-bold mb-8 tracking-wide"
      >
        My Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="w-[85%] m-auto flex flex-wrap items-center justify-center gap-6"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.alt}
            custom={idx}
            variants={iconVariants}
            className="w-[90px] h-[80px] group bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:bg-gray-700"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={50}
              height={50}
              className="mb-2 transition-transform duration-300 group-hover: grayscale group-hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SkillsSection;
