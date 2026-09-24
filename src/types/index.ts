export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'medical-ai' | 'robotics-edge' | 'agentic-systems' | 'web-edtech';
  categoryLabel: string;
  status: string;
  timeframe: string;
  summary: string;
  architectureHighlights: string[];
  techStack: string[];
  models: string[];
  hardware?: string[];
  githubUrl?: string;
  huggingFaceUrl?: string;
  liveUrl?: string;
  accolade?: string;
  systemMetrics: {
    label: string;
    value: string;
  }[];
  architectureDiagram: {
    steps: {
      name: string;
      role: string;
      tech: string;
    }[];
  };
}

export interface Competition {
  event: string;
  year: string;
  rank: '1st' | '2nd' | '4th' | 'Finalist';
  category: string;
  project: string;
  note: string;
  badge: string;
}

export interface RoleRecognition {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  tag: string;
}

export interface HardwareSpec {
  name: string;
  chipset: string;
  role: string;
  interfaces: string[];
  projectsUsedIn: string[];
}
