import { FaLinkedin, FaGithub, FaGithubAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-primary mt-auto text-center text-sm text-white py-12 space-y-4">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Personal GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
          aria-label="Personal GitHub"
          title="Personal GitHub"
        >
          <FaGithubAlt />
        </a>

        {/* Work GitHub or Alt Profile */}
        <a
          href="https://github.com/yourworkusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition"
          aria-label="Work GitHub"
          title="Work GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:your.email@example.com"
          className="hover:text-accent transition"
          aria-label="Email"
        >
          <MdEmail />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
