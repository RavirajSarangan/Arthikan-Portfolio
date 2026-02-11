'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Github, Twitter, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/content/data';

const socialIconMap: Record<string, any> = {
    Linkedin,
    Github,
    Twitter,
};

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="flex items-center gap-4 pb-6 border-b border-white/5 mb-10">
                            <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase shrink-0">
                                Get in Touch
                            </span>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <h2 className="text-xl font-black text-white">
                                Let's build together.
                            </h2>
                        </div>

                        <p className="text-xl text-gray-400 mb-14 max-w-sm font-medium tracking-tight">
                            Available for high-impact collaborations and technical leadership roles.
                        </p>

                        <div className="space-y-8 mb-16">
                            <div className="flex items-center gap-6 text-white group cursor-pointer">
                                <div className="w-14 h-14 rounded-full glass border border-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1">Email Me</p>
                                    <p className="text-xl font-bold tracking-tight">{portfolioData.contact.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-white">
                                <div className="w-14 h-14 rounded-full glass border border-white/5 flex items-center justify-center text-accent">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-[0.2em] mb-1">Status</p>
                                    <p className="text-xl font-bold tracking-tight">Open for Freelance & Full-time</p>
                                </div>
                            </div>
                        </div>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-card p-12 rounded-[40px] border-transparent"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-all"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="How can I help you?"
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent/50 transition-all resize-none"
                                />
                            </div>
                            <button className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 rounded-2xl hover:bg-accent hover:text-white transition-all transform active:scale-[0.98]">
                                Send Message <Send className="w-3 h-3" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
