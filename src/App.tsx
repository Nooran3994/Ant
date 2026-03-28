import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { ResultsSection } from './components/ResultsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { StorySection } from './components/StorySection';
import { TeamSection } from './components/TeamSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { GetStartedPage } from './components/GetStartedPage';
import { PoultryAdvisoryPage } from './components/PoultryAdvisoryPage';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const navigate = useNavigate();

  const setCurrentPage = (page: string) => {
    if (page === 'home') navigate('/');
    else navigate(`/${page}`);
  };

  return (
    <>
      <ScrollToTopOnNavigate />
      <Navigation setCurrentPage={setCurrentPage} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection setCurrentPage={setCurrentPage} />
            <SolutionsSection setCurrentPage={setCurrentPage} />
            <ResultsSection />
            <StorySection />
            <VisionSection />
            <TeamSection />
            <CTASection setCurrentPage={setCurrentPage} />
            <Footer />
          </>
        } />
        <Route path="/get-started" element={<GetStartedPage setCurrentPage={setCurrentPage} />} />
        <Route path="/poultry-advisory" element={<PoultryAdvisoryPage setCurrentPage={setCurrentPage} />} />
        <Route path="*" element={<RedirectHome />} />
      </Routes>
    </>
  );
}

function RedirectHome() {
  const navigate = useNavigate();
  React.useEffect(() => { navigate('/'); }, []);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
