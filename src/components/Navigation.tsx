import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Navigation({ setCurrentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    if (path === '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      navigate(path);
    }
  };

  const navLinks = [
    { label: 'Home',      path: '/' },
    { label: 'Solutions', path: '/', hash: '#solutions' },
    { label: 'Our Story', path: '/', hash: '#story' },
    { label: 'Team',      path: '/', hash: '#team' },
    { label: 'Contact',   path: '/', hash: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] lg:max-w-5xl">
        <div className="bg-white/95 backdrop-blur-sm rounded-full shadow-md flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('/')}>
            <img src="https://i.imgur.com/SabjzQm.png" alt="ANT Logo" className="h-14 w-auto" />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, path, hash }) => (
              <button
                key={label}
                onClick={() => handleNavClick(path, hash)}
                className="text-[#043236] hover:text-[#00A651] transition-colors text-base font-medium"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#043236]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-8">
            <button className="absolute top-6 right-6 text-[#043236]" onClick={() => setMobileMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
            <div className="mt-16 flex flex-col gap-6">
              {navLinks.map(({ label, path, hash }) => (
                <button
                  key={label}
                  onClick={() => handleNavClick(path, hash)}
                  className="text-[#6F6F6F] hover:text-[#043236] transition-colors text-left"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
