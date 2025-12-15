import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

export function BroodingGuidePage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Brooding Overview' },
    { id: 'preparation', title: 'Pre-Brooding Preparation' },
    { id: 'environment', title: 'Environmental Conditions' },
    { id: 'smart-practices', title: 'Smart Brooding Practices' },
    { id: 'feeding', title: 'Feeding and Watering During Brooding' },
    { id: 'management', title: 'Chick Management and Observation' },
    { id: 'mistakes', title: 'Common Mistakes and Prevention' },
    { id: 'safety', title: 'Safety and Biosecurity Measures' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const getCurrentSectionIndex = () => {
    return sections.findIndex(s => s.id === activeSection);
  };

  const goToNextSection = () => {
    const currentIndex = getCurrentSectionIndex();
    if (currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1750008627646-89a321df6ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIwYnJvb2RlciUyMGZhcm18ZW58MXx8fHwxNzY1ODI2MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Healthy chicks under brooder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#043236]/90 to-[#043236]/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h1 className="text-white mb-6">Smart Brooding Guide: Empower Your Farm with Sustainable Practices</h1>
            <p className="text-white/90 mb-8 text-lg max-w-3xl mx-auto">
              Step-by-step guidance from preparation to Week 5 for reducing mortality, boosting growth, and increasing profitability. Featuring ANT's JotoPro heaters for smart temperature regulation.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#smart-practices">
                <button className="bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300 hover:scale-105">
                  Get JotoPro Now
                </button>
              </a>
              <button className="bg-transparent text-white border-2 border-white px-[32px] py-[5px] rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Download PDF Guide
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 overflow-x-auto">
          <div className="flex gap-2 py-4 min-w-max">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-[#00A651] text-white'
                    : 'bg-gray-100 text-[#6F6F6F] hover:bg-gray-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Section 1: Brooding Overview */}
        <section id="overview" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">1. Brooding Overview</h2>
          
          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Purpose of Brooding</h3>
            <p className="text-[#6F6F6F] mb-4">
              Brooding is the first 4-6 weeks (up to 5 weeks in low-resource settings) where chicks need heat, feed, water, and protection to develop their immune, digestive, and thermoregulation systems. It replaces the mother hen's role for day-old chicks.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Why Proper Brooding is Critical</h3>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Ensures chick survival (up to 98% with smart practices)</li>
              <li>Promotes uniform growth and development</li>
              <li>Reduces stress and disease risk</li>
              <li>Lays the foundation for profitable poultry farming</li>
              <li>Poor brooding leads to high mortality, slow growth, and financial losses</li>
            </ul>
          </div>

          <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg mb-8">
            <p className="text-[#043236]">
              <strong>💡 Pro Tip:</strong> To source healthy day-old chicks, book a demo with us for guidance on reliable suppliers.
            </p>
          </div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761059172044-82d9c0bf6575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybSUyMGNoaWNrc3xlbnwxfHx8fDE3NjU4MjYwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Healthy chicks in brooding setup"
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 2: Pre-Brooding Preparation */}
        <section id="preparation" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">2. Pre-Brooding Preparation</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Housing Preparation</h3>
            <p className="text-[#6F6F6F] mb-4">
              Clean and disinfect the brooder area (e.g., box, trough, or whole-house setup) 24-48 hours before chicks arrive. Use absorbent bedding like pine shavings:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>1-2 kg/m² on concrete floors</li>
              <li>4-5 kg/m² on ground floors</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Cleaning and Disinfection</h3>
            <ol className="list-decimal list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Remove old litter and debris completely</li>
              <li>Wash surfaces with soap and water</li>
              <li>Disinfect with approved solutions</li>
              <li>Dry completely to prevent diseases</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Equipment Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Heat source (lamp or heater)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Feeders (1 per 50-70 chicks)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Drinkers (1 per 50-70 chicks)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Chick paper for feed</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Thermometer</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-[#043236]"><strong>✓</strong> Humidity gauge</p>
              </div>
            </div>
          </div>

          <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg mb-8">
            <p className="text-[#043236]">
              <strong>💡 Pro Tip:</strong> For optimal heat sources, schedule a demo with us to explore JotoPro heaters.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Setup Steps</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00A651] text-white rounded-full flex items-center justify-center">1</div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Select draft-free space</strong></p>
                  <p className="text-[#6F6F6F]">0.5 sq ft/chick for Weeks 0-4, 1 sq ft for Weeks 4-8</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00A651] text-white rounded-full flex items-center justify-center">2</div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Set up chick guard ring</strong></p>
                  <p className="text-[#6F6F6F]">12-18 inches high, 6 ft diameter for small flocks</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00A651] text-white rounded-full flex items-center justify-center">3</div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Pre-heat to 32-34°C ambient</strong></p>
                  <p className="text-[#6F6F6F]">Position heat evenly to avoid drafts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#00A651] text-white rounded-full flex items-center justify-center">4</div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Test equipment 24 hours prior</strong></p>
                  <p className="text-[#6F6F6F]">Ensure all systems are working correctly</p>
                </div>
              </div>
            </div>
          </div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1735343278643-6b7be2fcd9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnJvb2RpbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY1ODI2MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Brooding equipment setup"
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 3: Environmental Conditions */}
        <section id="environment" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">3. Environmental Conditions</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Temperature Requirements by Age</h3>
            <p className="text-[#6F6F6F] mb-6">
              Start at 32-34°C ambient (36-38°C under heater), decrease 0.3-0.5°C daily to 21°C by Week 5. Use JotoPro heaters for smart regulation—adapts automatically to weather, ensuring uniform heat and 20% energy savings.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#00A651] text-white">
                    <th className="p-4 text-left">Age (Days)</th>
                    <th className="p-4 text-left">Under Heater (°C)</th>
                    <th className="p-4 text-left">Living Area (°C)</th>
                    <th className="p-4 text-left">Environment (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">0-1</td>
                    <td className="p-4 text-[#6F6F6F]">36-38</td>
                    <td className="p-4 text-[#6F6F6F]">32-34</td>
                    <td className="p-4 text-[#6F6F6F]">30-34</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">2-3</td>
                    <td className="p-4 text-[#6F6F6F]">34-36</td>
                    <td className="p-4 text-[#6F6F6F]">31-32</td>
                    <td className="p-4 text-[#6F6F6F]">30-32</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">4-7</td>
                    <td className="p-4 text-[#6F6F6F]">32-34</td>
                    <td className="p-4 text-[#6F6F6F]">30-31</td>
                    <td className="p-4 text-[#6F6F6F]">28-30</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">8-14</td>
                    <td className="p-4 text-[#6F6F6F]">Decrease 0.3°C/day</td>
                    <td className="p-4 text-[#6F6F6F]">Decrease 0.3°C/day</td>
                    <td className="p-4 text-[#6F6F6F]">Decrease 0.3°C/day</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">15-35</td>
                    <td className="p-4 text-[#6F6F6F]">21-24 by Week 5</td>
                    <td className="p-4 text-[#6F6F6F]">21-24</td>
                    <td className="p-4 text-[#6F6F6F]">21-24</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Humidity Considerations</h3>
            <p className="text-[#6F6F6F]">
              Maintain 45-60% humidity for Weeks 1-2. Monitor regularly to avoid wet litter which can lead to disease.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Ventilation Requirements</h3>
            <p className="text-[#6F6F6F]">
              Minimum 1-1.4 m³/kg/hour. Ensure fresh air circulation without creating drafts that can chill chicks.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Lighting Duration and Intensity</h3>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>50 lux for first 7 days</li>
              <li>Intermittent program: 4h light/2h dark for Days 0-7 for synchronization</li>
              <li>Gradually adjust to match natural daylight patterns</li>
            </ul>
          </div>

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 4: Smart Brooding Practices */}
        <section id="smart-practices" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">4. Smart Brooding Practices</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Use of Sensors</h3>
            <p className="text-[#6F6F6F] mb-4">
              Monitor temperature and humidity with affordable sensors for precise environmental control.
            </p>
            <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg">
              <p className="text-[#043236]">
                <strong>💡 Pro Tip:</strong> To integrate sensors with automated systems, book a demo with us.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Automated Heat Control with JotoPro</h3>
            <div className="bg-gradient-to-r from-[#00A651]/10 to-[#00A651]/5 border-2 border-[#00A651] p-8 rounded-xl">
              <h4 className="text-[#043236] mb-4">ANT's JotoPro Heaters: Smart Solution for African Farms</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex gap-3">
                  <div className="text-[#00A651] text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Precise infrared technology</strong></p>
                    <p className="text-[#6F6F6F]">Adapts automatically to weather changes</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#00A651] text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>80% energy reduction</strong></p>
                    <p className="text-[#6F6F6F]">Compared to traditional lamps</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#00A651] text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Uniform heat distribution</strong></p>
                    <p className="text-[#6F6F6F]">Eliminates cold spots</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-[#00A651] text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>98% survival rate</strong></p>
                    <p className="text-[#6F6F6F]">Cuts chick mortality dramatically</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300 hover:scale-105">
                Buy JotoPro Now
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Energy-Efficient Methods</h3>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Prefer infrared heaters over traditional incandescent lamps</li>
              <li>Pre-heat brooder area 24-72 hours before chick arrival</li>
              <li>Use insulation to retain heat and reduce energy costs</li>
              <li>Monitor and adjust heating based on chick behavior</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Common Brooding Configurations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-gray-200 p-6 rounded-xl hover:border-[#00A651] transition-all">
                <h4 className="text-[#043236] mb-3">Whole-House Brooding</h4>
                <p className="text-[#6F6F6F]">Best for large flocks. Ensures uniform temperature throughout the space.</p>
              </div>
              <div className="border-2 border-[#00A651] p-6 rounded-xl bg-[#00A651]/5">
                <h4 className="text-[#043236] mb-3">JotoPro Setup (Recommended)</h4>
                <p className="text-[#6F6F6F]">Ideal for small to medium farms. Seamless setup with smart controls.</p>
              </div>
            </div>
          </div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697545698404-46828377ae9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY29vcCUyMGludGVyaW9yfGVufDF8fHx8MTc2NTgyNjA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Smart brooding setup"
            className="w-full h-80 object-cover rounded-xl mb-8"
          />

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 5: Feeding and Watering During Brooding */}
        <section id="feeding" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">5. Feeding and Watering During Brooding</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">First-Day Strategy</h3>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Place chick paper with starter crumbles (1-3mm particles) on 40-50% of floor area</li>
              <li>Scatter feed during Days 1-7 to encourage eating</li>
              <li>Ensure feed is easily accessible to all chicks</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Water Quality and Placement</h3>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Provide fresh water (pH 5.5-6.8) 1 hour before chick arrival</li>
              <li>Maintain maximum water level in drinkers</li>
              <li>Change water daily to ensure cleanliness</li>
              <li>Place drinkers evenly throughout the brooder area</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Feed Type and Schedule</h3>
            <p className="text-[#6F6F6F] mb-4">
              Use starter crumbles with digestible amino acids. Replenish feed several times daily to ensure freshness and availability.
            </p>
            <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg">
              <p className="text-[#043236]">
                <strong>💡 Pro Tip:</strong> For sourcing quality starter feed, schedule a demo with us to connect with partners.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Feeder and Drinker Requirements</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#00A651] text-white">
                    <th className="p-4 text-left">Age (Days)</th>
                    <th className="p-4 text-left">Feeders (per 100 chicks)</th>
                    <th className="p-4 text-left">Drinkers (per 100 chicks)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">0-7</td>
                    <td className="p-4 text-[#6F6F6F]">2 (50-70 birds each)</td>
                    <td className="p-4 text-[#6F6F6F]">2 (50-70 birds each)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[#043236]">8-35</td>
                    <td className="p-4 text-[#6F6F6F]">2 (50-70 birds each)</td>
                    <td className="p-4 text-[#6F6F6F]">2 (10-15 nipples)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 6: Chick Management and Observation */}
        <section id="management" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">6. Chick Management and Observation</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Signs of Healthy Chicks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Active and alert behavior</strong></p>
                    <p className="text-[#6F6F6F]">Moving around, exploring, vocalizing normally</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Full and soft crops</strong></p>
                    <p className="text-[#6F6F6F]">96% should have full crops after 24 hours</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Even distribution</strong></p>
                    <p className="text-[#6F6F6F]">Spread out across the brooder area</p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-green-600 text-2xl">✓</div>
                  <div>
                    <p className="text-[#043236]"><strong>Bright eyes and clean vents</strong></p>
                    <p className="text-[#6F6F6F]">No discharge or pasting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Behavior-Based Temperature Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">🥶</div>
                <p className="text-[#043236] mb-2"><strong>Too Cold</strong></p>
                <p className="text-[#6F6F6F]">Chicks huddled together under heat source</p>
              </div>
              <div className="border-2 border-[#00A651] bg-[#00A651]/5 p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">😊</div>
                <p className="text-[#043236] mb-2"><strong>Just Right</strong></p>
                <p className="text-[#6F6F6F]">Chicks evenly spread out, active</p>
              </div>
              <div className="border-2 border-gray-200 p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">🥵</div>
                <p className="text-[#043236] mb-2"><strong>Too Hot</strong></p>
                <p className="text-[#6F6F6F]">Chicks panting, away from heat source</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Early Stress Indicators</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <p className="text-[#043236] mb-3"><strong>⚠️ Watch for these warning signs:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
                <li>Pasting (droppings stuck to vent)</li>
                <li>Inactivity or lethargy</li>
                <li>Empty crops after 24 hours</li>
                <li>Labored breathing or panting</li>
                <li>Huddling in corners</li>
              </ul>
              <p className="text-[#6F6F6F] mt-4">Check crops daily, especially in the first week.</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Transition by Week 5</h3>
            <p className="text-[#6F6F6F] mb-4">
              By Week 5, chicks are fully feathered and can regulate their own body temperature. Gradually reduce supplemental heat and prepare for transition to the main coop.
            </p>
            <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg">
              <p className="text-[#043236]">
                <strong>💡 Pro Tip:</strong> For monitoring tools to observe chick health, book a demo with us.
              </p>
            </div>
          </div>

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 7: Common Mistakes and Prevention */}
        <section id="mistakes" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">7. Common Mistakes and Prevention</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">!</div>
                <div className="flex-1">
                  <h3 className="text-[#043236] mb-2">Overheating or Underheating</h3>
                  <p className="text-[#6F6F6F] mb-3">Temperature extremes cause stress, mortality, and poor growth.</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-[#00A651]"><strong>✓ Solution:</strong> Use JotoPro heaters for automatic temperature adjustment based on environmental conditions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">!</div>
                <div className="flex-1">
                  <h3 className="text-[#043236] mb-2">Poor Ventilation</h3>
                  <p className="text-[#6F6F6F] mb-3">Inadequate air exchange leads to ammonia buildup and respiratory issues.</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-[#00A651]"><strong>✓ Solution:</strong> Ensure minimum ventilation rates (1-1.4 m³/kg/hour) without creating drafts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">!</div>
                <div className="flex-1">
                  <h3 className="text-[#043236] mb-2">Wet Litter</h3>
                  <p className="text-[#6F6F6F] mb-3">Damp bedding promotes disease, foot problems, and ammonia production.</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-[#00A651]"><strong>✓ Solution:</strong> Change bedding weekly or when damp. Fix water leaks immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">!</div>
                <div className="flex-1">
                  <h3 className="text-[#043236] mb-2">Overstocking</h3>
                  <p className="text-[#6F6F6F] mb-3">Too many chicks in limited space causes stress, competition, and disease spread.</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-[#00A651]"><strong>✓ Solution:</strong> Stick to 25-40 chicks/m² initially, providing 0.5 sq ft per chick for Weeks 0-4.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-xl">!</div>
                <div className="flex-1">
                  <h3 className="text-[#043236] mb-2">Inadequate Feed or Water Access</h3>
                  <p className="text-[#6F6F6F] mb-3">Insufficient feeders/drinkers lead to competition and uneven growth.</p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-[#00A651]"><strong>✓ Solution:</strong> Provide 1 feeder and 1 drinker per 50-70 chicks. Check and refill multiple times daily.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg">
            <p className="text-[#043236]">
              <strong>💡 Pro Tip:</strong> To avoid these mistakes with smart technology and expert guidance, schedule a demo for JotoPro and our farm management solutions.
            </p>
          </div>

          {getCurrentSectionIndex() < sections.length - 1 && (
            <button
              onClick={goToNextSection}
              className="flex items-center gap-2 bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300 mt-8"
            >
              Next Section: {sections[getCurrentSectionIndex() + 1].title}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </section>

        {/* Section 8: Safety and Biosecurity Measures */}
        <section id="safety" className="mb-16 bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
          <h2 className="text-[#043236] mb-6">8. Safety and Biosecurity Measures</h2>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Disease Prevention</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-[#043236] mb-3">Vaccination Protocol</h4>
                <ul className="list-disc list-inside space-y-2 text-[#6F6F6F]">
                  <li>Follow recommended vaccination schedule</li>
                  <li>Use vaccines from reputable suppliers</li>
                  <li>Store vaccines at correct temperatures</li>
                  <li>Keep detailed vaccination records</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-[#043236] mb-3">Visitor Control</h4>
                <ul className="list-disc list-inside space-y-2 text-[#6F6F6F]">
                  <li>Limit visitor access to brooder area</li>
                  <li>Maintain visitor log</li>
                  <li>Require biosecurity protocols for all visitors</li>
                  <li>Establish quarantine periods if necessary</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Human Hygiene Practices</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00A651] text-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Hand Washing</strong></p>
                  <p className="text-[#6F6F6F]">Wash hands thoroughly with soap and water before and after handling chicks or equipment.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00A651] text-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Dedicated Clothing</strong></p>
                  <p className="text-[#6F6F6F]">Use clean, dedicated clothing and footwear for the brooder area only.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00A651] text-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[#043236]"><strong>Footbaths</strong></p>
                  <p className="text-[#6F6F6F]">Maintain footbaths with disinfectant at entry points. Change solution regularly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Equipment Sanitation</h3>
            <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🧹</div>
                  <p className="text-[#043236]"><strong>Daily Cleaning</strong></p>
                  <p className="text-[#6F6F6F]">Clean feeders and drinkers daily</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">💧</div>
                  <p className="text-[#043236]"><strong>Disinfection</strong></p>
                  <p className="text-[#6F6F6F]">Use approved disinfectants weekly</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">☀️</div>
                  <p className="text-[#043236]"><strong>Drying</strong></p>
                  <p className="text-[#6F6F6F]">Ensure complete drying before use</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[#00A651] mb-4">Dead Bird Disposal</h3>
            <p className="text-[#6F6F6F] mb-4">
              Remove dead birds immediately and dispose of them properly to prevent disease spread:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#6F6F6F] ml-4">
              <li>Use designated containers for dead birds</li>
              <li>Burn, bury, or compost according to local regulations</li>
              <li>Disinfect the area where the bird was found</li>
              <li>Keep mortality records for health monitoring</li>
            </ul>
          </div>

          <div className="bg-[#00A651]/10 border-l-4 border-[#00A651] p-6 rounded-lg mb-8">
            <p className="text-[#043236]">
              <strong>💡 Pro Tip:</strong> For biosecurity training and tools, book a demo with us to learn best practices for your farm.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#043236] to-[#00A651] text-white p-8 rounded-xl text-center">
            <h3 className="text-white mb-4">Ready to Transform Your Brooding Practice?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Implement smart brooding with ANT's JotoPro heaters and expert guidance. Achieve up to 98% chick survival, reduce energy costs by 80%, and maximize your farm's profitability.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-[#00A651] px-[32px] py-[5px] rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Schedule a Demo
              </button>
              <button className="bg-transparent text-white border-2 border-white px-[32px] py-[5px] rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-[#043236] mb-4">Download the Complete Brooding Guide</h2>
          <p className="text-[#6F6F6F] mb-8 max-w-2xl mx-auto">
            Get the comprehensive PDF guide with detailed charts, checklists, and troubleshooting tips for your farm.
          </p>
          <button className="bg-[#00A651] text-white px-[32px] py-[5px] rounded-full hover:bg-[#008A44] transition-all duration-300 hover:scale-105">
            Download PDF Guide
          </button>
        </div>
      </div>
    </div>
  );
}
