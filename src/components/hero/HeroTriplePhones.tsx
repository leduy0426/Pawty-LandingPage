import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, X, Star, MapPin, Bell, Search, Compass, MessageCircle, User, Calendar } from 'lucide-react';

export const HeroTriplePhones: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] h-[580px] sm:h-[680px] lg:h-[720px] flex items-center justify-center select-none">
      
      {/* ========================================================
          LEFT PHONE: SỔ TIÊM ĐIỆN TỬ & PROFILE AN TOÀN (-10° TILT)
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

          {/* Screen Content: Safe Pet Passport */}
          <div className="p-3.5 space-y-3 flex-1 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-mint" />
                <span className="text-xs font-bold font-display text-mint">Sổ Tiêm Điện Tử</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-mint/20 text-mint font-semibold">Đã xác minh</span>
            </div>

            {/* Pet summary card */}
            <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=150&auto=format&fit=crop&q=80"
                alt="Golden Bơ"
                className="w-12 h-12 rounded-xl object-cover border border-mint/40"
              />
              <div>
                <h4 className="text-xs font-bold text-white">Golden Bơ (2.5t)</h4>
                <p className="text-[10px] text-white/60">Masteri Thảo Điền - T4</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[9px] text-mint font-semibold">Chip: PT-8821-VN</span>
                </div>
              </div>
            </div>

            {/* Vaccine records list */}
            <div className="space-y-2">
              <div className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Lịch tiêm phòng 2026</div>
              
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
                  <span>Phòng dại Rabies 2026</span>
                </div>
                <span className="text-mint font-bold">Hoàn thành ✓</span>
              </div>

              <div className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Tẩy giun định kỳ Q3</span>
                </div>
                <span className="text-amber-400 font-bold">15/11 tới</span>
              </div>
            </div>

            {/* Safety guarantee banner */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-mint/20 to-teal-500/20 border border-mint/30 text-[10px] text-mint-light">
              <p className="font-bold">✨ Chuẩn An Toàn Dắt Dạo</p>
              <p className="text-[9px] text-white/70 mt-0.5">Không cắn sủa • Hòa đồng với cún khác</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          RIGHT PHONE: HẸN DẠO TRUNG ĐIỂM & CHAT REALTIME (+10° TILT)
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

          {/* Screen Content: Walk Appointment & Chat */}
          <div className="p-3.5 space-y-3 flex-1 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-coral" />
                <span className="text-xs font-bold font-display text-white">Kèo Hẹn Dắt Cún</span>
              </div>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-coral/20 text-coral font-bold">17:30 Chiều nay</span>
            </div>

            {/* Midpoint Suggestion Map Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-2.5 space-y-2">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-white/60">Trung điểm tối ưu:</span>
                <span className="text-coral font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Cách đều 350m
                </span>
              </div>
              
              {/* Mini visual map route */}
              <div className="h-20 rounded-xl bg-slate-800/80 relative overflow-hidden flex items-center justify-center border border-white/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]" />
                <div className="relative z-10 flex items-center gap-4 text-[10px]">
                  <div className="text-center">
                    <span className="w-5 h-5 rounded-full bg-coral inline-flex items-center justify-center text-[9px] font-bold">Bơ</span>
                    <p className="text-[8px] text-white/60 mt-0.5">Park 3</p>
                  </div>
                  <div className="w-12 h-0.5 bg-dashed border-b border-dashed border-coral animate-pulse" />
                  <div className="text-center">
                    <span className="w-6 h-6 rounded-full bg-mint text-charcoal inline-flex items-center justify-center text-[10px] font-bold shadow-md">📍</span>
                    <p className="text-[8px] text-mint font-bold mt-0.5">Landmark Park</p>
                  </div>
                  <div className="w-12 h-0.5 bg-dashed border-b border-dashed border-coral animate-pulse" />
                  <div className="text-center">
                    <span className="w-5 h-5 rounded-full bg-amber-500 inline-flex items-center justify-center text-[9px] font-bold">Mochi</span>
                    <p className="text-[8px] text-white/60 mt-0.5">Central 1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat conversation bubble */}
            <div className="space-y-2 text-[10px]">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-coral/30 flex items-center justify-center text-xs">🐕</div>
                <div className="p-2 rounded-2xl rounded-tl-none bg-white/10 text-white/90 max-w-[80%]">
                  Chào sen! Mochi nhà mình vừa tiêm đủ 7 bệnh, chiều nay ra bãi cỏ dạo chung nhé?
                </div>
              </div>
              <div className="flex items-start gap-2 justify-end">
                <div className="p-2 rounded-2xl rounded-tr-none bg-coral text-white font-medium max-w-[80%] shadow-sm">
                  Dạ được ạ! Bé Bơ cũng háo hức gặp bạn lắm, hẹn sen 17:30 nhé! 🐾
                </div>
              </div>
            </div>

            {/* Anti-flake notice */}
            <div className="p-2 rounded-xl bg-danger/10 border border-danger/20 text-[9px] text-danger-light flex items-center gap-1.5">
              <span>🛡️</span>
              <span>Cơ chế bảo vệ: Bùng hẹn 2 lần khóa quẹt thẻ 3 ngày.</span>
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

          {/* App Header Bar (matching VNHUB style with Pawty identity) */}
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

          {/* Category Tabs (matching VNHUB "Tất cả, Du lịch, Trò chơi...") */}
          <div className="px-3 py-1 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="px-3 py-1 rounded-full bg-coral text-white font-bold whitespace-nowrap text-[11px] shadow-sm">
              Tất cả
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Gần bạn (3km)
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Cún cưng
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Mèo cưng
            </span>
          </div>

          {/* Main Pet Radar Card (Avatar / Movie Poster style like VNHUB Hero) */}
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
                  <span>280m</span>
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

            {/* Quẹt / Action Buttons (Tinder & VNHUB Video Play style) */}
            <div className="py-2.5 flex items-center justify-center gap-3">
              {/* Pass Button */}
              <button
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-90"
                aria-label="Pass"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>

              {/* Super Like / Star Button */}
              <button
                className="w-10 h-10 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 flex items-center justify-center text-amber-400 transition-all shadow-md active:scale-90"
                aria-label="Super Like"
              >
                <Star className="w-5 h-5 fill-amber-400" />
              </button>

              {/* Match / Like Button */}
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-tr from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 flex items-center justify-center text-white transition-all shadow-lg shadow-coral/40 active:scale-95 animate-pulse"
                aria-label="Like"
              >
                <Heart className="w-6 h-6 fill-white" />
              </button>
            </div>
          </div>

          {/* Bottom App Navigation Bar (matching native mobile apps) */}
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
              <span>Safe Pet</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
              <User className="w-4 h-4" />
              <span>Cá nhân</span>
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
};

