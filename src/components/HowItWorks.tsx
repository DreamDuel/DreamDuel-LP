'use client';

import { motion } from 'framer-motion';

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  translations: {
    title: string;
    subtitle: string;
    steps: Step[];
  };
}

export default function HowItWorks({ translations }: HowItWorksProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {translations.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {translations.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] 
                           border border-white/10 hover:border-primary/50 
                           transition-all duration-300 h-full
                           hover:shadow-lg hover:shadow-primary/20">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full 
                              bg-primary-gradient flex items-center justify-center
                              shadow-lg shadow-primary/30">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 text-center">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on mobile and last item) */}
              {index < translations.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 8L24 16L16 24M24 16H8" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="8" y1="16" x2="24" y2="16">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
