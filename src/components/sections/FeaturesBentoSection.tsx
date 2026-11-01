import React from 'react';
import { motion } from 'framer-motion';
import { CORE_FEATURES } from '../../data/landingData';
import { ShieldCheck, Compass, MessageCircleHeart, Flame, ArrowUpRight } from 'lucide-react';

interface FeaturesBentoProps {
  onLearnMore?: (featureId: string) => void;
}

export const FeaturesBentoSection: React.FC<FeaturesBentoProps> = ({ onLearnMore }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-mint-dark" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-coral" />;
      case 'MessageCircleHeart':
        return <MessageCircleHeart className="w-7 h-7 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-danger" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-coral" />;
    }
  };

  const getCardTheme = (scheme: string) => {
    switch (scheme) {
      case 'mint':
        return {
          bg: 'bg-gradient-to-br from-mint-50 to-white',
          border: 'border-mint/30 hover:border-mint',
          badgeBg: 'bg-mint-50 text-mint-dark border-mint/30',
        };
      case 'coral':
        return {
          bg: 'bg-gradient-to-br from-coral-50 to-white',
          border: 'border-coral/20 hover:border-coral',
          badgeBg: 'bg-coral-50 text-coral border-coral/30',
        };
      case 'warning':
        return {
          bg: 'bg-gradient-to-br from-amber-50 to-white',
          border: 'border-amber-200 hover:border-amber-400',
          badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
        };
      case 'danger':
        return {
          bg: 'bg-gradient-to-br from-red-50 to-white',
          border: 'border-red-200 hover:border-red-400',
          badgeBg: 'bg-red-50 text-danger border-red-200',
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-200',
          badgeBg: 'bg-gray-100 text-gray-700',
        };
    }
  };

  return (
    <section id="features" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-50 border border-mint/40 text-mint-dark text-xs font-bold uppercase tracking-wider">
            🐾 4 Trụ Cột Đột Phá
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Mọi điều bạn và Boss cần, gói gọn trong một siêu ứng dụng
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light font-body">
            Không còn nỗi lo Boss bị cuồng chân, không còn áp lực quên lịch tiêm phòng, và không còn cảnh cô đơn dắt chó một mình mỗi buổi chiều.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_FEATURES.map((feature, index) => {
            const theme = getCardTheme(feature.colorScheme);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`p-8 rounded-4xl border ${theme.border} ${theme.bg} shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Decorative Paw Print Background */}
                <div className="absolute -right-4 -bottom-4 text-7xl opacity-5 select-none pointer-events-none group-hover:scale-110 transition-transform">
                  🐾
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${theme.badgeBg}`}>
                      {feature.badge}
                    </span>
                    <div className="p-3 rounded-2xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                      {getIcon(feature.iconName)}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-charcoal group-hover:text-coral transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-charcoal-light text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
                  <span className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                    ✨ {feature.highlight}
                  </span>
                  <button
                    onClick={() => onLearnMore?.(feature.id)}
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-charcoal-light group-hover:bg-coral group-hover:text-white transition-all"
                    aria-label="Xem chi tiết"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

