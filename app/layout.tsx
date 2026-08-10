import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank — AI Automation Developer & Full-Stack Builder",
  description:
    "Building production-grade AI systems — RAG pipelines on pgvector, multi-tenant SaaS with verified tenant isolation, and self-hosted n8n automation workflows. Based in Bangalore, open to remote work.",
  keywords: [
    "AI Automation Developer",
    "n8n Automation",
    "RAG Pipelines",
    "Supabase pgvector",
    "Multi-Tenant SaaS",
    "Next.js",
    "TypeScript",
    "LangChain",
    "Google Gemini API",
    "Full-Stack Developer Bangalore",
  ],
  authors: [{ name: "Mayank" }],
  openGraph: {
    title: "Mayank — AI Automation Developer & Full-Stack Builder",
    description:
      "Building AI systems that ship, not slideware. n8n · RAG · Multi-tenant SaaS · Next.js · Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark bg-[#050505] text-zinc-100 antialiased`}
    >
      <body className="min-h-screen bg-[#050505] font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
