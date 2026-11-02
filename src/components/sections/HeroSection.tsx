import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, HeartHandshake } from 'lucide-react';
import { HeroTiltedCardsMosaic } from '../hero/HeroTiltedCardsMosaic';
import { HeroTriplePhones } from '../hero/HeroTriplePhones';

interface HeroSectionProps {
  onExploreRadar: () => void;
  onDownloadClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreRadar, onDownloadClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#E11D48] via-[#C026D3] to-[#1E1B4B] dark:from-[#9F1239] dark:via-[#701A75] dark:to-[#0F172A] text-white flex flex-col justify-center"
      style={{
        background: 'linear-gradient(135deg, #FF1E56 0%, #D926A9 32%, #7C3AED 70%, #1E1B4B 100%)',
      }}
    >
      {/* Light soft overlay */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none" />

      {/* Floating Ambient Glowing Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-16 left-8 w-72 sm:w-96 h-72 sm:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-24 right-8 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Background 39.7° Tilted Card Mosaic */}
      <HeroTiltedCardsMosaic />

      {/* Main Hero Container */}
      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-28 pb-32 md:pt-36 md:pb-36 min-h-screen flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* ========================================================
              LEFT COLUMN: HEADLINES, DESCRIPTION, CTA & STORES
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 xl:col-span-5 text-left space-y-6"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-mint animate-pulse" />
              <span>🐾 Siêu ứng dụng kết nối cộng đồng những người nuôi thú cưng đô thị</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-white leading-[1.18] text-left drop-shadow-sm"
            >
              Trải nghiệm kết nối Boss &amp; Sen thông minh, an tâm tuyệt đối
            </motion.h1>

            {/* Detailed Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-sm sm:text-base md:text-lg text-white/90 font-body leading-relaxed max-w-xl text-left font-normal"
            >
              Pawty là siêu ứng dụng kết nối cộng đồng những người nuôi thú cưng, kết hợp hoàn hảo giữa <strong className="text-white font-bold">Mạng Xã Hội khoảnh khắc</strong> và không gian <strong className="text-mint font-bold">Pawty Dating</strong> với thẻ lật 2 mặt Sen &amp; Boss độc đáo, dễ dàng tìm bạn dắt dạo cùng sở thích.
            </motion.p>

            {/* Store Badges & Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              {/* Primary Action Button: Explore Interactive Dating */}
              <button
                onClick={onExploreRadar}
                className="px-7 py-4 rounded-full bg-mint text-charcoal hover:bg-mint-dark hover:text-white font-display font-bold text-base shadow-lg shadow-mint/30 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>⚡ Trải Nghiệm Pawty Dating</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary Button: Download */}
              <button
                onClick={onDownloadClick}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-display font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tải App Miễn Phí</span>
              </button>
            </motion.div>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/90 font-medium"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <HeartHandshake className="w-4 h-4 text-amber-300" />
                <span className="font-bold">Hẹn hò dắt dạo</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: TRIPLE 3D PHONES SHOWCASE
              ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center items-center mt-6 lg:mt-0">
            <HeroTriplePhones />
          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-16 lg:h-20 fill-cream"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

    </section>
  );
};
