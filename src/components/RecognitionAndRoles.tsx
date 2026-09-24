import React from 'react';
import { ROLES_AND_RECOGNITION } from '../data/portfolioData';
import { Newspaper, Building2, Rocket, Users, CheckCircle2, Quote } from 'lucide-react';

export const RecognitionAndRoles: React.FC = () => {
  return (
    <section id="recognition" className="py-20 md:py-28 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-8 border-b border-[#073642]/15">
          <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2">
            04 / Leadership & Public Validation
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
            Roles & Recognition
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#586E75] max-w-2xl font-sans">
            Trusted by startup accelerators, engineering firms, and premier national news publications to lead technical vision and execute edge AI.
          </p>
        </div>

        {/* 2x2 Grid of Roles & Features */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROLES_AND_RECOGNITION.map((item, idx) => {
            const isPress = item.tag === 'Press Feature';
            const isStartup = item.tag === 'Startup Accelerator';
            const isExecutive = item.tag === 'Executive Leadership';

            return (
              <div
                key={idx}
                className="bg-[#EEE8D5] border border-[#073642]/12 hover:border-[#073642]/30 rounded-lg p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top unboxed line */}
                  <div className="flex items-center justify-between text-xs text-[#586E75] font-mono pb-3 border-b border-[#073642]/10">
                    <span className="text-[#268BD2] font-semibold">{item.tag}</span>
                    <span>{item.period}</span>
                  </div>

                  <div className="mt-4 flex items-start gap-3">
                    <div className="p-2 rounded bg-[#FDF6E3] text-[#073642] shrink-0 border border-[#073642]/10">
                      {isPress ? (
                        <Newspaper className="w-5 h-5 text-[#B58900]" />
                      ) : isStartup ? (
                        <Rocket className="w-5 h-5 text-[#CB4B16]" />
                      ) : isExecutive ? (
                        <Building2 className="w-5 h-5 text-[#2AA198]" />
                      ) : (
                        <Users className="w-5 h-5 text-[#6C71C4]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#002B36]">
                        {item.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#586E75] font-mono mt-0.5">
                        {item.organization}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-[#073642] leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#586E75] font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA198] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {isPress && (
                  <div className="mt-5 p-3.5 rounded bg-[#FDF6E3] border border-[#073642]/10 flex items-start gap-2 text-xs text-[#073642] font-serif italic">
                    <Quote className="w-3.5 h-3.5 text-[#B58900] shrink-0 mt-0.5" />
                    <span>"Profiled across three editions of The Telegraph's 'The Young Metro' — covered for building edTech system (StudyMate AI) and ARIA at age 14."</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
