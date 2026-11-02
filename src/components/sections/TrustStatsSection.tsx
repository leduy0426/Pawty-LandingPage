import React from 'react';
import { motion } from 'framer-motion';
import { KEY_STATS } from '../../data/landingData';

export const TrustStatsSection: React.FC = () => {
  return (
    <section className="py-12 bg-cream-warm/70 border-y border-coral/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {KEY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-coral">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-charcoal mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-charcoal-light mt-0.5">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
