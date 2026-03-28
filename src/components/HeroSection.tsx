'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  translations: {
    badge: string;
    title: string;
    subtitleHighlight: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 
                         border border-primary/30 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{translations.badge}</span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 pb-2 text-gradient">
                {translations.title}
              </h1>
            </motion.div>

            {/* Subtitle Highlight - FREE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20
                       border-2 border-primary shadow-xl shadow-primary/30"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                {translations.subtitleHighlight}
              </p>
            </motion.div>

            {/* Subtitle - $3 */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold"
            >
              {translations.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              {translations.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              {/* Primary CTA */}
              <motion.a
                href="/images"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredBtn(true)}
                onHoverEnd={() => setHoveredBtn(false)}
                className="group relative px-8 md:px-10 py-4 md:py-5 rounded-xl bg-primary-gradient text-white font-bold text-lg md:text-xl
                         shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300
                         overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {translations.ctaPrimary}
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredBtn ? 'translate-x-1' : ''}`} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => scrollToSection('#comofunciona')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-4 md:py-5 rounded-xl 
                         border-2 border-white/20 text-white font-semibold text-lg
                         hover:border-primary/50 hover:bg-white/5
                         transition-all duration-300"
              >
                {translations.ctaSecondary}
              </motion.button>
            </motion.div>
          </div>
        </div>
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
