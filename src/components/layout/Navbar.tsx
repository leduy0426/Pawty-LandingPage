import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Trang chủ', target: 'hero' },
    { label: 'Tính năng', target: 'features' },
    { label: 'Pawty Dating', target: 'dating' },
    { label: 'Hệ sinh thái miễn phí', target: 'ecosystem' },
    { label: 'Hỏi đáp', target: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar - Stacked cleanly above Nav, ZERO overlap */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-coral via-coral-light to-mint-dark text-white text-xs sm:text-sm py-1.5 px-4 text-center font-bold flex items-center justify-center gap-2 shadow-sm relative">
          <Sparkles className="w-3.5 h-3.5 text-white animate-bounce shrink-0" />
          <span className="truncate max-w-[85vw] sm:max-w-none">
            🐾 Chào mừng bạn đến với Pawty — Ứng dụng cộng đồng kết nối những người nuôi thú cưng!
          </span>
          <button
            onClick={() => onNavigateSection('download')}
            className="underline decoration-white/70 hover:decoration-white ml-1 text-white hidden md:inline cursor-pointer"
          >
            Tham gia ngay →
          </button>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-0.5 rounded cursor-pointer"
            aria-label="Đóng thông báo"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Nav Bar */}
      <div
        className={`${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card py-3 border-b border-coral/10 text-charcoal'
            : 'bg-gradient-to-b from-black/40 via-black/10 to-transparent py-3.5 sm:py-4 text-white'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
          
          {/* ========================================================
              LOGO (Matching VNHUB Logo + Subtext format)
              ======================================================== */}
          <div
            onClick={() => onNavigateSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Pawty Icon Squircle */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-md flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src="/assets/pawty-icon.png"
                alt="Pawty Icon"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                onError={(e) => {
                  // Fallback to emoji if image is not loaded
                  (e.currentTarget as HTMLElement).style.display = 'none';
                  const parent = (e.currentTarget as HTMLElement).parentElement;
                  if (parent && !parent.querySelector('.fallback-emoji')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-emoji text-xl';
                    span.innerText = '🐾';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
            
            {/* Wordmark and Subtitle */}
            <div className="flex flex-col text-left justify-center">
              <div className="flex items-center h-8 sm:h-10">
                <img
                  src="/assets/pawty-wordmark.png"
                  alt="Pawty"
                  className="h-full w-auto object-contain drop-shadow-xs"
                />
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase mt-0.5 ${
                  isScrolled ? 'text-charcoal-light' : 'text-white/90 drop-shadow-xs'
                }`}
              >
                MẠNG XÃ HỘI CHO NGƯỜI THÍCH THÚ CƯNG
              </span>
            </div>
          </div>

          {/* ========================================================
              DESKTOP NAVIGATION (Matching VNHUB header text & hover)
              ======================================================== */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => onNavigateSection(link.target)}
                className={`text-sm font-semibold tracking-wide transition-colors relative py-1 hover:text-coral ${
                  isScrolled ? 'text-charcoal/80' : 'text-white/90 hover:text-mint'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ========================================================
              RIGHT ACTION BUTTONS
              ======================================================== */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenDemo}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-full transition-all flex items-center gap-1.5 ${
                isScrolled
                  ? 'text-coral bg-coral-50 hover:bg-coral-100'
                  : 'text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md'
              }`}
            >
              <Sparkles className="w-4 h-4 text-mint" />
              Trải nghiệm Dating
            </button>

            <button
              onClick={() => onNavigateSection('download')}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-coral to-rose-500 hover:from-coral-dark hover:to-rose-600 rounded-full shadow-lg shadow-coral/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Tải App Ngay
            </button>
          </div>

          {/* ========================================================
              MOBILE HAMBURGER BUTTON
              ======================================================== */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl focus:outline-none ${
                isScrolled ? 'text-charcoal hover:bg-coral-50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>
    </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-coral/20 px-4 pt-3 pb-6 space-y-3 text-charcoal shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  onNavigateSection(link.target);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 text-sm font-bold text-charcoal hover:text-coral hover:bg-coral-50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenDemo();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-coral-50 text-coral font-bold text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Trải nghiệm Dating
            </button>
            <button
              onClick={() => {
                onNavigateSection('download');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-coral text-white font-bold text-sm shadow-card-hover flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Tải App Miễn Phí
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
