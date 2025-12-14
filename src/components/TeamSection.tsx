import image_bb439d36ffbf62ab307621a85c189885637e5b60 from 'figma:asset/bb439d36ffbf62ab307621a85c189885637e5b60.png';
import image_66af6d407110bfb5427807bb3310af43c567ed0c from 'figma:asset/66af6d407110bfb5427807bb3310af43c567ed0c.png';
import React from 'react';
import { Linkedin } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: 'Victor Gituma',
      role: 'Co-Founder & CEO',
      image: image_66af6d407110bfb5427807bb3310af43c567ed0c
    },
    {
      name: 'Alfred Mutethia',
      role: 'COO',
      image: 'https://i.imgur.com/KVmWX5a.jpeg'
    },
    {
      name: 'Stephen Mwaura',
      role: 'CTO',
      image: 'https://i.imgur.com/aL35U05.jpeg'
    },
    {
      name: 'Naomi Wanjiru',
      role: 'CFO',
      image: image_bb439d36ffbf62ab307621a85c189885637e5b60
    }
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-[#00A651]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet our team. <br className="sm:hidden" />Building the future of agriculture.
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Driven by passion, united by purpose. Our founders bring decades of experience 
            in technology and agriculture.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#043236] mb-1">{member.name}</h3>
                <p className="text-sm sm:text-base text-[#6F6F6F] mb-4">{member.role}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-[#00A651] hover:text-[#008F47] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}