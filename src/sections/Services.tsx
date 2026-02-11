'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layers, MousePointer2 } from 'lucide-react';
import { portfolioData } from '@/content/data';

const iconMap: Record<string, any> = {
    Palette,
    Code,
    Layers,
};

export const Services = () => {
    return (
        <section id="services" className="py-24 px-6 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 pb-6 border-b border-white/5"
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase shrink-0">
                            Core Expertise
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <h2 className="text-xl font-black text-white">
                            High-Level Solutions.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {portfolioData.services.map((service, idx) => {
                        const Icon = iconMap[service.icon] || MousePointer2;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -8 }}
                                className="glass-card p-12 group relative overflow-hidden border-transparent hover:border-white/10"
                            >
                                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-all duration-700">
                                    <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                                <p className="text-gray-500 font-medium leading-relaxed tracking-tight">
                                    {service.description}
                                </p>

                                {/* Visual Accent */}
                                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_15px_oklch(0.7_0.25_210)]" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
        </section>
    );
};
