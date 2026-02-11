'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { portfolioData } from '@/content/data';
import { AnimatedFolder } from '@/components/ui/3d-folder';

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 pb-6 border-b border-white/5 w-full"
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase shrink-0">
                            Case Studies
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <h2 className="text-xl font-black text-white">
                            Selected Works.
                        </h2>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white hover:gap-5 transition-all group"
                    >
                        View All Archives <ArrowRight className="w-4 h-4 text-accent" />
                    </motion.button>
                </div>

                <div className="flex flex-wrap justify-center gap-12">
                    <AnimatedFolder
                        title="Web Applications"
                        projects={portfolioData.projects.map((p, i) => ({ id: String(i), image: p.image, title: p.title }))}
                    />
                    <AnimatedFolder
                        title="Design Systems"
                        projects={[
                            { id: "d1", image: "/projects/alpha.png", title: "Project Alpha" },
                            { id: "d2", image: "/projects/beta.png", title: "Project Beta" },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};
