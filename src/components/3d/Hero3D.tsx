'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';

export const Hero3D = () => {
    // Ultra minimal Canvas to isolate the 'alpha' error
    return (
        <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ pointerEvents: 'none' }}
        >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
    );
};
