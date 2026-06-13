"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    id: "exp-uzca",
    company: "Uzbekistan Creative Association",
    companyShort: "UZCA",
    role: "Business Development Manager",
    type: "Full-time",
    period: "March 2025 — Present",
    duration: "1 yr 4 mos",
    location: "Tashkent, Uzbekistan",
    description:
      "Developing international partnerships, supporting creative talents, and creating opportunities for global collaboration in an organization that unites all animation, GameDev, and VFX studios in Uzbekistan.",
    achievements: [
      "Establishing international partnership channels",
      "Opening access to global markets for the creative industry",
      "Strengthening cooperation among local creative studios",
    ],
    skills: [
      "Strategic Partnerships",
      "International Business",
      "Creative Industry",
      "Market Expansion",
    ],
    current: true,
  },
  {
    id: "exp-itic-bdm",
    company: "IT Investments Center",
    companyShort: "ITIC",
    role: "Business Development Manager",
    type: "Full-time",
    period: "Dec 2024 — Dec 2025",
    duration: "1 yr 1 mo",
    location: "Tashkent, Uzbekistan",
    description:
      "Leading strategic business development initiatives and providing advisory services to grow IT investment portfolios.",
    achievements: [
      "Developing strategic business growth roadmaps",
      "Identifying and launching new business directions",
      "Expanding the institutional and corporate client base",
    ],
    skills: ["Strategic BD", "Business Consulting", "IT Investments", "Sales Strategy"],
    current: false,
  },
  {
    id: "exp-itic-om",
    company: "IT Investments Center",
    companyShort: "ITIC",
    role: "Organization Manager",
    type: "Full-time · On-site",
    period: "Nov 2024 — March 2025",
    duration: "5 mos",
    location: "Tashkent, Uzbekistan",
    description:
      "Managing organizational operations, overseeing workflows for IT projects and programs, and ensuring smooth cross-functional team coordination.",
    achievements: [
      "Optimizing project management workflows",
      "Establishing effective communication channels across teams",
    ],
    skills: ["Management", "IT Project Management", "Program Management"],
    current: false,
  },
  {
    id: "exp-itic-ism",
    company: "IT Investments Center",
    companyShort: "ITIC",
    role: "International Sales Manager",
    type: "Full-time · On-site",
    period: "Jan 2024 — Nov 2024",
    duration: "11 mos",
    location: "Tashkent, Uzbekistan",
    description:
      "Managing international sales and expanding outsourcing partnerships. Growing client base in global markets and negotiating major commercial contracts.",
    achievements: [
      "Expanding the international client network",
      "Successfully managing outsourcing projects",
      "Entering new market segments",
    ],
    skills: ["International Sales", "Outsourcing", "Client Relations", "Market Expansion"],
    current: false,
  },
];

export default function Experience() {
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

  return (
    <section id="experience" ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="animate-on-scroll flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-amber-500" />
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-stone-500">
            Experience
          </span>
        </div>

        <div className="animate-on-scroll delay-100 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight font-display">
            Professional <span className="font-semibold">Journey</span>
            <span className="text-amber-500 font-semibold">.</span>
          </h2>
          <p className="text-sm text-stone-400 font-light max-w-xs">
            Proven track record of driving business growth in IT and creative sectors.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-stone-200" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                id={exp.id}
                className="animate-on-scroll relative pl-12 md:pl-16 group"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[14px] md:left-[18px] top-1.5 w-[11px] h-[11px] rounded-full border-2 transition-all duration-300 group-hover:scale-[1.35] ${
                    exp.current
                      ? "bg-amber-600 border-amber-600 group-hover:bg-amber-500 group-hover:border-amber-500"
                      : "bg-white border-stone-300 group-hover:border-amber-500"
                  }`}
                />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-2xl border border-stone-100 hover:border-stone-200/80 hover:shadow-xl hover:shadow-stone-100/40 transition-all duration-500 bg-white">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-stone-900 font-display">{exp.role}</h3>
                        {exp.current && (
                          <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stone-500 font-light">
                        {exp.company} <span className="text-stone-300">·</span> {exp.type}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <p className="text-xs font-medium text-stone-500">{exp.period}</p>
                      <p className="text-[11px] text-stone-400 font-light">
                        {exp.duration} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-stone-500 font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-2">
                        <svg
                          className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-[13px] text-stone-600 font-light">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium tracking-wide px-3 py-1 bg-stone-50 text-stone-500 rounded-full border border-stone-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div
            className="animate-on-scroll relative pl-12 md:pl-16 mt-10"
            style={{ animationDelay: "800ms" }}
          >
            <div className="absolute left-[14px] md:left-[18px] top-1 w-[11px] h-[11px] rounded-full border-2 bg-white border-stone-300" />

            <div className="p-6 md:p-8 rounded-2xl border border-dashed border-stone-200 bg-stone-50/50">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-4 h-4 text-stone-400"
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
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-stone-400">
                  Education
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mt-2">Woosong University</h3>
              <p className="text-sm text-stone-500 font-light">
                Bachelor of Technology — Computer Science
              </p>
              <p className="text-xs text-stone-400 mt-1">Aug 2019 — Dec 2023 · South Korea</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
