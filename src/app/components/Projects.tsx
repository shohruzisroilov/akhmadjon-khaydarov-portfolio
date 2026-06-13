"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    id: "project-01",
    number: "01",
    title: "Global VFX & Animation Sales Pipeline",
    description:
      "Led the international sales strategy and established strategic partnerships with top-tier animation and VFX studios in North America and Europe, expanding UZCA members' global reach.",
    tags: ["Market Expansion", "Strategic Partnerships", "B2B Sales", "VFX & Animation"],
    image: "/project-social.png",
  },
  {
    id: "project-02",
    number: "02",
    title: "National GameDev Outsourcing Program",
    description:
      "Developed and managed an outsourcing framework connecting international game publishers with local Uzbek studios, facilitating over $1.5M in outsourced contract value.",
    tags: ["Outsourcing", "Project Management", "Business Development", "Uzbekistan GameDev"],
    image: "/project-ecommerce.png",
  },
  {
    id: "project-03",
    number: "03",
    title: "Creative Industry Investment Initiative",
    description:
      "Designed investment pitches and secured funding partnerships from international IT investment centers to establish incubation programs for animators and digital artists in Tashkent.",
    tags: ["Investment Attraction", "Incubation Programs", "Government Relations", "IT Solutions"],
    image: "/project-dashboard.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");

    if (!window.IntersectionObserver) {
      elements?.forEach((el) => {
        el.classList.add("animate-fade-in-up");
        el.classList.remove("opacity-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
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
          el.classList.remove("opacity-0");
        }
      });
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 md:py-16 bg-[#fafaf9] border-t border-stone-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="animate-on-scroll flex items-center gap-3 mb-6 opacity-0">
          <span className="w-8 h-[1px] bg-amber-500" />
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-stone-500">
            Portfolio
          </span>
        </div>

        {/* Section Header with Navigation */}
        <div className="animate-on-scroll delay-100 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 opacity-0">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight mb-2 font-display">
              Selected <span className="font-semibold">projects</span>
              <span className="text-amber-500 font-semibold">.</span>
            </h2>
            <p className="text-sm text-stone-400 font-light max-w-xs">
              A curated selection of business development initiatives and strategic programs.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              className="project-prev w-11 h-11 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm flex items-center justify-center text-stone-600 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50/20 transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              className="project-next w-11 h-11 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm flex items-center justify-center text-stone-600 hover:border-amber-400 hover:text-amber-700 hover:bg-amber-50/20 transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Project Swiper Container */}
        <div className="animate-on-scroll delay-200 relative overflow-hidden opacity-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".project-prev",
              nextEl: ".project-next",
            }}
            pagination={{
              clickable: true,
              el: ".project-pagination",
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="group block rounded-2xl overflow-hidden border border-stone-100 bg-white shadow-sm hover:shadow-md transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Project Image */}
                    <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-stone-50 flex items-center justify-center p-6 lg:p-8">
                      <div className="relative w-full h-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] rounded-xl overflow-hidden border border-stone-150 shadow-sm transition-all duration-700 group-hover:scale-[1.01]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 mb-4 block">
                        Case Study {project.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-3 transition-colors duration-300 font-display">
                        {project.title}
                      </h3>
                      <p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium tracking-wide px-3.5 py-1.5 border border-stone-200/60 text-stone-550 rounded-full hover:bg-amber-50/20 hover:text-amber-700 hover:border-amber-300 transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* UZCA Reference */}
                      <div className="flex items-center gap-2 text-xs font-medium text-stone-400">
                        <svg className="w-4 h-4 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span>Uzbekistan Creative Association (UZCA) Initiative</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Dots */}
        <div className="animate-on-scroll delay-350 project-pagination flex justify-center gap-2 mt-8 opacity-0" />
      </div>
    </section>
  );
}
