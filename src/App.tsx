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
import { GetStartedPage } from './components/GetStartedPage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen">
      {/* Navigation is always visible on every page */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <HeroSection setCurrentPage={setCurrentPage} />
          <SolutionsSection />
          <ResultsSection />
          <StorySection />
          <VisionSection />
          <TeamSection />
          <CTASection setCurrentPage={setCurrentPage} />
          <Footer />
          <ScrollToTop />
        </>
      )}

      {currentPage === 'get-started' && (
        <GetStartedPage setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
