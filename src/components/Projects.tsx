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

    // Couple
    { id: 'p41', type: 'photo', title: 'Urban Romance', category: 'Couple', src: 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?w=800&q=80', description: 'A casual couple shoot in the city.' },
    { id: 'p42', type: 'photo', title: 'Sunset Love', category: 'Couple', src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80', description: 'Golden hour moments.' },

    // Portrait
    { id: 'p61', type: 'photo', title: 'Neon Portrait', category: 'Portrait', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', description: 'Creative portrait with neon lighting.' },
    { id: 'p62', type: 'photo', title: 'Studio Classic', category: 'Portrait', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', description: 'Timeless black and white portrait.' },

    // Nature/Landscape (Keeping some old ones)
    { id: 'p81', type: 'photo', title: 'Mountain Mist', category: 'Landscape', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' },
    { id: 'p82', type: 'photo', title: 'Golden Hour', category: 'Nature', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80' },
    { id: 'p83', type: 'photo', title: 'Coffee Culture', category: 'Lifestyle', src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80' },
  ];

  // 4. Videography Data
  const videographyItems: GalleryItem[] = [
    { id: 'v1', type: 'video', title: 'After Movie RAJA Brawijaya 2024', category: 'Travel', src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80', description: 'Exploring the hidden gems of Southeast Asia.' },
    { id: 'v2', type: 'video', title: 'Product Commercial', category: 'Commercial', src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80', description: 'High-energy commercial for a new sports drink.' },
    { id: 'v3', type: 'video', title: 'Event Highlights', category: 'Events', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', description: 'Recap of the annual tech conference.' },
    { id: 'v4', type: 'video', title: 'Music Video Teaser', category: 'Music', src: 'https://images.unsplash.com/photo-1514525253440-b393452e23f9?w=800&q=80', description: 'Behind the scenes of the latest music video production.' },
    { id: 'v5', type: 'video', title: 'Documentary Short', category: 'Documentary', src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80', description: 'A short film about local artisans.' },
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.githubUrl} className="p-3 bg-white rounded-full hover:bg-gray-100 transition text-gray-900"><Github size={20} /></a>
                    <a href={project.liveUrl} className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition text-white"><ExternalLink size={20} /></a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {mobileProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Decorational Background Blob */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] 
                    bg-gradient-to-br ${index === 0 ? 'from-purple-500/10 to-blue-500/10' : 'from-pink-500/10 to-orange-500/10'} 
                    rounded-[3rem] blur-3xl -z-10 group-hover:bg-opacity-20 transition-all duration-500`}
                />

                {/* Card Content */}
                <div className="flex flex-col items-center">
                  {/* 3D Phone Mockup */}
                  <div className="mb-8 transform group-hover:-translate-y-4 transition-transform duration-500">
                    <PhoneMockup src={project.image} alt={project.title} />
                  </div>

                  {/* Project Info */}
                  <div className="text-center w-full max-w-sm">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <a href={project.liveUrl} className="p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg" title="View App">
                        <Smartphone size={20} />
                      </a>
                      <a href={project.githubUrl} className="p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full hover:scale-110 transition-transform shadow-lg" title="Source Code">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
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

    </div>
  );
};

export default Projects;