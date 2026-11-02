import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesBentoSection } from './components/sections/FeaturesBentoSection';
import { InteractiveRadarSection } from './components/sections/InteractiveRadarSection';
import { FreeEcosystemSection } from './components/sections/FreeEcosystemSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { DownloadCtaSection } from './components/sections/DownloadCtaSection';
import { Footer } from './components/layout/Footer';
import { LegalModal, LegalDocType } from './components/legal/LegalModal';

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
      
      {/* Sticky / Fixed Navigation with embedded Announcement Bar */}
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
        <FeaturesBentoSection onLearnMore={() => scrollToSection('dating')} />
        <InteractiveRadarSection />
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
