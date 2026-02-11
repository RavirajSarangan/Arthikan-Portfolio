import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Education } from '@/sections/Education';
import { Projects } from '@/sections/Projects';
import { Services } from '@/sections/Services';
import { Contact } from '@/sections/Contact';
import { Stories } from '@/sections/Stories';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white">
      <Navbar />

      {/* Sections */}
      <Hero />
      <Stories />
      <Projects />
      <About />
      <Skills />
      <Education />
      <Services />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Global Grain/Noise Overlay for Cinematic Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </main>
  );
}
