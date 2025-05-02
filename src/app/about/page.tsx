"use client";
import Image from "next/image";
import Link from "next/link";
import placeholderHeadshot from "../../../public/images/placeholder-headshot.png"; // Rename or replace with a generic image
import Container from "../components/container";
import Background from "../components/background";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative isolate min-h-screen flex items-center justify-center bg-background py-12 md:py-0">
      <Background />
      {/* Content */}
      <Container className="animate-fade-in">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-center md:items-start">
          {/* Headshot */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex justify-center animate-slide-up delay-100"
          >
            <Image
              src={placeholderHeadshot}
              alt="Headshot"
              width={300}
              height={300}
              className="rounded-full shadow-lg border-4 border-primary"
            />
          </motion.div>

          {/* Text */}
          <div className="space-y-6 text-left animate-slide-up delay-200 glass backdrop-blur-sm rounded-lg p-6 shadow-md">
            <motion.h1
              whileHover={{
                textShadow: "0px 0px 8px rgba(32, 100, 127, 0.5)",
                scale: 1.01,
              }}
              transition={{ duration: 0.2 }}
              className="text-4xl sm:text-5xl font-bold text-primary mb-2"
            >
              About Me.
            </motion.h1>

            <Link
              href="/resume"
              className="group inline-block text-primary font-semibold underline underline-offset-4 hover:text-secondary transition"
            >
              View Resume
              <span className="ml-1 inline-block transform transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <p className="text-lg text-muted">
              Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-lg text-muted">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-lg text-muted">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="pt-4 border-t border-accent text-sm text-muted grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              <p>🌎 Lorem Ipsum dolor sit amet</p>
              <p>🧠 Lorem Ipsum dolor sit amet</p>
              <p>💡 Lorem Ipsum dolor sit amet</p>
              <p>🛠️ Lorem Ipsum dolor sit amet</p>
              <p>⚡ Lorem Ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
