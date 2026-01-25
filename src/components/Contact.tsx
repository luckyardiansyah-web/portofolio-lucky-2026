'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/luckyardiansyah685@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'true'
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "luckyardiansyah685@gmail.com",
      href: "mailto:luckyardiansyah685@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Lucky Ardiansyah",
      href: "https://www.linkedin.com/in/luckyar/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "luckyardiansyah-web",
      href: "https://github.com/luckyardiansyah-web"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@luckyar._",
      href: "https://www.instagram.com/luckyar._/"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 to-[#222281] dark:from-blue-900 dark:to-[#1a1a60]">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-white"></span>
              <span className="text-white font-extrabold tracking-wider uppercase">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              <span className="underline decoration-white decoration-4 underline-offset-4">Let's Talk</span> for Your <br />
              <span className="text-white">Next Projects</span>
            </h2>

            <p className="text-gray-200 dark:text-gray-800  text-lg mb-12 max-w-md leading-relaxed">
              I'm always interested in new opportunities. Whether you have a project in mind or just want to chat, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-full bg-blue-900/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-400 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 font-bold mb-1">{info.label}</p>
                    <p className="text-white text-lg font-semibold group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Key Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex. Cinta Ayu Amelia"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex. cintaayuamelia@gmail.com"
                  required
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message here..."
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all outline-none"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 text-green-200 rounded-xl text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Message sent successfully!
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl text-sm flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-red-400 rounded-full" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full group px-6 py-4 rounded-full font-bold text-lg transition-all transform duration-200 flex items-center justify-center gap-2
                    ${isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed opacity-70'
                    : 'bg-blue-500 hover:bg-blue-400 hover:scale-[1.02] active:scale-[0.98] text-white shadow-lg hover:shadow-blue-500/30'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;