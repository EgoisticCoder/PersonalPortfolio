import React, { useState } from 'react';
import { TECHNICAL_SKILLS, HARDWARE_MATRIX } from '../data/portfolioData';
import { Cpu, Terminal, Database, Code, Radio } from 'lucide-react';

export const TechnicalMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'hardware' | 'systems'>('all');

  return (
    <section id="stack" className="py-20 md:py-28 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#073642]/15">
          <div>
            <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#2AA198]" />
              <span>05 / Engineering Matrix</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
              Hardware, Models & Protocols
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#586E75] max-w-2xl font-sans">
              I don't just call third-party APIs — I solder sensor buses, quantize neural graphs for on-device NPUs, and write deterministic control firmware.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {[
              { id: 'all', label: 'Full Stack' },
              { id: 'hardware', label: 'Embedded & SBCs' },
              { id: 'ai', label: 'AI/ML Core' },
              { id: 'systems', label: 'Graphs & Systems' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#073642] text-[#FDF6E3] font-semibold'
                    : 'text-[#586E75] hover:text-[#002B36] hover:bg-[#EEE8D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Hardware Silicon & Microcontroller Table */}
        {(activeTab === 'all' || activeTab === 'hardware') && (
          <div className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-serif font-bold text-[#002B36] flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#2AA198]" />
                <span>Edge Silicon & Microcontroller Deployments</span>
              </h3>
              <span className="text-xs font-mono text-[#586E75]">
                Radxa Cubie · ESP32 · RPi Zero 2W · Arduino UNO Q
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-[#073642]/15 bg-[#EEE8D5]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#E4DDC7] text-[#073642] border-b border-[#073642]/15">
                  <tr>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Host Board</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Architecture / SoC</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">System Role</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Physical Buses</th>
                    <th className="py-3 px-4 font-bold uppercase tracking-wider">Active System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#073642]/10 text-[#073642]">
                  {HARDWARE_MATRIX.map((hw, idx) => (
                    <tr key={idx} className="hover:bg-[#EAE2CE] transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#002B36] whitespace-nowrap">
                        {hw.name}
                      </td>
                      <td className="py-3.5 px-4 text-[#586E75] whitespace-nowrap">
                        {hw.chipset}
                      </td>
                      <td className="py-3.5 px-4 text-[#073642] min-w-[240px] font-sans">
                        {hw.role}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {hw.interfaces.map((intf, iIdx) => (
                            <span key={iIdx} className="bg-[#FDF6E3] px-1.5 py-0.5 rounded text-[11px] text-[#073642] border border-[#073642]/10">
                              {intf}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-[#586E75] whitespace-nowrap font-sans text-xs">
                        {hw.projectsUsedIn.join(', ')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Technical Domain Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          {(activeTab === 'all' || activeTab === 'systems') && (
            <div className="bg-[#EEE8D5] border border-[#073642]/12 rounded-lg p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#002B36] uppercase tracking-wider pb-3 border-b border-[#073642]/10 font-bold">
                <Code className="w-4 h-4 text-[#268BD2]" />
                <span>Languages</span>
              </div>
              <div className="mt-4 space-y-3">
                {TECHNICAL_SKILLS.languages.map((lang, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-[#002B36]">{lang.name}</span>
                      <span className="text-[11px] text-[#586E75]">{lang.level}</span>
                    </div>
                    <p className="text-[11px] text-[#586E75] mt-0.5 font-sans">{lang.use}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI / ML Models */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className="bg-[#EEE8D5] border border-[#073642]/12 rounded-lg p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#002B36] uppercase tracking-wider pb-3 border-b border-[#073642]/10 font-bold">
                <Cpu className="w-4 h-4 text-[#2AA198]" />
                <span>AI & Vision-Language Models</span>
              </div>
              <div className="mt-4 space-y-3">
                {TECHNICAL_SKILLS.aiAndMl.map((item, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-bold text-[#002B36] font-mono">{item.name}</div>
                    <p className="text-[11px] text-[#586E75] mt-0.5 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases & Voice Platforms */}
          {(activeTab === 'all' || activeTab === 'systems') && (
            <div className="bg-[#EEE8D5] border border-[#073642]/12 rounded-lg p-5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#002B36] uppercase tracking-wider pb-3 border-b border-[#073642]/10 font-bold">
                <Database className="w-4 h-4 text-[#6C71C4]" />
                <span>Graph Databases & Voice APIs</span>
              </div>
              <div className="mt-4 space-y-3">
                {TECHNICAL_SKILLS.databasesAndSystems.map((item, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-bold text-[#002B36] font-mono">{item.name}</div>
                    <p className="text-[11px] text-[#586E75] mt-0.5 font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
