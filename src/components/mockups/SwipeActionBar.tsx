import React from 'react';
import { Heart, MessageCircle, Star, Undo2, X, type LucideIcon } from 'lucide-react';
import type { SwipeDirection } from '../../hooks/usePetDeck';

type ActionSize = 'sm' | 'md' | 'lg';
type ActionTone = 'neutral' | 'danger' | 'coral' | 'warning' | 'mint';

const SIZE_CLASSES: Record<ActionSize, { button: string; icon: string }> = {
  sm: { button: 'h-10 w-10', icon: 'h-[18px] w-[18px]' },
  md: { button: 'h-12 w-12', icon: 'h-[22px] w-[22px]' },
  lg: { button: 'h-16 w-16', icon: 'h-7 w-7' },
};

const TONE_CLASSES: Record<ActionTone, string> = {
  neutral: 'bg-white text-charcoal-light hover:text-charcoal',
  danger: 'bg-white text-danger',
  coral: 'bg-coral text-white shadow-card-hover hover:bg-coral-dark',
  warning: 'bg-white text-warning',
  mint: 'bg-white text-mint-ink',
};

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  size: ActionSize;
  tone: ActionTone;
  onClick: () => void;
  isDisabled?: boolean;
  isFilled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  label,
  size,
  tone,
  onClick,
  isDisabled = false,
  isFilled = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={isDisabled}
    aria-label={label}
    title={label}
    className={`flex shrink-0 items-center justify-center rounded-full shadow-card ring-1 ring-charcoal/5 transition-all hover:-translate-y-0.5 active:scale-95 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${SIZE_CLASSES[size].button} ${TONE_CLASSES[tone]}`}
  >
    <Icon
      className={`${SIZE_CLASSES[size].icon} ${isFilled ? 'fill-current' : ''}`}
      strokeWidth={2.5}
      aria-hidden="true"
    />
  </button>
);

interface SwipeActionBarProps {
  petName: string;
  canUndo: boolean;
  onSwipe: (direction: SwipeDirection) => void;
  onUndo: () => void;
  onChat: () => void;
}

export const SwipeActionBar: React.FC<SwipeActionBarProps> = ({ petName, canUndo, onSwipe, onUndo, onChat }) => (
  <div className="flex items-center justify-center gap-3" role="group" aria-label={`Hành động với ${petName}`}>
    <ActionButton icon={Undo2} label="Hoàn tác" size="sm" tone="neutral" onClick={onUndo} isDisabled={!canUndo} />
    <ActionButton icon={X} label={`Bỏ qua ${petName}`} size="md" tone="danger" onClick={() => onSwipe('left')} />
    <ActionButton icon={Heart} label={`Mời ${petName} dắt dạo`} size="lg" tone="coral" onClick={() => onSwipe('right')} isFilled />
    <ActionButton icon={Star} label={`Siêu thích ${petName}`} size="md" tone="warning" onClick={() => onSwipe('up')} isFilled />
    <ActionButton icon={MessageCircle} label={`Nhắn tin cho chủ của ${petName}`} size="sm" tone="mint" onClick={onChat} />
  </div>
);
