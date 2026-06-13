export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-12 border-t border-stone-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-stone-900 font-display">
              AK<span className="text-amber-500 font-bold">.</span>
            </span>
            <span className="w-[1px] h-4 bg-stone-200" />
            <span className="text-[12px] text-stone-400 font-light">
              © {currentYear} Akhmadjon Khaydarov
            </span>
          </div>

          {/* Center */}
          <p className="text-[12px] text-stone-400 font-light text-center">
            Bridging creativity and technology
          </p>

          {/* Right */}
          <a
            href="#"
            id="back-to-top"
            className="group flex items-center gap-2 text-[12px] font-medium text-stone-400 hover:text-stone-700 transition-colors duration-300"
          >
            Back to Top
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
