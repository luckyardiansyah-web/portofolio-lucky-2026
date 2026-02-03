'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';

export interface GalleryItem {
    id: string;
    type: 'photo' | 'video';
    src: string;
    title: string;
    description?: string;
    category?: string;
    thumbnail?: string; // For videos
    videoUrl?: string; // YouTube or external video URL
}

interface ProjectGalleryProps {
    title: string;
    subtitle?: string;
    items: GalleryItem[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ title, subtitle, items }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(items.map(item => item.category).filter(Boolean))) as string[]];

    // Filter items based on selected category
    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="py-12">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
                {subtitle && (
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">{subtitle}</p>
                )}

                {/* Category Tabs */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                <AnimatePresence mode='popLayout'>
                    {filteredItems.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 120,
                                delay: index * 0.05 // Stagger effect
                            }}
                            key={item.id}
                            layoutId={`card-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-gray-100 dark:bg-gray-800"
                            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                        >
                            {item.type === 'photo' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="relative aspect-video">
                                    <img
                                        src={item.src || item.thumbnail} // Fallback for video thumbnail
                                        alt={item.title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg backdrop-blur-sm"
                                        >
                                            <Play size={24} className="text-gray-900" fill="currentColor" />
                                        </motion.div>
                                    </div>
                                </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                {item.category && <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white/90 text-xs font-medium w-fit">{item.category}</span>}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>


            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl z-10 relative pointer-events-auto"
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full z-20 backdrop-blur transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {items.find(i => i.id === selectedId)?.type === 'photo' ? (
                                <img
                                    src={items.find(i => i.id === selectedId)?.src}
                                    alt={items.find(i => i.id === selectedId)?.title}
                                    className="w-full max-h-[80vh] object-contain bg-black"
                                />
                            ) : (() => {
                                const selectedItem = items.find(i => i.id === selectedId);
                                const videoUrl = selectedItem?.videoUrl;

                                // Convert YouTube URL to embed format
                                const getYouTubeEmbedUrl = (url: string) => {
                                    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
                                    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
                                };

                                // Convert Instagram URL to embed format
                                const getInstagramEmbedUrl = (url: string) => {
                                    // Extract the reel ID from Instagram URL
                                    const reelMatch = url.match(/instagram\.com\/reel\/([^/?]+)/);
                                    return reelMatch ? `https://www.instagram.com/reel/${reelMatch[1]}/embed` : null;
                                };

                                // Detect platform and get embed URL
                                let embedUrl = null;
                                let isInstagram = false;

                                if (videoUrl) {
                                    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                                        embedUrl = getYouTubeEmbedUrl(videoUrl);
                                    } else if (videoUrl.includes('instagram.com')) {
                                        embedUrl = getInstagramEmbedUrl(videoUrl);
                                        isInstagram = true;
                                    }
                                }

                                return (
                                    <div className={`w-full bg-black ${isInstagram ? 'aspect-[9/16] max-h-[80vh]' : 'aspect-video'}`}>
                                        {embedUrl ? (
                                            <iframe
                                                src={embedUrl}
                                                title={selectedItem?.title}
                                                className="w-full h-full mx-auto"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-white">
                                                <div className="text-center">
                                                    <Play size={48} className="mx-auto mb-4 opacity-50" />
                                                    <p>Video Player</p>
                                                    {videoUrl && (
                                                        <a
                                                            href={videoUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                                                        >
                                                            <ExternalLink size={16} />
                                                            Watch Video
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })()}

                            <div className="p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {items.find(i => i.id === selectedId)?.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {items.find(i => i.id === selectedId)?.description || "No description available."}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectGallery;
