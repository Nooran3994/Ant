import image_c5dca11f3ff18bc144886c2f7f7dbb4d69740ad7 from 'figma:asset/c5dca11f3ff18bc144886c2f7f7dbb4d69740ad7.png';
import React, { useState, useEffect } from 'react';
import { Cpu, Check } from 'lucide-react';

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState('hardware');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    image_c5dca11f3ff18bc144886c2f7f7dbb4d69740ad7,
    'https://i.imgur.com/IsdQlQq.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    'Precise temperature control with innovative infrared technology',
    'Energy savings up to 30% with low-power design',
    'Uniform heat distribution ensuring optimal chick comfort',
    'Smart temperature regulation adapting to weather changes',
    'Seamless integration with existing brooder setups'
  ];

  return (
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
          <button
            onClick={() => setActiveTab('hardware')}
            className={`pb-2 transition-colors text-sm sm:text-base ${
              activeTab === 'hardware'
                ? 'border-b-2 border-[#043236] text-[#043236] font-semibold'
                : 'text-[#6F6F6F] hover:text-[#043236]'
            }`}
          >
            Hardware
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`pb-2 transition-colors text-sm sm:text-base ${
              activeTab === 'software'
                ? 'border-b-2 border-[#043236] text-[#043236] font-semibold'
                : 'text-[#6F6F6F] hover:text-[#043236]'
            }`}
          >
            Software
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-2 transition-colors text-sm sm:text-base ${
              activeTab === 'services'
                ? 'border-b-2 border-[#043236] text-[#043236] font-semibold'
                : 'text-[#6F6F6F] hover:text-[#043236]'
            }`}
          >
            Services
          </button>
        </div>

        {/* Hardware Tab Content */}
        {activeTab === 'hardware' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-[#00A651]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-6 leading-tight">
                JotoPro Heater - The ultimate solution for efficient, uniform heating in brooding
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00A651] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={images[currentImageIndex]}
                alt="JotoPro Heater Device" 
                className={`w-full rounded-2xl shadow-lg hover:shadow-xl transition-all duration-[2000ms] ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>
        )}

        {/* Software Tab Content */}
        {activeTab === 'software' && (
          <div className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#00A651]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-4">Smart Farming Software</h3>
            <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mx-auto">
              Advanced monitoring and control systems to optimize your farm operations. Coming soon.
            </p>
          </div>
        )}

        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <div className="text-center py-16 sm:py-20">
            <div className="w-20 h-20 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#00A651]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#043236] mb-4">Expert Support Services</h3>
            <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mx-auto">
              Professional installation, training, and ongoing support for all our solutions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}