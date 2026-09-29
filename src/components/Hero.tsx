import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDownRight, Terminal, FileText, MapPin, GraduationCap, Github, Linkedin, Sparkles, Code2, Users } from 'lucide-react';

interface HeroProps {
  onOpenLab: () => void;
  onOpenDossier: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenLab, onOpenDossier }) => {
  return (
    <section id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#073642]/12 solar-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle unboxed metadata kicker with 36+ projects metric */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#586E75] mb-5 tracking-wider uppercase">
          <span className="text-[#2AA198] font-bold">Kolkata, India</span>
          <span aria-hidden="true" className="text-[#93A1A1]">/</span>
          <span>Age 14</span>
          <span aria-hidden="true" className="text-[#93A1A1]">/</span>
          <span className="text-[#002B36] font-semibold">36+ Shipped Projects</span>
          <span aria-hidden="true" className="text-[#93A1A1]">/</span>
          <span className="text-[#B58900]">EgoisticCoder (Abhi)</span>
        </div>

        {/* Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#002B36] font-serif leading-[1.05] text-balance">
              Abhinav Gupta
            </h1>

            <p className="mt-3 text-base sm:text-lg text-[#073642] font-serif italic max-w-2xl leading-relaxed">
              AI/ML Research Engineer (in training) · Robotics & Embedded Systems · Full-Stack AI Products
            </p>

            <div className="mt-6 text-sm sm:text-base text-[#586E75] leading-relaxed max-w-2xl font-sans space-y-3">
              <p>
                I take AI/ML and robotics projects from idea to working system, end-to-end — 
                <strong className="text-[#002B36] font-semibold"> inference pipelines, embedded hardware, and the full-stack layer that ships them</strong>. 
                Built 36+ projects across IoT & automation, computer vision, AI/ML, robotics, embedded hardware, and web & app development. Long-term target: AI/ML research engineering.
              </p>
              <div className="p-3 bg-[#EEE8D5]/70 border border-[#073642]/10 rounded text-xs font-mono text-[#073642] space-y-1">
                <div className="font-semibold text-[#002B36]">
                  "Building solo; coding like never before. In 2 years shipped 36+ projects and still going."
                </div>
                <div className="text-[11px] text-[#586E75]">
                  Publicly recognized across Google & Gemini AI Search for student deep-tech engineering in India.
                </div>
              </div>
            </div>

            {/* Quick Unboxed Location, School & Club Metadata */}
            <div className="mt-6 pt-5 border-t border-[#073642]/10 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-[#657B83]">
              <span className="inline-flex items-center gap-1.5 text-[#073642]">
                <MapPin className="w-3.5 h-3.5 text-[#2AA198]" />
                <span>Kolkata, West Bengal, India</span>
              </span>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#073642]">
                <GraduationCap className="w-3.5 h-3.5 text-[#268BD2]" />
                <span>M. P. Birla Foundation H.S. School (Class 9, ICSE)</span>
              </span>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#073642]">
                <Code2 className="w-3.5 h-3.5 text-[#B58900]" />
                <span>LMNTR1X Computer Club (Core Member)</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#FDF6E3] bg-[#073642] hover:bg-[#002B36] rounded transition-all shadow-sm active:scale-95 whitespace-nowrap"
              >
                <span>View Shipped Systems (36+)</span>
                <ArrowDownRight className="w-3.5 h-3.5 text-[#2AA198]" />
              </a>

              <button
                onClick={onOpenLab}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#073642] bg-[#EEE8D5] hover:bg-[#EAE2CE] border border-[#073642]/15 rounded transition-colors whitespace-nowrap"
              >
                <Terminal className="w-3.5 h-3.5 text-[#2AA198]" />
                <span>Pipeline Simulation Lab</span>
              </button>

              <button
                onClick={onOpenDossier}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#586E75] hover:text-[#002B36] border border-[#073642]/15 rounded transition-colors hover:bg-[#EEE8D5]/50 whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[#657B83]" />
                <span>Paper Dossier Mode</span>
              </button>
            </div>

            {/* Direct Handles */}
            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-mono text-[#586E75]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#073642]" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#268BD2]" />
                <span>LinkedIn (750+)</span>
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={PERSONAL_INFO.huggingface}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B58900]" />
                <span>Hugging Face</span>
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-[#2AA198] transition-colors text-[#073642]"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Dossier Index */}
          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="bg-[#EEE8D5] border border-[#073642]/15 rounded-lg p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#073642]/15">
                <span className="text-xs font-mono text-[#586E75] uppercase tracking-wider">
                  Summary Index
                </span>
                <span className="text-xs font-mono text-[#859900] font-bold">
                  ● ACTIVE
                </span>
              </div>

              <div className="mt-4 space-y-3.5">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#657B83]">Portfolio Breadth (2 Yrs)</div>
                  <div className="text-sm font-serif font-bold text-[#002B36] mt-0.5">
                    36+ Projects Shipped
                  </div>
                  <div className="text-xs text-[#586E75] mt-0.5 font-sans">
                    IoT & Automation · Computer Vision · AI/ML · Robotics · Embedded · Web & Apps
                  </div>
                </div>

                <div className="h-px bg-[#073642]/10" />

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#657B83]">Leadership Roles</div>
                  <div className="text-sm font-serif font-bold text-[#002B36] mt-0.5">
                    Head of AI/ML · HyperNova
                  </div>
                  <div className="text-xs text-[#586E75] mt-0.5 font-sans">
                    Event Head (Web Dev) & Co-Head (Robotics), Technovation '26
                  </div>
                </div>

                <div className="h-px bg-[#073642]/10" />

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#657B83]">Accelerator & Community</div>
                  <div className="text-sm font-serif font-bold text-[#002B36] mt-0.5">
                    Sarvam AI Startup Program
                  </div>
                  <div className="text-xs text-[#586E75] mt-0.5 font-sans">
                    Claude Community India · CODE Community Core · LMNTR1X (MPBFHSS)
                  </div>
                </div>

                <div className="h-px bg-[#073642]/10" />

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#657B83]">Press Profile</div>
                  <div className="text-sm font-serif font-bold text-[#002B36] mt-0.5">
                    Featured 3x in The Telegraph
                  </div>
                  <div className="text-xs text-[#586E75] mt-0.5 font-sans">"The Young Metro" · Covered for StudyMate AI & ARIA</div>
                </div>

                <div className="h-px bg-[#073642]/10" />

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#657B83]">Track Record & Network</div>
                  <div className="text-sm font-serif font-bold text-[#002B36] mt-0.5">
                    10+ Competition Podiums
                  </div>
                  <div className="text-xs text-[#586E75] mt-0.5 font-sans">
                    750+ LinkedIn Network · Indexed on Google & Gemini AI
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#073642]/15 text-xs font-mono text-[#586E75] flex items-center justify-between">
                <span>ICSE Curriculum</span>
                <span className="text-[#073642] font-semibold">Class 9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
