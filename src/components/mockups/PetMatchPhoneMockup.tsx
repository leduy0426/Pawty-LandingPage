import React, { useMemo } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import { Bell, ChevronDown, Compass, MapPin, MessageCircle, Radar, UserRound, type LucideIcon } from 'lucide-react';
import { MOCK_PETS, type PetCardMock } from '../../data/landingData';
import { usePetDeck, type SwipeDirection } from '../../hooks/usePetDeck';
import { PhoneFrame } from './PhoneFrame';
import { PetMatchCard } from './PetMatchCard';
import { SwipeActionBar } from './SwipeActionBar';

const EXIT_OFFSET: Record<SwipeDirection, { x: number; y: number; rotate: number }> = {
  left: { x: -320, y: 20, rotate: -14 },
  right: { x: 320, y: 20, rotate: 14 },
  up: { x: 0, y: -420, rotate: 0 },
};

const ACTION_MESSAGES: Record<SwipeDirection, (name: string) => string> = {
  left: (name) => `Đã bỏ qua ${name}`,
  right: (name) => `Đã gửi lời mời dắt dạo tới ${name}`,
  up: (name) => `Đã gửi Siêu thích tới ${name}`,
};

const TABS: { label: string; icon: LucideIcon; isActive?: boolean }[] = [
  { label: 'Radar', icon: Radar, isActive: true },
  { label: 'Khám phá', icon: Compass },
  { label: 'Tin nhắn', icon: MessageCircle },
  { label: 'Hồ sơ', icon: UserRound },
];

interface PetMatchPhoneMockupProps {
  pets?: PetCardMock[];
  areaName?: string;
  nearbyCount?: number;
  onChat?: (pet: PetCardMock) => void;
  className?: string;
}

export const PetMatchPhoneMockup: React.FC<PetMatchPhoneMockupProps> = ({
  pets = MOCK_PETS,
  areaName = 'Vinhomes Central Park',
  nearbyCount = 12,
  onChat,
  className,
}) => {
  const deck = usePetDeck(pets);
  const reduceMotion = useReducedMotion();

  const cardVariants = useMemo<Variants>(
    () => ({
      enter: reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 14 },
      center: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.28, ease: [0.2, 0, 0, 1] } },
      exit: (dir: SwipeDirection) =>
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.15 } }
          : { opacity: 0, ...EXIT_OFFSET[dir], transition: { duration: 0.32, ease: [0.4, 0, 1, 1] } },
    }),
    [reduceMotion],
  );

  const { current } = deck;

  return (
    <PhoneFrame className={className}>
      {/* App header */}
      <header className="flex shrink-0 items-center justify-between px-5 pb-3 pt-2">
        <button
          type="button"
          className="group flex flex-col items-start text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-xl"
          aria-label={`Khu vực hiện tại: ${areaName}. Đổi khu vực`}
        >
          <span className="font-body text-[11px] font-semibold text-charcoal-light">Khu vực</span>
          <span className="flex items-center gap-1 font-display text-base font-semibold text-charcoal">
            <MapPin className="h-4 w-4 text-coral" aria-hidden="true" />
            {areaName}
            <ChevronDown className="h-4 w-4 text-charcoal-light transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </span>
        </button>
        <button
          type="button"
          aria-label="Thông báo, có thông báo mới"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal shadow-card ring-1 ring-charcoal/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-coral ring-2 ring-white" aria-hidden="true" />
        </button>
      </header>

      <p className="shrink-0 px-5 pb-2.5 font-body text-xs font-semibold text-charcoal-light">
        <span className="font-bold text-charcoal">{nearbyCount} Boss</span> đang muốn dắt dạo quanh bạn
      </p>

      {/* Card stack */}
      <div className="relative mx-4 min-h-0 flex-1">
        {deck.upcoming && (
          <div
            className="absolute inset-x-3 -bottom-2 top-2 overflow-hidden rounded-3xl bg-white/80 shadow-card ring-1 ring-charcoal/5"
            aria-hidden="true"
          >
            <img src={deck.upcoming.avatar} alt="" className="h-3/5 w-full object-cover opacity-50" />
          </div>
        )}

        <AnimatePresence initial={false} custom={deck.direction}>
          {current && (
            <motion.div
              key={deck.cardKey}
              custom={deck.direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <PetMatchCard pet={current} isSaved={deck.savedIds.has(current.id)} onToggleSave={deck.toggleSaved} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action feedback */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-1 z-20 flex justify-center" aria-live="polite">
          <AnimatePresence>
            {deck.lastAction && (
              <motion.span
                key={`${deck.lastAction.type}-${deck.cardKey}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="rounded-full bg-charcoal px-3.5 py-1.5 font-body text-xs font-bold text-white shadow-floating"
              >
                {ACTION_MESSAGES[deck.lastAction.type](deck.lastAction.petName)}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Actions */}
      <div className="shrink-0 px-4 pb-3 pt-5">
        {current && (
          <SwipeActionBar
            petName={current.name}
            canUndo={deck.canUndo}
            onSwipe={deck.swipe}
            onUndo={deck.undo}
            onChat={() => onChat?.(current)}
          />
        )}
      </div>

      {/* Tab bar */}
      <nav className="shrink-0 border-t border-charcoal/5 bg-white/90 px-4 pb-5 pt-2 backdrop-blur" aria-label="Điều hướng ứng dụng">
        <ul className="flex items-center justify-between">
          {TABS.map(({ label, icon: Icon, isActive }) => (
            <li key={label} className="flex-1">
              <span
                className={`flex flex-col items-center gap-0.5 font-body text-[10px] font-bold ${isActive ? 'text-coral' : 'text-softgray'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} aria-hidden="true" />
                {label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </PhoneFrame>
  );
};

export default PetMatchPhoneMockup;
