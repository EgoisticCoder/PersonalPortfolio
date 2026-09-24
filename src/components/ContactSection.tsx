import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Linkedin, Github, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('research');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMailtoLink = () => {
    let subject = 'Connecting with Abhinav Gupta (EgoisticCoder)';
    let body = 'Hi Abhinav,\n\nI came across your portfolio and shipped systems (Dokai, RAKSHA, ARIA, StudyMate). ';

    if (selectedTopic === 'research') {
      subject = 'Research Collaboration / Edge AI & Robotics with Abhinav';
      body += 'We would love to discuss a research collaboration around AI/ML and edge robotics.';
    } else if (selectedTopic === 'sponsorship') {
      subject = 'Project Sponsorship & Hardware Grants for Abhinav';
      body += 'We are interested in discussing hardware sponsorship and project support for your work.';
    } else if (selectedTopic === 'mentorship') {
      subject = 'Engineering Mentorship & Technical Discussion';
      body += 'I am an engineer / researcher in AI and would be thrilled to connect for mentorship and feedback on your architectures.';
    } else if (selectedTopic === 'internship') {
      subject = 'Remote Internship / Technical Role Opportunity';
      body += 'We have a potential technical role or project engagement that aligns with your systems expertise.';
    } else {
      subject = 'Hackathon Team-Up / Builder Collaboration';
      body += 'Let’s team up for an upcoming hackathon and build something impactful together.';
    }

    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Intent */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2">
                06 / Initiate Contact
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
                If you're building something that matters — let's talk.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#586E75] leading-relaxed font-sans">
                I am actively seeking research collaborations, industry mentorship from senior AI/ML researchers, project sponsors, and hackathon team-ups with ambitious builders.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#657B83]">
                Open Opportunities
              </div>
              <div className="space-y-2 text-xs text-[#073642] font-sans">
                <div className="p-3 bg-[#EEE8D5] border border-[#073642]/10 rounded">
                  <strong className="text-[#002B36]">Research Collaborations:</strong> Medical AI, multimodal vision-language models, and decentralized disaster mesh architectures.
                </div>
                <div className="p-3 bg-[#EEE8D5] border border-[#073642]/10 rounded">
                  <strong className="text-[#002B36]">Hardware & Project Sponsorship:</strong> Compute grants, SBCs (Radxa, Jetson), and sensors for ARIA Rover & RAKSHA field tests.
                </div>
                <div className="p-3 bg-[#EEE8D5] border border-[#073642]/10 rounded">
                  <strong className="text-[#002B36]">Mentorship & Feedback:</strong> Technical guidance from research engineers at serious AI institutions.
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 bg-[#EEE8D5] border border-[#073642]/12 rounded-lg flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#FDF6E3] text-[#073642] rounded border border-[#073642]/10">
                  <Mail className="w-5 h-5 text-[#2AA198]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#657B83] uppercase">Direct Inquiries</div>
                  <div className="text-sm font-bold text-[#002B36] font-mono">{PERSONAL_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 text-xs font-mono bg-[#FDF6E3] hover:bg-[#EAE2CE] text-[#073642] rounded border border-[#073642]/15 transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#859900]" />
                      <span className="text-[#859900] font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#586E75]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* External Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#586E75] pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#268BD2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#93A1A1]" />
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#073642]" />
                <span>GitHub (Personal)</span>
                <ArrowUpRight className="w-3 h-3 text-[#93A1A1]" />
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={PERSONAL_INFO.githubTestingGuyz}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#002B36] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#073642]" />
                <span>GitHub (Lab)</span>
                <ArrowUpRight className="w-3 h-3 text-[#93A1A1]" />
              </a>
              <span aria-hidden="true" className="text-[#93A1A1]">·</span>
              <a
                href={PERSONAL_INFO.huggingface}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#B58900] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B58900]" />
                <span>Hugging Face</span>
                <ArrowUpRight className="w-3 h-3 text-[#93A1A1]" />
              </a>
            </div>
          </div>

          {/* Right Column: Pre-Draft Dispatcher */}
          <div className="lg:col-span-6 bg-[#EEE8D5] border border-[#073642]/12 rounded-lg p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#073642]/10">
                <span className="text-xs font-mono text-[#002B36] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#2AA198]" />
                  <span>Draft Message Dispatcher</span>
                </span>
                <span className="text-[11px] font-mono text-[#586E75]">Direct Mailbox</span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#586E75] mb-2 uppercase">
                    Select Topic:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {[
                      { id: 'research', label: 'Research Collaboration' },
                      { id: 'sponsorship', label: 'Project Sponsorship' },
                      { id: 'mentorship', label: 'Mentorship / Advice' },
                      { id: 'internship', label: 'Internship / Roles' },
                      { id: 'hackathon', label: 'Hackathon Team-Up' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTopic(t.id)}
                        className={`p-2.5 rounded border text-left transition-all ${
                          selectedTopic === t.id
                            ? 'bg-[#073642] text-[#FDF6E3] border-[#073642] font-semibold'
                            : 'bg-[#FDF6E3] text-[#586E75] border-[#073642]/10 hover:text-[#002B36] hover:bg-[#FAF4E4]'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#FDF6E3] border border-[#073642]/10 rounded text-xs font-mono text-[#073642] space-y-2">
                  <div className="text-[#586E75]">
                    Recipient: <span className="text-[#002B36] font-bold">{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="text-[#586E75]">
                    Subject: <span className="text-[#268BD2] font-semibold">{
                      selectedTopic === 'research'
                        ? 'Research Collaboration / Edge AI & Robotics'
                        : selectedTopic === 'sponsorship'
                        ? 'Project Sponsorship & Hardware Grants'
                        : selectedTopic === 'mentorship'
                        ? 'Engineering Mentorship & Technical Discussion'
                        : selectedTopic === 'internship'
                        ? 'Remote Internship / Technical Role Opportunity'
                        : 'Hackathon Team-Up / Builder Collaboration'
                    }</span>
                  </div>
                  <div className="text-[#586E75] pt-2 border-t border-[#073642]/10 font-sans text-xs">
                    Pre-populated with professional intent and system references.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#073642]/10">
              <a
                href={getMailtoLink()}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#FDF6E3] bg-[#073642] hover:bg-[#002B36] rounded shadow-sm transition-all active:scale-95"
              >
                <Send className="w-4 h-4 text-[#2AA198]" />
                <span>Launch Email with Pre-Drafted Message</span>
              </a>
              <p className="mt-2 text-center text-[11px] font-mono text-[#586E75]">
                Direct mailto dispatch to your preferred email client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
