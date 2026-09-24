import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProjectForArchitecture: (project: Project) => void;
  onOpenSimulatorForProject: (projectId: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProjectForArchitecture,
  onOpenSimulatorForProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'medical-ai') return proj.category === 'medical-ai';
    if (activeFilter === 'robotics-edge') return proj.category === 'robotics-edge';
    if (activeFilter === 'agentic-systems') return proj.category === 'agentic-systems';
    if (activeFilter === 'web-edtech') return proj.category === 'web-edtech';
    return true;
  });

  return (
    <section id="systems" className="py-20 md:py-28 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#073642]/15">
          <div>
            <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2">
              01 / End-to-End Production Systems (36+ Shipped)
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
              What I’m Shipping
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#586E75] max-w-2xl font-sans">
              Featured 10 of 36+ shipped systems across IoT, AI/ML, Embedded Hardware, Web & Native Apps — from fine-tuning vision-language models to compiling edge inference graphs and soldering sensor buses. Solo.
            </p>
          </div>

          {/* Minimalist Solarized Filter Links */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {[
              { id: 'all', label: `All (${PROJECTS.length})` },
              { id: 'medical-ai', label: 'Medical AI & VLMs' },
              { id: 'robotics-edge', label: 'Robotics & Edge' },
              { id: 'agentic-systems', label: 'Disaster Mesh' },
              { id: 'web-edtech', label: 'EdTech & Voice' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#073642] text-[#FDF6E3] font-semibold'
                    : 'text-[#586E75] hover:text-[#002B36] hover:bg-[#EEE8D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project List (Awwwards Style: Spacious, Monographic, Structured) */}
        <div className="mt-8 divide-y divide-[#073642]/12">
          {filteredProjects.map((project, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className="py-10 group hover:bg-[#EEE8D5]/40 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-lg transition-colors duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Index & Category */}
                  <div className="lg:col-span-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-mono font-bold text-[#B58900]">
                        {indexStr}
                      </span>
                      <span className="text-xs font-mono text-[#586E75] uppercase tracking-wider">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-mono text-[#839496]">
                      {project.timeframe}
                    </div>

                    {project.accolade && (
                      <div className="mt-3 text-xs font-mono text-[#CB4B16] font-medium">
                        ★ {project.accolade}
                      </div>
                    )}
                  </div>

                  {/* Center: Title, Description & Architectural Flow */}
                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#002B36] font-bold group-hover:text-[#268BD2] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-serif italic text-[#586E75] mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#073642] leading-relaxed font-sans">
                      {project.summary}
                    </p>

                    {/* Architecture flow preview */}
                    <div className="pt-2">
                      <div className="text-[11px] font-mono text-[#657B83] uppercase tracking-wider mb-1.5">
                        Signal & Hardware Pipeline
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                        {project.architectureDiagram.steps.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="bg-[#EEE8D5] text-[#073642] px-2 py-0.5 rounded border border-[#073642]/10">
                              {step.name}
                            </span>
                            {sIdx < project.architectureDiagram.steps.length - 1 && (
                              <span className="text-[#93A1A1]">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#586E75]">
                      <span className="text-[#93A1A1]">Stack:</span>
                      {project.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-[#073642]">{tech}</span>
                          {tIdx < project.techStack.length - 1 && (
                            <span aria-hidden="true" className="text-[#93A1A1]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics & Actions */}
                  <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">
                    {/* Metrics Box */}
                    <div className="bg-[#EEE8D5] p-3.5 rounded border border-[#073642]/10 space-y-2">
                      {project.systemMetrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="text-xs">
                          <div className="text-[10px] font-mono uppercase text-[#657B83]">{m.label}</div>
                          <div className="font-mono font-semibold text-[#002B36] font-mono-tabular">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <button
                        onClick={() => onSelectProjectForArchitecture(project)}
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#268BD2] hover:text-[#073642] underline underline-offset-4"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Schematic</span>
                      </button>

                      {['dokai-v2', 'studymate-ai', 'raksha', 'aria-rover', 'military-vision-car', 'forma-infra', 'neopet'].includes(project.id) ? (
                        <button
                          onClick={() => onOpenSimulatorForProject(project.id)}
                          className="px-2 py-0.5 text-xs font-mono font-medium text-[#859900] hover:text-[#002B36] bg-[#859900]/10 hover:bg-[#859900]/20 rounded border border-[#859900]/30 transition-colors"
                          title="Open Interactive Pipeline Simulation"
                        >
                          Simulate
                        </button>
                      ) : null}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-[#586E75] hover:text-[#002B36] transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}

                      {project.huggingFaceUrl && (
                        <a
                          href={project.huggingFaceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-[#B58900] hover:text-[#CB4B16] transition-colors"
                          title="Hugging Face Model"
                        >
                          <Sparkles className="w-4 h-4" />
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedModalProject(project)}
                        className="p-1.5 text-[#586E75] hover:text-[#002B36] transition-colors"
                        title="Specifications"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Specifications Modal in Solarized Light */}
      {selectedModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002B36]/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-[#FDF6E3] border border-[#073642]/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#073642]/15">
              <div>
                <div className="text-xs font-mono text-[#586E75] uppercase">
                  {selectedModalProject.categoryLabel} · {selectedModalProject.timeframe}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#002B36] mt-1">
                  {selectedModalProject.title}
                </h3>
                <p className="text-xs font-serif italic text-[#586E75] mt-0.5">
                  {selectedModalProject.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedModalProject(null)}
                className="text-[#586E75] hover:text-[#002B36] text-lg font-mono p-1 rounded hover:bg-[#EEE8D5]"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-6 text-xs text-[#073642]">
              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#586E75] mb-1.5">
                  System Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#073642] leading-relaxed font-sans">
                  {selectedModalProject.summary}
                </p>
              </div>

              {selectedModalProject.accolade && (
                <div className="p-3 bg-[#EEE8D5] border-l-4 border-[#B58900] text-xs font-mono text-[#002B36]">
                  Recognition: {selectedModalProject.accolade}
                </div>
              )}

              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#586E75] mb-2">
                  Key Engineering Invariants
                </h4>
                <ul className="space-y-2">
                  {selectedModalProject.architectureHighlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2AA198] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#586E75] mb-2">
                  System Telemetry & Specs
                </h4>
                <div className="grid grid-cols-2 gap-2 bg-[#EEE8D5] p-3 rounded border border-[#073642]/10 font-mono">
                  {selectedModalProject.systemMetrics.map((metric, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[10px] text-[#657B83] uppercase">{metric.label}</div>
                      <div className="text-[#002B36] font-semibold">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#073642]/15 flex items-center justify-between">
              <button
                onClick={() => {
                  const proj = selectedModalProject;
                  setSelectedModalProject(null);
                  onSelectProjectForArchitecture(proj);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#FDF6E3] bg-[#073642] hover:bg-[#002B36] rounded transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Open System Schematic</span>
              </button>

              <button
                onClick={() => setSelectedModalProject(null)}
                className="px-3 py-1.5 text-xs font-mono text-[#586E75] hover:text-[#002B36] border border-[#073642]/20 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
