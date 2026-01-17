'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface PhoneMockupProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ src, alt, className = '', priority = false }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-[280px] h-[580px] mx-auto cursor-pointer ${className}`}
        >
            {/* Phone Body */}
            <div
                className="absolute inset-0 bg-gray-900 rounded-[3rem] border-[6px] border-gray-800 shadow-2xl"
                style={{ transform: "translateZ(20px)" }}
            >
                {/* Side Buttons */}
                <div className="absolute top-24 -left-1 w-1 h-7 bg-gray-700 rounded-l-md" />
                <div className="absolute top-36 -left-1 w-1 h-14 bg-gray-700 rounded-l-md" />
                <div className="absolute top-36 -right-1 w-1 h-14 bg-gray-700 rounded-r-md" />

                {/* Screen Container */}
                <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-24 bg-black z-20 rounded-b-xl flex justify-center items-end pb-1">
                        <div className="w-12 h-1 bg-gray-800/50 rounded-full" />
                    </div>

                    {/* Main Image */}
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                        fetchPriority={priority ? "high" : "auto"}
                    />

                    {/* Reflections */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
                </div>
            </div>

            {/* Depth Layers (Sides) */}
            <div
                className="absolute inset-0 bg-gray-800 rounded-[3rem]"
                style={{ transform: "translateZ(0px)" }}
            />

            {/* Shadow */}
            <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/40 blur-xl rounded-full"
                style={{ transform: "translateZ(-20px) rotateX(90deg)" }}
            />
        </motion.div>
    );
};

export default PhoneMockup;
