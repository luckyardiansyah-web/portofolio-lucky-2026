'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ src, alt, className = '', priority = false }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ width: '300px', height: '600px' }}>
            {/* Phone Frame */}
            <motion.div
                className="relative h-full w-full bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
            >
                {/* Buttons */}
                <div className="absolute top-24 -left-3 w-1 h-7 bg-gray-800 rounded-l-md" />
                <div className="absolute top-36 -left-3 w-1 h-16 bg-gray-800 rounded-l-md" />
                <div className="absolute top-36 -right-3 w-1 h-16 bg-gray-800 rounded-r-md" />

                {/* Screen Content */}
                <div className="relative w-full h-full bg-black overflow-hidden rounded-[2.5rem]">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black z-20 rounded-b-2xl flex justify-center items-center">
                        <div className="h-2 w-16 bg-gray-800/50 rounded-full" />
                    </div>

                    {/* Image */}
                    <motion.img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        fetchPriority={priority ? "high" : "auto"}
                    />

                    {/* Screen Reflection Gradient (subtle) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2.5rem]" />
                </div>
            </motion.div>

            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full" />
        </div>
    );
};

export default PhoneMockup;
