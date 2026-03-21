import React, { useState } from 'react';
import { X } from 'lucide-react';

const ANT_LOGO = 'https://i.imgur.com/SabjzQm.png';

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
      {/* ── Nav pill ── */}
      <nav className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-full sm:max-w-[90%] lg:max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-md flex items-center justify-between px-4 sm:px-6 py-3">

          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center">
            <img src={ANT_LOGO} alt="ANT Logo" className="h-10 sm:h-12 w-auto" />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {[
              { label: 'Home',      hash: undefined    },
              { label: 'Solutions', hash: '#solutions' },
              { label: 'Our Story', hash: '#story'     },
              { label: 'Team',      hash: '#team'      },
              { label: 'Contact',   hash: '#contact'   },
            ].map(({ label, hash }) => (
              <button
                key={label}
                onClick={() => handleNavClick('home', hash)}
                className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-sm font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#043236] p-1"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile slide-in menu ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <img src={ANT_LOGO} alt="ANT Logo" className="h-10 w-auto" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#043236] p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-1">
              {[
                { label: 'Home',      hash: undefined    },
                { label: 'Solutions', hash: '#solutions' },
                { label: 'Our Story', hash: '#story'     },
                { label: 'Team',      hash: '#team'      },
                { label: 'Contact',   hash: '#contact'   },
              ].map(({ label, hash }) => (
                <button
                  key={label}
                  onClick={() => handleNavClick('home', hash)}
                  className="text-left text-base font-medium text-[#043236] hover:text-[#00A651] hover:bg-[#00A651]/5 transition-colors px-4 py-3 rounded-xl"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
