import React from 'react';
import { BatteryFull, Signal, Wifi } from 'lucide-react';

interface PhoneFrameProps {
  children: React.ReactNode;
  time?: string;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, time = '9:41', className = '' }) => (
  <div
    className={`relative mx-auto w-full max-w-[360px] rounded-[48px] bg-charcoal p-2.5 shadow-floating ring-1 ring-black/20 ${className}`}
  >
    {/* Side buttons */}
    <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-l bg-charcoal" aria-hidden="true" />
    <span className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-r bg-charcoal" aria-hidden="true" />

    <div className="relative flex h-[640px] flex-col overflow-hidden rounded-[40px] bg-cream sm:h-[680px]">
      {/* Dynamic island */}
      <span
        className="absolute left-1/2 top-2.5 z-30 h-7 w-24 -translate-x-1/2 rounded-full bg-black"
        aria-hidden="true"
      />

      {/* Status bar */}
      <div className="flex h-11 shrink-0 items-center justify-between px-7 pt-1 font-body text-[13px] font-bold text-charcoal">
        <span>{time}</span>
        <span className="flex items-center gap-1" aria-hidden="true">
          <Signal className="h-3.5 w-3.5" />
          <Wifi className="h-3.5 w-3.5" />
          <BatteryFull className="h-4 w-4" />
        </span>
      </div>

      {children}
    </div>
  </div>
);
