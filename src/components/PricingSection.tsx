'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  translations: {
    badge: string;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    freeHighlight: string;
    benefits: string[];
    cta: string;
    disclaimer: string;
  };
}

export default function PricingSection({ translations }: PricingSectionProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                      bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary-glow/10 to-transparent 
                        border-2 border-primary/50 backdrop-blur-sm relative overflow-hidden
                        shadow-2xl shadow-primary/30">
            {/* Decorative glow effects */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary-glow/30 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  {translations.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary-gradient flex items-center justify-center
                              shadow-lg shadow-primary/40">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-white">
                    {translations.price}
                  </span>
                  <span className="text-xl text-gray-400">{translations.period}</span>
                </div>
                
                {/* Free Highlight */}
                <div className="inline-block mt-4 px-6 py-3 rounded-full bg-primary-gradient">
                  <span className="text-base md:text-lg font-bold text-white">
                    {translations.freeHighlight}
                  </span>
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-4 mb-8">
                {translations.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/50 
                                  flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="https://app.dreamduel.lat"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-5 rounded-xl bg-primary-gradient text-white font-bold text-lg
                         shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/60
                         transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {translations.cta}
                </span>
              </motion.a>

              {/* Disclaimer */}
              <p className="text-center text-sm text-gray-500 mt-4">
                {translations.disclaimer}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
