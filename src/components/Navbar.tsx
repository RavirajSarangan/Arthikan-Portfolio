'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Briefcase } from 'lucide-react';
import { portfolioData } from '@/content/data';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-8',
                isScrolled ? 'py-4' : 'bg-transparent'
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500",
                isScrolled && "glass px-6 py-3 rounded-full border-white/5 shadow-2xl shadow-black/50"
            )}>
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-black tracking-tighter text-white group"
                >
                    Arthi<span className="text-accent transition-all group-hover:ml-1">.</span>dev
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {portfolioData.navLinks.map((link, idx) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all transform hover:scale-105"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest shadow-xl shadow-white/5 transition-all hover:bg-accent hover:text-white"
                    >
                        <Briefcase className="w-3 h-3" />
                        Hire Me
                    </motion.button>

                    <motion.a
                        href="/cv.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">CV</span>
                            <Download className="w-3.5 h-3.5 text-white" />
                        </div>
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white p-2 relative z-[60]"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-50 md:hidden bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12"
                    >
                        {portfolioData.navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <button onClick={() => { setIsMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="mt-8 px-12 py-4 rounded-full bg-white text-black font-black uppercase tracking-widest">
                            Hire Me
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
