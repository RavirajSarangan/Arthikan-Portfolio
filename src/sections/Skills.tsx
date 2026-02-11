'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { portfolioData } from '@/content/data';
import { cn } from '@/lib/utils';

export const Skills = () => {
    // Split skills into three groups for a richer 3-layer experience
    const totalSkills = portfolioData.skills.length;
    const third = Math.ceil(totalSkills / 3);

    const row1 = portfolioData.skills.slice(0, third);
    const row2 = portfolioData.skills.slice(third, third * 2);
    const row3 = portfolioData.skills.slice(third * 2);

    const SkillIcon = ({ skill }: { skill: any }) => {
        const IconComponent = (SiIcons as any)[skill.icon];
        return (
            <div className="flex items-center gap-3 px-8 py-4 glass-card group hover:border-accent/30 transition-all duration-500 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {IconComponent ? (
                        <IconComponent className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    ) : (
                        <div className="w-4 h-4 bg-white/10 rounded-full" />
                    )}
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-white whitespace-nowrap">{skill.name}</span>
                    <span className="text-[8px] text-gray-600 font-black uppercase tracking-wider">{skill.category}</span>
                </div>
            </div>
        );
    };

    return (
        <section id="skills" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 pb-6 border-b border-white/5"
                >
                    <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase shrink-0">
                        Technical Mastery
                    </span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <h2 className="text-xl font-black text-white">
                        Core Stack.
                    </h2>
                </motion.div>
            </div>

            {/* 3-Layer Infinite Marquee */}
            <div className="flex flex-col gap-4 relative">
                {/* Row 1: Forward (Medium) */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 animate-marquee-medium hover:[animation-play-state:paused]">
                        {[...row1, ...row1, ...row1, ...row1].map((skill, idx) => (
                            <SkillIcon key={`${skill.name}-r1-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Reverse (Slow) */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 animate-marquee-slow-reverse hover:[animation-play-state:paused]">
                        {[...row2, ...row2, ...row2, ...row2].map((skill, idx) => (
                            <SkillIcon key={`${skill.name}-r2-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Row 3: Forward (Fast) */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-4 animate-marquee-fast hover:[animation-play-state:paused]">
                        {[...row3, ...row3, ...row3, ...row3].map((skill, idx) => (
                            <SkillIcon key={`${skill.name}-r3-${idx}`} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Decorative Side Gradients to Fade the Edge */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent/10 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        </section>
    );
};
