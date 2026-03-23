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
import { PoultryAdvisoryPage } from './components/PoultryAdvisoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  // Always scroll to top when navigating to a new page
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={navigateTo} />
      {currentPage === 'home' ? (
        <>
          <HeroSection setCurrentPage={navigateTo} />
          <SolutionsSection setCurrentPage={navigateTo} />
          <ResultsSection />
          <StorySection />
          <VisionSection />
          <TeamSection />
          <CTASection setCurrentPage={navigateTo} />
          <Footer />
          <ScrollToTop />
        </>
      ) : currentPage === 'get-started' ? (
        <GetStartedPage setCurrentPage={navigateTo} />
      ) : currentPage === 'poultry-advisory' ? (
        <PoultryAdvisoryPage setCurrentPage={navigateTo} />
      ) : null}
    </div>
  );
}
