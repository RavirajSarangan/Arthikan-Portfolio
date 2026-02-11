"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnergyBeamProps {
    projectId?: string;
    className?: string;
    onLoad?: () => void;
}

declare global {
    interface Window {
        UnicornStudio?: any;
    }
}

const EnergyBeam: React.FC<EnergyBeamProps> = ({
    projectId = "hRFfUymDGOHwtFe7evR2",
    className = "",
    onLoad
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        const loadScript = () => {
            if (scriptLoadedRef.current) return;

            // Check if already in head
            if (document.querySelector('script[src*="unicornStudio"]')) {
                scriptLoadedRef.current = true;
                if (window.UnicornStudio) {
                    window.UnicornStudio.init().then(() => {
                        setIsLoaded(true);
                        onLoad?.();
                    });
                }
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
            script.async = true;

            script.onload = () => {
                scriptLoadedRef.current = true;
                if (window.UnicornStudio && containerRef.current) {

                    const isMobile = window.innerWidth < 768;
                    const canvas = document.createElement('canvas');
                    const glSupported = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));

                    if (!glSupported || isMobile) {
                        console.warn('Skipping EnergyBeam: WebGL unsupported or mobile device.');
                        setIsLoaded(true);
                        onLoad?.();
                        return;
                    }

                    window.UnicornStudio.init().then(() => {
                        // Small delay to ensure WebGL context is ready before fading in
                        setTimeout(() => {
                            setIsLoaded(true);
                            onLoad?.();
                        }, 100);
                    }).catch((err: any) => {
                        console.error('Unicorn Studio initialization failed:', err);
                        setIsLoaded(true);
                        onLoad?.();
                    });
                }
            };

            document.head.appendChild(script);

            return () => {
                // We keep the script in head for performance across navigation, 
                // but handle unloading logic if absolutely necessary.
            };
        };

        loadScript();
    }, [projectId]);

    return (
        <div className={`relative w-full h-screen bg-background overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full"
            >
                <div
                    ref={containerRef}
                    data-us-project={projectId}
                    className="w-full h-full"
                />
            </motion.div>

            {/* Dark wash for premium feel */}
            <div className="absolute inset-0 bg-background/20 pointer-events-none" />
        </div>
    );
};

export default EnergyBeam;
