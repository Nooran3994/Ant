import React from 'react';
import { Facebook, Linkedin, Mail } from 'lucide-react';

const ANT_LOGO = 'https://i.imgur.com/SabjzQm.png';

export function Footer() {
  return (
    <footer style={{ background: '#F5F5F0' }} className="text-[#043236]">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">

          {/* Logo + tagline + socials */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src={ANT_LOGO} alt="ANT Logo" className="h-14 w-auto mb-5" />
            <p className="text-sm text-[#6F6F6F] leading-relaxed mb-7 max-w-xs">
              Empowering farmers through innovation. World-class hardware, software, and services
              for sustainable, profitable agriculture.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://web.facebook.com/ANT.Ltd.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#6F6F6F] hover:text-[#043236] hover:border-[#043236] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/adaptive-nesting-technologies-ant/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#6F6F6F] hover:text-[#043236] hover:border-[#043236] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:info@adaptivenestingtech.com" aria-label="Email"
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#6F6F6F] hover:text-[#043236] hover:border-[#043236] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#043236] uppercase tracking-widest mb-5">Solutions</h4>
            <ul className="flex flex-col gap-4">
              {['Hardware', 'Software', 'Services'].map((item) => (
                <li key={item}>
                  <a href="#solutions" className="text-sm text-[#6F6F6F] hover:text-[#043236] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-[#043236] uppercase tracking-widest mb-5">Company</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'About Us',  href: '#'        },
                { label: 'Our Story', href: '#story'   },
                { label: 'Impact',    href: '#results' },
                { label: 'Team',      href: '#team'    },
                { label: 'Contact',   href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[#6F6F6F] hover:text-[#043236] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-[#043236] uppercase tracking-widest mb-5">Support</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#contact" className="text-sm text-[#6F6F6F] hover:text-[#043236] transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="mailto:info@adaptivenestingtech.com" className="text-sm text-[#6F6F6F] hover:text-[#043236] transition-colors">Email Support</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs sm:text-sm text-[#6F6F6F]">
            &copy; 2026 ANT (Adaptive Nesting Technologies). All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-[#6F6F6F]">
            Proudly serving farmers across Kenya
          </p>
        </div>
      </div>

    </footer>
  );
}
