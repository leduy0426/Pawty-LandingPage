import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, X, MapPin, User, AlertTriangle, CheckCircle2, MessageCircle, Compass, Bell } from 'lucide-react';

export const HeroTriplePhones: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] h-[580px] sm:h-[680px] lg:h-[720px] flex items-center justify-center select-none">
      
      {/* ========================================================
          LEFT PHONE: MẠNG XÃ HỘI FEED KHOẢNH KHẮC (FB STYLE) (-10° TILT)
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

          {/* Screen Content: Social Feed */}
          <div className="p-3 space-y-2.5 flex-1 overflow-hidden text-left">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-xs font-bold font-display text-coral">Bảng Tin Khoảnh Khắc</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-white/80">Cộng đồng</span>
            </div>

            {/* Post Author Bar */}
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Minh Tuấn"
                className="w-7 h-7 rounded-full object-cover border border-coral"
              />
              <div className="leading-tight">
                <p className="text-[11px] font-bold text-white">Minh Tuấn &amp; LuLu</p>
                <p className="text-[8px] text-white/60">Park 5 • 15 phút trước</p>
              </div>
            </div>

            {/* Post Photo */}
            <div className="relative rounded-xl overflow-hidden h-36 bg-white/5 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&auto=format&fit=crop&q=80"
                alt="Dạo công viên"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-[8px] text-white backdrop-blur-sm">
                #ChieuMatDaoCongVien
              </span>
            </div>

            {/* Post Text */}
            <p className="text-[9px] text-white/80 leading-snug line-clamp-2">
              Chiều mát dắt LuLu dạo bãi cỏ Landmark 🐾 Có sen nào ở Park 5 đang cho cún dạo không giao lưu nhé!
            </p>

            {/* Reactions Bar */}
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[9px] text-white/60">
              <span className="flex items-center gap-1 text-rose-400 font-bold">
                <Heart className="w-3 h-3 fill-rose-400" /> 48 yêu thích
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" /> 12 bình luận
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          RIGHT PHONE: BẢNG TIN SOS THÚ LẠC (+10° TILT)
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

          {/* Screen Content: SOS Board matching real Pawty app */}
          <div className="p-3 space-y-2 flex-1 overflow-hidden text-left">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-500 animate-pulse" />
                <span className="text-xs font-bold font-display text-white">Bảng Tin SOS Thú Lạc</span>
              </div>
              <Bell className="w-3.5 h-3.5 text-white/60" />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 text-[9px]">
              <span className="px-2 py-0.5 rounded-full bg-coral text-white font-bold whitespace-nowrap">
                Tất cả (2)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 whitespace-nowrap">
                Quanh đây (&lt;1km)
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 whitespace-nowrap">
                Loài Chó
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 whitespace-nowrap">
                Loài Mèo
              </span>
            </div>

            {/* Pet SOS Card */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-2.5 space-y-1.5 text-[9px]">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80"
                  alt="Lu - Mèo Ba Tư"
                  className="w-11 h-11 rounded-xl object-cover border border-rose-500/40"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[11px] font-bold text-white truncate">Lu (Mèo · Ba Tư)</h4>
                    <span className="text-[9px] text-coral font-bold shrink-0">Cách 0.1km</span>
                  </div>
                  <p className="text-[8px] text-white/50 truncate">Đăng bởi: Lê Duy · Bài đăng của bạn</p>
                  <p className="text-[9px] text-rose-400 font-bold mt-0.5">Hậu tạ: 1.000.000đ</p>
                </div>
              </div>

              {/* Location Box */}
              <div className="px-2 py-1 rounded-lg bg-black/40 border border-white/5 flex items-start gap-1 text-[8px] text-white/80">
                <MapPin className="w-3 h-3 text-coral shrink-0 mt-0.5" />
                <span className="line-clamp-1">Vị trí cuối: Vinhomes Grand Park, TP. Thủ Đức</span>
              </div>

              {/* Real Description */}
              <p className="text-[8px] text-white/70 line-clamp-2 leading-relaxed">
                Bé Mèo Ba Tư lông xám bạc pha trắng ở ngực, mắt vàng hổ phách, không đeo vòng cổ. Ai thấy xin báo giúp gia đình!
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <button className="py-1.5 px-2 rounded-lg bg-coral hover:bg-coral-dark text-white font-bold text-[8px] flex items-center justify-center gap-1 shadow-sm">
                  <MapPin className="w-2.5 h-2.5" />
                  <span>Báo nhìn thấy (9)</span>
                </button>
                <button className="py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[8px] flex items-center justify-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>Đã đón về</span>
                </button>
              </div>
            </div>

            {/* Bottom Tab Bar Preview */}
            <div className="pt-1 flex items-center justify-around border-t border-white/10 text-[8px] text-white/50">
              <span className="flex flex-col items-center">
                <Compass className="w-3.5 h-3.5" />
                <span>Khám phá</span>
              </span>
              <span className="flex flex-col items-center">
                <Heart className="w-3.5 h-3.5" />
                <span>Kết nối</span>
              </span>
              <span className="flex flex-col items-center text-coral font-bold">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>SOS</span>
              </span>
              <span className="flex flex-col items-center">
                <User className="w-3.5 h-3.5" />
                <span>Tôi</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================
          CENTER PHONE: PAWTY DATING (FB DATING STYLE - FRONT & CENTER)
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

          {/* App Header Bar (Pawty Dating) */}
          <div className="px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 p-0.5 shadow-md flex items-center justify-center">
                <img
                  src="/assets/pawty-icon.png"
                  alt="Pawty Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <img
                  src="/assets/pawty-wordmark.png"
                  alt="Pawty"
                  className="h-6 w-auto object-contain drop-shadow-xs"
                />
                <span className="font-display font-bold text-[11px] text-coral-light tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-coral/20 border border-coral/30">
                  DATING
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-[10px] text-mint font-bold px-2.5 py-1 rounded-full bg-mint/15 border border-mint/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safe Pet</span>
            </div>
          </div>

          {/* Subheader / Intent Selector */}
          <div className="px-3 py-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <span className="px-3 py-1 rounded-full bg-coral text-white font-bold whitespace-nowrap text-[11px] shadow-sm">
              Bạn chơi chung
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Hẹn hò
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold whitespace-nowrap text-[11px]">
              Giao lưu
            </span>
          </div>

          {/* Main Dating Profile Card */}
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
                  <span>Sổ tiêm 7 bệnh ✓</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-coral" />
                  <span>Cách 280m</span>
                </div>
              </div>

              {/* Bottom Card Information Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/85 to-transparent pt-10 text-left">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-extrabold text-base text-white">
                    Corgi Mochi <span className="text-xs font-normal text-white/70">1.5 tuổi</span>
                  </h3>
                  <span className="text-[10px] text-mint font-bold">Park 3 Vinhomes</span>
                </div>
                
                <p className="text-[10px] text-white/70 line-clamp-1 mt-0.5">
                  Thích chạy bãi cỏ, hòa đồng với cún nhỏ, đã tiêm phòng đầy đủ.
                </p>

                {/* Habits Chips */}
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[9px] font-semibold">
                    #HòaĐồng
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-white/20 text-white text-[9px] font-semibold">
                    #NgoanNgoãn
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-mint/20 text-mint text-[9px] font-semibold">
                    #SổTiêmXanh
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Skip & Send Walk Invite */}
            <div className="py-2.5 flex items-center gap-2">
              <button
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all shadow-md active:scale-90"
                aria-label="Xem hồ sơ khác"
                title="Bỏ qua"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>

              <button
                className="flex-1 h-11 rounded-full bg-gradient-to-r from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 flex items-center justify-center gap-1.5 text-white font-display font-bold text-xs transition-all shadow-lg shadow-coral/40 active:scale-95"
                aria-label="Gửi lời mời dắt dạo"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Gửi lời mời dắt dạo</span>
              </button>
            </div>
          </div>

          {/* Bottom App Navigation Bar (Matches Pawty App Bottom Bar) */}
          <div className="h-12 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center justify-around px-2 text-white/50 text-[9px]">
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer">
              <Compass className="w-4 h-4" />
              <span>Khám phá</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-coral font-bold cursor-pointer">
              <Heart className="w-4 h-4 fill-coral" />
              <span>Kết nối</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 hover:text-white cursor-pointer relative">
              <MessageCircle className="w-4 h-4" />
              <span className="absolute -top-1 -right-2 w-3.5 h-3.5 rounded-full bg-coral text-white text-[8px] flex items-center justify-center font-bold">2</span>
              <span>Tin nhắn</span>
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
