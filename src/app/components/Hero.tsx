"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

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
            <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 leading-[1.05]">
              Akhmadjon
              <br />
              <span className="font-semibold text-stone-900">Khaydarov</span>
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

          {/* Right: Minimalist Profile Image */}
          <div className="animate-fade-in-up delay-300 lg:col-span-5 flex justify-center lg:justify-end w-full">
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
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-stone-200/50 animate-subtle-float" />
      <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-stone-200/30" />
    </section>
  );
}
