import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './Footer';

interface PoultryAdvisoryPageProps {
  setCurrentPage?: (page: string) => void;
}

export function PoultryAdvisoryPage({ setCurrentPage }: PoultryAdvisoryPageProps) {
  const [iframeHeight, setIframeHeight] = useState(900);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === 'antHeight' && typeof e.data.h === 'number') {
        setIframeHeight(e.data.h);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const features = [
    'Feed Cost Calculator',
    'Vaccination Schedule',
    'Profit Forecast',
    'Breed Comparison',
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f2f6f5' }}>

      {/* Page-specific SEO & OG tags */}
      <Helmet>
        <title>Poultry Advisory Tool — ANT Adaptive Nesting Technologies</title>
        <meta name="description" content="Plan your flock, forecast profits and get a full feed plan for Broilers, Layers and Kienyeji. Free poultry advisory tool by ANT — Kenya 2024–2025 verified data." />
        <meta property="og:title" content="Poultry Advisory Tool — Plan your flock. Maximise your returns." />
        <meta property="og:description" content="Free poultry planning tool by ANT. Get feed cost breakdown, vaccination schedule, profit forecast and breed comparison. Kenya verified data." />
        <meta property="og:url" content="https://www.adaptivenestingtech.com/poultry-advisory" />
        <meta property="og:image" content="https://www.adaptivenestingtech.com/og-poultry.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ANT Poultry Advisory Tool — Plan your flock and maximise returns" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Poultry Advisory Tool — ANT" />
        <meta name="twitter:description" content="Free poultry planning tool. Feed costs, vaccination schedule, profit forecast for Kenyan farmers." />
        <meta name="twitter:image" content="https://www.adaptivenestingtech.com/og-poultry.png" />
      </Helmet>

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #021e20 0%, #043236 60%, #054a50 100%)',
          paddingTop: '160px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,166,81,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30px', left: '8%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,166,81,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'rgba(0,166,81,0.15)', color: '#4ade80', border: '1px solid rgba(0,166,81,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A651] inline-block animate-pulse" />
            Kenya 2024–2025 · Verified Data
          </div>

          <h1
            className="font-bold text-white mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            Plan your flock.<br />
            <span style={{ color: '#00A651' }}>Maximise your returns.</span>
          </h1>

          <p
            className="mx-auto leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '600px' }}
          >
            Enter your flock size or budget — get a full feed plan, vaccination schedule,
            cost breakdown and profitability forecast for Broilers, Layers and Kienyeji.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {features.map((f) => (
              <span
                key={f}
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  padding: '8px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 500,
                  background: 'rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.80)',
                  border: '1px solid rgba(255,255,255,0.20)',
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tool iframe */}
      <iframe
        src="/poultry-tool.html"
        title="ANT Poultry Budget Planner"
        style={{
          width: '100%',
          height: `${iframeHeight}px`,
          border: 'none',
          display: 'block',
          background: '#f2f6f5',
          flexShrink: 0,
        }}
        scrolling="no"
      />

      <Footer />
    </div>
  );
}
