import React from 'react';
import { Check } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Certified Excellence Row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#00A651]/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-[#00A651]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#043236]">Certified Excellence</h2>
            </div>
            <p className="text-base sm:text-lg text-[#6F6F6F] mb-6 leading-relaxed">
              We have been Certified by GreenLabs for impact driven innovation.
            </p>
            <div className="text-6xl text-[#00A651]/20 font-serif">&ldquo;</div>
          </div>
          <div>
            <img
              src="https://i.imgur.com/lkFyWrI.jpeg"
              alt="ANT GreenLabs Certification"
              className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* ── Purpose / Mission / Vision ── */}
        <div className="bg-[#00A651] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Image — left, with smooth overlay treatment */}
            <div className="order-2 lg:order-1 relative min-h-[300px] sm:min-h-[420px]">
              <img
                src="https://i.imgur.com/zKqMagr.jpeg"
                alt="ANT farmers with chicks"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.05) contrast(0.92) saturate(0.9)',
                  display: 'block',
                }}
              />
              {/* Subtle green gradient overlay to blend image into the card */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, transparent 60%, rgba(0,166,81,0.25) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Text — right */}
            <div className="order-1 lg:order-2 p-8 sm:p-12 lg:p-14 text-white flex flex-col justify-center gap-8">

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Purpose</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-95">
                  Empower farmers by providing affordable, efficient and sustainable farm solutions
                  that reduce farming expenses thereby increasing food security while farmers increase
                  their profitability.
                </p>
              </div>

              <div className="border-t border-white/20" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-95">
                  To provide world-class solutions in agriculture and beyond through innovative
                  hardware, software, and services.
                </p>
              </div>

              <div className="border-t border-white/20" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-95">
                  Creating a global ecosystem where innovative technologies empower farmers,
                  minimize expenses, and improve farm efficiency.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
