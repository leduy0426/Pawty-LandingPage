import React from 'react';
import { motion } from 'framer-motion';
import { KEY_STATS, APARTMENT_PARTNERS } from '../../data/landingData';
import { Building2 } from 'lucide-react';

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
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-coral tracking-tight">
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

        {/* Apartment Community Partners */}
        <div className="mt-10 pt-8 border-t border-gray-200/50">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-charcoal-light mb-4 flex items-center justify-center gap-2">
            <Building2 className="w-4 h-4 text-coral" />
            Đã có mặt tại hơn 48 cụm chung cư đô thị trọng điểm
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {APARTMENT_PARTNERS.map((partner, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 rounded-full bg-white text-charcoal-light hover:text-coral hover:border-coral/40 border border-gray-200 text-xs font-semibold shadow-2xs transition-colors"
              >
                🏢 {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

