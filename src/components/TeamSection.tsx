import React from 'react';
import { Linkedin } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: 'Victor Gituma',
      role: 'Co-Founder',
      image: 'https://i.imgur.com/sd59bEp.jpeg',
      linkedin: 'https://www.linkedin.com/in/vkgituma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Alfred Mutethia',
      role: 'Co-Founder',
      image: 'https://i.imgur.com/KVmWX5a.jpeg',
      linkedin: 'https://www.linkedin.com/in/alfred-mutethia-bb90a7345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      name: 'Stephen Mwaura',
      role: 'Co-Founder',
      image: 'https://i.imgur.com/aL35U05.jpeg',
      linkedin: 'https://www.linkedin.com/in/stephen-mwaura-b41851228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#043236] mb-4">
            Meet our team. <br className="sm:hidden" />Building the future of agriculture.
          </h2>
          <p className="text-base sm:text-lg text-[#6F6F6F] max-w-2xl mx-auto">
            Driven by passion, united by purpose. Our founders bring decades of experience
            in technology and agriculture.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100"
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
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
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
