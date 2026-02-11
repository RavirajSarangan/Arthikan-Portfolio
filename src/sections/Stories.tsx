"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Plus, User } from "lucide-react";
import { StoryViewer } from "@/components/ui/story-viewer";
import { cn } from "@/lib/utils";

function AddStoryButton() {
    return (
        <button
            className={cn(
                "relative flex flex-col items-center gap-2 group cursor-pointer"
            )}
            aria-label="Add your story"
        >
            <div className="relative">
                <div className="w-[72px] h-[72px] rounded-full p-1 border border-white/5 bg-white/5">
                    <div
                        className={cn(
                            "w-full h-full rounded-full flex items-center justify-center",
                            "border border-dashed border-white/20",
                            "bg-white/5 transition-all duration-500",
                            "group-hover:border-white/40 group-hover:bg-white/10"
                        )}
                    >
                        <User className="w-6 h-6 text-white/20 group-hover:text-white/40 transition-colors" />
                    </div>
                </div>
                <motion.div
                    className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg border-2 border-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Plus className="w-3 h-3 text-white" strokeWidth={3} />
                </motion.div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 truncate max-w-[80px]">
                Create
            </span>
        </button>
    );
}

const storiesData = [
    {
        username: "Elite UI",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=EliteUI",
        timestamp: "25m ago",
        stories: [
            { id: "ui-1", type: "image" as const, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800&h=1400" },
            { id: "ui-2", type: "video" as const, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
            { id: "ui-3", type: "image" as const, src: "https://images.unsplash.com/photo-1614850523296-62c09ff53941?auto=format&fit=crop&q=80&w=800&h=1400" },
        ],
    },
    {
        username: "3D Core",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=3DCore",
        timestamp: "2h ago",
        stories: [
            { id: "3d-1", type: "video" as const, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
            { id: "3d-2", type: "image" as const, src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=1400" },
        ],
    },
    {
        username: "Systems",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Systems",
        timestamp: "5h ago",
        stories: [
            { id: "sys-1", type: "image" as const, src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=1400" },
            { id: "sys-2", type: "video" as const, src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
        ],
    },
    {
        username: "Motion",
        avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Motion",
        timestamp: "8h ago",
        stories: [
            { id: "mot-1", type: "image" as const, src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800&h=1400" },
        ],
    },
];

export const Stories = () => {
    return (
        <section id="stories" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 pb-6 border-b border-white/5"
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.2em] uppercase shrink-0">
                            Daily Feed
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <h2 className="text-xl font-black text-white">
                            Latest Insights.
                        </h2>
                    </motion.div>
                </div>

                <div className="flex gap-6 overflow-x-auto py-8 px-2 [&::-webkit-scrollbar]:hidden group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <AddStoryButton />
                    </motion.div>

                    {storiesData.map((user, idx) => (
                        <motion.div
                            key={user.username}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <StoryViewer
                                stories={user.stories}
                                username={user.username}
                                avatar={user.avatar}
                                timestamp={user.timestamp}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
