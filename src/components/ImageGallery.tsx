'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface GalleryExample {
  prompt: string;
}

interface ImageGalleryProps {
  translations: {
    title: string;
    subtitle: string;
    note: string;
    examples: GalleryExample[];
  };
}

export default function ImageGallery({ translations }: ImageGalleryProps) {
  // Placeholders para las imágenes de ejemplo
  const placeholderImages = [
    '/images/showcase/example1.jpg',
    '/images/showcase/example2.jpg',
    '/images/showcase/example3.jpg',
    '/images/showcase/example4.jpg',
    '/images/showcase/example5.jpg',
    '/images/showcase/example6.jpg',
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto max-w-7xl relative z-10">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {translations.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden 
                           bg-gradient-to-br from-white/10 to-white/5
                           border border-white/10 hover:border-primary/50
                           transition-all duration-300
                           hover:shadow-xl hover:shadow-primary/20">
                {/* Image placeholder with gradient */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary-glow/20 to-purple-500/20 
                             flex items-center justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                  </div>
                  
                  {/* Icon or text */}
                  <div className="relative z-10 text-center p-6">
                    <div className="text-6xl mb-4 opacity-50">✨</div>
                    <p className="text-sm text-white/70 font-medium">Ejemplo {index + 1}</p>
                  </div>
                </div>

                {/* Prompt caption */}
                <div className="p-4 bg-black/40 backdrop-blur-sm">
                  <p className="text-sm text-gray-300 line-clamp-2">
                    <span className="text-primary font-semibold">Prompt: </span>
                    {example.prompt}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 
                             transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 italic text-lg"
        >
          {translations.note}
        </motion.p>
      </div>
    </section>
  );
}
