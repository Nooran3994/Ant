import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  setCurrentPage?: (page: string) => void;
}

export function HeroSection({ setCurrentPage }: HeroSectionProps) {
  const scrollToResults = () => {
    const el = document.getElementById('results');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src="https://i.imgur.com/R0dKaHk.jpeg"
          alt="African agriculture farming landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-8 text-center flex flex-col items-center justify-center py-32 sm:py-40">

        {/* Headline */}
        <h1 className="text-white font-bold leading-tight mb-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Empowering farmers.<br />
          Sustaining agriculture.
        </h1>

        {/* Sub-text */}
        <p className="text-white/90 text-base sm:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-center">
          We innovate solutions like JotoPro heaters for brooding that reduce chick mortality,
          cut energy cost and boost profitability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-16 sm:mb-24 px-0">
          <button
            onClick={() => setCurrentPage && setCurrentPage('get-started')}
            className="w-full sm:w-auto bg-[#00A651] text-white text-base font-semibold px-10 py-4 rounded-full hover:bg-[#008F47] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={scrollToResults}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white text-base font-semibold px-10 py-4 rounded-full border-2 border-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg mx-auto">
          {[
            { value: '50K+',   label: 'Saved Chicks'   },
            { value: '1,200+', label: 'Farmers'        },
            { value: '20%',    label: 'Energy Savings' },
          ].map(({ value, label }) => (
            <div key={label} className="text-white text-center">
              <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1">{value}</div>
              <div className="text-xs sm:text-sm opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
