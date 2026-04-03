'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FinalCTAProps {
  translations: {
    title: string;
    subtitle: string;
    cta: string;
    disclaimer: string;
  };
}

export default function FinalCTA({ translations }: FinalCTAProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-primary-gradient opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-full h-full max-w-4xl max-h-96 
                      bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-3xl 
                   bg-gradient-to-br from-white/10 to-white/5
                   border border-white/20 backdrop-blur-sm
                   shadow-2xl shadow-primary/20"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            {translations.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-glow mb-8">
            {translations.subtitle}
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://app.dreamduel.lat"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-6 
                     bg-primary-gradient text-white font-bold text-lg rounded-2xl
                     shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/60
                     transition-all duration-300"
          >
            <Sparkles className="w-6 h-6" />
            {translations.cta}
            <Sparkles className="w-6 h-6" />
          </motion.a>

          {/* Disclaimer */}
          <p className="text-gray-400 text-sm mt-6">
            {translations.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
