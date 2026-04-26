'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  translations: {
    title: string;
    subtitleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
  };
}

export default function HeroSection({ translations }: HeroSectionProps) {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient blobs background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex justify-center items-center">
          {/* Text content */}
          <div className="space-y-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 pb-2 text-gradient">
                {translations.title}
              </h1>
            </motion.div>

            {/* Subtitle Highlight - No subscription */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20
                       border-2 border-primary shadow-xl shadow-primary/30 mb-2"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                {translations.subtitleHighlight}
              </p>
            </motion.div>

            {/* Subtitle - Fast, custom, creator-friendly */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium mb-8 sm:mb-10"
            >
              {translations.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center pt-6"
            >
              {/* Primary CTA Only */}
              <motion.a
                href="https://app.dreamduel.lat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredBtn(true)}
                onHoverEnd={() => setHoveredBtn(false)}
                className="group relative w-full sm:w-auto px-6 py-4 sm:px-10 sm:py-5 rounded-2xl bg-primary-gradient text-white font-extrabold text-lg sm:text-xl
                         shadow-[0_0_40px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.8)] transition-all duration-300
                         overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  {translations.ctaPrimary}
                  <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${hoveredBtn ? 'translate-x-2' : ''}`} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* 3 High Quality Image Grid Examples Here */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-16 sm:mt-24 flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-8 max-w-6xl mx-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative flex-none w-[80%] sm:w-[60%] md:w-auto h-auto aspect-[3/4] snap-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
              {/* Fallback gradients if no images are provided, portraying premium anime/hyperrealistic framing */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                item === 1 ? 'from-purple-900/40 to-blue-900/80' : 
                item === 2 ? 'from-pink-900/40 to-orange-900/80' : 
                'from-emerald-900/40 to-teal-900/80'
              }`} />
              <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Generated</span>
                </div>
                <p className="text-white text-xs opacity-80">Private custom image generation</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
