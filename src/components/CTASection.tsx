import React from 'react';

export function CTASection() {
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
          <button className="w-full sm:w-auto bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008F47] transition-all duration-300 hover:scale-105 shadow-lg">
            Get Started
          </button>
          <a href="#" className="text-base sm:text-lg text-[#6F6F6F] hover:text-[#043236] transition-colors">
            Schedule a demo &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}