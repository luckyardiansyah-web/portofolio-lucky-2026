'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    category: string;
    liveUrl: string;
    images: string[];
  };
  index: number;
  techIcons: { [key: string]: string };
  onImageClick: (projectIndex: number, imageIndex: number) => void;
  themeColor: 'blue' | 'purple';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  techIcons, 
  onImageClick,
  themeColor 
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  // Auto slide effect
  useEffect(() => {
    if (!isAutoPlaying || project.images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlideIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, project.images.length, isHovered]);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentSlideIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentSlideIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (e: React.MouseEvent, i: number) => {
    e.stopPropagation();
    setDirection(i > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(i);
  };

  const toggleAutoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Swipe gesture handlers
  const handleSwipe = (swipeDirection: number) => {
    if (swipeDirection > 0) {
      // Swiped left, go to next
      setDirection(1);
      setCurrentSlideIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    } else {
      // Swiped right, go to previous
      setDirection(-1);
      setCurrentSlideIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  // Fade animation variants
  const fadeVariants = {
    enter: {
      opacity: 0
    },
    center: {
      zIndex: 1,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      opacity: 0
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const colorClasses = {
    blue: {
      badge: 'from-blue-500 via-cyan-500 to-blue-500 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-400',
      badgeContent: 'from-blue-600 via-cyan-600 to-blue-600 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-500',
      tech: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300',
      button: 'from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500'
    },
    purple: {
      badge: 'from-purple-500 via-pink-500 to-purple-500 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400',
      badgeContent: 'from-purple-600 via-pink-600 to-purple-600 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500',
      tech: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300',
      button: 'from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500'
    }
  };

  const colors = colorClasses[themeColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.1 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative overflow-hidden h-64">
        {/* Image Slider */}
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentSlideIndex}
              src={project.images[currentSlideIndex]}
              alt={`${project.title} - ${currentSlideIndex + 1}`}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.3, ease: "easeInOut" }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  handleSwipe(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  handleSwipe(-1);
                }
              }}
              className="absolute w-full h-full object-cover cursor-grab active:cursor-grabbing"
            />
          </AnimatePresence>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Preview button */}
          <button
            onClick={() => onImageClick(index, currentSlideIndex)}
            aria-label={`Preview ${project.title} images`}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-xl"
            >
              <Maximize2 size={24} className="text-gray-900 dark:text-white" />
            </motion.div>
          </button>
          
          {/* Navigation arrows - only show if multiple images */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-700 z-10"
              >
                <ChevronLeft size={20} className="text-gray-900 dark:text-white" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-700 z-10"
              >
                <ChevronRight size={20} className="text-gray-900 dark:text-white" />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => handleDotClick(e, i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentSlideIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
              
              {/* Play/Pause button */}
              <button
                onClick={toggleAutoPlay}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className="absolute top-4 left-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-700 z-10"
              >
                {isAutoPlaying ? (
                  <Pause size={16} className="text-gray-900 dark:text-white" />
                ) : (
                  <Play size={16} className="text-gray-900 dark:text-white" />
                )}
              </button>
            </>
          )}
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: themeColor === 'blue' ? 2 : -2 }}
            className="relative group/badge"
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-linear-to-r ${colors.badge} rounded-full blur-sm opacity-75 group-hover/badge:opacity-100 animate-gradient-x transition-opacity duration-300`}></div>
            
            {/* Badge content */}
            <span className={`relative block px-4 py-2 bg-linear-to-r ${colors.badgeContent} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm`}>
              {project.category}
            </span>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, i) => (
            <div 
              key={i}
              className={`flex items-center gap-2 px-3 py-2 ${colors.tech} border rounded-lg hover:scale-105 transition-transform duration-200`}
            >
              {techIcons[tech] && (
                <img 
                  src={techIcons[tech]} 
                  alt={tech}
                  className="w-5 h-5"
                />
              )}
              <span className="text-sm font-medium">
                {tech}
              </span>
            </div>
          ))}
        </div>
        
        <motion.a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative group/button overflow-hidden flex items-center justify-center gap-2 w-full py-3 px-6 bg-linear-to-r ${colors.button} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
          
          {/* Button content */}
          <ExternalLink size={20} className="relative z-10" />
          <span className="relative z-10">View Live Demo</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
