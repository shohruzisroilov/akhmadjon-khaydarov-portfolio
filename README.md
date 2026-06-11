# Akhmadjon Khaydarov — Professional BDM Portfolio

A premium, warm minimalist portfolio website built for **Akhmadjon Khaydarov**, Business Development Manager at the **Uzbekistan Creative Association (UZCA)**.

This portfolio is tailored to showcase expertise in international strategic partnerships, IT solutions, global expansion, and project management in the animation, GameDev, and VFX industries.

---

## 🚀 Key Features

* **Warm Minimalist Aesthetic**: A clean, modern layout using a soft warm-white background, deep zinc typography, and elegant, refined amber/gold accents.
* **BDM-Focused Content**: Fully customized copy emphasizing international sales, strategic partnerships, and VFX/creative sector growth.
* **Interactive Portfolio Carousel**: A custom React sliding project carousel showcasing key case studies (VFX pipelines, game dev outsourcing, and creative investment initiatives) with natural-color project screenshots, smooth translation transitions, and navigation dots.
* **Professional Journey Timeline**: A clean, visual representation of career experience and educational background.
* **Normalized Contact & Form**: A clean email copy utility and contact submission form with hover states and input focus indicators aligned with the design system.
* **Performance & SEO**: Built on Next.js App Router for optimal page load speed, structured semantic HTML headers, and clean responsive layouts.

---

## 🛠️ Technology Stack

* **Core Framework**: [Next.js](https://nextjs.org/) (App Router, React 19, TypeScript)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Code Formatting**: [Prettier](https://prettier.io/)

---

## ⚙️ Project Scripts

In the project directory, you can run:

### Development Server
Runs the app in development mode with automatic hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

### Code Formatting
Prettier is integrated to format and check formatting rules for all codebase files:
```bash
# Format all files in the project
npm run format

# Check formatting status
npm run format:check
```

### Static Export (Build)
Next.js is configured for static export (`output: "export"`). Running the build script generates an optimized production-ready static HTML build:
```bash
npm run build
```
This command compiles the pages and outputs raw HTML/CSS/JS files into the **`out/`** directory. The contents of this folder can be deployed immediately to any static hosting service (e.g., Hostinger, GitHub Pages, Vercel, Netlify, cPanel).

---

## 📁 Project Directory Structure

```
├── public/                  # Static assets (profile & case study images)
├── src/
│   ├── app/
│   │   ├── components/     # Reusable layout sections (Hero, About, Projects, etc.)
│   │   ├── globals.css      # Core theme configuration and global styles
│   │   ├── layout.tsx       # Root layout configuration
│   │   └── page.tsx         # Main entry page rendering all sections
│   └── tsconfig.json        # TypeScript configuration
├── .prettierrc              # Prettier formatting configuration
├── .prettierignore          # Files ignored by Prettier
└── next.config.ts           # Next.js configuration
```
