'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ProjectGallery, { GalleryItem } from './ProjectGallery';
import PhoneMockup from './PhoneMockup';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Tech Stack Icons Map
  const techIcons: { [key: string]: string } = {
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'Dart': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  };

  // 1. Website Projects Data
  const webProjects = [
    {
      title: 'LuckyQuiz',
      description: 'An interactive quiz application with real-time scoring, multiple categories, and user progress tracking.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'Full Stack Web App',
      liveUrl: 'https://luckyquiz.vercel.app',
      images: [
        '/project_images/LuckyQuiz_1.png',
        '/project_images/LuckyQuiz_2.png',
        '/project_images/LuckyQuiz_3.png',
        '/project_images/LuckyQuiz_4.png',
        '/project_images/LuckyQuiz_5.png',
        '/project_images/LuckyQuiz_6.png',
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive maps.',
      tech: ['Vue.js', 'JavaScript', 'Node.js'],
      category: 'Dashboard & Analytics',
      liveUrl: '#',
      images: ['https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80']
    }
  ];

  // 2. Mobile App Projects Data
  const mobileProjects = [
    {
      title: 'Task Master App',
      description: 'A productivity app for prioritizing tasks with gesture-based controls and offline sync.',
      tech: ['React Native', 'Firebase', 'Redux'],
      category: 'Productivity App',
      liveUrl: '#',
      images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80']
    },
    {
      title: 'Fitness Tracker',
      description: 'Health monitoring application tracking steps, calories, and workout routines.',
      tech: ['Flutter', 'HealthKit', 'Dart'],
      category: 'Health & Fitness',
      liveUrl: '#',
      images: ['https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&q=80']
    }
  ];

  // 3. Photography Data
  const photographyItems: GalleryItem[] = [
    // Stage Photography
    { id: 'p1', type: 'photo', title: 'Nadin Amizah', category: 'Stage Photography', src: 'images/LUC08567.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p2', type: 'photo', title: 'Nadin Amizah', category: 'Stage Photography', src: 'images/DSCF6318.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p3', type: 'photo', title: 'Barasuara', category: 'Stage Photography', src: 'images/DSCF6385.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p4', type: 'photo', title: 'Barasuara', category: 'Stage Photography', src: 'images/LUC08723.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p5', type: 'photo', title: 'Tulus', category: 'Stage Photography', src: 'images/DSCF6903.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p6', type: 'photo', title: 'Tulus', category: 'Stage Photography', src: 'images/LUC08874.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p7', type: 'photo', title: 'Drizzly', category: 'Stage Photography', src: 'images/LUC08294.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p8', type: 'photo', title: 'Ari Lesmana', category: 'Stage Photography', src: 'images/DSCF5858.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p9', type: 'photo', title: 'Bernadya', category: 'Stage Photography', src: 'images/FRS00855.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p10', type: 'photo', title: 'Bernadya', category: 'Stage Photography', src: 'images/FRS01001.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p11', type: 'photo', title: 'Hindia', category: 'Stage Photography', src: 'images/FRS01594.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p12', type: 'photo', title: 'Hindia', category: 'Stage Photography', src: 'images/FRS01623.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },


    // Wedding
    { id: 'p21', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: 'images/ZKA00776.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p22', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: 'images/ZKA01197.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p23', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: 'images/ZKA00868.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p24', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: 'images/ZKA00800.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p25', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: 'images/ZKA00822.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p26', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: 'images/AAI00425.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p27', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: 'images/AAI00440.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p28', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: 'images/AAI00504.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p29', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: 'images/AAI00958.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p30', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: 'images/AAI00917.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p31', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: 'images/FRS09375.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p32', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: 'images/FRS09360.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p33', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: 'images/FRS09432.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p34', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: 'images/FRS09465.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p35', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: 'images/FRS09506.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
  ];

  // 4. Videography Data
  const videographyItems: GalleryItem[] = [
    { id: 'v1', type: 'video', title: 'After Movie RAJA Brawijaya 2024', category: 'Aftermovie', src: 'https://img.youtube.com/vi/Fnpda4PMJKU/maxresdefault.jpg', description: 'After Movie RAJA Brawijaya 2024', videoUrl: 'https://youtu.be/Fnpda4PMJKU?si=VxMdWVvGWK42nNjP' },
    { id: 'v2', type: 'video', title: 'Elare', category: 'Commercial Product', src: 'https://scontent.cdninstagram.com/v/t51.29350-15/470925395_1111992610634730_1859033913652732639_n.jpg', description: 'Commercial Product - Elare', videoUrl: 'https://www.instagram.com/reel/DDZnuc4P6kU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 'v3', type: 'video', title: 'After Movie Rasvara Festival 2025', category: 'Aftermovie', src: 'https://scontent.cdninstagram.com/v/t51.29350-15/472044738_1110754830816859_4829464476464949092_n.jpg', description: 'After Movie Rasvara Festival 2025', videoUrl: 'https://www.instagram.com/reel/DKEalpKA0Zk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ];

  return (
    <div id="projects" className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

      {/* 1. Website Projects Section */}
      <section id="projects-web" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <Monitor size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Website Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                techIcons={techIcons}
                onImageClick={(projIndex, imgIndex) => {
                  setSelectedProject(projIndex);
                  setCurrentImageIndex(imgIndex);
                }}
                themeColor="blue"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mobile App Projects Section */}
      <section id="projects-mobile" className="py-12 md:py-24 px-4 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <Smartphone size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mobile Apps</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                techIcons={techIcons}
                onImageClick={(projIndex, imgIndex) => {
                  setSelectedProject(webProjects.length + projIndex);
                  setCurrentImageIndex(imgIndex);
                }}
                themeColor="purple"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Photography Section */}
      <section id="projects-photo" className="px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectGallery
            title="Photography"
            subtitle="Capturing moments through the lens. Focusing on urban landscapes, street photography, and portraits."
            items={photographyItems}
          />
        </div>
      </section>

      {/* 4. Videography Section */}
      <section id="projects-video" className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <ProjectGallery
            title="Videography"
            subtitle="Telling stories through motion. Commercials, travel films, and event coverage."
            items={videographyItems}
          />
        </div>
      </section>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200 z-10"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
              {/* Get current project images */}
              {(() => {
                const allProjects = [...webProjects, ...mobileProjects];
                const project = allProjects[selectedProject];
                if (!project) return null;

                return (
                  <>
                    {/* Main Image */}
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />

                    {/* Navigation Arrows */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) =>
                            prev === 0 ? project.images.length - 1 : prev - 1
                          )}
                          aria-label="Previous image"
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                        >
                          <ChevronLeft size={32} className="text-white" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) =>
                            prev === project.images.length - 1 ? 0 : prev + 1
                          )}
                          aria-label="Next image"
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                        >
                          <ChevronRight size={32} className="text-white" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm font-medium">
                          {currentImageIndex + 1} / {project.images.length}
                        </div>
                      </>
                    )}

                    {/* Project Title */}
                    <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 rounded-lg backdrop-blur-sm">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    </div>
                  </>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;