import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Cpu, Check, ChevronLeft, ChevronRight, Monitor, ArrowRight, HeartHandshake } from 'lucide-react';

const IMAGES = [
  { src: 'https://i.imgur.com/IsdQlQq.jpeg', alt: 'JotoPro Heater in use on farm' },
  { src: 'https://i.imgur.com/CU5bZ7q.jpeg', alt: 'JotoPro Heater device close-up' },
];

const hardwareFeatures = [
  'Precise temperature control with innovative infrared technology',
  'Energy savings up to 30% with low-power design',
  'Uniform heat distribution ensuring optimal chick comfort',
  'Smart temperature regulation adapting to weather changes',
  'Seamless integration with existing brooder setups',
];

const softwareFeatures = [
  'Real-time feed cost calculator (Broilers, Layers & Kienyeji)',
  'Phase-by-phase feeding guidance from brooding to finishing',
  'Actionable breed-specific recommendations at every growth stage',
  'Performance benchmarks to measure your flock against best practice',
];

const servicesFeatures = [
  'On-site installation and commissioning of all ANT hardware',
  'Hands-on farmer training and operational handover',
  'ANT technical support and after-sales maintenance',
  'Farm performance consulting and profitability analysis',
  'Farm setup advisory from housing to flock management',
];

interface SolutionsSectionProps {
  setCurrentPage?: (page: string) => void;
}

export function SolutionsSection({ setCurrentPage }: SolutionsSectionProps) {
  const [activeTab, setActiveTab] = useState('hardware');
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (next: number, dir: 'left' | 'right' = 'right') => {
      if (animating || next === current) return;
      setDirection(dir);
      setPrev(current);
      setCurrent(next);
      setAnimating(true);
      setTimeout(() => { setPrev(null); setAnimating(false); }, 600);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo((current + 1) % IMAGES.length, 'right'), [current, goTo]);
  const prevSlide = useCallback(() => goTo((current - 1 + IMAGES.length) % IMAGES.length, 'left'), [current, goTo]);

  useEffect(() => {
    if (activeTab !== 'hardware') return;
    timerRef.current = setInterval(next, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next, activeTab]);

  const pauseTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };
  const resumeTimer = () => {
    if (activeTab !== 'hardware') return;
    timerRef.current = setInterval(next, 4500);
  };

  return (
    <>
      <style>{`
        @keyframes slideInFromRight { from{transform:translateX(60px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideInFromLeft  { from{transform:translateX(-60px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes slideOutToLeft   { from{transform:translateX(0);opacity:1} to{transform:translateX(-60px);opacity:0} }
        @keyframes slideOutToRight  { from{transform:translateX(0);opacity:1} to{transform:translateX(60px);opacity:0} }
        .slide-in-right  { animation: slideInFromRight 0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-in-left   { animation: slideInFromLeft  0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-out-left  { animation: slideOutToLeft   0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-out-right { animation: slideOutToRight  0.6s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      <section id="solutions" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#043236] mb-4">
              Complete solutions. <span className="text-[#6F6F6F]">For every farm.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mx-auto">
              Hardware, software, and services working together to transform your farming operation.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 sm:mb-16">
            {['hardware', 'software', 'services'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize transition-colors text-sm sm:text-base ${
                  activeTab === tab
                    ? 'border-b-2 border-[#043236] text-[#043236] font-semibold'
                    : 'text-[#6F6F6F] hover:text-[#043236]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Hardware ── */}
          {activeTab === 'hardware' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-[#00A651]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-6 leading-tight">
                  JotoPro Heater — The ultimate solution for efficient, uniform heating in brooding
                </h3>
                <div className="space-y-4">
                  {hardwareFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A651] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group" onMouseEnter={pauseTimer} onMouseLeave={resumeTimer}>
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100" style={{ aspectRatio: '4/3' }}>
                  {prev !== null && (
                    <img src={IMAGES[prev].src} alt={IMAGES[prev].alt}
                      className={direction === 'right' ? 'slide-out-left' : 'slide-out-right'}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                  <img key={current} src={IMAGES[current].src} alt={IMAGES[current].alt}
                    className={animating ? (direction === 'right' ? 'slide-in-right' : 'slide-in-left') : ''}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: animating ? undefined : 1 }}
                  />
                  <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <ChevronLeft className="w-5 h-5 text-[#043236]" />
                  </button>
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <ChevronRight className="w-5 h-5 text-[#043236]" />
                  </button>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {IMAGES.map((_, i) => (
                    <button key={i} onClick={() => goTo(i, i > current ? 'right' : 'left')}
                      className="rounded-full transition-all duration-300"
                      style={{ width: i === current ? '24px' : '8px', height: '8px', background: i === current ? '#00A651' : '#D1D5DB' }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Software ── */}
          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mb-6">
                  <Monitor className="w-8 h-8 text-[#00A651]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-6 leading-tight">
                  Intelligent platform that turns data into actionable insights
                </h3>
                <div className="space-y-4 mb-8">
                  {softwareFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A651] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
                {/* Poultry Advisory Tool button — wired to page */}
                <button
                  type="button"
                  onClick={() => setCurrentPage && setCurrentPage('poultry-advisory')}
                  className="inline-flex items-center gap-3 text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #00A651 0%, #008c44 100%)',
                    boxShadow: '0 4px 16px rgba(0,166,81,0.28)',
                    borderRadius: '10px',
                    padding: '14px 32px',
                    fontSize: '15px',
                  }}
                >
                  Poultry Advisory Tool
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://i.imgur.com/VnWEHT2.png" alt="ANT Poultry Advisory Software Dashboard" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* ── Services ── */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mb-6">
                  <HeartHandshake className="w-8 h-8 text-[#00A651]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-3 leading-tight">
                  Comprehensive support from installation to optimization
                </h3>
                <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed mb-6">
                  We don't just sell products — we walk alongside you. From the day your equipment
                  arrives to long-term farm performance consulting, our team is with you every step of the way.
                </p>
                <div className="space-y-4 mb-8">
                  {servicesFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#00A651] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {['Installation', 'Training', 'Consulting', 'After-Sales'].map((badge) => (
                    <span key={badge} className="text-[13px] font-semibold px-4 py-1.5 rounded-full"
                      style={{ background: 'rgba(0,166,81,0.10)', color: '#00A651', border: '1px solid rgba(0,166,81,0.25)' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img src="https://i.imgur.com/fxLThH6.png" alt="ANT comprehensive farm support" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
