"use client";

import React from "react";
import { motion } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/hover-text-effect";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { portfolioData } from "@/content/data";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    LinkedIn: FaLinkedinIn,
    GitHub: FaGithub,
    Twitter: FaXTwitter,
};


export const Footer = () => {
    return (
        <footer className="relative bg-background overflow-hidden border-t border-white/5">
            {/* TextHoverEffect Hero */}
            <div className="relative py-12 md:py-16">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="h-[10rem] md:h-[14rem] flex items-center justify-center">
                        <TextHoverEffect text="ARTHI.DEV" duration={0.2} />
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-6 pb-12">
                {/* Socials & Info in a single elegant row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="text-xl font-bold tracking-tighter">
                            Arthi<span className="text-accent">.</span>dev
                        </div>
                        <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
                            © 2026 Arthikan Vettivel.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {portfolioData.contact.socials.map((social) => {
                            const Icon = socialIcons[social.name];
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:border-accent/30 transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    {Icon && (
                                        <Icon className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" />
                                    )}
                                    <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            );
                        })}
                    </div>

                    <a
                        href="#home"
                        className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-700 hover:text-white transition-colors duration-300"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};
