'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    'Golang': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Neo4j': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg',
    'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    'RabbitMQ': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
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
      description: 'An interactive quiz application with real-time scoring, multiple categories, and user progress tracking. Engaging UI with animations and responsive design. You can use username/password: admin/admin to login as a guest user.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'Frontend Web App',
      liveUrl: 'https://luckyquiz.vercel.app',
      status: 'live' as const,
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
      title: 'Jalan Kerja by Smartlink',
      description: 'A comprehensive task management platform for managing tasks, customer issues, worksheets, and team collaboration with real-time updates.',
      tech: ['Next.js', 'React', 'TypeScript', 'Golang', 'Neo4j', 'PostgreSQL', 'Redux', 'Tailwind CSS'],
      category: 'Enterprise Web App',
      liveUrl: '#',
      status: 'live' as const,
      images: [
        '/project_images/JalanKerja_1.png',
        '/project_images/JalanKerja_2.png',
        '/project_images/JalanKerja_3.png',
        '/project_images/JalanKerja_4.png',
        '/project_images/JalanKerja_5.png',
        '/project_images/JalanKerja_6.png',
        '/project_images/JalanKerja_7.png',
        '/project_images/JalanKerja_8.png',
        '/project_images/JalanKerja_9.png',
        '/project_images/JalanKerja_10.png',
      ]
    },
    {
      title: 'Aglimpse Cinema',
      description: 'A Netflix-style streaming platform showcasing movie and TV show trailers with advanced filtering, search, and personalized recommendations.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      category: 'Entertainment Platform',
      liveUrl: '#',
      status: 'development' as const,
      images: [
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&q=80',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      ]
    },
    {
      title: 'BoltTicket',
      description: 'High-performance ticketing platform designed to handle massive concurrent traffic during flash sales. Features queue management, rate limiting, and real-time inventory updates for thousands of simultaneous users.',
      tech: ['Next.js', 'TypeScript', 'Golang', 'Redis', 'PostgreSQL', 'RabbitMQ'],
      category: 'High-Traffic E-Commerce',
      liveUrl: '#',
      status: 'development' as const,
      images: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80',
      ]
    },
    {
      title: 'Clover Trade',
      description: 'Real-time stock market investment platform with live price tracking, portfolio management, market analytics, and trading simulations. Features interactive charts and personalized investment insights.',
      tech: ['Next.js', 'React', 'TypeScript', 'Python', 'PostgreSQL', 'Redux', 'Tailwind CSS'],
      category: 'FinTech Platform',
      liveUrl: '#',
      status: 'development' as const,
      images: [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
      ]
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
      status: 'development' as const,
      images: ['https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80']
    },
    {
      title: 'Fitness Tracker',
      description: 'Health monitoring application tracking steps, calories, and workout routines.',
      tech: ['Flutter', 'HealthKit', 'Dart'],
      category: 'Health & Fitness',
      liveUrl: '#',
      status: 'development' as const,
      images: ['https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&q=80']
    }
  ];

  // 3. Photography Data
  const photographyItems: GalleryItem[] = [
    // Stage Photography
    { id: 'p1', type: 'photo', title: 'Nadin Amizah', category: 'Stage Photography', src: '/images/LUC08567.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p2', type: 'photo', title: 'Nadin Amizah', category: 'Stage Photography', src: '/images/DSCF6318.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p3', type: 'photo', title: 'Barasuara', category: 'Stage Photography', src: '/images/DSCF6385.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p4', type: 'photo', title: 'Barasuara', category: 'Stage Photography', src: '/images/LUC08723.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p5', type: 'photo', title: 'Tulus', category: 'Stage Photography', src: '/images/DSCF6903.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p6', type: 'photo', title: 'Tulus', category: 'Stage Photography', src: '/images/LUC08874.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p7', type: 'photo', title: 'Drizzly', category: 'Stage Photography', src: '/images/LUC08294.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p8', type: 'photo', title: 'Ari Lesmana', category: 'Stage Photography', src: '/images/DSCF5858.jpg', description: 'Live Arena 2025 UMM Dome Malang, by Lucky Ardiansyah' },
    { id: 'p9', type: 'photo', title: 'Bernadya', category: 'Stage Photography', src: '/images/FRS00855.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p10', type: 'photo', title: 'Bernadya', category: 'Stage Photography', src: '/images/FRS01001.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p11', type: 'photo', title: 'Hindia', category: 'Stage Photography', src: '/images/FRS01594.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },
    { id: 'p12', type: 'photo', title: 'Hindia', category: 'Stage Photography', src: '/images/FRS01623.jpg', description: 'Rasvara Festival 2025, by Lucky Ardiansyah' },


    // Wedding
    { id: 'p21', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: '/images/ZKA00776.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p22', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: '/images/ZKA01197.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p23', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: '/images/ZKA00868.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p24', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: '/images/ZKA00800.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p25', type: 'photo', title: 'Melly & Calvin', category: 'Wedding', src: '/images/ZKA00822.jpg', description: 'for Luxor Photoworks by Lucky Ardiansyah' },
    { id: 'p26', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: '/images/AAI00425.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p27', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: '/images/AAI00440.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p28', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: '/images/AAI00504.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p29', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: '/images/AAI00958.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p30', type: 'photo', title: 'Nimalia & Afrizal', category: 'Wedding', src: '/images/AAI00917.jpg', description: 'for Callanoire Photography by Lucky Ardiansyah' },
    { id: 'p31', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: '/images/FRS09375.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p32', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: '/images/FRS09360.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p33', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: '/images/FRS09432.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p34', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: '/images/FRS09465.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
    { id: 'p35', type: 'photo', title: 'Bahar & Mifta', category: 'Wedding', src: '/images/FRS09506.jpg', description: 'for Ranah Asmara by Lucky Ardiansyah' },
  ];

  // 4. Videography Data
  const videographyItems: GalleryItem[] = [
    { id: 'v1', type: 'video', title: 'After Movie RAJA Brawijaya 2024', category: 'Aftermovie', src: 'https://img.youtube.com/vi/Fnpda4PMJKU/maxresdefault.jpg', description: 'After Movie RAJA Brawijaya 2024', videoUrl: 'https://youtu.be/Fnpda4PMJKU?si=VxMdWVvGWK42nNjP' },
    { id: 'v2', type: 'video', title: 'Elare', category: 'Commercial Product', src: '/project_images/Elare.png', description: 'Commercial Product - Elare', videoUrl: 'https://www.instagram.com/reel/DDZnuc4P6kU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 'v3', type: 'video', title: 'After Movie Rasvara Festival 2025', category: 'Aftermovie', src: '/project_images/Rasvara.png', description: 'After Movie Rasvara Festival 2025', videoUrl: 'https://www.instagram.com/reel/DKEalpKA0Zk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 'v4', type: 'video', title: 'Company Profile EM UB 2025', category: 'Company Profile', src: 'https://img.youtube.com/vi/olO89VQpLWo/maxresdefault.jpg', description: 'Company Profile EM UB 2025', videoUrl: 'https://youtu.be/olO89VQpLWo?si=yEfnQ3JSEwajriwJ' },
    { id: 'v5', type: 'video', title: 'Mengalah atau Kalah', category: 'Short Movie', src: 'https://img.youtube.com/vi/AmYA7uRBHZ0/maxresdefault.jpg', description: 'Mengalah atau Kalah - Short Movie', videoUrl: 'https://www.youtube.com/watch?v=AmYA7uRBHZ0&t=91s' },
    { id: 'v6', type: 'video', title: 'Setengah Lingkaran', category: 'Short Movie', src: 'https://img.youtube.com/vi/K3V0TWC3rTs/maxresdefault.jpg', description: 'Setengah Lingkaran - Short Movie', videoUrl: 'https://www.youtube.com/watch?v=K3V0TWC3rTs&t=75s' },
    { id: 'v9', type: 'video', title: 'Lembaran Terakhir', category: 'Short Movie', src: '/project_images/Lembaran Terakhir.png', description: 'Lembaran Terakhir - Short Movie', videoUrl: 'https://www.instagram.com/reel/DHQBt8YJASL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 'v7', type: 'video', title: 'After Movie Bharatayudha 2023', category: 'Aftermovie', src: '/project_images/Bharata.png', description: 'After Movie Bharatayudha 2023', videoUrl: 'https://www.instagram.com/reel/C6OlGHNJ9Td/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { id: 'v8', type: 'video', title: 'After Movie BORN 9.0', category: 'Aftermovie', src: '/project_images/BORN.png', description: 'After Movie BORN 9.0', videoUrl: 'https://www.instagram.com/reel/DD8sTEHv2pL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
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
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="relative w-full"
                      style={{ maxHeight: '80vh' }}
                    >
                      <Image
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - ${currentImageIndex + 1}`}
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 1152px"
                        className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                      />
                    </motion.div>

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