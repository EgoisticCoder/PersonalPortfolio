import React from 'react';
import { COMPETITIONS } from '../data/portfolioData';
import { Trophy, CheckCircle } from 'lucide-react';

export const Competitions: React.FC = () => {
  return (
    <section id="competitions" className="py-20 md:py-28 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#073642]/15">
          <div>
            <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-[#B58900]" />
              <span>03 / Competitive Track Record</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
              Hackathons & Podiums
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#586E75] max-w-2xl font-sans">
              10+ podium finishes across AI/ML, Autonomous Robotics, and Full-Stack Engineering — competing under high-pressure time limits against university and senior engineering cohorts.
            </p>
          </div>

          <div className="text-xs font-mono text-[#586E75] flex items-center gap-4 bg-[#EEE8D5] px-4 py-2.5 rounded border border-[#073642]/10">
            <div>
              <span className="text-[#B58900] font-bold font-mono-tabular">10+</span> Wins & Podiums
            </div>
            <span aria-hidden="true" className="text-[#93A1A1]">·</span>
            <div>
              <span className="text-[#2AA198] font-bold font-mono-tabular">100%</span> Shipped
            </div>
          </div>
        </div>

        {/* Clean Editorial Table */}
        <div className="mt-8 divide-y divide-[#073642]/12">
          {COMPETITIONS.map((comp, idx) => {
            const isFirst = comp.rank === '1st';
            const isSecond = comp.rank === '2nd';

            return (
              <div
                key={idx}
                className="py-5 group hover:bg-[#EEE8D5]/50 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center">
                  {/* Rank Column */}
                  <div className="md:col-span-2 flex items-center gap-2">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded ${
                        isFirst
                          ? 'bg-[#B58900]/15 text-[#B58900] border border-[#B58900]/30'
                          : isSecond
                          ? 'bg-[#586E75]/15 text-[#586E75] border border-[#586E75]/30'
                          : 'bg-[#2AA198]/15 text-[#2AA198] border border-[#2AA198]/30'
                      }`}
                    >
                      {comp.badge}
                    </span>
                    <span className="text-xs font-mono text-[#839496] md:hidden font-mono-tabular">
                      {comp.year}
                    </span>
                  </div>

                  {/* Event & Category */}
                  <div className="md:col-span-3">
                    <div className="text-base font-serif font-bold text-[#002B36] group-hover:text-[#268BD2] transition-colors">
                      {comp.event}
                    </div>
                    <div className="text-xs text-[#586E75] font-mono mt-0.5">
                      {comp.category}
                    </div>
                  </div>

                  {/* Project & Highlights */}
                  <div className="md:col-span-6">
                    <div className="text-xs font-semibold text-[#073642]">
                      {comp.project}
                    </div>
                    <p className="text-xs text-[#586E75] mt-0.5 leading-relaxed font-sans">
                      {comp.note}
                    </p>
                  </div>

                  {/* Year Column */}
                  <div className="hidden md:block md:col-span-1 text-right text-xs font-mono text-[#839496] font-mono-tabular">
                    {comp.year}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification note */}
        <div className="mt-8 p-4 bg-[#EEE8D5] border border-[#073642]/10 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#586E75]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#2AA198] shrink-0" />
            <span>Multiple inter-school and inter-state championships across West Bengal robotics and web arenas.</span>
          </div>
          <span className="text-[#073642]">
            ICSE Class 9 · M. P. Birla Foundation HS School
          </span>
        </div>
      </div>
    </section>
  );
};
