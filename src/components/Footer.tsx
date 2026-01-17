import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
                            Lucky Ardiansyah
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Lucky Ardiansyah. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
