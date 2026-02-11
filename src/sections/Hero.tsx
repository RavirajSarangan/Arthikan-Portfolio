'use client';

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { portfolioData } from '@/content/data';
import EnergyBeam from '@/components/ui/energy-beam';
import { Canvas } from '@react-three/fiber'; // Added Canvas import

// Dynamically import Canvas and scene to avoid SSR issues with Three.js
const Scene = dynamic(() => import('@/components/3d/Hero3D').then((mod) => mod.Hero3D), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-background" />
});

export const Hero = () => {
    const [beamReady, setBeamReady] = React.useState(false);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* 1. Base Energy Beam Core */}
            <div className="absolute inset-0 z-0">
                <EnergyBeam
                    className="opacity-60 mix-blend-screen"
                    onLoad={() => setBeamReady(true)}
                />
            </div>

            {/* 2. 3D Background Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: beamReady ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-1"
            >
                {beamReady && <Scene />}
            </motion.div>

            {/* Content Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: beamReady ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-10 text-center px-6 mt-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <span className="px-5 py-2 rounded-full glass border border-white/5 text-[10px] font-black tracking-[0.3em] text-accent uppercase">
                        Available for new projects
                    </span>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.04,
                                delayChildren: 0.3,
                            }
                        }
                    }}
                    className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9]"
                >
                    {portfolioData.name.split(' ')[0].split('').map((char, i) => (
                        <motion.span
                            key={`first-${i}`}
                            variants={{
                                hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
                                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                    <br className="md:hidden" />
                    <span className="inline-block w-[0.3em]" />
                    {portfolioData.name.split(' ')[1]?.split('').map((char, i) => (
                        <motion.span
                            key={`last-${i}`}
                            variants={{
                                hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
                                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                            }}
                            className="inline-block text-white/45"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-14 font-medium tracking-tight"
                >
                    {portfolioData.title}
                    <span className="block mt-4 text-sm text-gray-500 font-normal leading-relaxed">
                        {portfolioData.intro}
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-10 py-5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:pr-14 active:scale-95">
                        <span className="relative z-10 transition-all group-hover:mr-2">View Projects</span>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                            →
                        </div>
                    </button>
                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 rounded-full border border-white/10 glass text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95">
                        Contact Me
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-24 hidden md:flex justify-center gap-24"
                >
                    {portfolioData.stats.map((stat, idx) => (
                        <div key={idx} className="text-center group cursor-pointer">
                            <p className="text-sm font-black text-white group-hover:text-accent transition-colors leading-none mb-3 tracking-tighter">
                                {stat.value}
                            </p>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 group-hover:text-gray-400 font-black">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Hero Gradients */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
};
