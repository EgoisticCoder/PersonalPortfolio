import React, { useState } from 'react';
import { Project } from '../types';
import { Layers, Terminal, ShieldAlert, Cpu } from 'lucide-react';

interface ArchitectureInspectorProps {
  selectedProject?: Project | null;
}

interface NodeDetail {
  id: string;
  title: string;
  sub: string;
  latency: string;
  protocol: string;
  fallback: string;
  codeSnippet: string;
}

const ARCHITECTURES: Record<string, {
  name: string;
  subtitle: string;
  nodes: NodeDetail[];
}> = {
  'studymate-ai': {
    name: 'StudyMate AI — Knowledge Graph & Streaming Voice Architecture',
    subtitle: 'Neo4j Behavioral Engine + Sarvam Bulbul V3 Audio + Groq Llama-3 (Sarvam Startup Program)',
    nodes: [
      {
        id: 'study-1',
        title: 'Step 1: Multimodal Student Ingest',
        sub: 'Handwritten Exam Sheets & Voice Input',
        latency: '~ 180ms OCR',
        protocol: 'Sarvam Document Digitization API',
        fallback: 'Auto-corrects skew and contrast on mobile phone camera scans of ICSE/CBSE answer sheets',
        codeSnippet: `// Document OCR & Handwriting Ingest
const scanResult = await sarvam.digitizeDocument({
  file: studentSheetImage,
  target_board: 'ICSE_CLASS_9',
  mode: 'HANDWRITTEN_MATH_SCIENCE',
});`,
      },
      {
        id: 'study-2',
        title: 'Step 2: Neo4j Behavioral Knowledge Graph',
        sub: 'Dynamic Mastery & Memory Decay Traversal',
        latency: '~ 45ms Cypher query',
        protocol: 'Bolt Protocol / Neo4j Graph DB',
        fallback: 'Local node caching for offline revisions; updates spaced repetition curves',
        codeSnippet: `// Cypher Mastery & Bottleneck Traversal
MATCH (s:Student {id: $studentId})-[r:KNOWS]->(c:Concept)
WHERE r.masteryScore < 0.65 OR (datetime().epochMillis - r.lastReviewed) > 86400000 * 3
RETURN c.conceptId, c.prerequisites ORDER BY r.masteryScore ASC LIMIT 3`,
      },
      {
        id: 'study-3',
        title: 'Step 3: Sub-Second Curricular RAG',
        sub: 'Groq Llama-3 70B Pedagogical Reasoning',
        latency: '< 380ms TTFT',
        protocol: 'Low-Latency LPU Engine (Groq)',
        fallback: 'Pre-indexed textbook chunk cache if rate limits engage',
        codeSnippet: `// Groq Low-Latency Concept Synthesizer
const explanation = await groq.chat.completions.create({
  model: 'llama3-70b-8192',
  messages: [{ role: 'system', content: PROMPT_SCAFFOLDING }, { role: 'user', content: query }],
  temperature: 0.2,
});`,
      },
      {
        id: 'study-4',
        title: 'Step 4: Sarvam Bulbul V3 Voice Stream',
        sub: 'Bilingual Streaming Hindi/English Audio',
        latency: '< 150ms audio chunk',
        protocol: 'Streaming WebSocket / PCM 16kHz',
        fallback: 'Falls back to on-device TTS engine if bandwidth drops below 20kbps',
        codeSnippet: `// Sarvam Bulbul V3 Streaming Audio
const ws = new WebSocket('wss://api.sarvam.ai/v1/speech-streaming');
ws.send(JSON.stringify({ text: explanationChunk, voice: 'bulbul:v3', language: 'hi-IN' }));`,
      },
    ],
  },
  'raksha': {
    name: 'RAKSHA — 5-Layer Offline Degradation Stack',
    subtitle: 'Zero-Infrastructure Emergency Mesh & 4 Autonomous Coordination Agents',
    nodes: [
      {
        id: 'layer-1',
        title: 'Layer 1: Local Area WebSockets',
        sub: 'Primary High-Bandwidth Ingest',
        latency: '< 15ms',
        protocol: 'WSS / LAN Multi-cast',
        fallback: 'Auto-switches to Layer 2 BLE Mesh on packet heartbeat loss (>3.2s)',
        codeSnippet: `// Layer 1 Heartbeat Monitor
const monitorLAN = async () => {
  if (!wsClient.isAlive()) {
    console.warn('[RAKSHA Core] LAN gateway unseated. Tripping Layer 2 BLE Mesh fallback...');
    await meshManager.broadcastSOS(packet);
  }
};`,
      },
      {
        id: 'layer-2',
        title: 'Layer 2: Bluetooth LE Peer Mesh',
        sub: 'Ad-Hoc Victim & Responder Relaying',
        latency: '~ 45ms per hop',
        protocol: 'BLE 5.0 Mesh Advertising (Encrypted)',
        fallback: 'Hops across survivor phones; triggers Layer 3 LoRa if base station unreachable',
        codeSnippet: `// BLE Mesh Broadcast with TTL countdown
const packet = {
  sosId: 'SOS_KOL_492',
  coords: { lat: 22.5726, lon: 88.3639 },
  triageSeverity: 'HIGH_BLEEDING',
  ttl: 5,
};
await bleMesh.advertisePacket(packet);`,
      },
      {
        id: 'layer-3',
        title: 'Layer 3: LoRa 868MHz Long-Range Packets',
        sub: '10km+ Long Distance Radio Uplink',
        latency: '~ 320ms',
        protocol: 'LoRa SPI Packet Radio (Semtech SX1276)',
        fallback: 'Transmits low-bitrate coordinates directly to mountain/hilltop repeater hubs',
        codeSnippet: `// LoRa Packet Frame
lora.setFrequency(868.1E6);
lora.beginPacket();
lora.write(compactBinaryTriage(victimPayload));
lora.endPacket();`,
      },
      {
        id: 'layer-4',
        title: 'Layer 4: Autonomous Coordination Agents',
        sub: 'BullMQ + Redis 4-Agent Triad',
        latency: '< 250ms allocation',
        protocol: 'Distributed Task Queue (Redis Core)',
        fallback: 'Local queueing if district command server fails; agents self-arbitrate',
        codeSnippet: `// 4-Agent Emergency Task Arbiter
const triageAgent = new AutonomousAgent({
  role: 'Resource Allocator',
  graphContext: neo4jDisasterZones,
  priorityRule: 'HAZARD_REROUTE_OPTIMAL',
});
await triageAgent.dispatchConvoys();`,
      },
      {
        id: 'layer-5',
        title: 'Layer 5: Neo4j Dynamic Evacuation Graph',
        sub: 'Topological Zone Mapping & Hazard Pathing',
        latency: '~ 80ms graph query',
        protocol: 'Bolt Cypher / Offline SQLite Replica',
        fallback: 'Caches topological paths in local SQLite; syncs delta when reconnected',
        codeSnippet: `// Cypher Dynamic Obstacle Pathfinding
MATCH (start:SafeZone {id: $origin}), (target:VictimCluster {id: $dest})
WHERE NOT (start)-[:FLOODED_BY]->()
RETURN shortestPath((start)-[:ROUTABLE*]-(target)) AS safeCorridor`,
      },
    ],
  },
  'dokai-v2': {
    name: 'Dokai V2 — Two-Pass Medical AI Pipeline',
    subtitle: 'MedGemma 4B Optical Vision + Meta LLaMA 3 Clinical Reasoning',
    nodes: [
      {
        id: 'dokai-1',
        title: 'Step 1: Multimodal Intake & Preprocessing',
        sub: 'High-Res Optical Document Clean-Up',
        latency: '~ 110ms',
        protocol: 'OpenCV Bilateral Filtering + CLAHE',
        fallback: 'Auto-enhances shadowed camera phone captures of hospital bills',
        codeSnippet: `// Optical Document Normalization
def preprocess_medical_image(img_raw):
    gray = cv2.cvtColor(img_raw, cv2.COLOR_BGR2GRAY)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    return clahe.apply(gray)`,
      },
      {
        id: 'dokai-2',
        title: 'Step 2: MedGemma 4B Feature Extraction',
        sub: 'Pass 1: Clinical Visual Entity Recognition',
        latency: '~ 620ms on Colab / GPU',
        protocol: 'PyTorch bfloat16 Vision Backbone',
        fallback: 'Extracts itemized billing codes, MRP caps, and lab assay values',
        codeSnippet: `// Pass 1: MedGemma 4B Vision Inference
tokens = medgemma_processor(images=clean_img, text=PROMPT_EXTRACT, return_tensors="pt")
with torch.inference_mode():
    extracted_entities = medgemma_model.generate(**tokens)`,
      },
      {
        id: 'dokai-3',
        title: 'Step 3: LLaMA 3 Differential Reasoning Core',
        sub: 'Pass 2: Audit Engine & Fraud Cross-Check',
        latency: '~ 340ms (Groq LPU)',
        protocol: 'Constrained JSON Schema Output',
        fallback: 'Cross-checks items against National Pharmaceutical Pricing Authority (NPPA) price caps',
        codeSnippet: `// Pass 2: Bill Discrepancy & Fraud Detector
audit_prompt = f"Cross-examine extracted bill: {extracted_entities} against NPPA ceiling prices."
discrepancies = llama_reasoner.audit(audit_prompt)
# Flags overcharging (e.g. Syringe billed at 15x MRP)`,
      },
      {
        id: 'dokai-4',
        title: 'Step 4: Sarvam Bulbul Multimodal Voice',
        sub: 'Regional Hindi/Bengali/English Synthesis',
        latency: '< 180ms streaming TTFT',
        protocol: 'Sarvam Audio Streaming WebSocket',
        fallback: 'Returns accessible voice playback for patients unable to read English reports',
        codeSnippet: `// Sarvam Voice Explanation Stream
const audioStream = await sarvam.synthesizeStreaming({
  text: auditReport.plainSummary,
  target_language_code: 'hi-IN',
  model: 'bulbul:v3',
});`,
      },
    ],
  },
  'aria-rover': {
    name: 'ARIA Rover — 9-Model Edge Architecture',
    subtitle: 'Radxa Cubie A7Z (NPU) + Arduino UNO Q (Deterministic Motion)',
    nodes: [
      {
        id: 'aria-1',
        title: 'Stereo Optical & Depth Ingest',
        sub: 'Dual Synchronized MIPI CSI Sensors',
        latency: '30 FPS continuous',
        protocol: 'V4L2 Video Subsystem (Linux)',
        fallback: 'Hardware auto-exposure for harsh rubble / subterranean shadows',
        codeSnippet: `// Dual CSI Ingest Pipeline
gst-launch-1.0 v4l2src device=/dev/video0 ! video/x-raw,width=640,height=480 ! appsink`,
      },
      {
        id: 'aria-2',
        title: 'Radxa Cubie A7Z NPU Inference',
        sub: 'YOLOv8 Quantized Object & Debris Detector',
        latency: '22ms per frame (45 FPS)',
        protocol: 'NPU Hardware Acceleration (INT8)',
        fallback: 'Zero cloud dependency; runs completely disconnected from internet',
        codeSnippet: `// NPU Tensor Execution
auto input_tensor = preprocess(frame);
npu_engine->run({input_tensor}, {output_tensor});
auto obstacles = parse_yolo_detections(output_tensor);`,
      },
      {
        id: 'aria-3',
        title: 'Custom Traversability Estimation Net',
        sub: 'Proprietary Rubble Elevation Model',
        latency: '18ms per slice',
        protocol: 'Edge CNN Spatial Matrix',
        fallback: 'Classifies soil, gravel, concrete slabs into risk costmaps',
        codeSnippet: `// Rubble Traversability Costmap Calculation
costmap = traversability_net.forward(depth_slice)
path_safe = np.all(costmap < THRESHOLD_TIP_OVER)`,
      },
      {
        id: 'aria-4',
        title: 'Arduino UNO Q Hardware Execution',
        sub: 'Hard Real-Time PID Motor Controllers',
        latency: '< 2ms determinism',
        protocol: 'UART Serial Bus (115200 Baud)',
        fallback: 'Hardware watchdog immediately cuts motor power if heartbeat drops',
        codeSnippet: `// Arduino Hardware Watchdog
void loop() {
  if (millis() - lastSbcHeartbeat > 200) {
    emergencyBrake(); // Protect mechanical gear train
  }
  updatePIDMotors();
}`,
      },
    ],
  },
  'military-vision-car': {
    name: 'Military Vision Car — Hybrid Two-Stage Edge Reconnaissance',
    subtitle: 'ESP32-CAM (20+ Roboflow Models) + Gemini AI Verifier + GPS Telemetry',
    nodes: [
      {
        id: 'mil-1',
        title: 'Optical Stream & Sensor Frame Capture',
        sub: 'ESP32-CAM OV2640 Image Pipeline',
        latency: '20 FPS @ 800x600',
        protocol: 'FreeRTOS Camera DMA buffer',
        fallback: 'Dynamic resolution reduction under RF degradation',
        codeSnippet: `// ESP32-CAM Frame Grabber
camera_fb_t * fb = esp_camera_fb_get();
if (!fb) { Serial.println("Camera capture failed"); return; }`,
      },
      {
        id: 'mil-2',
        title: 'Edge Object Detection (20+ Models)',
        sub: 'Roboflow Edge Model Inference (90%+ Acc)',
        latency: '~ 42ms on local micro-hub',
        protocol: 'Quantized MobileNet/YOLO',
        fallback: 'Runs Non-Maximum Suppression (NMS) to prune duplicate bounding boxes',
        codeSnippet: `// NMS Filtering on Edge Bounding Boxes
filtered_boxes = non_max_suppression(raw_detections, iou_thresh=0.45, conf_thresh=0.7)`,
      },
      {
        id: 'mil-3',
        title: 'Two-Stage Gemini AI Semantic Verifier',
        sub: 'Eliminates False-Positive Recon Detections',
        latency: '~ 400ms cloud verification',
        protocol: 'Multimodal Gemini Flash Endpoint',
        fallback: 'If cloud unreachable, relies strictly on high-confidence edge NMS',
        codeSnippet: `// Second-Stage Verification
const verification = await gemini.verifyTarget({
  crop: croppedTarget,
  context: "Reconnaissance perimeter audit",
});
if (verification.isConfirmed) tagGPSWaypoint(coords);`,
      },
      {
        id: 'mil-4',
        title: 'Encrypted Telemetry & Motor Actuation',
        sub: 'NEO-6M GPS Tagging & L298N Motor Driver',
        latency: '< 10ms local bus',
        protocol: 'Encrypted WebSockets + Hardware PWM',
        fallback: 'Failsafe auto-stop if operator control signal lost for >1000ms',
        codeSnippet: `// GPS Telemetry Packet Stream
ws.send(JSON.stringify({ lat: gps.latitude, lon: gps.longitude, targets: verifiedTargets }));`,
      },
    ],
  },
  'forma-infra': {
    name: 'Forma & QiFu-v1 — Vision-Language UI/UX Engineering Stack',
    subtitle: 'Fine-Tuned Qwen3-VL-4B via QLoRA + Automated Browser Testing Engine',
    nodes: [
      {
        id: 'forma-1',
        title: 'Headless DOM & Screenshot Ingest',
        sub: 'Multi-Viewport Automated Browser Capture',
        latency: '~ 250ms render',
        protocol: 'Playwright CDP / Headless Chromium',
        fallback: 'Fallbacks to raw HTML upload if URL target is behind firewall',
        codeSnippet: `// Multi-Viewport Capture Pipeline
await page.setViewportSize({ width: 1440, height: 900 });
const screenshot = await page.screenshot({ fullPage: true });`,
      },
      {
        id: 'forma-2',
        title: 'QiFu-v1 Fine-Tuned QLoRA Adapter',
        sub: 'Qwen3-VL-4B Visual Defect Diagnostics',
        latency: '~ 520ms inference',
        protocol: 'Hugging Face PEFT / 4-bit Quantization',
        fallback: 'Identifies layout anti-patterns, contrast violations, and broken flex geometry',
        codeSnippet: `// QiFu-v1 Adapter Evaluation
outputs = qifu_model.generate(
    **processor(images=screenshot, text="Identify accessibility & responsive defects:"),
    max_new_tokens=512
)`,
      },
      {
        id: 'forma-3',
        title: 'RAG WCAG 2.1 AA Knowledge Engine',
        sub: 'Standards Grounding & Design Pattern Search',
        latency: '~ 65ms vector query',
        protocol: 'ChromaDB / Vector Embeddings',
        fallback: 'Supplies verified accessible component alternatives',
        codeSnippet: `// Standards Validation Query
const standardRules = await vectorDB.query({ text: detectedDefect.category });`,
      },
      {
        id: 'forma-4',
        title: 'Automated Remediation Code Synthesizer',
        sub: 'Tailwind CSS & Semantic HTML Patch',
        latency: '< 200ms streaming',
        protocol: 'AST Transformation / Code Output',
        fallback: 'Direct CSS diff ready for developer copy-paste',
        codeSnippet: `// Output CSS Patch Diff
const diffPatch = generateUnifiedDiff(originalHTML, accessibleHTML);`,
      },
    ],
  },
  'neopet': {
    name: 'NeoPet — AI Companion & Economy Stack (Built in ~1.5h)',
    subtitle: 'Groq LLaMA-3 + ElevenLabs Streaming Audio + Firebase Realtime State',
    nodes: [
      {
        id: 'neo-1',
        title: 'Contextual Chat & Sentiment Matrix',
        sub: 'Groq LLaMA-3 Sub-Second Companion Loop',
        latency: '< 280ms TTFT',
        protocol: 'Groq Cloud LPU',
        fallback: 'Caches emotional states in localStorage if connection stutters',
        codeSnippet: `// Emotion State Matrix Calculation
const petReply = await groq.chat.completions.create({
  model: 'llama3-8b-8192',
  messages: [{ role: 'system', content: PET_PERSONALITY_PROMPT }, ...chatHistory],
});`,
      },
      {
        id: 'neo-2',
        title: 'ElevenLabs Voice Synthesis',
        sub: 'Expressive Audio Generation',
        latency: '< 200ms audio chunk',
        protocol: 'ElevenLabs Low-Latency Stream',
        fallback: 'Browser Web Speech API fallback for zero-latency instant response',
        codeSnippet: `// ElevenLabs Pet Voice Stream
const audio = await elevenlabs.generate({ voice: 'Bella', text: petReply.content });`,
      },
      {
        id: 'neo-3',
        title: 'Progression Economy & Mini-Games',
        sub: 'XP Balancing, Hunger Decay & Interactive Canvas',
        latency: '60 FPS Canvas loop',
        protocol: 'Firebase Realtime DB',
        fallback: 'Offline IndexedDB state synchronization',
        codeSnippet: `// Pet State Progression
updatePetState({ xp: currentXp + 50, hunger: Math.max(0, hunger - 10), happiness: happiness + 15 });`,
      },
    ],
  },
  'moi-narration': {
    name: 'Moi — Real-Time Visual Perception & Audio Narration',
    subtitle: 'Meta DINOv3 Bounding-Box Detection + Gemini Live Multimodal API',
    nodes: [
      {
        id: 'moi-1',
        title: 'Video Stream Ingest & Framing',
        sub: 'High-Res Optical Camera Feed',
        latency: '30 FPS continuous',
        protocol: 'RTSP / WebRTC Stream',
        fallback: 'Dynamic downsampling to maintain fluid conversational cadence',
        codeSnippet: `// Video Frame Buffer
cv2.VideoCapture(stream_url).read()`,
      },
      {
        id: 'moi-2',
        title: 'DINOv3 Visual Segmentation',
        sub: 'Self-Supervised Feature Representation',
        latency: '~ 35ms per keyframe',
        protocol: 'PyTorch CUDA Tensor Engine',
        fallback: 'Extracts dense semantic descriptors across dynamic foreground actors',
        codeSnippet: `// DINOv3 Feature Vector Extraction
features = dinov3_backbone(frame_tensor)`,
      },
      {
        id: 'moi-3',
        title: 'Gemini Live Multimodal Narration',
        sub: 'Bidirectional Real-Time Audio Narration',
        latency: '< 180ms conversational loop',
        protocol: 'Gemini Live Multimodal WebSocket',
        fallback: 'Text-only narration fallback under low-bandwidth networks',
        codeSnippet: `// Bidirectional Gemini Live Audio Stream
liveSession.sendRealtimeMedia({ data: jpegBuffer, mimeType: "image/jpeg" });`,
      },
    ],
  },
  'agroxpert': {
    name: 'AgroXpert — Autonomous Farm Rover Stack (Smart Bengal #4)',
    subtitle: 'ESP32 Sensor Core + Onboard Leaf Blight Net + LoRa 433MHz Telemetry',
    nodes: [
      {
        id: 'agro-1',
        title: 'Multi-Sensor Canopy & Soil Probe',
        sub: 'NPK Sensors + Optical Macro Lens',
        latency: '< 20ms read interval',
        protocol: 'RS485 Modbus / I2C Bus',
        fallback: 'Median filter suppresses noise spikes from wet irrigation mud',
        codeSnippet: `// NPK Soil Data Reading
float nitrogen = readModbusRegister(REG_N);
float moisture = analogRead(SOIL_PIN);`,
      },
      {
        id: 'agro-2',
        title: 'On-Device Crop Pathogen Net',
        sub: 'YOLO Edge Plant Disease Classifier',
        latency: '38ms per leaf scan',
        protocol: 'ESP32 / TFLite Micro',
        fallback: 'Categorizes blight severity (Mild, Moderate, Severe)',
        codeSnippet: `// TFLite Leaf Blight Inference
tflite_interpreter->Invoke();
auto blightScore = tflite_interpreter->output(0)->data.f[0];`,
      },
      {
        id: 'agro-3',
        title: 'Long-Range LoRa Telemetry Uplink',
        sub: '433MHz Agricultural Packet Radio',
        latency: '~ 400ms broadcast',
        protocol: 'LoRa P2P Packet Protocol',
        fallback: 'Stores sensor records in SPI flash if base station signal is blocked by tall canopy',
        codeSnippet: `// LoRa Farm Packet
LoRa.beginPacket();
LoRa.write(soilAndPathogenPayload);
LoRa.endPacket();`,
      },
    ],
  },
};

