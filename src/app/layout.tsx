import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akhmadjon Khaydarov — Business Development & IT Solutions",
  description:
    "Portfolio of Akhmadjon Khaydarov — Business Development Manager specializing in IT Solutions, Animation & VFX Industry, and Global IT Market Expansion.",
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
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
