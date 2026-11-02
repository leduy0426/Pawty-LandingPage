import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PETS } from '../../data/landingData';
import { ShieldCheck, Heart, X, Sparkles, MapPin, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Dog, Cat } from 'lucide-react';

export const InteractiveRadarSection: React.FC = () => {
  const [filterSpecies, setFilterSpecies] = useState<'all' | 'Chó' | 'Mèo'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [invitedPet, setInvitedPet] = useState<typeof MOCK_PETS[0] | null>(null);

  const filteredPets = MOCK_PETS.filter((p) => {
    if (filterSpecies === 'all') return true;
    return p.species === filterSpecies;
  });

  const activeIndex = currentIndex % (filteredPets.length || 1);
  const currentPet = filteredPets[activeIndex] || MOCK_PETS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredPets.length - 1));
  };

  const handleSendInvite = () => {
    setInvitedPet(currentPet);
  };

  const handleCloseInviteModal = () => {
    setInvitedPet(null);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section id="dating" className="py-24 bg-cream-warm/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 border border-coral/30 text-coral text-xs font-bold uppercase tracking-wider">
            🤝 Trải Nghiệm Pawty Dating (FB Dating Style)
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight">
            Khám phá &amp; gửi lời mời dắt dạo chung cư
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Không gian hẹn dạo chuyên biệt: Xem chi tiết sổ tiêm Safe Pet, thói quen ứng xử của Boss và bấm <span className="text-coral font-bold">Gửi lời mời dắt dạo</span> để kết nối an toàn!
          </p>

          {/* Species Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'Tất cả Boss', icon: Sparkles },
              { id: 'Chó', label: 'Loài Chó', icon: Dog },
              { id: 'Mèo', label: 'Loài Mèo', icon: Cat },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = filterSpecies === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFilterSpecies(tab.id as any);
                    setCurrentIndex(0);
                    setInvitedPet(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-coral text-white shadow-md shadow-coral/30 scale-105'
                      : 'bg-white text-charcoal border border-gray-200 hover:border-coral/40'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Dating Card Arena */}
        <div className="max-w-md mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPet.id}
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-4xl overflow-hidden shadow-floating border border-coral/15 flex flex-col"
            >
              {/* Pet Photo Container with FB Dating Header */}
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={currentPet.avatar}
                  alt={currentPet.name}
                  className="w-full h-full object-cover select-none"
                />

                {/* Safe Pet Badge */}
                {currentPet.isVaccinated && (
                  <div className="absolute top-4 left-4 bg-mint-dark text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Safe Pet • Tiêm 7 bệnh &amp; dại</span>
                  </div>
                )}

                {/* Distance Badge */}
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>{currentPet.distance}</span>
                </div>

                {/* Navigation arrows directly on photo */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer"
                  title="Hồ sơ trước"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all cursor-pointer"
                  title="Hồ sơ tiếp theo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pet Info Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-charcoal flex items-center gap-2">
                      {currentPet.name}
                      <span className="text-sm font-semibold text-charcoal-light">
                        ({currentPet.age})
                      </span>
                    </h3>
                    <p className="text-xs font-semibold text-coral mt-0.5">
                      {currentPet.breed} • {currentPet.apartment}
                    </p>
                  </div>
                  <div className="flex gap-1 flex-wrap">
                    {currentPet.personality.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-coral-50 text-coral font-bold px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Habits Disclosure (Fight Prevention) */}
                <div className="space-y-2 pt-2 border-t border-gray-100 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mint-dark shrink-0 mt-0.5" />
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

                {/* FB Dating Action Buttons: Skip & Send Walk Invite */}
                <div className="pt-3 flex items-center gap-3">
                  {/* Skip / Next Button */}
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-charcoal font-display font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                    <span>Xem tiếp</span>
                  </button>

                  {/* Send Walk Invite Button (FB Dating Primary CTA) */}
                  <button
                    onClick={handleSendInvite}
                    className="flex-[2] py-3.5 rounded-full bg-gradient-to-r from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-coral/30 hover:shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>Gửi lời mời dắt dạo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Invitation Sent Modal (FB Dating Match Experience) */}
          <AnimatePresence>
            {invitedPet && (
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
                  Lời mời dắt dạo cùng bé <strong className="text-coral-light">{invitedPet.name}</strong> đã được gửi tới chủ nuôi. Hệ thống đề xuất trung điểm gặp gỡ: <span className="underline font-bold text-mint">Công viên nội khu Landmark Park</span>.
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