export const ArchitectureInspector: React.FC<ArchitectureInspectorProps> = ({ selectedProject }) => {
  const [activeArchKey, setActiveArchKey] = useState<string>(
    selectedProject && selectedProject.id in ARCHITECTURES ? selectedProject.id : 'studymate-ai'
  );
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  React.useEffect(() => {
    if (selectedProject && selectedProject.id in ARCHITECTURES) {
      setActiveArchKey(selectedProject.id);
      setSelectedNodeIndex(0);
    }
  }, [selectedProject]);

  const activeArch = ARCHITECTURES[activeArchKey] || ARCHITECTURES['studymate-ai'];
  const activeNode = activeArch.nodes[selectedNodeIndex] || activeArch.nodes[0];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[#073642]/12 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 pb-6 border-b border-[#073642]/15">
          <div>
            <div className="text-xs font-mono text-[#586E75] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#2AA198]" />
              <span>02 / System Schematics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#002B36] font-serif tracking-tight text-balance">
              Hardware & Model Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#586E75] max-w-2xl font-sans">
              Interactive schematics for all primary systems — inspect bus protocols, latency budgets, failover policies, and live production code invariants.
            </p>
          </div>

          <div className="text-xs font-mono text-[#586E75] bg-[#EEE8D5] px-3 py-1.5 rounded border border-[#073642]/10 whitespace-nowrap">
            <span>{Object.keys(ARCHITECTURES).length} Interactive Schematics Ready</span>
          </div>
        </div>

        {/* Horizontal System Selector Pill Bar */}
        <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-mono">
          {[
            { id: 'studymate-ai', label: 'StudyMate AI' },
            { id: 'dokai-v2', label: 'Dokai V2 (Medical)' },
            { id: 'raksha', label: 'RAKSHA (Mesh)' },
            { id: 'aria-rover', label: 'ARIA Rover (9-Model)' },
            { id: 'military-vision-car', label: 'Military Vision Car' },
            { id: 'forma-infra', label: 'Forma & QiFu-v1' },
            { id: 'neopet', label: 'NeoPet (1.5h Build)' },
            { id: 'moi-narration', label: 'Moi (DINOv3)' },
            { id: 'agroxpert', label: 'AgroXpert' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveArchKey(item.id);
                setSelectedNodeIndex(0);
              }}
              className={`px-3 py-1.5 rounded whitespace-nowrap transition-all ${
                activeArchKey === item.id
                  ? 'bg-[#073642] text-[#FDF6E3] font-semibold shadow-sm'
                  : 'text-[#586E75] hover:text-[#002B36] hover:bg-[#EEE8D5]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Active Title Banner */}
        <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EEE8D5] p-4 rounded-lg border border-[#073642]/10">
          <div>
            <h3 className="text-xl font-serif font-bold text-[#002B36]">
              {activeArch.name}
            </h3>
            <p className="text-xs font-serif italic text-[#586E75] mt-0.5">
              {activeArch.subtitle}
            </p>
          </div>
          <div className="text-xs font-mono text-[#586E75] whitespace-nowrap">
            Stage <span className="text-[#002B36] font-bold">{selectedNodeIndex + 1}</span> of {activeArch.nodes.length}
          </div>
        </div>

        {/* Visual Pipeline Sequence */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {activeArch.nodes.map((node, idx) => {
            const isSelected = selectedNodeIndex === idx;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeIndex(idx)}
                className={`text-left p-4 rounded-lg border transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#073642] text-[#FDF6E3] border-[#073642] shadow-sm'
                    : 'bg-[#EEE8D5] text-[#073642] border-[#073642]/10 hover:border-[#073642]/30 hover:bg-[#EAE2CE]'
                }`}
              >
                <div className={`flex items-center justify-between text-[11px] font-mono mb-2 ${
                  isSelected ? 'text-[#2AA198]' : 'text-[#657B83]'
                }`}>
                  <span>STAGE 0{idx + 1}</span>
                  <span className="font-mono-tabular">{node.latency}</span>
                </div>
                <div className={`text-sm font-serif font-bold line-clamp-1 ${
                  isSelected ? 'text-[#FDF6E3]' : 'text-[#002B36]'
                }`}>
                  {node.title.replace(/^Layer \d+: |^Step \d+: /, '')}
                </div>
                <div className={`text-xs mt-1 line-clamp-1 ${
                  isSelected ? 'text-[#93A1A1]' : 'text-[#586E75]'
                }`}>
                  {node.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Inspector Detail Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#EEE8D5] border border-[#073642]/15 rounded-lg p-6">
          {/* Spec Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="text-[11px] font-mono text-[#586E75] uppercase tracking-wider">
                Node Specification
              </div>
              <h4 className="text-xl font-serif font-bold text-[#002B36] mt-1">
                {activeNode.title}
              </h4>
              <p className="text-xs text-[#586E75] font-sans mt-1">
                {activeNode.sub}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#FDF6E3] p-3 rounded border border-[#073642]/10">
                <div className="text-[10px] font-mono text-[#657B83] uppercase">Latency Budget</div>
                <div className="text-[#268BD2] font-mono font-bold text-sm mt-0.5 font-mono-tabular">
                  {activeNode.latency}
                </div>
              </div>
              <div className="bg-[#FDF6E3] p-3 rounded border border-[#073642]/10">
                <div className="text-[10px] font-mono text-[#657B83] uppercase">Protocol / Bus</div>
                <div className="text-[#002B36] font-mono text-xs mt-0.5 truncate" title={activeNode.protocol}>
                  {activeNode.protocol}
                </div>
              </div>
            </div>

            <div className="bg-[#FDF6E3] p-4 rounded border-l-4 border-[#CB4B16]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#CB4B16] mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Failover & Degradation Invariant</span>
              </div>
              <p className="text-xs text-[#073642] leading-relaxed font-sans">
                {activeNode.fallback}
              </p>
            </div>
          </div>

          {/* Code Invariant Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#073642]/10">
              <span className="text-xs font-mono text-[#586E75] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#2AA198]" />
                <span>Production Implementation Pattern</span>
              </span>
              <span className="text-[11px] font-mono text-[#657B83]">TypeScript / Python / C++</span>
            </div>
            <pre className="bg-[#FDF6E3] p-4 rounded border border-[#073642]/10 text-xs font-mono text-[#073642] overflow-x-auto leading-relaxed max-h-[260px]">
              <code>{activeNode.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
