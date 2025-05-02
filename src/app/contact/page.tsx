"use client";
import { useState } from "react";
import Background from "../components/background";
import Container from "../components/container";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center bg-background px-6 py-16">
      <Background />
      <Container className="animate-slide-up delay-200">
        <div className="max-w-screen-md mx-auto p-8 rounded-xl shadow-xl border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">
            Contact Me
          </h1>

          {submitted ? (
            <p className="text-green-600 text-center text-lg font-medium" aria-live="polite" role="status">
              Thank you! I&apos;ll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  placeholder: "Your Name",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "you@example.com",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div className="input-floating-label relative mb-6" key={name}>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <label
                    htmlFor={name}
                    className="absolute left-4 top-2 text-muted text-sm transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent"
                  >
                    {label}
                  </label>
                </div>
              ))}

              <div className="input-floating-label relative mb-6">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="peer w-full border border-gray-300 px-4 py-2 rounded-md resize-none shadow-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-muted text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-accent"
                >
                  Message
                </label>
              </div>

              <div>
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-secondary transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
