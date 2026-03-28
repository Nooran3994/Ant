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
    { value: '50K+',   label: 'Saved Chicks'     },
    { value: '1,200+', label: 'Farmers'           },
    { value: 'Zero',   label: 'Electricity Costs' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <ImageWithFallback
          src="https://i.imgur.com/1OzBex5.png"
          alt="Smart farming technology empowering African farmers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Headline */}
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
          Empowering farmers.<br />
          Sustaining agriculture.
        </h1>

        {/* Subtext — white with key words in ANT green */}
        <p className="text-white text-base sm:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
         We innovate solutions like JotoPro — a solar-powered smart brooder that reduces chick mortality, eliminates electricity costs and boosts profitability.
        </p>

        {/* CTA Buttons — bigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 sm:mb-24">
          <button
            onClick={() => setCurrentPage && setCurrentPage('get-started')}
            className="w-full sm:w-auto text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ background: '#00A651', padding: '16px 48px' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#008F47')}
            onMouseLeave={e => (e.currentTarget.style.background = '#00A651')}
          >
            Get Started
          </button>
          <button
            onClick={scrollToResults}
            className="w-full sm:w-auto font-bold text-lg rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1.5px solid rgba(255,255,255,0.40)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              padding: '16px 48px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.40)'; }}
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
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
