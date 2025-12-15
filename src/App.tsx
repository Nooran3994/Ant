import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { ResultsSection } from './components/ResultsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { StorySection } from './components/StorySection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BroodingGuidePage } from './components/BroodingGuidePage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <HeroSection setCurrentPage={setCurrentPage} />
          <SolutionsSection />
          <ResultsSection />
          <StorySection />
          <VisionSection />
          <TeamSection />
          <CTASection />
          <Footer />
          <ScrollToTop />
        </>
      ) : currentPage === 'brooding-guide' ? (
        <BroodingGuidePage />
      ) : null}
    </div>
  );
}