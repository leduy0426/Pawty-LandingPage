import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MOCK_PETS } from '../../data/landingData';
import { ShieldCheck, Heart, X, Sparkles, MapPin, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

export const InteractiveRadarSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchedPet, setMatchedPet] = useState<typeof MOCK_PETS[0] | null>(null);

  const currentPet = MOCK_PETS[currentIndex % MOCK_PETS.length];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setMatchedPet(currentPet);
    } else {
      setCurrentIndex((prev) => prev + 1);
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
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-50 border border-coral/30 text-coral text-xs font-bold uppercase tracking-wider">
            ⚡ Trải Nghiệm Thực Tế
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal tracking-tight">
            Quẹt thẻ tìm bạn dắt dạo ngay trên web!
          </h2>
          <p className="text-base sm:text-lg text-charcoal-light">
            Nhấp <span className="text-coral font-bold">Trái Tim</span> để gửi tín hiệu làm quen hoặc <span className="text-charcoal font-bold">Dấu Nhân</span> để xem bé tiếp theo. Hãy thử ngay để cảm nhận!
          </p>
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
                  <div className="flex gap-1">
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

                {/* Good Habits */}
                <div className="space-y-1.5 pt-2 border-t border-gray-100">
                  <div className="text-xs font-bold text-green-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span>Thói quen tốt:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPet.goodHabits.map((habit, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-green-50 text-green-800 px-2.5 py-1 rounded-lg font-medium"
                      >
                        ✓ {habit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Watch Out Habits */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-xs font-bold text-amber-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Lưu ý khi dắt dạo:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPet.watchOutHabits.map((habit, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg font-medium"
                      >
                        ! {habit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-center gap-6">
                  <button
                    onClick={() => handleSwipe('left')}
                    className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 text-charcoal-light hover:text-danger hover:border-danger hover:scale-110 active:scale-95 shadow-md flex items-center justify-center transition-all"
                    title="Bỏ qua"
                  >
                    <X className="w-7 h-7" />
                  </button>

                  <button
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="w-10 h-10 rounded-full bg-gray-100 text-charcoal-light hover:text-charcoal hover:scale-110 active:scale-95 flex items-center justify-center transition-all"
                    title="Đổi bé khác"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleSwipe('right')}
                    className="w-16 h-16 rounded-full bg-coral hover:bg-coral-dark text-white hover:scale-110 active:scale-95 shadow-card-hover flex items-center justify-center transition-all"
                    title="Gửi tim kết bạn"
                  >
                    <Heart className="w-8 h-8 fill-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Match Modal Popup with Confetti Simulation */}
          <AnimatePresence>
            {matchedPet && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              >
                <motion.div
                  initial={{ scale: 0.8, y: 30 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 30 }}
                  className="bg-white rounded-4xl max-w-sm w-full p-8 text-center shadow-2xl relative border-4 border-coral"
                >
                  <div className="w-16 h-16 rounded-full bg-coral-50 text-coral text-3xl flex items-center justify-center mx-auto mb-4 animate-bounce">
                    🎉
                  </div>

                  <h3 className="font-display font-extrabold text-3xl text-coral mb-2">
                    IT'S A PAWTY MATCH!
                  </h3>

                  <p className="text-sm text-charcoal-light font-body mb-6">
                    Bé <strong className="text-charcoal">{matchedPet.name}</strong> cũng rất muốn đi dạo cùng cún của bạn tại <span className="font-semibold text-charcoal">{matchedPet.apartment}</span>!
                  </p>

                  <div className="flex items-center justify-center gap-4 mb-6">
                    <img
                      src={matchedPet.avatar}
                      alt={matchedPet.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-coral shadow-md"
                    />
                    <Sparkles className="w-6 h-6 text-warning" />
                    <div className="w-20 h-20 rounded-full bg-mint-50 border-4 border-mint flex items-center justify-center text-3xl shadow-md">
                      🐕
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={handleNextMatch}
                      className="w-full py-3.5 rounded-full bg-coral hover:bg-coral-dark text-white font-display font-bold text-base shadow-card-hover transition-all"
                    >
                      Bắt Đầu Trò Chuyện & Hẹn Giờ
                    </button>
                    <button
                      onClick={handleNextMatch}
                      className="w-full py-2.5 text-xs font-semibold text-charcoal-light hover:text-charcoal"
                    >
                      Tiếp tục quẹt tìm bạn khác
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

