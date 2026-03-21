import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  setCurrentPage?: (page: string) => void;
}

export function CTASection({ setCurrentPage }: CTASectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#043236] mb-6">
          Ready to transform your farm?
        </h2>
        <p className="text-base sm:text-lg text-[#6F6F6F] mb-10 sm:mb-12 max-w-2xl mx-auto">
          Experience the ANT difference—where innovation meets agriculture for measurable results.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Poultry Advisory Tool — no functionality yet */}
          <button
            type="button"
            className="inline-flex items-center gap-2 text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98] hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #00A651 0%, #008c44 100%)',
              boxShadow: '0 4px 16px rgba(0,166,81,0.28)',
              borderRadius: '999px',
              padding: '12px 32px',
              fontSize: '15px',
            }}
          >
            Poultry Advisory Tool
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Schedule a demo → get-started page */}
          <button
            onClick={() => setCurrentPage && setCurrentPage('get-started')}
            className="text-base sm:text-lg text-[#6F6F6F] hover:text-[#043236] transition-colors"
          >
            Schedule a demo &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
