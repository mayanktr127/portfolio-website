# Portfolio Content — Mayank

Copy-paste ready. Swap bracketed placeholders, trim to fit your layout.

---

## 1. Hero Section

**Option A (direct, technical)**
> AI Automation Developer & Full-Stack Builder
>
> I build production-grade AI systems — RAG pipelines, multi-tenant SaaS, and n8n automation workflows that actually run in production, not just demos.

**Option B (outcome-focused)**
> I turn messy manual workflows into automated, tested systems.
>
> Full-stack developer specializing in AI agent workflows, RAG pipelines, and n8n automation. Based in Bangalore, open to remote work.

**Option C (short punch)**
> Building AI systems that ship, not slideware.
> n8n · RAG · Multi-tenant SaaS · Next.js

Pick one, or combine A's first line with C's tagline.

---

## 2. About Section

> I'm Mayank, an AI automation developer based in Bangalore. I build systems that solve real operational problems — automating dealership paperwork, running RAG chatbots on production vector stores, and shipping multi-tenant SaaS with verified tenant isolation.
>
> My focus isn't demos. It's working software: I test adversarially, verify assumptions instead of trusting docs, and build iteratively — one phase at a time, manually checked before moving to the next.
>
> Core stack: n8n, Supabase (with pgvector), Google Gemini, Next.js/TypeScript, and LangChain for agentic workflows. I share what I build in public — workflow breakdowns, node annotations, and the failures along the way.

Shorter version for a sidebar/bio card:
> AI automation developer building production-grade RAG pipelines, multi-tenant SaaS, and n8n workflows. Bangalore-based, remote-first. I ship real systems and test them like they'll actually be used — because they will.

---

## 3. Featured Projects

### MessageFlow
**White-label messaging SaaS platform**
Multi-tenant architecture with isolated auth, campaign management, and background job processing via BullMQ/Redis. Built real-time team chat with Socket.io (Phase 7 of the build). Tenant isolation verified adversarially before layering features on top — not just assumed to work.
`Next.js` `TypeScript` `Supabase` `BullMQ` `Redis` `Socket.io`

### RAG Chatbot SaaS
**Retrieval-augmented generation pipeline on Supabase pgvector**
End-to-end knowledge base ingestion and chat pipeline using Gemini's `gemini-embedding-001` (3072-dim) embeddings. Handled real infrastructure constraints — like pgvector's HNSW index cap at 2000 dimensions — that standard docs don't flag for high-dimensional embeddings.
`Gemini API` `Supabase pgvector` `RAG` `LangChain`

### Used Car Dealership Automation
**End-to-end operations pipeline replacing manual workflow**
Built with another developer: appraisal intake, paperwork generation, inventory sync, and automated SMS review requests — all orchestrated through n8n and backed by Supabase. Replaced a fragmented, manual dealership process with a single automated pipeline.
`n8n` `Supabase` `Workflow Automation`

### LinkedIn Posting Automation
**AI agent content pipeline**
Multi-agent system with parallel specialist agents, Tavily-grounded research, automated image generation, and Google Sheets logging for a full "build in public" content pipeline — end to end, from idea to published post.
`n8n` `AI Agents` `Tavily` `Google Sheets`

### Invoice Tracker
**AI-powered invoice extraction and storage**
n8n workflow with AI-based data extraction feeding into Airtable/Supabase for structured invoice tracking.
`n8n` `AI Extraction` `Airtable` `Supabase`

### Expense Tracker
**AI Agent expense automation**
Subworkflow-based architecture using OpenRouter for AI processing, logging structured expense data to Google Sheets.
`n8n` `OpenRouter` `Google Sheets`

*(Optional: add Mutual Fund Report Tracker and AI Code Review Bot as "In Progress" cards if you want to show active work.)*

---

## 3.5 Currently Building

> A look at what's on the bench right now — because a portfolio that only shows finished work looks static.

### MessageFlow — Real-Time Team Chat (Phase 7)
Adding Socket.io-powered team chat to MessageFlow, split into two builds: team member management and live messaging. Actively in development.
`Socket.io` `Next.js` `Supabase`

### Mutual Fund Report Tracker
Gmail backfill + ongoing trigger pipeline that extracts mutual fund data from report emails using AI, deduplicated through Supabase. Currently working through a flagged blocker — CAS PDF password-unlocking via PAN — before scaling the extraction logic further.
`n8n` `Gmail API` `AI Extraction` `Supabase`

### AI Code Review Bot
A GitHub Action / CLI tool that posts LLM-generated inline PR comments. Planned as a 4-week build: CLI first, then GitHub Action packaging, severity logic, and finally a publishable marketplace tool.
`GitHub Actions` `LLM` `CLI`

---

## 4. Skills / Tech Stack

**Automation & AI**
n8n (self-hosted) · LangChain · AI Agent Workflows · RAG Pipelines · Google Gemini API · OpenRouter · Tavily · Firecrawl

**Backend & Data**
Supabase (Postgres, pgvector, Auth, Storage) · Pinecone · BullMQ / Redis (Upstash) · Node.js

**Frontend**
Next.js (App Router) · TypeScript · Tailwind CSS · React Hook Form · Zod · Socket.io

**Infrastructure & Tools**
Cloudflare Tunnel · Vercel · Netlify · Razorpay · GitHub

---

## 5. How I Work *(optional differentiator section)*

> - **I ship, don't prototype.** Every project here runs in production or is built to.
> - **I test adversarially.** Tenant isolation, auth boundaries, and data integrity get attacked before they get trusted.
> - **I verify, not assume.** Model names, vector dimensions, API behavior — I check independently rather than trust docs that are often stale.
> - **I build in phases.** Complex systems get built one verified phase at a time, not dumped in one shot.

---

## 6. Contact / CTA

> Open to remote opportunities in AI automation and full-stack development.
>
> Email: mayanktr127@gmail.com · LinkedIn: https://www.linkedin.com/in/mayanktr127 · GitHub: https://github.com/mayanktr127

---

### Notes for you
- If you want a "Currently Building" section for MessageFlow Phase 7 / Mutual Fund Tracker / AI Code Review Bot, I can draft that too — signals active momentum to anyone visiting.
- Want me to adjust tone (more casual vs. more corporate) or trim this down for a single-page layout?