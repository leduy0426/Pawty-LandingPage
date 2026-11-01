import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Sparkles, Star, ArrowRight } from 'lucide-react';
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
              <span className="w-2.5 h-2.5 rounded-full bg-mint animate-pulse" />
              <span>🐾 Siêu ứng dụng kết nối thú cưng đô thị đầu tiên</span>
            </motion.div>

            {/* Main Headline (Exact phrasing & visual hierarchy matching VNHUB) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-white leading-[1.12] tracking-tight text-left drop-shadow-sm"
            >
              Trải nghiệm kết nối Boss &amp; Sen phong phú, dễ sử dụng
            </motion.h1>

            {/* Detailed Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-sm sm:text-base md:text-lg text-white/90 font-body leading-relaxed max-w-xl text-left font-normal"
            >
              Pawty là siêu ứng dụng kết nối thú cưng thông minh tại các khu chung cư và đô thị hiện đại (Vinhomes, Masteri, Sala...). Tích hợp sổ tiêm điện tử <strong className="text-mint font-bold">Safe Pet</strong>, radar quẹt thẻ tìm bạn dắt dạo bán kính 3km, hẹn dạo trung điểm tránh cắn nhau và lưu giữ khoảnh khắc Boss vui nhộn trong một hệ sinh thái an tâm, toàn diện.
            </motion.p>

            {/* Store Badges & Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-2 space-y-4"
            >
              {/* App Store & Google Play Download Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* App Store button */}
                <button
                  onClick={onDownloadClick}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/80 hover:bg-black text-white border border-white/20 shadow-lg hover:border-mint transition-all hover:scale-105 active:scale-95 group"
                >
                  <img
                    src="/assets/app-store.png"
                    alt="App Store"
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="text-left">
                    <div className="text-[10px] text-white/70 leading-none">Tải trên</div>
                    <div className="text-sm font-bold font-display leading-tight">App Store</div>
                  </div>
                </button>

                {/* Google Play button */}
                <button
                  onClick={onDownloadClick}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/80 hover:bg-black text-white border border-white/20 shadow-lg hover:border-mint transition-all hover:scale-105 active:scale-95 group"
                >
                  <img
                    src="/assets/google-play.png"
                    alt="Google Play"
                    className="w-6 h-6 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="text-left">
                    <div className="text-[10px] text-white/70 leading-none">Khám phá trên</div>
                    <div className="text-sm font-bold font-display leading-tight">Google Play</div>
                  </div>
                </button>

                {/* Interactive Web Radar Demo CTA */}
                <button
                  onClick={onExploreRadar}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-mint to-teal-400 hover:from-mint-light hover:to-teal-300 text-charcoal font-display font-bold text-sm shadow-lg shadow-teal-500/20 hover:scale-105 active:scale-95 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-charcoal" />
                  <span>Quẹt Thử Radar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-5 text-xs text-white/80 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-mint" />
                  <span>100% Sổ tiêm xác thực</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-coral-light" />
                  <span>Radar PostGIS 3km</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-300" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9/5 (2,400+ đánh giá)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: TRIPLE 3D PHONES SHOWCASE
              ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center relative">
            <HeroTriplePhones />
          </div>

        </div>
      </div>

      {/* ========================================================
          BOTTOM WAVE CURVE DECORATION (EXACT MATCH WITH VNHUB)
          ======================================================== */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative h-14 sm:h-20 w-full text-cream fill-current"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FDFBF7"
          />
        </svg>
      </div>

    </section>
  );
};
