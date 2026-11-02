import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PETS } from '../../data/landingData';
import { ShieldCheck, Heart, X, Sparkles, MapPin, CheckCircle2, RotateCcw, MessageCircle, Dog, Cat } from 'lucide-react';

export const InteractiveRadarSection: React.FC = () => {
  const [filterSpecies, setFilterSpecies] = useState<'all' | 'Chó' | 'Mèo'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchedPet, setMatchedPet] = useState<typeof MOCK_PETS[0] | null>(null);
  const [swipeHistory, setSwipeHistory] = useState<number[]>([]);

  const filteredPets = MOCK_PETS.filter((p) => {
    if (filterSpecies === 'all') return true;
    return p.species === filterSpecies;
  });

  const activeIndex = currentIndex % (filteredPets.length || 1);
  const currentPet = filteredPets[activeIndex] || MOCK_PETS[0];

  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeHistory((prev) => [...prev, currentIndex]);
    if (direction === 'right') {
      setMatchedPet(currentPet);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleRewind = () => {
    if (swipeHistory.length > 0) {
      const prevIdx = swipeHistory[swipeHistory.length - 1];
      setSwipeHistory((prev) => prev.slice(0, -1));
      setCurrentIndex(prevIdx);
      setMatchedPet(null);
    }
  };

  const handleNextMatch = () => {
    setMatchedPet(null);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section id="radar" className="py-24 bg-cream-warm/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 border border-coral/30 text-coral text-xs font-bold uppercase tracking-wider">
            ⚡ Trải Nghiệm Thực Tế PostGIS 3km
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Quẹt thẻ tìm bạn dắt dạo vô tận ngay trên web!
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Nhấp <span className="text-coral font-bold">Trái Tim</span> để ghép đôi, <span className="text-charcoal font-bold">Dấu X</span> để bỏ qua, và đặc biệt bấm <span className="text-amber-600 font-bold">Hoàn Tác</span> nếu lỡ quẹt nhầm!
          </p>

          {/* Species Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'Tất cả Boss', icon: Sparkles },
              { id: 'Chó', label: 'Chó cưng', icon: Dog },
              { id: 'Mèo', label: 'Mèo cưng', icon: Cat },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = filterSpecies === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFilterSpecies(tab.id as any);
                    setCurrentIndex(0);
                    setSwipeHistory([]);
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

        {/* Interactive Radar Arena */}
        <div className="max-w-md mx-auto relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPet.id}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-4xl overflow-hidden shadow-floating border border-coral/15 flex flex-col"
            >
              {/* Pet Photo Container */}
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
                    <span>Safe Pet • Tiêm 7 bệnh & dại</span>
                  </div>
                )}

                {/* Distance Badge */}
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-coral" />
                  <span>{currentPet.distance}</span>
                </div>
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

                {/* Action Buttons: Rewind, Pass, Like */}
                <div className="pt-4 flex items-center justify-center gap-4">
                  {/* Rewind Swipe Button */}
                  <button
                    onClick={handleRewind}
                    disabled={swipeHistory.length === 0}
                    className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                      swipeHistory.length > 0
                        ? 'bg-amber-50 border-amber-300 text-amber-600 hover:bg-amber-100 active:scale-90 cursor-pointer shadow-sm'
                        : 'bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed opacity-50'
                    }`}
                    title="Hoàn tác lượt quẹt vừa rồi (Rewind)"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>

                  {/* Pass Button */}
                  <button
                    onClick={() => handleSwipe('left')}
                    className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 text-charcoal hover:border-charcoal hover:bg-gray-50 flex items-center justify-center transition-all shadow-md active:scale-90 cursor-pointer"
                    aria-label="Pass"
                    title="Bỏ qua"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>

                  {/* Like Button */}
                  <button
                    onClick={() => handleSwipe('right')}
                    className="w-16 h-16 rounded-full bg-gradient-to-tr from-coral to-rose-500 text-white flex items-center justify-center transition-all shadow-lg shadow-coral/30 hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                    aria-label="Like"
                    title="Thả tim kết nối"
                  >
                    <Heart className="w-8 h-8 fill-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Match Modal Celebration */}
          <AnimatePresence>
            {matchedPet && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-charcoal/85 backdrop-blur-md rounded-4xl flex flex-col items-center justify-center p-6 text-white text-center z-20 space-y-4"
              >
                <div className="text-4xl animate-bounce">🎉 🐾 💖</div>
                <h4 className="font-display font-extrabold text-3xl text-mint">
                  IT'S A MATCH!
                </h4>
                <p className="text-sm text-white/90 max-w-xs">
                  Bạn và Boss <strong className="text-coral-light">{matchedPet.name}</strong> đã tương hợp! Điểm hẹn dạo trung tâm đề xuất: <span className="underline font-bold text-mint">Công viên Landmark Park</span>.
                </p>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleNextMatch}
                    className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer"
                  >
                    Quẹt tiếp
                  </button>
                  <button
                    onClick={handleNextMatch}
                    className="px-5 py-2.5 rounded-full bg-coral hover:bg-coral-dark text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-coral/40 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Mở khung Chat</span>
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
