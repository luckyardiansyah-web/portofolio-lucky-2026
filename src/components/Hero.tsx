'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const profileImages = [
    "/assets/Lucky.png",
    "/assets/Lucky2.png",
    "/assets/Lucky3.png"
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="min-h-screen flex flex-col pt-20 md:pt-32 relative bg-white dark:bg-gray-950 overflow-x-hidden">

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-6 z-10 grow flex flex-col md:flex-row items-center gap-4 md:gap-20">

        {/* Left Column: Text */}
        <div className="flex-1 text-center md:text-left relative z-20">
          {/* "Hello There" Floating Box */}
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative md:absolute md:-top-16 md:left-0 md:translate-x-0 inline-block mb-4 md:mb-0 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-blue-600 border border-gray-900" />
            <div className="absolute -right-1.5 -top-1.5 w-3 h-3 bg-blue-600 border border-gray-900" />
            <div className="absolute -left-1.5 -bottom-1.5 w-3 h-3 bg-blue-600 border border-gray-900" />
            <div className="absolute -right-1.5 -bottom-1.5 w-3 h-3 bg-blue-600 border border-gray-900" />
            <span className="font-bold text-gray-900 dark:text-white text-sm md:text-base">Hello, World!</span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-4 md:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I'm <span className="relative inline-block text-blue-800 underline decoration-4 underline-offset-8 decoration-gray-900 dark:decoration-white">Lucky</span>,<br />
            Ardiansyah<br />
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An Information Technology student at Brawijaya University with interests in the creative, IT, and digital fields. <br />
            Focusing on <span className="font-semibold text-gray-900 dark:text-gray-200">Web Development</span>, <span className="font-semibold text-gray-900 dark:text-gray-200">UI/UX Design</span>, <span className="font-semibold text-gray-900 dark:text-gray-200">Photography</span>, and <span className="font-semibold text-gray-900 dark:text-gray-200">Videography</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start items-center w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#projects" className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center">
              View My Portfolio
              <span className="bg-blue-500 text-gray-900 rounded-full p-1 group-hover:rotate-90 transition-transform duration-300">
                <Play size={16} fill="currentColor" />
              </span>
            </a>
            <a href="#contact" className="px-6 md:px-8 py-3 md:py-4 border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold text-base md:text-lg text-gray-900 dark:text-white hover:border-gray-900 dark:hover:border-white transition-colors w-full sm:w-auto text-center">
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image & Decorations */}
        <div className="relative w-full h-[70vw] min-h-[300px] max-h-[450px] md:flex-1 md:h-150 md:max-h-none md:min-h-0 lg:h-175 flex items-end justify-center shrink-0">

          {/* Organic Background Shape */}
          <motion.div
            className="absolute inset-[5%] md:inset-0 bg-linear-to-r from-blue-600 to-[#222281] dark:from-blue-400 dark:to-[#222281] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] z-0"
            animate={{
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Profile Image (Cutout style) */}
          <motion.div
            className="relative z-10 w-[85%] md:w-[80%] h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}
              >
                <Image
                  src={profileImages[currentImageIndex]}
                  alt="Lucky Ardiansyah"
                  fill
                  sizes="(max-width: 768px) 80vw, 50vw"
                  className="object-contain object-bottom"
                  priority={currentImageIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Floating Badges */}
          <FloatingBadge
            text="Full Stack Developer"
            color="bg-purple-100 text-purple-800"
            icon={<MousePointer2 size={16} className="text-purple-600" fill="currentColor" />}
            className="top-4 md:top-20 left-0 md:left-10"
            delay={0.5}
          />

          <FloatingBadge
            text="Photographer"
            color="bg-purple-100 text-purple-800"
            icon={<MousePointer2 size={16} className="text-purple-600" fill="currentColor" />}
            className="bottom-12 md:bottom-32 right-0 md:right-10"
            delay={0.7}
          />

          <FloatingBadge
            text="UI/UX Designer"
            color="bg-blue-100 text-blue-800"
            icon={<MousePointer2 size={16} className="text-blue-600" fill="currentColor" />}
            className="top-1/3 -right-2 md:-right-12"
            delay={0.9}
          />

          <FloatingBadge
            text="Videographer"
            color="bg-violet-100 text-violet-800"
            icon={<MousePointer2 size={16} className="text-violet-600" fill="currentColor" />}
            className="top-1/2 -left-2 md:-left-10"
            delay={0.9}
          />

          {/* Circular Stamp */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 md:top-10 -right-2 md:-right-10 w-16 h-16 md:w-32 md:h-32 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center p-2 z-20 shadow-xl"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-spin-slow">
                <path
                  id="textPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="text-[14px] font-bold uppercase tracking-widest fill-white dark:fill-gray-900">
                  <textPath href="#textPath" startOffset="0%">
                    Hire Me • Open to Work •
                  </textPath>
                </text>
              </svg>
              <div className="w-8 h-8 bg-blue-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="w-full bg-blue-900 py-4 md:py-6 overflow-hidden scale-105 mt-8 md:mt-0">
        <motion.div
          className="flex whitespace-nowrap text-lg md:text-2xl font-black text-white uppercase tracking-wider"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-8">Web Development</span>
              <span className="mx-8 text-white">❋</span>
              <span className="mx-8">Photography</span>
              <span className="mx-8 text-white">❋</span>
              <span className="mx-8">Videography</span>
              <span className="mx-8 text-white">❋</span>
              <span className="mx-8">UI/UX Design</span>
              <span className="mx-8 text-white">❋</span>
              <span className="mx-8">Mobile App</span>
              <span className="mx-8 text-white">❋</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FloatingBadge = ({ text, color, icon, className, delay }: { text: string, color: string, icon: React.ReactNode, className: string, delay: number }) => (
  <motion.div
    className={`absolute ${className} z-20 block`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", delay }}
  >
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      className={`flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg ${color} font-bold text-xs md:text-sm border-2 border-white dark:border-gray-900`}
    >
      <div className={`p-0.5 md:p-1 bg-white rounded-full`}>
        {icon}
      </div>
      <span className="text-[10px] sm:text-sm">{text}</span>
    </motion.div>
  </motion.div>
);

export default Hero;