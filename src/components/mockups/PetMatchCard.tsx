import React from 'react';
import { Building2, Heart, Navigation } from 'lucide-react';
import type { PetCardMock } from '../../data/landingData';
import { SafePetBadge } from './SafePetBadge';

interface PetMatchCardProps {
  pet: PetCardMock;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const PetMatchCard: React.FC<PetMatchCardProps> = ({ pet, isSaved, onToggleSave }) => (
  <article
    className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-charcoal/5"
    aria-label={`${pet.name}, ${pet.breed}, ${pet.distance}`}
  >
    <div className="relative min-h-0 flex-1">
      <img
        src={pet.avatar}
        alt={`${pet.name} – ${pet.breed} (ảnh: Unsplash)`}
        className="h-full w-full object-cover"
        draggable={false}
      />

      {pet.isVaccinated && <SafePetBadge className="absolute left-3 top-3 shadow-sm" />}

      <button
        type="button"
        onClick={() => onToggleSave(pet.id)}
        aria-pressed={isSaved}
        aria-label={isSaved ? `Bỏ lưu ${pet.name}` : `Lưu ${pet.name}`}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-sm backdrop-blur transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      >
        <Heart
          className={`h-[18px] w-[18px] transition-colors ${isSaved ? 'fill-coral text-coral' : 'text-charcoal'}`}
          aria-hidden="true"
        />
      </button>

      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-charcoal/75 px-2.5 py-1 font-body text-[11px] font-bold text-white backdrop-blur">
        <Navigation className="h-3 w-3 fill-white" aria-hidden="true" />
        {pet.distance}
      </span>
    </div>

    <div className="shrink-0 space-y-2.5 px-4 pb-4 pt-3.5">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="truncate font-display text-[22px] font-semibold leading-tight text-charcoal">
          {pet.name}
          <span className="ml-2 font-body text-base font-semibold text-charcoal-light">{pet.age}</span>
        </h3>
      </div>

      <p className="-mt-1 truncate font-body text-sm font-semibold text-coral-dark">{pet.breed}</p>

      <p className="flex items-center gap-1.5 font-body text-xs font-semibold text-charcoal-light">
        <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span className="truncate">{pet.apartment}</span>
      </p>

      <ul className="flex flex-wrap gap-1.5" aria-label="Tính cách">
        {pet.personality.map((trait: string) => (
          <li
            key={trait}
            className="rounded-full bg-cream-warm px-2.5 py-1 font-body text-[11px] font-bold text-charcoal"
          >
            {trait}
          </li>
        ))}
      </ul>
    </div>
  </article>
);
