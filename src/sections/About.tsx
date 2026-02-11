'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/content/data';

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/5 glow-border relative group">
                        <img
                            src="/images/profile.jpg"
                            alt="Arthikan Vettivel"
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-[0.22, 1, 0.36, 1] scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 blur-[100px] rounded-full group-hover:bg-accent/20 transition-all" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-accent text-[10px] font-black tracking-[0.3em] uppercase mb-6 block">
                        About Me
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
                        Design + Engineering <br />
                        <span className="text-white/15">Mindset.</span>
                    </h2>

                    <div className="space-y-8 text-lg text-gray-400 font-medium tracking-tight">
                        <p className="leading-relaxed">
                            I solve complex problems by bridging the gap between design and engineering. My approach is centered on building real systems that are as beautiful as they are high-performing.
                        </p>
                        <p className="leading-relaxed">
                            With a deep focus on innovation and scalability, I specialize in creating digital products that leave a lasting impact. Whether it's a sleek UI for a startup or a heavy-duty enterprise application, I ensure excellence in every line of code and every pixel.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
                        <div>
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">Performance</h4>
                            <p className="text-sm text-gray-500 font-medium">Optimized for speed and efficiency.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">Scalability</h4>
                            <p className="text-sm text-gray-500 font-medium">Built to grow with your vision.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
