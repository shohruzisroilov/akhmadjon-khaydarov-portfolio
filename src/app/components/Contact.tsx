"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");

    if (!window.IntersectionObserver) {
      elements?.forEach((el) => {
        el.classList.add("animate-fade-in-up");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.05 }
    );

    elements?.forEach((el) => observer.observe(el));

    const timer = setTimeout(() => {
      elements?.forEach((el) => {
        if (!el.classList.contains("animate-fade-in-up")) {
          el.classList.add("animate-fade-in-up");
        }
      });
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("akhmadjon@uzca.uz");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/akhmadjon-khaydarov-04a8b01ab/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/akhmadjon_kh",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 md:py-16 bg-[#fafaf9] relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-amber-100/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-orange-100/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="animate-on-scroll flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-amber-500" />
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-stone-500">
            Contact
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <h2 className="animate-on-scroll delay-100 text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight mb-8 leading-tight font-display">
              Let&apos;s build something <span className="font-semibold text-stone-900">great</span>{" "}
              together
              <span className="text-amber-500 font-semibold">.</span>
            </h2>

            <p className="animate-on-scroll delay-200 text-stone-600 font-light leading-relaxed mb-10 max-w-md">
              Whether it is strategic IT partnership, cooperation in the creative industry, or
              business consulting — I am always open to discussing new opportunities.
            </p>

            {/* Email */}
            <div className="animate-on-scroll delay-300 mb-8">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-2">
                Email
              </p>
              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 text-lg md:text-xl font-bold text-stone-900 hover:text-amber-700 transition-colors duration-300 cursor-pointer"
              >
                akhmadjon@uzca.uz
                {copied ? (
                  <span className="text-xs font-medium px-2.5 py-0.5 bg-stone-100 text-stone-700 border border-stone-200/30 rounded-full animate-fade-in">
                    ✓ Copied!
                  </span>
                ) : (
                  <span className="text-xs font-normal text-stone-400 group-hover:text-amber-600 transition-colors">
                    Copy
                  </span>
                )}
              </button>
            </div>

            {/* Location */}
            <div className="animate-on-scroll delay-400 mb-8">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-2">
                Location
              </p>
              <p className="text-base text-stone-850 font-medium">Tashkent, Uzbekistan</p>
              <p className="text-sm text-stone-500 font-medium mt-1">
                Open to remote collaboration
              </p>
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll delay-500">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-400 mb-4">
                Social Media
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`social-${link.name.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-stone-200/60 bg-white/50 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-amber-600 hover:border-amber-250 hover:bg-amber-50/20 transition-all duration-300 hover:scale-105 shadow-sm"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-on-scroll delay-300">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-stone-400 mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors duration-300 font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-stone-400 mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors duration-300 font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-stone-400 mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Partnership, Consulting, Project..."
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors duration-300 font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-semibold tracking-[0.15em] uppercase text-stone-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors duration-300 font-light resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="group flex items-center gap-3 text-sm font-semibold px-8 py-3.5 bg-stone-900 text-white rounded-full hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(28,25,23,0.15)] hover:shadow-[0_4px_25px_rgba(28,25,23,0.25)] mt-4 cursor-pointer"
              >
                Send Message
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
