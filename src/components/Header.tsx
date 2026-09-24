import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenLab: () => void;
  onOpenDossier: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLab, onOpenDossier }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#systems', label: 'Systems' },
    { href: '#architecture', label: 'Schematics' },
    { href: '#competitions', label: 'Competitions' },
    { href: '#recognition', label: 'Recognition' },
    { href: '#stack', label: 'Hardware Matrix' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#FDF6E3]/95 backdrop-blur-md border-[#073642]/15 shadow-sm'
          : 'bg-[#FDF6E3] border-[#073642]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity on a crisp, elegant single line */}
        <a
          href="#top"
          className="flex items-baseline gap-2 text-[#002B36] hover:text-[#073642] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="text-xl font-serif font-bold tracking-tight text-[#002B36]">
            Abhinav Gupta
          </span>
          <span className="text-xs font-mono text-[#586E75] hidden sm:inline">
            · EgoisticCoder
          </span>
        </a>

        {/* Center: Clean Nav Links with proper spacing */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono tracking-wider uppercase text-[#586E75] hover:text-[#002B36] transition-colors whitespace-nowrap py-1 relative hover:text-[#2AA198]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Uncluttered Action Controls - Guaranteed Single Line */}
        <div className="flex items-center gap-2 sm:gap-3 whitespace-nowrap shrink-0">
          <button
            onClick={onOpenDossier}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#073642] hover:text-[#002B36] bg-[#EEE8D5] hover:bg-[#E4DDC7] border border-[#073642]/15 rounded transition-colors whitespace-nowrap shrink-0"
            title="Academic Research Dossier View"
          >
            <FileText className="w-3.5 h-3.5 text-[#586E75]" />
            <span>Paper</span>
          </button>

          <button
            onClick={onOpenLab}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#FDF6E3] bg-[#073642] hover:bg-[#002B36] rounded shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-95"
            title="Open Interactive Pipeline Simulation Sandbox"
          >
            <Terminal className="w-3.5 h-3.5 text-[#2AA198] shrink-0" />
            <span className="whitespace-nowrap">Lab Sim</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded text-[#073642] hover:bg-[#EEE8D5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF6E3] border-b border-[#073642]/15 px-6 py-4 animate-in slide-in-from-top duration-150">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase text-[#002B36] hover:text-[#2AA198] transition-colors py-1.5 border-b border-[#073642]/10"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#073642] bg-[#EEE8D5] border border-[#073642]/15 rounded"
              >
                <FileText className="w-3.5 h-3.5 text-[#586E75]" />
                <span>Paper Dossier</span>
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono text-[#268BD2] flex items-center gap-1"
              >
                <span>Collaborate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
