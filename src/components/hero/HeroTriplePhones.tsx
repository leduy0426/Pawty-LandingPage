import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, X, Star, MapPin, Bell, Search, Compass, MessageCircle, User, Sparkles, RotateCcw, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';

export const HeroTriplePhones: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] h-[580px] sm:h-[680px] lg:h-[720px] flex items-center justify-center select-none">
      
      {/* ========================================================
          LEFT PHONE: PET FAMILY PASSPORT & SỔ TIÊM SAFE PET (-10° TILT)
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, x: -60, rotate: -18 }}
        animate={{ opacity: 1, x: 0, rotate: -10 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-[75%] sm:-translate-x-[72%] top-8 sm:top-6 z-10 w-[240px] sm:w-[270px] lg:w-[290px] h-[490px] sm:h-[550px] lg:h-[590px] rounded-[42px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border-4 border-slate-700/80 backdrop-blur-md hidden xs:block"
        style={{ transformOrigin: 'bottom center' }}
      >
        {/* Screen bezel */}
        <div className="w-full h-full rounded-[34px] bg-[#0F172A] overflow-hidden flex flex-col text-white relative border border-white/10">
          
          {/* Status bar */}
          <div className="h-6 flex items-center justify-between px-5 text-[10px] text-white/70 pt-1">
            <span>9:41</span>
            <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
            <span>5G 100%</span>
          </div>

          {/* Screen Content: Pet Family Passport */}
          <div className="p-3.5 space-y-3 flex-1 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-mint" />
                <span className="text-xs font-bold font-display text-mint">Pet Family Passport</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-mint/20 text-mint font-semibold">Đã xác minh</span>
            </div>

            {/* Pet summary card */}
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=150&auto=format&fit=crop&q=80"
                alt="Corgi Mochi"
                className="w-12 h-12 rounded-xl object-cover border border-mint/40"
              />
              <div>
                <h4 className="text-xs font-bold text-white">Corgi Mochi (1.5t)</h4>
                <p className="text-[10px] text-white/60">Vinhomes Central Park - Park 3</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[9px] text-mint font-semibold">Chip: PT-8821-VN</span>
                </div>
              </div>
            </div>

            {/* Vaccine records list */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Sổ tiêm điện tử 2026</div>
              
              <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  <span>Vắc-xin 7 bệnh mũi 3</span>
                </div>
                <span className="text-mint font-bold">Hoàn thành ✓</span>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mint" />
                  <span>Phòng dại Rabies</span>
                </div>
                <span className="text-mint font-bold">Hoàn thành ✓</span>
              </div>
            </div>

            {/* Behavioral habits list (Anti-fight) */}
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Minh bạch hành vi</div>
              <div className="p-2 rounded-xl bg-mint/10 border border-mint/20 text-[9px] text-mint-light">
                <p className="font-bold">✓ Thói quen tốt:</p>
                <p className="text-white/70">Hòa đồng với cún nhỏ • Biết ngồi chờ lệnh</p>
              </div>
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[9px] text-amber-200">
                <p className="font-bold">⚠️ Cần lưu ý:</p>
                <p className="text-white/70">Hơi sợ tiếng còi xe lớn • Hay giữ bóng</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          RIGHT PHONE: BÁO ĐỘNG SOS + AI GEMINI VISION (+10° TILT)
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, x: 60, rotate: 18 }}
        animate={{ opacity: 1, x: 0, rotate: 10 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="absolute left-1/2 -translate-x-[25%] sm:-translate-x-[28%] top-8 sm:top-6 z-10 w-[240px] sm:w-[270px] lg:w-[290px] h-[490px] sm:h-[550px] lg:h-[590px] rounded-[42px] bg-slate-900 p-2.5 sm:p-3 shadow-2xl border-4 border-slate-700/80 backdrop-blur-md hidden xs:block"
        style={{ transformOrigin: 'bottom center' }}
      >
        {/* Screen bezel */}
        <div className="w-full h-full rounded-[34px] bg-[#0F172A] overflow-hidden flex flex-col text-white relative border border-white/10">
          
          {/* Status bar */}
          <div className="h-6 flex items-center justify-between px-5 text-[10px] text-white/70 pt-1">
            <span>9:41</span>
            <div className="w-16 h-3.5 bg-black rounded-full mx-auto" />
            <span>5G 100%</span>
          </div>

          {/* Screen Content: SOS AI Vision & Trajectory Map */}
          <div className="p-3.5 space-y-2.5 flex-1 overflow-hidden text-left">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
                <span className="text-xs font-bold font-display text-white">Bảng Tin SOS (3km)</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-bold">Khẩn cấp</span>
            </div>

            {/* AI Vision Badge Box */}
            <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-coral/20 border border-purple-400/30 text-[9px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-300 shrink-0" />
              <span className="font-bold text-purple-200">✨ Google Gemini AI Vision đã mô tả nhận diện</span>
            </div>

            {/* Pet SOS Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-2.5 space-y-2">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80"
                  alt="Mèo Sâu"
                  className="w-12 h-12 rounded-xl object-cover border border-rose-500/40"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white">Sâu (Mèo Ba Tư)</h4>
                    <span className="text-[9px] text-rose-400 font-bold">Hậu tạ: 1.000.000đ</span>
                  </div>
                  <p className="text-[9px] text-white/60">Vị trí cuối: Tòa S1.02 Vinhomes</p>
                </div>
              </div>

              {/* AI Auto Description Quote */}
              <div className="p-2 rounded-xl bg-black/40 border border-white/5 text-[9px] text-white/80 leading-snug">
                <span className="text-purple-300 font-bold">Mô tả AI: </span>
                Lông xám bạc pha trắng ngực, mắt vàng hổ phách, không đeo vòng cổ. Thân thiện nhưng dễ hoảng loạn.
              </div>

              {/* Trajectory / Sightings info */}
              <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/5">
                <span className="text-mint font-semibold flex items-center gap-1">
                  <Eye className="w-3 h-3" /> 9 manh mối nhìn thấy
                </span>
                <span className="text-white/50">15 phút trước</span>
              </div>
            </div>

            {/* Author confirmation action */}
            <div className="pt-1">
              <button className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>✓ Xác nhận đã đón bé về an toàn</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          CENTER PHONE: MAIN RADAR QUẸT THẺ (UPRIGHT, FRONT & CENTER)
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-20 w-[280px] sm:w-[320px] lg:w-[340px] h-[550px] sm:h-[620px] lg:h-[660px] rounded-[48px] bg-black p-3 sm:p-3.5 shadow-[0_35px_80px_rgba(0,0,0,0.7)] border-4 border-slate-700/90"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-950/80 border border-blue-900" />
          <div className="w-2 h-2 rounded-full bg-slate-900" />
        </div>

        {/* Screen Bezel Container */}
        <div className="w-full h-full rounded-[38px] bg-[#0B0F19] overflow-hidden flex flex-col text-white relative border border-white/10">
          
          {/* Top Status Bar */}
          <div className="h-7 flex items-center justify-between px-6 text-[11px] text-white/80 pt-1.5">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-5 h-2.5 border border-white/70 rounded-sm p-0.5 flex items-center">
                <div className="w-full h-full bg-mint rounded-2xs" />
              </div>
            </div>
          </div>

          {/* App Header Bar */}
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-coral flex items-center justify-center text-white text-base shadow-md">
                🐾
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                PAWTY
              </span>
            </div>
            
            <div className="flex items-center gap-2.5 text-white/70">
              <Search className="w-4 h-4 hover:text-white cursor-pointer" />
              <div className="relative">
                <Bell className="w-4 h-4 hover:text-white cursor-pointer" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-coral animate-ping" />
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="px-3 py-1 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="px-3 py-1 rounded-full bg-coral text-white font-bold whitespace-nowrap text-[11px] shadow-sm">
              Tất cả
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Gần bạn (3km)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Loài Chó
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Loài Mèo
            </span>
          </div>

          {/* Main Pet Radar Card */}
          <div className="px-3 py-2 flex-1 flex flex-col">
            <div className="relative flex-1 rounded-2xl overflow-hidden border border-white/15 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1546975490-a79abdd54533?w=600&auto=format&fit=crop&q=80"
                alt="Corgi Mochi"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Top badges overlay */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint/90 backdrop-blur-md text-charcoal font-bold text-[10px] shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-mint-dark" />
                  <span>Safe Pet ✓</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-coral" />
                  <span>Cách 280m</span>
                </div>
              </div>

              {/* Bottom Card Information Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent pt-10 text-left">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-extrabold text-base text-white">
                    Corgi Mochi <span className="text-xs font-normal text-white/70">1.5 tuổi</span>
                  </h3>
                  <span className="text-[10px] text-mint font-bold">Vinhomes Park 5</span>
                </div>
                
                <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">
                  Thích chạy đuổi bồ câu, rất ngoan và đã tiêm phòng 7 bệnh.
                </p>

                {/* Personality Chips */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[9px] font-semibold">
                    #HòaĐồng
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[9px] font-semibold">
                    #ThíchCúnKhác
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-mint/20 text-mint text-[9px] font-semibold">
                    #ĐãTiêmDại
                  </span>
                </div>
              </div>
            </div>

            {/* Quẹt / Action Buttons: Pass, Rewind, SuperLike, Match Like */}
            <div className="py-2.5 flex items-center justify-center gap-2.5">
              {/* Rewind (Hoàn tác) Button */}
              <button
                className="w-9 h-9 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 flex items-center justify-center text-amber-300 transition-all shadow-md active:scale-90"
                aria-label="Hoàn tác lượt quẹt"
                title="Hoàn tác (Rewind Swipe)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Pass Button */}
              <button
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-90"
                aria-label="Bỏ qua"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>

              {/* Super Like / Star Button */}
              <button
                className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 flex items-center justify-center text-blue-400 transition-all shadow-md active:scale-90"
                aria-label="Super Like"
              >
                <Star className="w-5 h-5 fill-blue-400 text-blue-400" />
              </button>

              {/* Match / Like Button */}
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 flex items-center justify-center text-white transition-all shadow-lg shadow-coral/40 active:scale-95 animate-pulse"
                aria-label="Thả tim kết nối"
              >
                <Heart className="w-6 h-6 fill-white" />
              </button>
            </div>
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="h-12 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-around px-2 text-white/50 text-[9px]">
            <div className="flex flex-col items-center gap-0.5 text-coral font-bold cursor-pointer">
              <Compass className="w-4 h-4" />
              <span>Radar</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
              <MessageCircle className="w-4 h-4" />
              <span>Nhắn tin</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
              <ShieldCheck className="w-4 h-4" />
              <span>Hồ sơ</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
              <User className="w-4 h-4" />
              <span>Tôi</span>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
};
