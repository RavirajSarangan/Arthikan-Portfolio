import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Arthikan Vettivel | UI/UX & Software Engineer",
  description: "Portfolio of Arthikan Vettivel - Designing elegant experiences and engineering powerful software at scale. Specialist in Next.js, Three.js, and Premium UI.",
  keywords: ["Arthikan Vettivel", "Portfolio", "UI/UX Engineer", "Software Engineer", "React", "Next.js", "Three.js", "Framer Motion"],
  authors: [{ name: "Arthikan Vettivel" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Arthikan Vettivel | UI/UX & Software Engineer",
    description: "Cinematic Portfolio 2026 — Design + Engineering at the highest level.",
    type: "website",
    locale: "en_US",
    siteName: "Arthikan Vettivel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthikan Vettivel | UI/UX & Software Engineer",
    description: "Cinematic Portfolio 2026 — Design + Engineering at the highest level.",
  },
  other: {
    "theme-color": "#1C1917",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased selection:bg-accent selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
