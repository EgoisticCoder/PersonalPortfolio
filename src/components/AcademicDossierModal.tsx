import React from 'react';
import { PERSONAL_INFO, PROJECTS, COMPETITIONS, ROLES_AND_RECOGNITION, TECHNICAL_SKILLS } from '../data/portfolioData';
import { Printer, Download, X, ExternalLink } from 'lucide-react';

interface AcademicDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicDossierModal: React.FC<AcademicDossierModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#002B36]/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#FDF6E3] text-[#073642] rounded-lg shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-[#073642]/20">
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#EEE8D5] border-b border-[#073642]/15 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#002B36] uppercase tracking-wider">
              Academic Paper Dossier View (Clean Research Format)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#073642] bg-[#FDF6E3] hover:bg-[#EAE2CE] border border-[#073642]/15 rounded shadow-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-[#2AA198]" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#586E75] hover:text-[#002B36] rounded hover:bg-[#E4DDC7] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Document Content (Typeset like high-end LaTeX / IEEE / ACM Document) */}
        <div className="p-6 sm:p-10 overflow-y-auto font-serif text-[#073642] leading-relaxed selection:bg-[#2AA198]/20">
          {/* Header */}
          <div className="text-center pb-6 border-b border-[#073642]/20">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#002B36] uppercase font-serif">
              Abhinav Gupta
            </h1>
            <p className="mt-1 text-sm font-sans text-[#586E75] font-medium">
              AI/ML Developer · Robotics & Embedded Systems Engineer
            </p>
            <div className="mt-2 text-xs font-mono text-[#657B83] flex flex-wrap justify-center gap-x-2 gap-y-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#073642] hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                linkedin.com/in/egoistic-coderx
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                github.com/EgoisticCoder
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.huggingface} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                huggingface.co/EgoisticCoder
              </a>
            </div>
          </div>

          {/* Section: Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Summary
            </h2>
            <p className="mt-2 text-xs sm:text-[13px] font-sans text-[#073642] leading-normal">
              AI/ML developer and systems engineer building production-grade intelligent systems end-to-end — model training, edge deployment, hardware integration, and live interfaces. Shipped 36+ projects across IoT, AI/ML, embedded hardware, and software. Head of Department, AI/ML at HyperNova Technology. Accepted to Sarvam AI Startup Program. Winner of 10+ competitions across AI/ML, robotics, and web development. Long-term goal: AI/ML research engineering.
            </p>
          </div>

          {/* Section: Selected Projects */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Selected Projects
            </h2>
            <div className="mt-3 space-y-3.5 text-xs sm:text-[13px] font-sans text-[#073642]">
              {PROJECTS.slice(0, 6).map((proj) => (
                <div key={proj.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-[#002B36]">
                      {proj.title} — {proj.tagline.split('—')[0]}
                    </span>
                    <span className="text-[11px] italic text-[#586E75]">
                      {proj.techStack.slice(0, 4).join(' · ')}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#073642] leading-snug">
                    {proj.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Achievements & Recognition */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Achievements & Recognition
            </h2>
            <ul className="mt-2 space-y-1.5 text-xs font-sans text-[#073642] list-disc list-inside">
              {COMPETITIONS.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.rank} place</strong> — {c.event} — {c.project}
                </li>
              ))}
              <li>Featured three times in <em>The Telegraph</em> — "The Young Metro" for building edTech system (StudyMate AI) and ARIA at age 14</li>
              <li>Selected for the <strong>Sarvam AI Startup Program</strong> with StudyMate AI</li>
              <li>Winner of 10+ events across AI/ML, web development, and robotics</li>
            </ul>
          </div>

          {/* Section: Technical Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Technical Skills
            </h2>
            <div className="mt-2 space-y-1 text-xs font-sans text-[#073642]">
              <div>
                <strong>Languages:</strong> Python, Java, C/C++, TypeScript, HTML5, CSS3
              </div>
              <div>
                <strong>AI/ML:</strong> PyTorch, Transformers, YOLOv8, MedGemma, DINOv3, OpenCV, NumPy, Pandas, TFLite
              </div>
              <div>
                <strong>Web & Backend:</strong> React, React Native (Expo), Flask, Node.js, Next.js
              </div>
              <div>
                <strong>Databases & Queues:</strong> Neo4j, SQLite, Supabase, Redis, BullMQ
              </div>
              <div>
                <strong>Hardware & Edge:</strong> Arduino UNO Q, Raspberry Pi Zero 2W, ESP32, Radxa SBC, LoRa, BLE Mesh
              </div>
            </div>
          </div>

          {/* Section: Roles */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Roles & Experience
            </h2>
            <div className="mt-2 text-xs font-sans text-[#073642]">
              <div>
                <strong>Head of Department, AI/ML — HyperNova Technology</strong> | Leading technical strategy, project direction, and recruitment
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Education
            </h2>
            <div className="mt-2 text-xs font-sans text-[#073642]">
              <strong>M. P. Birla Foundation Higher Secondary School</strong> — Kolkata, India
              <div className="text-[#586E75]">Class 9, ICSE</div>
            </div>
          </div>

          {/* Section: Open To */}
          <div className="mt-6 pt-2 border-t border-[#073642]/20 text-xs font-sans text-[#586E75]">
            <strong>Open To:</strong> Research collaborations in AI, robotics, and edge AI · sponsor conversations · mentorship from engineers at serious AI companies · remote internships & part-time technical roles · hackathon team-ups.
          </div>
        </div>
      </div>
    </div>
  );
};
