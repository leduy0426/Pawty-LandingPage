import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_DATING_PROFILES, DatingProfileMock } from '../../data/landingData';
import { Heart, X, MapPin, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, RotateCw, User, Sparkles } from 'lucide-react';

export const InteractiveRadarSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [invitedProfile, setInvitedProfile] = useState<DatingProfileMock | null>(null);

  const activeIndex = currentIndex % MOCK_DATING_PROFILES.length;
  const current = MOCK_DATING_PROFILES[activeIndex] || MOCK_DATING_PROFILES[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : MOCK_DATING_PROFILES.length - 1));
  };

  const handleFlipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleSendInvite = () => {
    setInvitedProfile(current);
  };

  const handleCloseInviteModal = () => {
    setInvitedProfile(null);
    handleNext();
  };

  return (
    <section id="dating" className="py-24 bg-cream-warm/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 border border-coral/30 text-coral text-xs font-bold uppercase tracking-wider">
            🤝 Pawty Dating — Kết Nối Người Nuôi Thú Cưng
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Khám phá &amp; kết nối những người nuôi pet quanh bạn
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Thẻ hẹn dạo 2 mặt độc đáo: <span className="font-bold text-charcoal">Mặt trước là thông tin Chủ nuôi (Sen)</span>, chạm vào thẻ để <span className="text-coral font-bold">quay thẻ lại xem thông tin Boss</span>. Cùng gửi lời mời dắt dạo và giao lưu an tâm!
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint/20 border border-mint-dark/30 text-emerald-800 text-xs font-bold">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-emerald-700" />
            <span>Mẹo: Chạm vào thẻ bất kỳ lúc nào để lật giữa Sen 👤 và Boss 🐾</span>
          </div>
        </div>

        {/* 2-Sided Interactive Flip Card Arena */}
        <div className="max-w-md mx-auto relative">
          
          <div className="relative w-full h-[580px] [perspective:1200px]">
            <motion.div
              className="w-full h-full relative [transform-style:preserve-3d] cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
              onClick={handleFlipCard}
            >
              {/* ========================================================
                  MẶT TRƯỚC (FRONT FACE): THÔNG TIN CHỦ PET (SEN)
                  ======================================================== */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-4xl overflow-hidden shadow-floating border border-coral/15 flex flex-col justify-between select-none">
                {/* Owner Photo Container */}
                <div className="relative h-72 overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={current.ownerAvatar}
                    alt={current.ownerName}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Owner Badge */}
                  <div className="absolute top-4 left-4 bg-coral text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <User className="w-3.5 h-3.5" />
                    <span>Chủ nuôi (Sen)</span>
                  </div>

                  {/* Distance Badge */}
                  <div className="absolute bottom-4 left-4 bg-charcoal/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-coral" />
                    <span>{current.distance}</span>
                  </div>

                  {/* Flip Hint Button on Image */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal hover:bg-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-coral/20">
                    <RotateCw className="w-3.5 h-3.5 text-coral" />
                    <span>Lật xem Boss</span>
                  </div>

                  {/* Navigation arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer z-10"
                    title="Người trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer z-10"
                    title="Người tiếp theo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Owner Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-2xl text-charcoal flex items-center gap-2">
                          {current.ownerName}
                          <span className="text-sm font-semibold text-charcoal-light">
                            ({current.ownerAge} tuổi)
                          </span>
                        </h3>
                        <p className="text-xs font-semibold text-coral mt-0.5">
                          {current.ownerJob} • {current.ownerArea}
                        </p>
                      </div>
                    </div>

                    <div className="bg-coral-50/60 rounded-xl p-2.5 border border-coral/10">
                      <p className="text-xs text-charcoal font-medium leading-relaxed italic">
                        "{current.ownerBio}"
                      </p>
                    </div>

                    <div className="pt-1 flex items-center gap-1.5 text-xs text-charcoal-light">
                      <span className="font-bold text-charcoal">Mục đích:</span>
                      <span className="bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-md text-[11px] border border-amber-200/60">
                        {current.connectionGoal}
                      </span>
                    </div>

                    <div className="flex gap-1.5 flex-wrap pt-0.5">
                      {current.ownerTags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-gray-100 text-charcoal-light font-bold px-2 py-0.5 rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Flip Prompt */}
                  <div className="pt-2 text-center border-t border-gray-100 mt-2">
                    <span className="text-[11px] font-bold text-coral inline-flex items-center gap-1">
                      <RotateCw className="w-3 h-3" />
                      Chạm thẻ để xem Boss bé cưng: {current.petName} ({current.species}) →
                    </span>
                  </div>
                </div>
              </div>

              {/* ========================================================
                  MẶT SAU (BACK FACE): THÔNG TIN BOSS NUÔI (PET)
                  ======================================================== */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-4xl overflow-hidden shadow-floating border border-mint-dark/30 flex flex-col justify-between select-none">
                {/* Pet Photo Container */}
                <div className="relative h-72 overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={current.petAvatar}
                    alt={current.petName}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Pet Species Badge */}
                  <div className="absolute top-4 left-4 bg-mint-dark text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Boss đi cùng • {current.species}</span>
                  </div>

                  {/* Self-Declared Vaccination Checkbox Badge */}
                  {current.isVaccinated && (
                    <div className="absolute bottom-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Đã tiêm phòng</span>
                    </div>
                  )}

                  {/* Flip Back Hint Button */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal hover:bg-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md border border-mint-dark/30">
                    <RotateCw className="w-3.5 h-3.5 text-mint-dark" />
                    <span>Xem chủ nuôi</span>
                  </div>

                  {/* Navigation arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer z-10"
                    title="Người trước"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer z-10"
                    title="Người tiếp theo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Pet Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-2xl text-charcoal flex items-center gap-2">
                          {current.petName}
                          <span className="text-sm font-semibold text-charcoal-light">
                            ({current.petAge})
                          </span>
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                          {current.breed} • Nuôi bởi {current.ownerName}
                        </p>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {current.personality.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-mint/30 text-emerald-800 font-bold px-2 py-0.5 rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Habits Disclosure */}
                    <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-charcoal-light">
                          <strong className="text-charcoal font-semibold">Thói quen tốt: </strong>
                          {current.goodHabits.join(', ')}
                        </span>
                      </div>

                      {current.watchOutHabits.length > 0 && (
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold shrink-0">⚠️</span>
                          <span className="text-charcoal-light">
                            <strong className="text-charcoal font-semibold">Lưu ý khi dạo: </strong>
                            {current.watchOutHabits.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Flip Prompt Back */}
                  <div className="pt-2 text-center border-t border-gray-100 mt-2">
                    <span className="text-[11px] font-bold text-emerald-700 inline-flex items-center gap-1">
                      <RotateCw className="w-3 h-3" />
                      Chạm thẻ để quay lại thông tin Sen: {current.ownerName} →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons: Skip & Send Walk Invite */}
          <div className="pt-4 flex items-center gap-3">
            {/* Skip / Next Button */}
            <button
              onClick={handleNext}
              className="flex-1 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-charcoal font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <X className="w-4 h-4 text-gray-500" />
              <span>Xem người khác</span>
            </button>

            {/* Flip Card Quick Toggle Button */}
            <button
              onClick={handleFlipCard}
              className="px-4 py-3.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-charcoal font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Lật thẻ qua lại"
            >
              <RotateCw className="w-4 h-4 text-coral" />
              <span>{isFlipped ? 'Xem Sen 👤' : 'Xem Boss 🐾'}</span>
            </button>

            {/* Send Walk Invite Button */}
            <button
              onClick={handleSendInvite}
              className="flex-[2] py-3.5 rounded-full bg-gradient-to-r from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-coral/30 hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Gửi lời mời dắt dạo</span>
            </button>
          </div>

          {/* Invitation Sent Modal */}
          <AnimatePresence>
            {invitedProfile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-charcoal/85 backdrop-blur-md rounded-4xl flex flex-col items-center justify-center p-6 text-white text-center z-20 space-y-4"
              >
                <div className="text-4xl animate-bounce">💌 🐾 ✨</div>
                <h4 className="font-display font-extrabold text-2xl text-mint">
                  ĐÃ GỬI LỜI MỜI HẸN DẠO!
                </h4>
                <p className="text-sm text-white/90 max-w-xs leading-relaxed">
                  Lời mời dắt dạo đã được gửi tới bạn <strong className="text-coral-light">{invitedProfile.ownerName}</strong> và bé <strong className="text-mint">{invitedProfile.petName}</strong>. Hai bạn có thể nhắn tin trao đổi điểm hẹn trung tâm thuận tiện nhất!
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleCloseInviteModal}
                    className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    Xem hồ sơ khác
                  </button>
                  <button
                    onClick={handleCloseInviteModal}
                    className="px-5 py-2.5 rounded-full bg-coral hover:bg-coral-dark text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-coral/40 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Hộp thư Hẹn dạo</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
