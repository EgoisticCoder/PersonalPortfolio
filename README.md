# Abhinav Gupta — EgoisticCoder

> **AI/ML Research Engineer (in training) · Robotics & Embedded Systems · Full-Stack AI Products**  
> *14 years old, based in Kolkata, India. Building production-grade intelligent systems end-to-end: model training, edge deployment, hardware integration, and live interfaces. Solo.*

📍 **Kolkata, India** · 🎓 **M. P. Birla Foundation Higher Secondary School (Class 9, ICSE)**  
🌐 **Portfolio**: [abhinav-gupta.vercel.app](https://abhinav-gupta.vercel.app) · ✉️ **Email**: [egoisticcoderx@gmail.com](mailto:egoisticcoderx@gmail.com)  
🔗 **LinkedIn**: [linkedin.com/in/egoistic-coderx](https://linkedin.com/in/egoistic-coderx) · 🐙 **GitHub**: [github.com/EgoisticCoder](https://github.com/EgoisticCoder) · 🤗 **Hugging Face**: [huggingface.co/EgoisticCoder](https://huggingface.co/EgoisticCoder)

---

## 🧭 Executive Roles & Recognition

- **Head of Department, AI/ML — HyperNova Technology**  
  Leading the artificial intelligence and machine learning function: overarching technical strategy, model pipeline architecture, project direction, and departmental recruitment.
- **Selected — Sarvam AI Startup Program**  
  *StudyMate AI* accepted into Sarvam AI's startup program; completed intensive onboarding and integrated Sarvam's STT/TTS Streaming (Bulbul V3), Text Translation, and Document Digitization APIs into production.
- **Featured 3x in *The Telegraph* — "The Young Metro"**  
  Profiled across three editions of the leading national daily for student-built artificial intelligence: covered for building edTech systems (*StudyMate AI*) and autonomous disaster rovers (*ARIA*) at age 14.
- **Member — Claude Community India**  
  Active collaborator in the premier Indian Claude research and developer community on agent orchestration and offline degradation systems.
- **Won 10+ Events & Hackathons** across AI/ML, Web Development, and Autonomous Robotics.
- **36+ Shipped Projects** across IoT, embedded hardware, computer vision, AI/ML pipelines, and full-stack software.

---

## 🏆 Verified Competitions & Podiums

| Event | Result | Domain | Project & Highlights |
|---|---|---|---|
| **X Celsior '26 — X-Hack** | 🥇 **1st Place** | Rapid AI Hackathon | **NeoPet** — Virtual pet companion with Groq LLM sentiment chat, ElevenLabs streaming voice, XP/leveling economy, and 3 mini-games. Built from scratch in ~1.5 hours. |
| **exe.BIT '25** | 🥇 **1st Place** | Web Development | Next-generation web platform: *"Towards the techade, with values well-laid"*. Evaluated for software architecture, responsive performance, and deep-tech polish. |
| **X Celsior '26 — X-Botics** | 🥈 **2nd Place** | Autonomous Robotics | **Autonomous Rescue & Delivery Bot** — Custom hardware chassis, obstacle avoidance, and precision payload drop mechanisms for disaster zones. |
| **MPBlitz '25** | 🥈 **2nd Place** | Computer Vision / Embedded | **Military Vision Car** — ESP32-CAM surveillance car with 20+ Roboflow models (90%+ acc), two-stage verification (NMS + Gemini AI), and GPS telemetry. |
| **Smart Bengal Hackathon '26** | 🏅 **4th Place (Statewide)** | Open Innovation | **AgroXpert** — Autonomous precision rover for crop health telemetry, leaf blight diagnosis, and soil NPK monitoring. |

---

## 🚀 Shipped Systems & Deep-Tech Projects

### 1. Dokai V2 — Dual-Pass Clinical Vision & Medical Reasoning Pipeline
- **Overview**: Medical AI system for hospital bill auditing (fraud/overcharging detection), lab report analysis, and clinical symptom checking.
- **Architecture**:
  - *Pass 1 (Vision)*: Google MedGemma 4B transforms unstructured lab reports and bills into structured clinical vectors.
  - *Pass 2 (Reasoning)*: Meta LLaMA 3 differential engine cross-references National Pharmaceutical Pricing Authority (NPPA) price ceilings and drug interactions.
  - *Voice Synthesis*: Sarvam AI Bulbul V3 streaming voice audio in regional Indic languages for accessibility.
- **Platforms**: Desktop, Android native client, and Colab GPU backend.

### 2. [StudyMate AI](https://github.com/EgoisticCoder/StudyMate_Hackazrds-26.git) — Adaptive EdTech with Neo4j Behavioral Knowledge Graph
- **Status**: Accepted into the **Sarvam AI Startup Program**.
- **Overview**: Adaptive ICSE/CBSE learning assistant for Classes 6–12.
- **Architecture**:
  - *Behavioral Graph*: Neo4j graph database tracking individual student concept mastery, cognitive bottlenecks, and spaced repetition decay curves.
  - *Sub-Second RAG*: Groq Llama-3 70B retrieval engine (<450ms TTFT) aligned with ICSE/CBSE curricula.
  - *Computer Vision Grading*: Automated OCR evaluation of handwritten student exam sheets.
  - *Voice Tutoring*: Streaming bilingual Hindi/English explanations powered by Sarvam Bulbul V3.

### 3. [RAKSHA](https://github.com/EgoisticCoder/RAKSHA.git) — 5-Layer Offline Degradation Disaster-Response Platform
- **Repository**: [github.com/EgoisticCoder/RAKSHA.git](https://github.com/EgoisticCoder/RAKSHA.git)
- **Overview**: Mission-critical emergency system designed for disaster scenarios where power grids, internet, and cellular towers have completely collapsed.
- **Degradation Stack**:
  - *Layer 1*: Local Area WebSockets (LAN multi-cast).
  - *Layer 2*: Bluetooth LE Peer Mesh (ad-hoc victim/responder relay with TTL hops).
  - *Layer 3*: LoRa 868MHz packet radio (10km+ long-distance uplink).
  - *Layer 4*: 4 Autonomous Coordination Agents (BullMQ + Redis: Route Hazard Resolver, Resource Triage Allocator, Medical Dispatcher, Network Arbiter).
  - *Layer 5*: Neo4j dynamic evacuation graph (topological flood zone routing + offline SQLite replica).

### 4. [ARIA Rover](https://github.com/EgoisticCoder/ARIA_Robotics.git) — Autonomous Disaster Rover with 9-Model Edge AI Stack
- **Repository**: [github.com/EgoisticCoder/ARIA_Robotics.git](https://github.com/EgoisticCoder/ARIA_Robotics.git)
- **Hardware**: Radxa Cubie A7Z single-board computer (NPU INT8 accelerator) + Arduino UNO Q.
- **Overview**: Dual-compute edge robotics engineered for rugged, subterranean disaster debris.
- **Architecture**:
  - 9-model on-device inference pipeline running quantized YOLOv8 at 45+ FPS on NPU.
  - Custom dataset collected and annotated for rubble traversability costmap estimation.
  - Zero cloud dependency — 100% autonomous edge decision-making.

### 5. Military Vision Car — ESP32-CAM Surveillance Reconnaissance Rover
- **Hardware**: ESP32-CAM, NEO-6M GPS, L298N Motor Driver, Li-Ion 18650 pack.
- **Pipeline**: 20+ Roboflow-trained detection models (90%+ accuracy) with two-stage verification (Edge Non-Maximum Suppression + Gemini AI false-positive elimination) and real-time GPS coordinate streaming over encrypted WebSockets.
- **Accolade**: 🥈 2nd Place — MPBlitz '25.

### 6. [Forma & QiFu-v1](https://github.com/EgoisticCoder/Project_Infra) — Vision-Language UI/UX Engineering Assistant
- **Repository**: [github.com/EgoisticCoder/Project_Infra](https://github.com/EgoisticCoder/Project_Infra)
- **Models**: Fine-tuned Qwen3-VL-4B via QLoRA; published open-weight *QiFu-v1* adapter and dataset on Hugging Face.
- **Pipeline**: Automated headless browser testing identifying accessibility defects, responsive breakage, and contrast violations, synthesizing direct Tailwind CSS remediation patches.

### 7. [NeoPet](https://github.com/EgoisticCoder/NeoPet-Virtual-Pet-Web-App.git) — AI-Powered Conversational Virtual Pet
- **Repository**: [github.com/EgoisticCoder/NeoPet-Virtual-Pet-Web-App.git](https://github.com/EgoisticCoder/NeoPet-Virtual-Pet-Web-App.git)
- **Build Time**: Built from scratch in ~1.5 hours during X Celsior '26 X-Hack.
- **Stack**: Groq LLaMA-3 real-time emotion engine, ElevenLabs streaming voice synthesis, Firebase Realtime state, XP progression economy, and 3 interactive canvas mini-games.
- **Accolade**: 🥇 1st Place Champion — X-Hack.

### 8. Moi — Real-Time Visual Perception & Narration Engine
- **Overview**: An AI system that sees and speaks about dynamic scenes in real time.
- **Stack**: Meta DINOv3 self-supervised vision segmentation backbone paired with Gemini Live bidirectional multimodal streaming audio narration.

### 9. [HANUMAN](https://github.com/EgoisticCoder/Hanuman_Basic.git) — Autonomous Voice Assistant on Raspberry Pi Zero 2W
- **Repository**: [github.com/EgoisticCoder/Hanuman_Basic.git](https://github.com/EgoisticCoder/Hanuman_Basic.git)
- **Hardware**: Raspberry Pi Zero 2W (512MB RAM), I2S digital microphone array, PAM8403 DAC amplifier.
- **Pipeline**: On-device neural wake-word detection, ElevenLabs low-latency voice synthesis, and real-time live web query parsing.

### 10. [AgroXpert](https://github.com/EgoisticCoder/AgroXpert.git) — Autonomous Agricultural Precision Rover
- **Repository**: [github.com/EgoisticCoder/AgroXpert.git](https://github.com/EgoisticCoder/AgroXpert.git)
- **Hardware**: ESP32, multi-spectral optical camera, RS485 soil NPK sensors, LoRa 433MHz telemetry.
- **Pipeline**: Edge plant disease detection (YOLO leaf blight classifier), soil conductivity telemetry, and autonomous crop row navigation.
- **Accolade**: 🏅 4th Place Statewide — Smart Bengal Hackathon '26.

---

## 🛠️ Hardware & Technical Stack

### Edge Silicon & Microcontrollers
- **Radxa Cubie A7Z**: NPU tensor acceleration, INT8 quantization, MIPI CSI-2 stereo cameras (ARIA Rover).
- **ESP32 & ESP32-CAM**: FreeRTOS, BLE Mesh 5.0, Wi-Fi 802.11 b/g/n, OV2640 optical streaming, UART/I2C/SPI (Military Car, RAKSHA, AgroXpert).
- **Raspberry Pi Zero 2W**: Linux audio daemons, I2S digital microphones, local wake words (HANUMAN).
- **Arduino UNO Q / Nano**: Hard real-time deterministic PID motor loops, hardware PWM, optical encoders (ARIA, X-Botics).
- **LoRa (868MHz / 433MHz)**: Long-range low-power radio communication for disaster telemetry.

### Languages & Frameworks
- **Languages**: Python, Java, C/C++ (Embedded / FreeRTOS), TypeScript, JavaScript, HTML5/CSS3.
- **AI / ML**: PyTorch, Hugging Face Transformers, YOLOv8, MedGemma 4B, Qwen3-VL, DINOv3, OpenCV, TFLite, NumPy, Pandas.
- **Systems & Databases**: Neo4j Graph DB (Cypher), Redis, BullMQ, SQLite, Supabase, Firebase Realtime.
- **Voice & Multimodal APIs**: Sarvam AI (Bulbul V3 TTS, STT, Translation), Groq LPU, ElevenLabs, Gemini Live API.
- **Web & Native Apps**: React, React Native (Expo), Next.js, Flask, FastAPI, Node.js, Tailwind CSS.

---

## 🤝 Open To

- **Research Collaborations**: Medical AI, multimodal vision-language models, decentralized edge mesh networks, and robotics.
- **Hardware & Project Sponsorship**: Compute grants, single-board computers (Radxa, Jetson), and sensors for ARIA Rover & RAKSHA field tests.
- **Mentorship**: Technical guidance and feedback from researchers and engineers at serious AI labs.
- **Internships & Part-Time Roles**: Remote technical roles in AI/ML, edge compute, or robotics.
- **Hackathon Team-Ups**: Building high-impact products with ambitious builders.

---

## 📬 Find Me

- **Email**: [egoisticcoderx@gmail.com](mailto:egoisticcoderx@gmail.com)
- **LinkedIn**: [linkedin.com/in/egoistic-coderx](https://linkedin.com/in/egoistic-coderx)
- **GitHub**: [github.com/EgoisticCoder](https://github.com/EgoisticCoder)
- **Hugging Face**: [huggingface.co/EgoisticCoder](https://huggingface.co/EgoisticCoder)
- **Portfolio Website**: [abhinav-gupta.vercel.app](https://abhinav-gupta.vercel.app)

---
*Built with Solarized Light architectural discipline. At 14, I don't just study AI — I ship it. Solo.*
