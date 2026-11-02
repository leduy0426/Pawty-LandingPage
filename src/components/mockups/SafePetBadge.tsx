import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface SafePetBadgeProps {
  label?: string;
  className?: string;
}

export const SafePetBadge: React.FC<SafePetBadgeProps> = ({
  label = '✓ Đã Tiêm Phòng',
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-mint bg-mint-50 px-2.5 py-1 font-body text-[11px] font-bold leading-none text-mint-ink ${className}`}
  >
    <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-mint-ink" aria-hidden="true" />
    <span>{label}</span>
  </span>
);
