'use client';

import { motion } from 'framer-motion';

interface TrustBadge {
  icon: string;
  text: string;
}

interface TrustBadgesProps {
  translations: {
    items: TrustBadge[];
  };
}

export default function TrustBadges({ translations }: TrustBadgesProps) {
  return (
    <section className="py-12 px-4 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {translations.items.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-2 p-4"
            >
              <span className="text-3xl">{badge.icon}</span>
              <span className="text-sm text-gray-400 font-medium">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
