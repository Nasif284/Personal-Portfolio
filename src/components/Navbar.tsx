import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200/80'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand with Portrait Avatar */}
        <a
          href="#top"
          className="flex items-center gap-3 text-slate-900 font-semibold tracking-tight hover:text-blue-600 transition-colors"
        >
          <img
            src="/images/nasif-avatar.jpg"
            alt={PROFILE.name}
            className="w-9 h-9 rounded-full object-cover object-top bg-blue-50 border border-slate-200 shadow-2xs"
          />
          <span className="text-base">{PROFILE.name}</span>
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#work" className="hover:text-blue-600 transition-colors">
            Work
          </a>
          <a href="#stack" className="hover:text-blue-600 transition-colors">
            Stack
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>

        {/* Resume Pill */}
        <a
          href={PROFILE.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
