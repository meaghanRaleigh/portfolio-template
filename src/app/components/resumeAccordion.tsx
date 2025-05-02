"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

export default function ResumeAccordion() {
  const sections = [
    {
      title: "Experience",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {[
            {
              title: "Lorem Ipsum Solutions",
              location: "Remote",
              duration: "Jan 2022 – Present",
              bullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
              ],
            },
            {
              title: "Dolor Sit Amet Inc.",
              location: "New York, NY",
              duration: "May 2020 – Dec 2021",
              bullets: [
                "Excepteur sint occaecat cupidatat non proident.",
                "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
              ],
            },
            {
              title: "Consectetur Group",
              location: "Austin, TX",
              duration: "Feb 2018 – Apr 2020",
              bullets: [
                "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
                "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
                "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
              ],
            },
            {
              title: "Adipiscing Technologies",
              location: "Chicago, IL",
              duration: "Jul 2016 – Jan 2018",
              bullets: [
                "Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
                "Nam libero tempore, cum soluta nobis est eligendi optio.",
                "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
              ],
            },
          ].map((job, i) => (
            <div key={i} className="border-b border-accent pb-4">
              <h3 className="text-lg font-semibold text-primary mb-1">
                {job.title}
              </h3>
              <p className="text-sm text-muted italic mb-2">
                {job.location} — {job.duration}
              </p>
              <ul className="list-disc pl-5 text-muted space-y-1">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Skills",
      content: (
        <ul className="grid md:grid-cols-2 gap-4 text-muted">
          <li>
            <strong>Linguae & Frameworks:</strong> JavaScript, TypeScript,
            React, Next.js, SCSS
          </li>
          <li>
            <strong>Probatio:</strong> Jest, Playwright, Cypress
          </li>
          <li>
            <strong>CMS:</strong> WordPress, Contentful, Netlify CMS
          </li>
          <li>
            <strong>Instrumenta:</strong> Figma, Git, Vercel, Lighthouse
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      content: (
        <ul className="text-muted space-y-2">
          <li>
            <strong>Universitas Lorem</strong>
            <br />
            Baccalaureus Scientiae in Computatione — MMXV
          </li>
          <li>
            <strong>Institutum Ipsum Technologiae</strong>
            <br />
            Testimonium in Telae Evolutione — MMXVII
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="mx-auto glass p-3 rounded-lg space-y-3">
      {sections.map((section, idx) => (
        <Disclosure key={idx}>
          {({ open }) => (
            <div>
              <DisclosureButton className="w-full flex justify-between items-center text-left text-primary font-semibold text-lg hover:text-secondary transition">
                {section.title}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </DisclosureButton>
              <DisclosurePanel className="pt-2 text-sm text-muted">
                {section.content}
              </DisclosurePanel>
              <hr className="border-accent/20 my-4" />
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
