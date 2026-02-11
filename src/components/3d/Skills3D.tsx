'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
    Float,
    Text,
    MeshTransmissionMaterial,
    PerspectiveCamera,
    Environment,
    Html,
    Box,
} from '@react-three/drei';
import * as THREE from 'three';
import * as SiIcons from 'react-icons/si';
import { portfolioData } from '@/content/data';

const SkillNode = ({ skill, index, total }: { skill: any; index: number; total: number }) => {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Calculate orbital path based on category
    const radius = useMemo(() => {
        switch (skill.category) {
            case 'Frontend': return 3;
            case 'Design': return 4.5;
            case 'CMS': return 4.5;
            case 'Backend': return 6;
            case 'Growth': return 7.5;
            case 'Tools': return 7.5;
            default: return 5;
        }
    }, [skill.category]);

    const speed = useMemo(() => 0.2 + Math.random() * 0.3, []);
    const offset = useMemo(() => (index / total) * Math.PI * 2, [index, total]);
    const verticalOffset = useMemo(() => (Math.random() - 0.5) * 4, []);

    const IconComponent = (SiIcons as any)[skill.icon];

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime() * speed + offset;

        // Circular orbit
        meshRef.current.position.x = Math.cos(t) * radius;
        meshRef.current.position.z = Math.sin(t) * radius;
        meshRef.current.position.y = Math.sin(t * 0.5) * 1 + verticalOffset;

        // Rotation
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Visual Glow Core */}
                <mesh
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={0.2}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.1}
                        distortionScale={0.1}
                        temporalDistortion={0.1}
                        color={hovered ? "#D4A574" : "#ffffff"}
                        emissive={hovered ? "#D4A574" : "#111"}
                        emissiveIntensity={hovered ? 2 : 0.2}
                        transparent
                        opacity={0.8}
                    />
                </mesh>

                {/* React Icon HTML Overlay */}
                <Html
                    center
                    distanceFactor={10}
                    className="pointer-events-none select-none"
                    style={{ transition: 'all 0.5s', opacity: hovered ? 1 : 0.6 }}
                >
                    <div className="flex flex-col items-center">
                        <div className={`p-3 rounded-full bg-background/60 backdrop-blur-md border border-white/10 ${hovered ? 'scale-125 border-accent/50' : ''}`}>
                            {IconComponent && <IconComponent className={`w-6 h-6 ${hovered ? 'text-white' : 'text-gray-400'}`} />}
                        </div>
                        {hovered && (
                            <div className="mt-2 px-2 py-0.5 rounded bg-accent/20 text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                                {skill.name}
                            </div>
                        )}
                    </div>
                </Html>
            </Float>
        </group>
    );
};

const SkillsGalaxy = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />

            <group rotation={[Math.PI / 8, 0, 0]}>
                {portfolioData.skills.map((skill, idx) => (
                    <SkillNode
                        key={skill.name}
                        skill={skill}
                        index={idx}
                        total={portfolioData.skills.length}
                    />
                ))}

                {/* Orbital Guide Rings */}
                {[3, 4.5, 6, 7.5].map((r, i) => (
                    <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[r, 0.005, 16, 100]} />
                        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
                    </mesh>
                ))}
            </group>

            <Environment preset="city" />
        </>
    );
};

export const Skills3D = () => {
    return (
        <div className="h-[600px] w-full relative">
            <Canvas dpr={[1, 2]}>
                <SkillsGalaxy />
            </Canvas>

            {/* Subtle Gradient Overlays for mobile/edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-x-0 bottom-0 py-8 flex justify-center">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] animate-pulse">
                    Interactive Galaxy Layer • Orbiting {portfolioData.skills.length} Nodes
                </p>
            </div>
        </div>
    );
};
