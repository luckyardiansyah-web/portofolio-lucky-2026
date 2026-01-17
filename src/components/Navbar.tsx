'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        {
            name: 'Projects',
            href: '#projects',
            dropdown: [
                { name: 'Website', href: '#projects-web' },
                { name: 'Mobile Apps', href: '#projects-mobile' },
                { name: 'Photography', href: '#projects-photo' },
                { name: 'Videography', href: '#projects-video' },
            ]
        },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            className={twMerge(
                'fixed z-50 transition-all duration-300 left-0 right-0 flex justify-center',
                scrolled ? 'top-4' : 'top-0'
            )}
        >
            <div
                className={twMerge(
                    "transition-all duration-300 relative",
                    scrolled
                        ? "w-[90%] md:w-[85%] max-w-5xl bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-full px-6 py-3"
                        : "w-full bg-transparent px-8 py-6"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                            <Sparkles size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                            Portfolio
                        </span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1" onMouseLeave={() => { setHoveredIndex(null); setActiveDropdown(null); }}>
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="relative">
                                <a
                                    href={link.href}
                                    className={twMerge(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 z-10",
                                        hoveredIndex === index ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300"
                                    )}
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        if (link.dropdown) setActiveDropdown(link.name);
                                        else setActiveDropdown(null);
                                    }}
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={twMerge(
                                                "transition-transform duration-300",
                                                activeDropdown === link.name ? "rotate-180" : ""
                                            )}
                                        />
                                    )}
                                </a>

                                {/* Sliding Pill Background */}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="navbar-pill"
                                        className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-full -z-0"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                {/* Desktop Dropdown */}
                                <AnimatePresence>
                                    {activeDropdown === link.name && link.dropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(5px)" }}
                                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                            exit={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(5px)" }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[200px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-gray-700 overflow-hidden p-2"
                                            onMouseEnter={() => setActiveDropdown(link.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div className="flex flex-col gap-1">
                                                {link.dropdown.map((item, i) => (
                                                    <motion.a
                                                        key={item.name}
                                                        href={item.href}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                                                    >
                                                        {item.name}
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Toggle & CTA */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden md:block px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-shadow"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Let's Talk
                        </motion.button>

                        <motion.button
                            className="md:hidden p-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                            onClick={() => setIsOpen(!isOpen)}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-24 px-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        href={link.href}
                                        onClick={() => !link.dropdown && setIsOpen(false)}
                                        className="text-3xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
                                    >
                                        {link.name}
                                    </a>

                                    {/* Mobile Dropdown Items */}
                                    {link.dropdown && (
                                        <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-100 dark:border-gray-800">
                                            {link.dropdown.map((sub, j) => (
                                                <motion.a
                                                    key={sub.name}
                                                    href={sub.href}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: (i * 0.1) + (j * 0.05) + 0.2 }}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block text-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                                                >
                                                    {sub.name}
                                                </motion.a>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
