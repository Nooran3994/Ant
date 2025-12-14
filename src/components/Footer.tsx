import image_cbb4c7013af48e3ff457123423a48220ab120d11 from 'figma:asset/cbb4c7013af48e3ff457123423a48220ab120d11.png';
import image_cbb4c7013af48e3ff457123423a48220ab120d11 from 'figma:asset/cbb4c7013af48e3ff457123423a48220ab120d11.png';
import image_02a8735ace641f6e32ed63018cd7e07f3732f6d4 from 'figma:asset/02a8735ace641f6e32ed63018cd7e07f3732f6d4.png';
import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#043236] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-10 sm:mb-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 px-[23px] py-[0px]">
              <img src={image_cbb4c7013af48e3ff457123423a48220ab120d11} alt="ANT Logo" className="w-8 h-8 object-contain" />
            </div>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-sm">
              Adaptive Nesting Technologies. Empowering farmers through innovative hardware, 
              software, and services.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Software
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#story" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#team" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="mailto:support@ant.co.ke" className="text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mb-8 pb-8 border-b border-white/10">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:info@ant.co.ke" 
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm sm:text-base text-white/70 space-y-2">
          <p>&copy; 2025 ANT Adaptive Nesting Technologies. All rights reserved.</p>
          <p>Proudly serving farmers across Kenya.</p>
        </div>
      </div>
    </footer>
  );
}