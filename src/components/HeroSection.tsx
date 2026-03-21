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

  const stats = [
    { value: '50K+',   label: 'Saved Chicks'   },
    { value: '1,200+', label: 'Farmers'        },
    { value: '20%',    label: 'Energy Savings' },
  ];

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Headline */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Empowering farmers.<br />
          Sustaining agriculture.
        </h1>

        {/* Subtext */}
        <p className="text-white text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          We innovate solutions like JotoPro heaters for brooding that reduce chick mortality,
          cut energy cost and boost profitability.
        </p>

        {/* CTA Buttons — stacked on mobile, side-by-side on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24">
          <button
            onClick={() => setCurrentPage && setCurrentPage('get-started')}
            className="w-full sm:w-auto bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008F47] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={scrollToResults}
            className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-[32px] py-[5px] rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Stats — always horizontal row on every screen size */}
        <div className="flex flex-row items-center justify-center gap-8 sm:gap-16 lg:gap-24">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-white text-center">
              <div className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-1">{value}</div>
              <div className="text-xs sm:text-base opacity-90">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
