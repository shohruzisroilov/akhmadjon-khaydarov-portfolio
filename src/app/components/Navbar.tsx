"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          id="nav-logo"
          className="text-lg font-semibold tracking-tight text-stone-900 hover:text-amber-600 transition-colors duration-300 font-display"
        >
          AK<span className="text-amber-500 font-bold">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-medium tracking-wide uppercase text-stone-600 hover:text-amber-700 px-4 py-1.5 border border-stone-200/80 hover:border-amber-400 hover:bg-amber-50/20 rounded-full transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <a
          href="#contact"
          id="nav-contact-btn"
          className="hidden md:flex items-center gap-2 text-[12px] font-medium tracking-wide uppercase px-5 py-2 border border-stone-300 rounded-full text-stone-750 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300 hover:scale-105 shadow-xs"
        >
          Get in Touch
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-stone-900 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-stone-900 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-stone-900 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-stone-100 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center text-sm font-medium px-5 py-2.5 border border-stone-300 rounded-full text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
