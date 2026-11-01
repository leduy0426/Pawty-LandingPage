import { useCallback, useEffect, useState } from 'react';
import type { PetCardMock } from '../data/landingData';

export type SwipeDirection = 'left' | 'right' | 'up';

export interface DeckAction {
  type: SwipeDirection;
  petName: string;
}

const ACTION_TOAST_MS = 2200;

export function usePetDeck(pets: PetCardMock[]) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<SwipeDirection>('right');
  const [savedIds, setSavedIds] = useState<ReadonlySet<string>>(() => new Set());
  const [lastAction, setLastAction] = useState<DeckAction | null>(null);

  const total = pets.length;
  const current = total > 0 ? pets[index % total] : undefined;
  const upcoming = total > 1 ? pets[(index + 1) % total] : undefined;

  const swipe = useCallback(
    (dir: SwipeDirection) => {
      if (!current) return;
      setDirection(dir);
      setLastAction({ type: dir, petName: current.name });
      setIndex((i) => i + 1);
    },
    [current],
  );

  const undo = useCallback(() => {
    setDirection('left');
    setLastAction(null);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const toggleSaved = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!lastAction) return;
    const timer = window.setTimeout(() => setLastAction(null), ACTION_TOAST_MS);
    return () => window.clearTimeout(timer);
  }, [lastAction]);

  return {
    current,
    upcoming,
    cardKey: current ? `${current.id}-${index}` : 'empty',
    direction,
    lastAction,
    canUndo: index > 0,
    savedIds,
    swipe,
    undo,
    toggleSaved,
  };
}
