import React from 'react';
import { TrendingUp, Zap, Heart, Sun } from 'lucide-react';

export function ResultsSection() {
  const results = [
    {
      icon: Heart,
      value: '98%',
      description: 'Increase in chick survival from brooder temperature variation'
    },
    {
      icon: TrendingUp,
      value: '30%',
      description: 'Increase in farm profitability'
    },
    {
      icon: Sun,
      value: 'Zero',
      description: 'Electricity costs — JotoPro runs entirely on solar power, off-grid on any farm'
    },
    {
      icon: Zap,
      value: '5000+',
      description: 'More healthy birds annually'
    }
  ];

  const benefits = [
    {
      title: 'Profitability',
      description: 'Our innovative solutions directly impact your bottom line, delivering up to a 30% increase in farm profitability by reducing operational costs and maximizing yields. Lower energy costs and better yields translate to better margins. Transform your farming operation into a more profitable business.'
    },
    {
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices that benefit both your farm and the planet. JotoPro\'s solar-powered design eliminates electricity dependency, reducing your carbon footprint while cutting costs. Smart, sustainable choices for lasting results.'
    },
    {
      title: 'Efficiency',
      description: 'Streamline operations with intelligent automation and precise controls. Optimize feed distribution and monitoring with intelligent systems. Reduce manual labor and monitoring needs with seamless systems. Execute integrated setups with existing brooder setups.'
    }
  ];

  return (
    <section id="results" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#043236] mb-4">
            Real results. <span className="text-[#6F6F6F]">Measurable impact.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mx-auto">
            Our solutions deliver tangible value that transforms farming operations.
          </p>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#00A651]/10 flex items-center justify-center mb-6">
                <result.icon className="w-6 h-6 text-[#00A651]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#043236] mb-3">{result.value}</div>
              <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-xl sm:text-2xl font-bold text-[#043236] mb-4">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
