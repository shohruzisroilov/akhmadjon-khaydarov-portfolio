"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafaf9]"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-25" />

      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-[10%] w-[380px] h-[380px] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-subtle-float" />
      <div className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] bg-orange-200/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            {/* Greeting tag */}
            <div className="animate-fade-in-up flex items-center gap-3">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-stone-500">
                Business Development &amp; IT Solutions
              </span>
            </div>

            {/* Main heading */}
            <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 leading-[1.05] font-display">
              Khaydarov
              <br />
              <span className="font-semibold text-stone-900">Akhmadjon</span>
              <span className="text-amber-500 font-semibold">.</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-400 max-w-lg text-base md:text-lg text-stone-500 font-light leading-relaxed">
              Driving creative industry growth through strategic partnerships, global IT market
              expansion, and innovation in Animation &amp; VFX.
            </p>

            {/* Tags */}
            <div className="animate-fade-in-up delay-500 flex flex-wrap gap-2">
              {[
                "IT Solutions",
                "Strategic Partnerships",
                "Animation & VFX",
                "Global Expansion",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium tracking-wide px-3.5 py-1.5 border border-stone-200 text-stone-500 rounded-full hover:bg-amber-50/20 hover:text-amber-700 hover:border-amber-300 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-600 flex flex-col sm:flex-row items-start gap-4 mt-2">
              <a
                href="#experience"
                id="hero-experience-btn"
                className="group flex items-center gap-3 text-sm font-medium px-7 py-3.5 bg-stone-900 text-white rounded-full hover:bg-amber-600 transition-all duration-300"
              >
                View Experience
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                id="hero-contact-btn"
                className="text-sm font-medium px-7 py-3.5 border border-stone-300 text-stone-700 rounded-full hover:border-amber-500 hover:text-amber-750 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Minimalist Profile Image & Socials */}
          <div className="animate-fade-in-up delay-300 lg:col-span-5 flex flex-col items-center lg:items-end gap-6 w-full">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Thin Outer Frame */}
              <div className="absolute inset-0 border border-stone-200 rounded-2xl" />

              {/* Profile Image container */}
              <div className="absolute inset-2.5 rounded-xl overflow-hidden bg-stone-50 border border-stone-100/60">
                <img
                  src="/profile.png"
                  alt="Akhmadjon Khaydarov"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Minimal corner brackets */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r border-b border-amber-500/40 rounded-br-xl -z-10" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-l border-t border-amber-500/40 rounded-tl-xl -z-10" />
            </div>

            {/* LinkedIn & Telegram buttons */}
            <div className="flex items-center gap-4 w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80 justify-center">
              <a
                href="https://www.linkedin.com/in/akhmadjon-khaydarov"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-[13px] font-medium py-2.5 border border-stone-200 hover:border-amber-500 hover:text-amber-700 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-50/10 group/social"
              >
                <svg
                  className="w-4 h-4 fill-currentColor text-stone-400 group-hover/social:text-amber-600 transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://t.me/akhmadjon_kh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-[13px] font-medium py-2.5 border border-stone-200 hover:border-amber-500 hover:text-amber-700 bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-300 hover:scale-[1.02] hover:bg-amber-50/10 group/social"
              >
                <svg
                  className="w-4 h-4 fill-currentColor text-stone-400 group-hover/social:text-amber-600 transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-stone-200/50 animate-subtle-float" />
      <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-stone-200/30" />
    </section>
  );
}
