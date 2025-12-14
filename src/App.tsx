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

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SolutionsSection />
      <ResultsSection />
      <StorySection />
      <VisionSection />
      <TeamSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}