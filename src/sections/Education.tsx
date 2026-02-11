'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import { portfolioData } from '@/content/data';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
    const timelineData = (portfolioData.education || []).map((item, index) => ({
        title: item.period,
        content: (
            <div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                        <div className="p-3 rounded-2xl bg-white/[0.05] text-accent group-hover:scale-110 transition-transform duration-500">
                            {index === 0 ? <GraduationCap size={24} /> : <Award size={24} />}
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.degree}
                    </h3>
                    <p className="text-accent/80 font-medium mb-4">
                        {item.institution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                    </p>
                </div>
            </div>
        ),
    }));

    return (
        <section id="education" className="relative overflow-hidden">
            <Timeline data={timelineData} />
        </section>
    );
};
