import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { TrustStatsSection } from './components/sections/TrustStatsSection';
import { FeaturesBentoSection } from './components/sections/FeaturesBentoSection';
import { InteractiveRadarSection } from './components/sections/InteractiveRadarSection';
import { SafetyPillarSection } from './components/sections/SafetyPillarSection';
import { FreeEcosystemSection } from './components/sections/FreeEcosystemSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { DownloadCtaSection } from './components/sections/DownloadCtaSection';
import { Footer } from './components/layout/Footer';
import { LegalModal, LegalDocType } from './components/legal/LegalModal';
import { Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-body selection:bg-coral-100 selection:text-coral-dark">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-coral via-coral-light to-mint-dark text-white text-xs sm:text-sm py-2 px-4 text-center font-bold flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-4 h-4 text-white animate-bounce" />
        <span>🐾 Chào mừng bạn đến với Pawty — Ứng dụng cộng đồng miễn phí 100% dành cho Boss &amp; Sen tại chung cư đô thị!</span>
        <button
          onClick={() => scrollToSection('download')}
          className="underline decoration-white/70 hover:decoration-white ml-1 text-white hidden sm:inline cursor-pointer"
        >
          Tham gia ngay →
        </button>
      </div>

      {/* Sticky Navigation */}
      <Navbar
        onOpenDemo={() => scrollToSection('dating')}
        onNavigateSection={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onExploreRadar={() => scrollToSection('dating')}
          onDownloadClick={() => scrollToSection('download')}
        />
        <TrustStatsSection />
        <FeaturesBentoSection onLearnMore={() => scrollToSection('safety')} />
        <InteractiveRadarSection />
        <SafetyPillarSection />
        <FreeEcosystemSection onDownloadClick={() => scrollToSection('download')} />
        <TestimonialsSection />
        <FaqSection />
        <DownloadCtaSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenLegal={(doc) => setActiveLegalDoc(doc)}
        onNavigateSection={scrollToSection}
      />

      {/* Legal & Policy Modal */}
      <LegalModal
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />

    </div>
  );
};

export default App;
