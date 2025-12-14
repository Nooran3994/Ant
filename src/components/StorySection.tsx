import React from 'react';
import { Lightbulb, Users, Shield } from 'lucide-react';

export function StorySection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries in agritech to create cutting-edge solutions that redefine what\'s possible in sustainable farming.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building strong partnerships with farmers and businesses, putting their needs and success at the heart of everything we do.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Operating with transparency, honesty, and accountability in all our interactions and business practices.'
    }
  ];

  return (
    <section id="story" className="py-0">
      {/* Dark Hero Section */}
      <div className="bg-[#043236] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Small creatures. Big impact.
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Like ants, we believe in the power of collaboration, resilience, and purpose-driven 
              innovation to build something extraordinary.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#00A651]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#00A651]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#043236] mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-[#043236]">Our story.</span><br />
                <span className="text-[#6F6F6F]">From vision to victory.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#6F6F6F] leading-relaxed mb-6 sm:mb-8">
                A journey of innovation, recognition, and transformation in African agriculture.
              </p>
              <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed mb-4 sm:mb-6">
                ANT began with a simple observation: farmers needed better tools to succeed. 
                What started as a mission to improve chick brooding has evolved into a comprehensive 
                platform empowering farmers across Kenya.
              </p>
              <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">
                Today, we&apos;re proud to serve over 1,200 farmers, having saved more than 50,000 chicks 
                and reduced energy costs by 20%. Our journey is just beginning.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1751394211293-66bebbbd7149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMGdyb3VwJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjUzMDc1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="ANT Team" 
                className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}