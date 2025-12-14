import image_7f5339d569d48983e17bd010e0be39a65118e3ac from 'figma:asset/7f5339d569d48983e17bd010e0be39a65118e3ac.png';
import React from 'react';
import { Check } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certification Row */}
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
              src="https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY2VydGlmaWNhdGUlMjBhd2FyZCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTMwNzQzOHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team holding certificate" 
              className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Purpose & Mission Section */}
        <div className="bg-[#00A651] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="order-2 lg:order-1">
              <img 
                src={image_7f5339d569d48983e17bd010e0be39a65118e3ac}
                alt="Farmers with chicks" 
                className="w-full h-full object-cover min-h-[300px] sm:min-h-[400px]"
              />
            </div>
            <div className="order-1 lg:order-2 p-8 sm:p-12 lg:p-16 text-white">
              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Purpose</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-95">
                  Empower farmers by providing affordable, efficient and sustainable farm solutions 
                  that reduce farming expenses thereby increasing food security while farmers increase 
                  their profitability.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-95">
                  To provide world-class solutions in agriculture and beyond through innovative 
                  hardware, software, and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}