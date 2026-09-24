import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

interface InteractiveSandboxProps {
  initialMode?: string;
}

export const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({ initialMode = 'dokai-v2' }) => {
  const getCleanMode = (m: string) => {
    if (m === 'studymate-ai' || m === 'studymate') return 'studymate';
    if (m === 'raksha') return 'raksha';
    if (m === 'aria-rover' || m === 'aria') return 'aria';
    if (m === 'military-vision-car' || m === 'military') return 'military';
    if (m === 'forma-infra' || m === 'forma') return 'forma';
    if (m === 'neopet') return 'neopet';
    return 'dokai';
  };

  const [activeMode, setActiveMode] = useState<string>(getCleanMode(initialMode));
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);
  const [outputSummary, setOutputSummary] = useState<string | null>(null);

  const runSimulation = () => {
    setIsRunning(true);
    setLogs([]);
    setCompleted(false);
    setOutputSummary(null);

    let steps: string[] = [];
    let summary = '';

    if (activeMode === 'dokai') {
      steps = [
        '[SIMULATION INITIALIZED] Target: Dokai V2 Dual-Pass Medical Intelligence Pipeline',
        '[INSPECT: MOCK DATA] Ingesting sample hospital bill scan: Sample_Apollo_Kolkata_Bill.pdf',
        '[PASS 1: SIMULATED MedGemma 4B] Normalizing CLAHE optical contrast... complete (94ms simulated)',
        '[PASS 1: SIMULATED MedGemma 4B] Segmenting clinical item tokens: 24 itemized charges detected',
        '[PASS 2: SIMULATED LLaMA 3] Querying National Pharmaceutical Pricing Authority (NPPA) ceiling caps...',
        '[SIMULATED ALERT] Discrepancy #1: "Disposable Syringe 5ml" — Billed ₹380 | Gov Ceiling MRP: ₹24.50 (15.5x markup flagged)',
        '[SIMULATED ALERT] Discrepancy #2: "IV Cannula 20G" — Billed ₹650 | Hospital Purchase Rate: ₹48 (Unwarranted surcharge)',
        '[REASONER] Flagging unbundled "Nursing Documentation Fee" as non-standard hospital surcharge',
        '[SARVAM V3 VOICE] Synthesizing regional voice audio report (Hindi/Bengali streaming audio ready)',
        '[SIMULATION COMPLETE] Total flagged overcharges: ₹1,437.50 across 3 billing violations.',
      ];
      summary = 'Simulation completed: Audited 24 sample billing items and flagged 2 overcharging violations against NPPA price caps.';
    } else if (activeMode === 'studymate') {
      steps = [
        '[SIMULATION INITIALIZED] Target: StudyMate AI (Sarvam Startup Program Acceptance)',
        '[INPUT INGEST] Student submitted photo of Class 9 ICSE Physics handwritten test answer',
        '[SARVAM DIGITIZATION] Digitizing handwritten equations: "Force = mass * acceleration", score=0.98',
        '[NEO4J GRAPH QUERY] Querying student behavioral node [STUDENT_ABH_492] for concept mastery decay...',
        '[KNOWLEDGE TOPOLOGY] Found decay in prerequisite node: "Newton\'s 3rd Law of Motion" (decay index: 0.42)',
        '[GROQ LLM RAG] Generating targeted Socratic hints via Groq Llama-3 70B (<380ms TTFT)',
        '[SARVAM BULBUL V3] Synthesizing Hindi voice tutorial stream: "न्यूटन के तीसरे नियम को फिर से देखें..."',
        '[GRAPH UPDATE] Spaced repetition schedule reset to +3 days upon student acknowledgment.',
        '[SIMULATION COMPLETE] Graph updated. Personalized voice tutoring stream dispatched.',
      ];
      summary = 'Simulation completed: Evaluated handwritten response, identified knowledge graph bottleneck, and synthesized Sarvam Bulbul audio stream.';
    } else if (activeMode === 'raksha') {
      steps = [
        '[SIMULATION INITIALIZED] Target: RAKSHA 5-Layer Offline Degradation Cascade',
        '[SIMULATED EVENT] Disaster Event: Kolkata South Embankment Breach (Zone 4)',
        '[TELEMETRY FAIL] Grid power lost. Cell tower base stations unresponsive.',
        '[DEGRADATION LAYER 1] Local LAN WSS connection timed out after 3000ms',
        '[DEGRADATION LAYER 2] Tripping BLE Mesh 5.0 peer-to-peer advertising...',
        '[MESH RELAY] Found 7 simulated intermediate survivor nodes in 250m radius. Packet relayed.',
        '[LORA UPLINK] Layer 3 packet broadcast on 868.1 MHz to District Command Hub',
        '[AGENT 1: Route Hazard Resolver] Neo4j spatial graph recalculating: Primary evacuation road flooded',
        '[AGENT 2: Triage Allocator] Dispatched 2 emergency medical boats via safe corridor [CORR_92A]',
        '[SARVAM AUDIO] Multilingual voice SOS broadcast delivered to rescue team transceivers.',
        '[SIMULATION COMPLETE] Distress packet routed through 5-layer offline degradation stack.',
      ];
      summary = 'Simulation completed: Packet routed via simulated BLE mesh and LoRa fallback; autonomous agent rerouted rescue convoy around flood surge.';
    } else if (activeMode === 'aria') {
      steps = [
        '[SIMULATION INITIALIZED] Target: ARIA Rover Edge Hardware Pipeline',
        '[RADXA NPU] Initializing simulated Radxa Cubie A7Z onboard neural NPU...',
        '[CSI CAMERAS] Dual stereo optical feed locked @ 30 FPS (640x480)',
        '[NPU INFERENCE] Simulated YOLOv8 INT8 quantized inference: 21ms per frame (47.6 FPS)',
        '[DETECTION] 3 objects in simulated path: [Concrete Rubble: 0.94], [Rebar Spikes: 0.89]',
        '[TRAVERSABILITY NET] Forward elevation gradient: +38° incline. Costmap score: 0.82 (HAZARDOUS)',
        '[AUTONOMOUS ARBITER] Path rejected: Risk of chassis rollover exceeding 25° mechanical limit',
        '[ARDUINO UNO Q] Simulated UART command sent (115200 baud): EMERGENCY_STEER_RIGHT(42_DEG, SPEED=0.35m/s)',
        '[SIMULATION COMPLETE] 100% on-device decision executed in simulated 43ms total.',
      ];
      summary = 'Simulation completed: Simulated traversability risk evaluated and avoided on-device in 43ms. Zero cloud latency.';
    } else if (activeMode === 'military') {
      steps = [
        '[SIMULATION INITIALIZED] Target: Military Vision Car (ESP32-CAM + Gemini Verifier)',
        '[OV2640 CAMERA] ESP32-CAM frame buffer read: 800x600 optical stream locked @ 20 FPS',
        '[ROBOFLOW EDGE NET] Running 20+ custom detection models on local micro-hub...',
        '[DETECTION CANDIDATES] 4 potential perimeter anomalies identified (confidence: 0.74, 0.88, 0.65, 0.91)',
        '[STAGE 1: NMS FILTER] Non-Maximum Suppression pruned 2 overlapping bounding boxes',
        '[STAGE 2: GEMINI VERIFIER] Transmitting high-salience crop to Gemini Flash for false-positive validation...',
        '[VERIFIED TARGET] Gemini confirmed: "Unauthorized vehicle silhouette at perimeter fence"',
        '[NEO-6M GPS] Tagged target coordinate: Lat 22.5726° N, Lon 88.3639° E',
        '[OPERATOR HUD] Broadcast encrypted WebSocket tactical alert to mobile cockpit.',
        '[SIMULATION COMPLETE] Two-stage pipeline eliminated 2 false positives; validated threat with GPS tag.',
      ];
      summary = 'Simulation completed: Two-stage NMS + Gemini validation eliminated false alarms; verified threat logged with live GPS coordinates.';
    } else if (activeMode === 'forma') {
      steps = [
        '[SIMULATION INITIALIZED] Target: Forma & QiFu-v1 (Hugging Face Fine-Tuned Qwen3-VL-4B)',
        '[BROWSER INGEST] Ingesting simulated website DOM & 1440px full-page viewport screenshot',
        '[QIFU-V1 INFERENCE] Executing custom QLoRA adapter against UI visual hierarchy...',
        '[DEFECT #1] Insufficient contrast ratio on primary CTA: 2.4:1 (WCAG AA requires 4.5:1)',
        '[DEFECT #2] Horizontal flex overflow on mobile viewport (<375px breakpoint clipped)',
        '[RAG GROUNDING] Querying design pattern vector database for accessible Tailwind remediation...',
        '[AST PATCH GENERATION] Synthesized CSS patch: "bg-teal-700 text-white hover:bg-teal-800 focus:ring-2"',
        '[SIMULATION COMPLETE] 2 layout defects diagnosed and remediation patch generated.',
      ];
      summary = 'Simulation completed: QiFu-v1 diagnosed accessibility & responsive bugs and generated clean CSS remediation.';
    } else {
      steps = [
        '[SIMULATION INITIALIZED] Target: NeoPet (Built in ~1.5 Hours for X Celsior X-Hack)',
        '[USER INTERACTION] User chatted: "Hey buddy, let\'s play mini-games and earn some coins!"',
        '[GROQ LLM COMPANION] Sub-second sentiment analysis (<240ms): Emotion=EXCITED, Happiness=+20',
        '[ELEVENLABS STREAM] Streaming expressive voice audio stream: "Yay! Let\'s start the gem catcher!"',
        '[XP PROGRESSION] Awarded +75 XP. Pet leveled up to Level 4 (Unlocked: Neon collar badge)',
        '[FIREBASE REALTIME] State committed to Firebase Realtime database in 28ms.',
        '[SIMULATION COMPLETE] Rapid hackathon pet companion loop completed in under 300ms total.',
      ];
      summary = 'Simulation completed: Simulated Groq emotion analysis, ElevenLabs voice playback, and pet XP leveling economy.';
    }

    steps.forEach((line, idx) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, line]);
        if (idx === steps.length - 1) {
          setIsRunning(false);
          setCompleted(true);
          setOutputSummary(summary);
        }
      }, (idx + 1) * 320);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setLogs([]);
    setCompleted(false);
    setOutputSummary(null);
  };

  return (
    <div className="bg-[#FDF6E3] border border-[#073642]/20 rounded-xl overflow-hidden shadow-2xl">
      {/* Explicit Simulation Disclaimer Notice */}
      <div className="bg-[#EEE8D5] border-b border-[#073642]/15 px-5 py-3 flex items-start gap-2.5 text-xs text-[#073642]">
        <Info className="w-4 h-4 text-[#CB4B16] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-[#002B36] font-semibold">Simulation Notice:</strong> This interactive lab is an <strong className="text-[#CB4B16]">architectural simulation</strong> designed to demonstrate the pipeline data flow, failover degradation logic, and inference steps. It is <strong className="underline underline-offset-2">not the actual live production client</strong> of the systems.
        </div>
      </div>

      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#E4DDC7] border-b border-[#073642]/15 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#DC322F]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#B58900]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#859900]" />
          <span className="ml-2 text-xs font-mono text-[#002B36] font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#2AA198]" />
            <span>simulation-sandbox@egoisticcoder:~$</span>
          </span>
        </div>

        {/* System tabs */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full py-0.5">
          {[
            { id: 'dokai', label: 'Dokai (Med)' },
            { id: 'studymate', label: 'StudyMate' },
            { id: 'raksha', label: 'RAKSHA (Mesh)' },
            { id: 'aria', label: 'ARIA (Rover)' },
            { id: 'military', label: 'Military Car' },
            { id: 'forma', label: 'Forma (VLM)' },
            { id: 'neopet', label: 'NeoPet' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveMode(tab.id); resetSimulation(); }}
              className={`px-2.5 py-1 text-xs font-mono rounded whitespace-nowrap transition-colors ${
                activeMode === tab.id ? 'bg-[#073642] text-[#FDF6E3] font-bold' : 'text-[#586E75] hover:text-[#002B36]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Control Area */}
      <div className="p-4 bg-[#FDF6E3] border-b border-[#073642]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="text-[#073642]">
          Active Pipeline: <span className="font-bold text-[#268BD2]">{
            activeMode === 'dokai'
              ? 'Dokai V2 (Simulated MedGemma 4B + LLaMA 3 Bill Audit)'
              : activeMode === 'studymate'
              ? 'StudyMate AI (Simulated Neo4j Graph + Sarvam Audio)'
              : activeMode === 'raksha'
              ? 'RAKSHA (Simulated 5-Layer Offline Degradation Cascade)'
              : activeMode === 'aria'
              ? 'ARIA Rover (Simulated Radxa NPU 45fps + Arduino Real-Time PID)'
              : activeMode === 'military'
              ? 'Military Car (Simulated ESP32-CAM + Gemini 2-Stage Verification)'
              : activeMode === 'forma'
              ? 'Forma (Simulated QiFu-v1 QLoRA VLM Accessibility Audit)'
              : 'NeoPet (Simulated 1.5h Groq LLM + ElevenLabs Audio Companion)'
          }</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#073642] hover:bg-[#002B36] disabled:opacity-50 text-[#FDF6E3] font-mono text-xs font-semibold rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#2AA198]" />
            <span>{isRunning ? 'Running Simulation...' : 'Run Simulation'}</span>
          </button>
          <button
            onClick={resetSimulation}
            disabled={isRunning || logs.length === 0}
            className="p-2 text-[#586E75] hover:text-[#002B36] disabled:opacity-30 rounded hover:bg-[#EEE8D5] transition-colors"
            title="Reset Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Window */}
      <div className="p-5 bg-[#EEE8D5] min-h-[220px] max-h-[340px] overflow-y-auto font-mono text-xs text-[#073642] space-y-1.5 leading-relaxed">
        {logs.length === 0 && !isRunning && (
          <div className="text-[#657B83] py-8 text-center font-sans space-y-1">
            <p>Interactive Pipeline Simulator (Demonstration Sandbox)</p>
            <p className="text-xs font-mono text-[#586E75]">
              Select a system above and click <span className="text-[#002B36] font-bold">"Run Simulation"</span> to step through the simulated multi-pass execution.
            </p>
          </div>
        )}

        {logs.map((log, idx) => {
          const isAlert = log.includes('[ALERT]') || log.includes('[SIMULATED ALERT]') || log.includes('[DEGRADATION]');
          const isComplete = log.includes('[COMPLETE]') || log.includes('[SIMULATION COMPLETE]');
          return (
            <div
              key={idx}
              className={`flex items-start gap-2 ${
                isAlert ? 'text-[#CB4B16] font-bold' : isComplete ? 'text-[#859900] font-bold' : 'text-[#073642]'
              }`}
            >
              <span className="text-[#93A1A1] shrink-0">&gt;</span>
              <span>{log}</span>
            </div>
          );
        })}

        {isRunning && (
          <div className="flex items-center gap-2 text-[#268BD2] animate-pulse">
            <span className="text-[#93A1A1]">&gt;</span>
            <span>Simulating tensor pipeline...</span>
          </div>
        )}
      </div>

      {/* Result Banner */}
      {completed && outputSummary && (
        <div className="p-4 bg-[#FDF6E3] border-t border-[#073642]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#859900]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-mono text-[#002B36]">{outputSummary}</span>
          </div>
          <span className="text-[11px] font-mono text-[#859900] whitespace-nowrap bg-[#859900]/10 px-2.5 py-0.5 rounded border border-[#859900]/30 font-bold">
            SIMULATION VERIFIED
          </span>
        </div>
      )}
    </div>
  );
};
