import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Akhmadjon Khaydarov — Business Development & IT Solutions",
  description:
    "Portfolio of Akhmadjon Khaydarov — Business Development Manager specializing in IT Solutions, Animation & VFX Industry, and Global IT Market Expansion.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "Akhmadjon Khaydarov",
    "business development",
    "IT solutions",
    "animation",
    "VFX",
    "UZCA",
    "Uzbekistan Creative Association",
    "SaaS",
    "strategic partnerships",
  ],
  openGraph: {
    title: "Akhmadjon Khaydarov — Business Development & IT Solutions",
    description:
      "Business Development Manager | IT Solutions | Creative Industry Growth | Strategic Partnerships",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
