"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import Project1Img from "@/public/project1.png";
import Project2Img from "@/public/project2.png";
import Project3Img from "@/public/project3.png";
import Project4Img from "@/public/project4.png";
import Project5Img from "@/public/project5.png";
import Project6Img from "@/public/project6.png";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    image: Project1Img,
    link: "https://yourportfolio.com",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Code Sabha",
    description: "Full-featured coding course tution website.",
    image: Project2Img,
    link: "https://codesabha.netlify.app/",
    tags: ["React", "MUI", "Node.js"],
  },
  {
    title: "Dev Console",
    description: "A developer website with resources and project showcases.",
    image: Project4Img,
    link: "https://devconsole-codesabha.netlify.app/",
    tags: ["Next.js", "TypeScript", "Firebase"],
  },
  {
    title: "Buddy",
    description:
      "A social media app for pet lovers to connect, share, and find pet care services.",
    image: Project3Img,
    link: "https://buddy-codesabha.netlify.app/",
    tags: ["ReactJs", "NestJS", "NeonDB"],
  },
  {
    title: "Blog post website",
    description:
      "A full stack blog post website with user authentication, CRUD operations.",
    image: Project5Img,
    link: "https://rehanali357.github.io/",
    tags: ["React", "SCSS", "Firebase"],
  },
  {
    title: "Image Editor",
    description: "A web app to edit images with various tools and filters.",
    image: Project6Img,
    link: "https://810gec.csb.app/",
    tags: ["React", "FabricJS", "FirebaseAuth"],
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6 }
  }
};

const ProjectSection = () => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className=" relative w-full py-16 bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center"
  >
    <motion.h2
      variants={cardVariants}
      className="text-white text-3xl font-bold mb-10 tracking-wide"
    >
      Projects
    </motion.h2>
    <div className="w-[90%] max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="group bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 text-xs text-amber-300 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.section>
);

export default ProjectSection;
