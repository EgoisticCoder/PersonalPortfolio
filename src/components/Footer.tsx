import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EEE8D5] border-t border-[#073642]/10 py-12 text-xs font-mono text-[#586E75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-[#002B36] font-bold font-serif text-sm tracking-tight">
            Abhinav Gupta <span className="text-[#586E75] font-mono text-xs">/ EgoisticCoder</span>
          </div>
          <p className="text-[#657B83] mt-1 font-sans">
            Kolkata, India · AI/ML Research Engineer (in training) & Robotics Developer
          </p>
        </div>

        <div className="flex items-center gap-5 text-[#586E75]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#002B36] transition-colors"
          >
            GitHub
          </a>
          <span aria-hidden="true" className="text-[#93A1A1]">·</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#002B36] transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-[#93A1A1]">·</span>
          <a
            href={PERSONAL_INFO.huggingface}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B58900] transition-colors"
          >
            Hugging Face
          </a>
          <span aria-hidden="true" className="text-[#93A1A1]">·</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#002B36] transition-colors flex items-center gap-1"
            title="Return to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
