import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_DATING_PROFILES, DatingProfileMock } from '../../data/landingData';
import { Heart, X, MapPin, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, RotateCw, User, Sparkles } from 'lucide-react';

export const InteractiveRadarSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activePetIndex, setActivePetIndex] = useState(0);
  const [invitedProfile, setInvitedProfile] = useState<DatingProfileMock | null>(null);

  const activeIndex = currentIndex % MOCK_DATING_PROFILES.length;
  const current = MOCK_DATING_PROFILES[activeIndex] || MOCK_DATING_PROFILES[0];

  // Pet hiện tại đang xem của chủ nuôi này
  const ownerPets = current.pets && current.pets.length > 0 ? current.pets : [
    {
      id: current.id,
      name: current.petName,
      species: current.species,
      breed: current.breed,
      age: current.petAge,
      avatar: current.petAvatar,
      isVaccinated: current.isVaccinated,
      personality: current.personality,
      goodHabits: current.goodHabits,
      watchOutHabits: current.watchOutHabits,
    }
  ];

  const safePetIdx = activePetIndex % ownerPets.length;
  const currentPet = ownerPets[safePetIdx] || ownerPets[0];

  // Nút dưới: Next sang người khác
  const handleNextPerson = () => {
    setIsFlipped(false);
    setActivePetIndex(0);
    setCurrentIndex((prev) => (prev + 1) % MOCK_DATING_PROFILES.length);
  };

  // Nút mũi tên trái: Xem pet trước của chủ này
  const handlePrevPet = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePetIndex((prev) => (prev > 0 ? prev - 1 : ownerPets.length - 1));
    setIsFlipped(true); // Lật sang mặt sau để xem pet
  };

  // Nút mũi tên phải: Xem pet tiếp theo của chủ này
  const handleNextPet = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActivePetIndex((prev) => (prev + 1) % ownerPets.length);
    setIsFlipped(true); // Lật sang mặt sau để xem pet
  };

  // Ấn vào thẻ: lật giữa Mặt trước (Chủ) và Mặt sau (Pet)
  const handleFlipCard = () => {
    setIsFlipped((prev) => !prev);
  };

  // Nút dưới: Thả tim gửi lời mời dắt dạo
  const handleSendInvite = () => {
    setInvitedProfile(current);
  };

  const handleCloseInviteModal = () => {
    setInvitedProfile(null);
    handleNextPerson();
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

                  {/* Pets count pill indicator */}
                  <div
                    onClick={handleNextPet}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-charcoal hover:bg-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-coral/30 hover:scale-105 transition-all"
                    title="Bấm để xem các Boss của chủ này"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-coral" />
                    <span>{ownerPets.length} Boss nuôi 🐾</span>
                  </div>

                  {/* 2 Nút mũi tên sang trái/phải: Duyệt tất cả các pet của người chủ đó */}
                  <button
                    onClick={handlePrevPet}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-coral text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-lg active:scale-90"
                    title="Xem Boss trước của chủ này"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextPet}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-coral text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-lg active:scale-90"
                    title="Xem Boss tiếp theo của chủ này"
                  >
                    <ChevronRight className="w-6 h-6" />
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
                      Chạm thẻ để xem {ownerPets.length} Boss cưng (hoặc bấm &lt; &gt;) →
                    </span>
                  </div>
                </div>
              </div>

              {/* ========================================================
                  MẶT SAU (BACK FACE): THÔNG TIN CÁC BOSS NUÔI (PETS)
                  ======================================================== */}
              <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-4xl overflow-hidden shadow-floating border border-mint-dark/30 flex flex-col justify-between select-none">
                {/* Pet Photo Container */}
                <div className="relative h-72 overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={currentPet.avatar}
                    alt={currentPet.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Pet Index Badge: Bé 1/2, Bé 2/2 */}
                  <div className="absolute top-4 left-4 bg-mint-dark text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Boss {safePetIdx + 1}/{ownerPets.length}: {currentPet.name} ({currentPet.species})</span>
                  </div>

                  {/* Self-Declared Vaccination Checkbox Badge */}
                  {currentPet.isVaccinated && (
                    <div className="absolute bottom-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Đã tiêm phòng</span>
                    </div>
                  )}

                  {/* Pet Dots Indicators */}
                  {ownerPets.length > 1 && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
                      {ownerPets.map((_, pIdx) => (
                        <div
                          key={pIdx}
                          className={`w-2 h-2 rounded-full transition-all ${
                            pIdx === safePetIdx ? 'bg-mint w-4' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* 2 Nút mũi tên sang trái/phải: Duyệt tất cả các pet của người chủ đó */}
                  <button
                    onClick={handlePrevPet}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-lg active:scale-90"
                    title="Xem Boss trước của chủ này"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextPet}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-lg active:scale-90"
                    title="Xem Boss tiếp theo của chủ này"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Pet Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-2xl text-charcoal flex items-center gap-2">
                          {currentPet.name}
                          <span className="text-sm font-semibold text-charcoal-light">
                            ({currentPet.age})
                          </span>
                        </h3>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                          {currentPet.breed} • Nuôi bởi {current.ownerName}
                        </p>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {currentPet.personality.map((tag, i) => (
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
                          {currentPet.goodHabits.join(', ')}
                        </span>
                      </div>

                      {currentPet.watchOutHabits.length > 0 && (
                        <div className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold shrink-0">⚠️</span>
                          <span className="text-charcoal-light">
                            <strong className="text-charcoal font-semibold">Lưu ý khi dạo: </strong>
                            {currentPet.watchOutHabits.join(', ')}
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

          {/* ========================================================
              ĐÚNG 2 NÚT Ở DƯỚI THẺ THEO YÊU CẦU:
              1. Bấm là next sang người khác ("Xem người khác")
              2. Nút thả tim để dắt dạo ("Gửi lời mời dắt dạo")
              ======================================================== */}
          <div className="pt-4 flex items-center gap-3">
            {/* Button 1: Next sang người khác */}
            <button
              onClick={handleNextPerson}
              className="flex-1 py-4 rounded-full bg-gray-100 hover:bg-gray-200 text-charcoal font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer hover:shadow-sm"
              title="Chuyển sang người chủ tiếp theo"
            >
              <X className="w-4 h-4 text-gray-500" />
              <span>Xem người khác</span>
            </button>

            {/* Button 2: Thả tim để dắt dạo */}
            <button
              onClick={handleSendInvite}
              className="flex-[2] py-4 rounded-full bg-gradient-to-r from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-coral/30 hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              title="Gửi lời mời dắt dạo tới chủ nuôi này"
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
                  Lời mời dắt dạo đã được gửi tới bạn <strong className="text-coral-light">{invitedProfile.ownerName}</strong> cùng các bé Boss ({ownerPets.map(p => p.name).join(', ')}). Hai bạn có thể nhắn tin trao đổi điểm hẹn trung tâm thuận tiện nhất!
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleCloseInviteModal}
                    className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    Xem người khác
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
