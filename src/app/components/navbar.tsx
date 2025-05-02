"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // optional: install lucide-react or use any icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 glass border-b border-muted shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-teal-900"
        >
          [Your Name]
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-teal-800"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 px-6 py-6 shadow-inner text-lg">
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink href="/resume" onClick={() => setIsOpen(false)}>
            Resume
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-block text-primary hover:text-secondary font-medium px-3 py-2 transition-colors duration-200 rounded-md"
    >
      {children}
    </Link>
  );
}
