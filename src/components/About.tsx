'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Users } from 'lucide-react';

const About: React.FC = () => {
  const educationData = [
    {
      period: '2023 - Present',
      institution: 'University of Brawijaya',
      degree: 'Information Technology',
      location: 'Malang, Indonesia',
      logo: '/assets/UB.png',
      description: [
        'Studied Information Technology, gaining expertise in software development, database management, and networking.',
        'Worked on various IT projects, including website development, system administration, and troubleshooting technical issues.'
      ]
    },
    {
      period: '2020 - 2023',
      institution: 'SMKN 4 Malang',
      degree: 'Multimedia',
      location: 'Malang, Indonesia',
      logo: '/assets/SMK4.png',
      description: [
        'Actively engaged in various projects focusing on graphic design, multimedia, and audiovisual processing.',
        'Developed creative and technical skills including proficiency in industry-standard software and tools.'
      ]
    }
  ];

  const workData = [
    {
      period: '2025 - Present',
      role: 'Junior Full Stack Developer',
      company: 'Smartlink by PT. Ada Ide Langsung Jalan',
      location: 'On-Site - Malang, Indonesia',
      logo: '/assets/Smartlink.png',
      description: [
        'Backend Engineering (Golang): Built RESTful APIs using Fiber v2 and GORM, implementing Dependency Injection, Repository Pattern, and centralized error handling.',
        'Graph Database Implementation: Leveraged Neo4j to visualize and query deep hierarchical data.',
        'Frontend Architecture (Next.js): Utilized Next.js 16 App Router, Redux Toolkit, and Axios Interceptors for seamless token management.',
        'UI/UX Development: Crafted a consistent design system using Ant Design and Tailwind CSS, featuring complex components like interactive Flowcharts.'
      ]
    },
    {
      period: '2022 - 2024',
      role: 'Video Production Specialist',
      company: 'Luxor Photoworks',
      location: 'On-Site - Malang, Indonesia',
      logo: '/assets/Luxor.png',
      description: [
        'Gained extensive skills and hands-on experience during an internship and work at a photography and videography agency specializing in weddings, studio shoots, and other creative projects.',
        'Worked on various aspects of photo and video production, including shooting, editing, and client collaboration.',
        'Enhanced technical expertise while strengthening the ability to meet client expectations and deliver high-quality results under tight deadlines.'
      ]
    }
  ];

  const organizationData = [
    {
      period: '2025',
      role: 'Exprert Staff Bureau Central of Communication and Information',
      organization: 'Eksekutif Mahasiswa Universitas Brawijaya 2025',
      location: 'Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/EMUB.png',
    },
    {
      period: '2023 - 2025',
      role: 'Director of Photography',
      organization: 'Nol Derajat Film',
      location: 'Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Nolder.png',
    },
    {
      period: '2025',
      role: 'Head of Media Production',
      organization: 'RAJA Brawijaya 2025',
      location: 'Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Rabraw25.png',
    },
    {
      period: '2024',
      role: 'Documentation Team Leader',
      organization: 'RAJA Brawijaya 2024',
      location: 'Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Rabraw24.png',
    },
    {
      period: '2025',
      role: 'Vice Coordinator of Design, Documentation & Media',
      organization: 'Brawijaya Film Festival 2025',
      location: 'Auditorium Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/BYFEST.png',
    },
    {
      period: '2025',
      role: 'Technical Documentation Specialist',
      organization: 'Rasvara Festival 2025',
      location: 'Sudimoro Boomi Carnival ,Malang, Indonesia',
      logo: '/assets/Rasvara.jpg',
    },
    {
      period: '2025',
      role: 'Technical Documentation Specialist',
      organization: 'Live Arena 2025',
      location: 'Dome UMM, Malang, Indonesia',
      logo: '/assets/LiveArena.png',
    },
    {
      period: '2024',
      role: 'Technical Documentation Specialist',
      organization: 'Piala Rektor Brawijaya 2024',
      location: 'GOR Pertamina Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Pilrek.png',
    },
    {
      period: '2024',
      role: 'Technical Documentation Specialist',
      organization: 'BORN 9.0',
      location: 'Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Born.png',
    },
    {
      period: '2023',
      role: 'Technical Documentation Specialist',
      organization: 'Bharatayudha 2023',
      location: 'Lapangan Rektorat Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Bharatayudha.png',
    },
    {
      period: '2023',
      role: 'Technical Documentation Specialist',
      organization: 'Entrepreneurial Euphoria Creanomic 2023',
      location: 'Samantha Krida Universitas Brawijaya, Malang, Indonesia',
      logo: '/assets/Crea.png',
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-0.5 w-8 bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm">Education & Work</span>
            <span className="h-0.5 w-8 bg-blue-600 dark:bg-blue-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Academic</span> and <br />
            <span className="underline decoration-black-400 dark:decoration-black-400 decoration-4 underline-offset-4">Professional</span> <span className="text-gray-900 dark:text-white">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">

          {/* Education Group */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            {/* Decorative Blob for shape effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500" />

            <div className="relative bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 h-full transform transition duration-500 hover:scale-[1.005]">

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shadow-inner">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Academic Foundation</p>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-10 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-800" />

                {educationData.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-1.5 top-8 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10" />

                    <div className="bg-blue-50 dark:bg-blue-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
                      <div className="flex gap-4 items-start">
                        {item.logo && (
                          <div className="w-12 h-12 flex items-center justify-center shrink-0 relative">
                            <Image src={item.logo} alt={item.institution} fill sizes="48px" className="object-contain" />
                          </div>
                        )}
                        <div className="flex flex-col gap-2 flex-1">
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit">
                            {item.period}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.institution}</h4>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">{item.degree}</p>

                          <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2 list-disc list-outside ml-4 space-y-1">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                            <MapPin size={12} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Work Experience Group */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative"
          >
            {/* Decorative Blob for shape effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500" />

            <div className="relative bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 border border-gray-100 dark:border-gray-800 h-full transform transition duration-500 hover:scale-[1.005]">

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400 shadow-inner">
                  <Briefcase size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Professional Journey</p>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="space-y-10 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-100 dark:bg-gray-800" />

                {workData.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Dot */}
                    <div className="absolute left-1.5 top-8 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full z-10" />

                    <div className="bg-purple-50 dark:bg-purple-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                      <div className="flex gap-4 items-start">
                        {item.logo && (
                          <div className="w-12 h-12 flex items-center justify-center shrink-0 relative">
                            <Image src={item.logo} alt={item.company} fill sizes="48px" className="object-contain" />
                          </div>
                        )}
                        <div className="flex flex-col gap-2 flex-1">
                          <span className="text-sm font-bold text-purple-600 dark:text-purple-400 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit">
                            {item.period}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.role}</h4>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">{item.company}</p>

                          <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2 list-disc list-outside ml-4 space-y-1">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                            <MapPin size={12} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Organization Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative group mt-20"
        >
          {/* Decorative Blob */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500" />

          <div className="relative bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-gray-800">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-violet-100 dark:bg-violet-900/30 rounded-2xl text-violet-600 dark:text-violet-400 shadow-inner">
                  <Users size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Organization & Volunteer</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Leadership and community impact</p>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizationData.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-violet-50 dark:bg-violet-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-800 transition-all group/card"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                      {/* Logo or Placeholder */}
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.organization}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-full h-full bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center text-xl font-bold text-violet-600 dark:text-violet-400 shadow-sm border-2 border-violet-100 dark:border-violet-900/50">
                          <span>{item.organization.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-violet-600 dark:text-violet-400 px-2 py-0.5 bg-violet-100 dark:bg-violet-900/30 rounded-full">
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-2 leading-tight">{item.organization}</h4>
                      <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mt-1 mb-2">{item.role}</p>

                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <MapPin size={12} />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div >

      <div className="w-full bg-gradient-to-r from-violet-900 to-blue-900 py-6 overflow-hidden scale-105 mt-20">
        <motion.div
          className="flex whitespace-nowrap text-2xl font-black text-white uppercase tracking-wider"
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
              <span className="mx-8">Content Creation</span>
              <span className="mx-8 text-white">❋</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section >
  );
};

export default About;