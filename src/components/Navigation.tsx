import image_cbb4c7013af48e3ff457123423a48220ab120d11 from 'figma:asset/cbb4c7013af48e3ff457123423a48220ab120d11.png';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import antLogo from 'figma:asset/0696cc43fb19e911c4524db40812c7ba4161e327.png';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string, hash?: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (hash && page === 'home') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] lg:max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-md p-[18px] flex items-center justify-between mx-[155px] my-[8px] px-[18px] py-[3px]">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img src={image_cbb4c7013af48e3ff457123423a48220ab120d11} alt="Ant Logo" className="h-12 w-auto" />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('home')} className="text-[#6F6F6F] hover:text-[#043236] transition-colors">
              Home
            </button>
            <button onClick={() => handleNavClick('home', '#solutions')} className="text-[#6F6F6F] hover:text-[#043236] transition-colors">
              Solutions
            </button>
            <button onClick={() => handleNavClick('home', '#story')} className="text-[#6F6F6F] hover:text-[#043236] transition-colors">
              Our Story
            </button>
            <button onClick={() => handleNavClick('home', '#team')} className="text-[#6F6F6F] hover:text-[#043236] transition-colors">
              Team
            </button>
            <button onClick={() => handleNavClick('home', '#contact')} className="text-[#6F6F6F] hover:text-[#043236] transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#043236]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-8">
            <button 
              className="absolute top-6 right-6 text-[#043236]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-16 flex flex-col gap-6">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('home', '#solutions')}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
              >
                Solutions
              </button>
              <button 
                onClick={() => handleNavClick('home', '#story')}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
              >
                Our Story
              </button>
              <button 
                onClick={() => handleNavClick('home', '#team')}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
              >
                Team
              </button>
              <button 
                onClick={() => handleNavClick('home', '#contact')}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}