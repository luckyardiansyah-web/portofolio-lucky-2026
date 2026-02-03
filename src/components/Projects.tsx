'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import ProjectGallery, { GalleryItem } from './ProjectGallery';
import PhoneMockup from './PhoneMockup';

const Projects: React.FC = () => {

  // 1. Website Projects Data
  const webProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive maps.',
      tech: ['Vue.js', 'OpenWeather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
    }
  ];

  // 2. Mobile App Projects Data
  const mobileProjects = [
    {
      title: 'Task Master App',
      description: 'A productivity app for prioritizing tasks with gesture-based controls and offline sync.',
      tech: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
    },
    {
      title: 'Fitness Tracker',
      description: 'Health monitoring application tracking steps, calories, and workout routines.',
      tech: ['Flutter', 'HealthKit', 'Dart'],
      liveUrl: '#',
      githubUrl: '#',
      image: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&q=80'
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

      {/* 1. Website Projects Section - Coming Soon */}
      <section id="projects-web" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12 justify-center lg:justify-start">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <Monitor size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Website Projects</h2>
          </div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/30 dark:via-indigo-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800/50 shadow-xl"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 animate-pulse" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-32 px-8 text-center">
              {/* Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                <Monitor size={64} className="text-blue-600 dark:text-blue-400" />
              </motion.div>

              {/* Text */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
                Exciting website projects are currently in development. Stay tuned for innovative web solutions and creative digital experiences.
              </p>

              {/* Decorative Elements */}
              <div className="flex gap-2 mt-4">
                <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mobile App Projects Section - Coming Soon */}
      <section id="projects-mobile" className="py-12 md:py-24 px-4 bg-white dark:bg-gray-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 justify-center lg:justify-start">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <Smartphone size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Mobile Apps</h2>
          </div>

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-orange-950/30 border border-purple-200 dark:border-purple-800/50 shadow-xl"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 dark:from-purple-600/20 dark:via-pink-600/20 dark:to-orange-600/20 animate-pulse" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-32 px-8 text-center">
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
              >
                <Smartphone size={64} className="text-purple-600 dark:text-purple-400" />
              </motion.div>

              {/* Text */}
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
                Amazing mobile applications are being crafted. Get ready for stunning iOS and Android apps with exceptional user experiences.
              </p>

              {/* Decorative Elements */}
              <div className="flex gap-2 mt-4">
                <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </motion.div>
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

    </div>
  );
};

export default Projects;