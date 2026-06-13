"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const stats = [
    { number: "3+", label: "Years of Experience" },
    { number: "50+", label: "Partnerships" },
    { number: "4", label: "Languages" },
    { number: "10+", label: "Services" },
  ];

  const languages = [
    { name: "Uzbek", level: "Native", width: "w-full" },
    { name: "Russian", level: "Native", width: "w-full" },
    { name: "English", level: "Professional", width: "w-[85%]" },
    { name: "Korean", level: "Basic", width: "w-[30%]" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-16 relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-amber-100/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-orange-100/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="animate-on-scroll flex items-center gap-3 mb-16">
          <span className="w-8 h-[1px] bg-amber-500" />
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-stone-500">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Profile card */}
          <div className="animate-on-scroll delay-200 relative group">
            <div className="relative max-w-md">
              <div className="relative bg-white rounded-2xl border border-stone-100/80 p-8 shadow-sm hover:shadow-md hover:border-stone-200/60 transition-all duration-500">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500/10 to-amber-600/5 text-amber-800 border border-amber-500/15 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-amber-800 font-display">AK</span>
                </div>

                <h3 className="text-xl font-semibold text-stone-900 mb-1 font-display">Akhmadjon Khaydarov</h3>
                <p className="text-sm text-stone-500 font-light mb-1">
                  Business Development Manager
                </p>
                <p className="text-xs text-stone-400 font-light mb-6">
                  Uzbekistan Creative Association (UZCA)
                </p>

                {/* Info items */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-stone-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span className="text-sm text-stone-600 font-light">Tashkent, Uzbekistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-stone-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                    <span className="text-sm text-stone-600 font-light">
                      IT Investments Center (2024–2025)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-stone-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                      />
                    </svg>
                    <span className="text-sm text-stone-600 font-light">
                      Woosong University — BTech
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-emerald-500 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-emerald-600 font-medium">Available · Remote</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="pt-6 border-t border-stone-100">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone-400 mb-4">
                    Languages
                  </p>
                  <div className="space-y-3">
                    {languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-medium text-stone-600">{lang.name}</span>
                          <span className="text-[11px] text-stone-400">{lang.level}</span>
                        </div>
                        <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-amber-600 rounded-full ${lang.width} transition-all duration-1000`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative block */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-stone-200 rounded-2xl -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:border-amber-400/45 transition-all duration-500" />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col justify-center gap-8">
            <h2 className="animate-on-scroll delay-100 text-3xl md:text-4xl font-light text-stone-900 tracking-tight leading-tight font-display">
              Elevating the creative industry
              <br className="hidden md:block" /> to a{" "}
              <span className="font-semibold text-stone-900">global scale</span>
              <span className="text-amber-500 font-semibold">.</span>
            </h2>

            <div className="animate-on-scroll delay-200 space-y-4">
              <p className="text-stone-500 leading-relaxed font-light">
                I serve as a Business Development Manager at the{" "}
                <span className="font-medium text-stone-700">
                  Uzbekistan Creative Association (UZCA)
                </span>{" "}
                — an organization that unites all animation, GameDev, and VFX studios in Uzbekistan.
                Our mission is to support and promote the local creative industry by facilitating
                international cooperation, fostering creative talent, and providing global
                partnership opportunities.
              </p>
              <p className="text-stone-500 leading-relaxed font-light">
                I have built extensive experience in international sales, organizational management,
                and business development at the IT Investments Center. Establishing strategic
                partnerships, entering new markets, and driving company growth are my core focus
                areas.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="animate-on-scroll delay-300 space-y-3">
              {[
                "Establishing and managing international business partnerships",
                "Market expansion strategies in the IT and creative sectors",
                "Managing B2B sales and outsourcing projects",
                "Creating global opportunities for creative studios",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-4 h-4 text-amber-500 mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-stone-600 font-light">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="animate-on-scroll delay-400 grid grid-cols-4 gap-4 mt-4 pt-8 border-t border-stone-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent tracking-tight font-display">
                    {stat.number}
                  </div>
                  <div className="text-[11px] font-medium tracking-wide uppercase text-stone-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
