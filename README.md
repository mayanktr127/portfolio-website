# Mayank — AI Automation Developer & Full-Stack Builder

A high-performance "Scrollytelling" personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Framer Motion**, **HTML5 Canvas**, and **Tailwind CSS**. Features frame-by-frame canvas scrubbing, smooth parallax overlays, real-time FPS telemetry, and a monochrome design system.

---

## ⚡ Core Highlights

- **HTML5 Canvas Scrollytelling**: 150 preloaded image sequence frames scrubbed continuously on the GPU thread via `requestAnimationFrame` with zero DOM reflow.
- **Unified Scroll Controller**: Single `useScroll` motion target driving both canvas frame scrubbing and parallax content milestones with zero ghosting or overlap.
- **Monochrome & Silver Aesthetics**: Deep obsidian background (`#050505`), silver typography gradients, and glassmorphic card primitives.
- **Production Systems Showcase**:
  - **MessageFlow**: Multi-tenant SaaS with isolated auth, BullMQ/Redis campaign queues, and Socket.io live team chat (Phase 7).
  - **RAG Chatbot SaaS**: Supabase pgvector retrieval pipeline with 3072-dim Gemini embeddings and HNSW index tuning.
  - **Used Car Dealership Automation**: End-to-end appraisal intake, PDF generation, and automated review pipeline via self-hosted n8n and Supabase.
  - **LinkedIn Posting Automation**: Parallel specialist AI agent content swarm with Tavily web grounding.
  - **AI Invoice & Expense Extractors**: Subworkflow-based structured data extraction into Airtable, Supabase, and Google Sheets.
- **Live Telemetry HUD**: Real-time FPS meter, frame index counter (`FRAME 000 / 150`), and global scroll progress scrubber.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone git@github.com:mayanktr127/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

---

## 📬 Contact

- **Email**: [mayanktr127@gmail.com](mailto:mayanktr127@gmail.com)
- **LinkedIn**: [linkedin.com/in/mayanktr127](https://www.linkedin.com/in/mayanktr127)
- **GitHub**: [github.com/mayanktr127](https://github.com/mayanktr127)
