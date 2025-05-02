// File: /src/app/projects/page.tsx
"use client";

import React, { useState } from "react";
import Container from "../components/container";
import Image from "next/image";
import Background from "../components/background";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaWordpress,
  FaPhp,
  FaBootstrap,
  FaNodeJs,
  FaCss3Alt,
  FaTheaterMasks,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiAngular,
  SiFigma,
  SiSpeedtest,
} from "react-icons/si";
import { MdOutlineAccessible } from "react-icons/md";

const tagIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact />,
  WordPress: <FaWordpress />,
  PHP: <FaPhp />,
  Bootstrap: <FaBootstrap />,
  TypeScript: <SiTypescript />,
  "Next.js": <SiNextdotjs />,
  GraphQL: <SiGraphql />,
  AngularJS: <SiAngular />,
  Figma: <SiFigma />,
  "Node.js": <FaNodeJs />,
  Accessibility: <MdOutlineAccessible />,
  "A/B Testing": <span className="text-white text-xs">A/B</span>,
  UX: <span className="text-white text-xs">UX</span>,
  LMS: <span className="text-white text-xs">LMS</span>,
  SCSS: <FaCss3Alt />,
  Performance: <SiSpeedtest />,
  Playwright: <FaTheaterMasks />,
  ReactNative: <FaReact />,
};
// Replace with your own icons and projects
const projects = [
  {
    title: "Project Alpha",
    image: "https://placehold.co/300x300",
    tags: ["React", "Next.js", "SCSS", "Accessibility"],
    short:
      "Responsive design system for a fictional SaaS dashboard.",
    long: "Developed a modular UI system using React and SCSS modules, focused on accessibility and responsive breakpoints. Integrated ARIA roles and keyboard navigation for improved usability.",
  },
  {
    title: "Beta Build",
    image: "https://placehold.co/300x300",
    tags: ["TypeScript", "Figma", "UX", "Performance"],
    short: "Rapid prototyping and UX iteration for a landing page suite.",
    long: "Translated Figma files into performant, pixel-perfect web components. Applied performance optimizations, lazy-loading techniques, and A/B tested various layout options to increase conversions.",
  },
  {
    title: "Gamma LMS",
    image: "https://placehold.co/300x300",
    tags: ["WordPress", "PHP", "LMS", "A/B Testing"],
    short: "Learning management mockup with templated content blocks.",
    long: "Built a custom WordPress theme for a fictional LMS platform. Used ACF for flexible content layouts and built in A/B testing slots for testing user learning paths and retention triggers.",
  },
  {
    title: "Delta Dashboard",
    image: "https://placehold.co/300x300",
    tags: ["GraphQL", "Node.js", "React", "UX"],
    short: "Interactive data dashboard with real-time API sync.",
    long: "Created a fictional admin dashboard with GraphQL integration and user-defined filtering. Emphasized UX clarity through minimalist UI, dynamic loading states, and progressive enhancement.",
  },
  {
    title: "Zeta Site Redesign",
    image: "https://placehold.co/300x300",
    tags: ["Bootstrap", "SCSS", "Accessibility", "Performance"],
    short: "Website redesign for a placeholder business.",
    long: "Rebuilt legacy layouts in a modern responsive grid using SCSS and Bootstrap. Improved performance by 40% via image optimization, code splitting, and semantic HTML improvements.",
  },
];


export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelected(null);
      setIsClosing(false);
    }, 250);
  };

  return (
    <section className="relative isolate min-h-screen bg-background px-6 py-16">
      <Background />
      <Container className="text-center animate-slide-up delay-200">
        <h1 className="text-4xl font-bold text-primary mb-4">Projects</h1>
        <p className="text-lg text-muted max-w-3xl mx-auto">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-screen-xl mx-auto mt-12">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className="group cursor-pointer w-[320px] bg-white/90 backdrop-blur-lg rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 hover:bg-white"
            >
              <Image
                src={proj.image}
                alt={`${proj.title} logo`}
                width={160}
                height={100}
                className="mb-4 mx-auto max-h-20 object-contain group-hover:scale-105 transition-transform"
              />
              <h2 className="text-xl font-semibold text-primary mb-2">
                {proj.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {proj.tags.map((tag, tagIdx) => (
                  <div className="relative group/tag" key={tagIdx}>
                    <div className="inline-flex items-center justify-center w-7 h-7 bg-primary text-white text-sm rounded-full">
                      {tagIcons[tag] || tag[0]}
                    </div>
                    <div className="absolute z-10 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded shadow-sm opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300 -top-8 left-1/2 -translate-x-1/2 pointer-events-none">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted text-sm">{proj.short}</p>
              <span className="mt-4 inline-block text-primary text-sm font-semibold hover:underline">
                Click to view more
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 md:px-8  ${
                isClosing ? "" : "animate-modal-in"}`}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-5xl w-full relative"
              >
                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
                >
                  &times;
                </button>

                <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center justify-center">
                  <div className="md:w-1/2 text-center">
                    <Image
                      src={projects[selected].image}
                      alt={`${projects[selected].title} logo`}
                      width={160}
                      height={100}
                      className="mx-auto max-h-20 object-contain mb-4"
                    />
                    <h2 className="text-2xl font-bold text-primary">
                      {projects[selected].title}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {projects[selected].tags.map((tag, i) => (
                        <div
                          key={i}
                          className="inline-flex items-center justify-center px-3 py-2 bg-primary text-white text-xs rounded"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:w-1/2 text-left">
                    <p className="text-muted text-base leading-relaxed">
                      {projects[selected].long}
                    </p>
                    <p className="pt-4 border-t mt-4 text-xs text-muted">
                      *Work shown is descriptive only—examples not shown due to
                      client privacy.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
