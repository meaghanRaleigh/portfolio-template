"use client";

import Background from "./components/background";
import Button from "./components/buttons";
import Container from "./components/container";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden flex items-center justify-center bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-primary p-2 rounded z-50"
      >
        Skip to main content
      </a>

      <Background />
      <Container className="text-center animate-slide-up delay-200">
        <motion.h1
          whileHover={{
            textShadow: "0px 0px 8px rgba(32, 100, 127, 0.5)",
            scale: 1.01,
          }}
          transition={{ duration: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-primary mb-2"
        >
          Hi, I&apos;m [Your Name].
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <p className="text-muted text-base sm:text-lg mb-8 italic">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button
            aria-label="View Projects"
            href="/projects"
            className="hover:-translate-y-0.5 hover:scale-[1.02] transition-transform duration-200 ease-in-out"
          >
            View Projects →
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
