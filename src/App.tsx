import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ArchitectureInspector } from './components/ArchitectureInspector';
import { Competitions } from './components/Competitions';
import { RecognitionAndRoles } from './components/RecognitionAndRoles';
import { TechnicalMatrix } from './components/TechnicalMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AcademicDossierModal } from './components/AcademicDossierModal';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { Project } from './types';
import { Terminal, X, ExternalLink } from 'lucide-react';

export default function App() {
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isLabModalOpen, setIsLabModalOpen] = useState<boolean>(false);
  const [selectedArchProject, setSelectedArchProject] = useState<Project | null>(null);
  const [simulatorInitialMode, setSimulatorInitialMode] = useState<string>('dokai');

  const handleSelectProjectForArchitecture = (project: Project) => {
    setSelectedArchProject(project);
    // Smooth scroll to architecture section
    const element = document.getElementById('architecture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSimulatorForProject = (projectId: string) => {
    setSimulatorInitialMode(projectId);
    setIsLabModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDF6E3] text-[#073642] selection:bg-[#2AA198]/20 selection:text-[#002B36] font-sans">
      {/* Top Bar Navigation */}
      <Header
        onOpenLab={() => setIsLabModalOpen(true)}
        onOpenDossier={() => setIsDossierOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenLab={() => setIsLabModalOpen(true)}
          onOpenDossier={() => setIsDossierOpen(true)}
        />

        {/* Shipped Systems Portfolio Grid */}
        <ProjectShowcase
          onSelectProjectForArchitecture={handleSelectProjectForArchitecture}
          onOpenSimulatorForProject={handleOpenSimulatorForProject}
        />

        {/* Interactive Architecture Schematics Inspector */}
        <ArchitectureInspector selectedProject={selectedArchProject} />

        {/* Competition Track Record & Podiums */}
        <Competitions />

        {/* Public Roles, Recognition & Press */}
        <RecognitionAndRoles />

        {/* Hardware Matrix & Full Technical Stack */}
        <TechnicalMatrix />

        {/* Direct Contact & Collaboration Launcher */}
        <ContactSection />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />

      {/* Academic Paper Dossier Modal */}
      <AcademicDossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />

      {/* Interactive Sandbox Terminal Modal */}
      {isLabModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002B36]/70 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="w-full max-w-4xl relative">
            <button
              onClick={() => setIsLabModalOpen(false)}
              className="absolute -top-10 right-0 text-[#FDF6E3] hover:text-[#2AA198] text-xs font-mono flex items-center gap-1.5 p-1 rounded transition-colors"
            >
              <span>Close Terminal</span>
              <X className="w-4 h-4" />
            </button>
            <InteractiveSandbox initialMode={simulatorInitialMode} />
          </div>
        </div>
      )}
    </div>
  );
}
