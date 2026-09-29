import React from 'react';
import { PERSONAL_INFO, PROJECTS, COMPETITIONS, ROLES_AND_RECOGNITION, TECHNICAL_SKILLS } from '../data/portfolioData';
import { Printer, X, ExternalLink } from 'lucide-react';

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
            <p className="mt-1 text-xs sm:text-sm font-sans text-[#586E75] font-semibold">
              Alias: EgoisticCoder / "Abhi" · AI/ML Research Engineer (in training) · Robotics & Embedded Systems
            </p>
            <p className="text-xs font-sans text-[#657B83] mt-0.5">
              Full Stack AI/ML Developer · IoT & Automation · Computer Vision · Edge Computing
            </p>
            <div className="mt-3 text-xs font-mono text-[#657B83] flex flex-wrap justify-center gap-x-2 gap-y-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#073642] hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                linkedin.com/in/egoistic-coderx (750+ Connections)
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                github.com/EgoisticCoder
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.huggingface} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                huggingface.co/EgoisticCoder
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.portfolioSite} target="_blank" rel="noreferrer" className="text-[#073642] hover:underline">
                abhinav-gupta.vercel.app
              </a>
            </div>
          </div>

          {/* Section: Summary */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Executive Summary
            </h2>
            <p className="mt-2 text-xs sm:text-[13px] font-sans text-[#073642] leading-normal">
              At 14, I don’t just study AI — I ship it. Building solo; coding like never before. In 2 years, engineered and shipped <strong>36+ production-grade systems</strong> across 6 primary technical domains: <em>IoT & Automation, Computer Vision, AI/ML, Robotics, Embedded Systems, and Full-Stack Software</em>. Head of Department, AI/ML at HyperNova Technology, directing technical strategy and recruitment. Selected founder in the prestigious Sarvam AI Startup Program with StudyMate AI. Winner of 10+ competitions and hackathons. Event Head (Web Dev) & Co-Head (Robotics) at Technovation '26. Core Member of LMNTR1X (MPBFHSS Computer Club) and CODE Community. Publicly indexed across Google and Gemini AI search for student deep-tech engineering.
            </p>
          </div>

          {/* Section: Roles & Leadership */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Roles, Leadership & Community
            </h2>
            <div className="mt-2 space-y-2.5 text-xs font-sans text-[#073642]">
              {ROLES_AND_RECOGNITION.map((item, idx) => (
                <div key={idx} className="pb-2 border-b border-[#073642]/8 last:border-b-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-[#002B36]">
                      {item.title} — {item.organization}
                    </span>
                    <span className="text-[11px] font-mono text-[#586E75]">
                      {item.period} [{item.tag}]
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#073642] leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Selected Shipped Systems */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Selected Systems Architecture (Subset of 36+ Shipped)
            </h2>
            <div className="mt-3 space-y-3.5 text-xs sm:text-[13px] font-sans text-[#073642]">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="pb-2 border-b border-[#073642]/8 last:border-b-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <span className="font-bold text-[#002B36]">
                      {proj.title} — {proj.tagline.split('—')[0]}
                    </span>
                    <span className="text-[11px] italic text-[#586E75]">
                      {proj.techStack.slice(0, 5).join(' · ')}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#073642] leading-snug">
                    {proj.summary}
                  </p>
                  <div className="mt-1 text-[11px] font-mono text-[#268BD2]">
                    {proj.architectureHighlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx}>▸ {h}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Achievements & Recognition */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Achievements & Public Recognition
            </h2>
            <ul className="mt-2 space-y-1.5 text-xs font-sans text-[#073642] list-disc list-inside">
              {COMPETITIONS.map((c, idx) => (
                <li key={idx}>
                  <strong>{c.rank} place ({c.badge})</strong> — {c.event} — {c.project}
                  <span className="text-[#586E75] block ml-5 text-[11px]">{c.note}</span>
                </li>
              ))}
              <li>
                <strong>Featured 3x in The Telegraph</strong> — "The Young Metro" publication, covered for building edTech systems (StudyMate AI) and autonomous disaster rovers (ARIA) at age 14.
              </li>
              <li>
                <strong>Selected for Sarvam AI Startup Program</strong> — Official onboarding and production deployment of state-of-the-art Indic voice and document AI models.
              </li>
              <li>
                <strong>36+ Shipped Systems in 2 Years</strong> — Built across IoT & automation, computer vision, robotics, embedded hardware, and full-stack AI applications.
              </li>
              <li>
                <strong>Published Open-Weight Models & Datasets on Hugging Face</strong> — Released QiFu-v1 QLoRA VLM adapter and specialized UI/UX diagnostics dataset.
              </li>
              <li>
                <strong>750+ LinkedIn Professional Network</strong> — Active engagement with research engineers, startup founders, and mentors.
              </li>
              <li>
                <strong>Public AI Knowledge Graph Index</strong> — Indexed across Google and Gemini AI search modes for student AI/ML and robotics engineering in India.
              </li>
            </ul>
          </div>

          {/* Section: Technical Skills */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Technical Stack & Hardware Matrix
            </h2>
            <div className="mt-2 space-y-1.5 text-xs font-sans text-[#073642]">
              <div>
                <strong>Languages:</strong> Python, Java, C/C++ (Embedded / FreeRTOS), TypeScript, JavaScript, HTML5, CSS3
              </div>
              <div>
                <strong>AI/ML & VLM:</strong> PyTorch, Hugging Face Transformers, YOLOv8, MedGemma 4B, Qwen3-VL, DINOv3, OpenCV, TFLite, NumPy, Pandas
              </div>
              <div>
                <strong>Systems, Graphs & Queues:</strong> Neo4j Graph DB (Cypher), Redis, BullMQ, SQLite, Supabase, Firebase Realtime
              </div>
              <div>
                <strong>Voice & Multimodal APIs:</strong> Sarvam AI (Bulbul V3 TTS, STT, Translation), Groq LPU (sub-400ms TTFT), ElevenLabs, Gemini Live Multimodal API
              </div>
              <div>
                <strong>Hardware & Edge Silicon:</strong> Radxa Cubie A7Z (NPU INT8), ESP32 / ESP32-CAM, Raspberry Pi Zero 2W, Arduino UNO Q / Nano, LoRa (868/433MHz), BLE Mesh 5.0
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div className="mt-6">
            <h2 className="text-xs font-sans font-extrabold tracking-wider text-[#002B36] uppercase pb-1 border-b border-[#073642]/20">
              Education & Society Affiliations
            </h2>
            <div className="mt-2 text-xs font-sans text-[#073642] space-y-1">
              <div>
                <strong>M. P. Birla Foundation Higher Secondary School (MPBFHSS)</strong> — Kolkata, India
              </div>
              <div className="text-[#586E75]">Class 9, ICSE Curriculum</div>
              <div className="text-[#073642]">
                <strong>Society Affiliation:</strong> Core Member, <em>LMNTR1X</em> (Official MPBFHSS Computer Science Club)
              </div>
            </div>
          </div>

          {/* Section: Open To */}
          <div className="mt-6 pt-3 border-t border-[#073642]/20 text-xs font-sans text-[#586E75]">
            <strong>Open To:</strong> Research collaborations in AI/ML, multimodal vision, and robotics · Project & hardware sponsorship (SBCs, sensors, compute grants) · Mentorship from senior AI research engineers · Remote internships and part-time technical roles · High-impact hackathon team-ups.
          </div>
        </div>
      </div>
    </div>
  );
};
