import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/landingData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 border border-coral/30 text-coral text-xs font-bold uppercase tracking-wider">
            💬 Yêu Thương Từ Cộng Đồng
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Lắng nghe chia sẻ từ các Sen tại chung cư
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Hàng ngàn gia đình nuôi cún và mèo đã tìm thấy bạn đồng hành dắt dạo lý tưởng thông qua Pawty.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-8 rounded-4xl bg-white border border-gray-100 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-coral/30 group-hover:text-coral transition-colors" />
                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.ownerName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-coral shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-charcoal">
                    {item.ownerName}
                  </h4>
                  <p className="text-xs text-charcoal-light">
                    {item.apartment}
                  </p>
                  <div className="flex text-warning mt-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-warning" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

