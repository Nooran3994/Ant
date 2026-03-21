import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  setCurrentPage?: (page: string) => void;
}

export function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const scrollToResults = () => {
    const el = document.getElementById('results');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src="https://i.imgur.com/R0dKaHk.jpeg"
          alt="African agriculture farming landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight px-[0px] py-[52px]">
          Empowering farmers.<br />
          Sustaining agriculture.
        </h1>

        <p className="text-white text-base sm:text-lg lg:text-xl mb-[48px] max-w-3xl mx-auto leading-relaxed px-[16px] py-[-26px] text-left mt-[-55px] mr-[16px] ml-[44px]">
          We innovate solutions like JotoPro heaters for brooding that reduce chick mortality,
          cut energy cost and boost profitability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24">
          {/* Get Started → get-started page */}
          <button
            onClick={() => setCurrentPage && setCurrentPage('get-started')}
            className="w-full sm:w-auto bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008F47] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </button>

          {/* Learn More → scrolls to Real Results section */}
          <button
            onClick={scrollToResults}
            className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-[32px] py-[5px] rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          <div className="text-white">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">50K+</div>
            <div className="text-sm sm:text-base opacity-90">Saved Chicks</div>
          </div>
          <div className="text-white">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">1,200+</div>
            <div className="text-sm sm:text-base opacity-90">Farmers</div>
          </div>
          <div className="text-white">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">20%</div>
            <div className="text-sm sm:text-base opacity-90">Energy Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
}
