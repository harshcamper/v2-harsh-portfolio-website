"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

type Project = {
  title: string
  summary: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: "AI Insights Hub",
    summary: "Unified analytics and AI-assisted decisioning with role-based dashboards and experiment templates.",
  },
  {
    title: "Creator Performance Suite",
    summary: "Benchmarking and forecasting for influencer campaigns; shipped cohort analytics and funnel exploration.",
  },
  {
    title: "Operational Intelligence",
    summary: "Telemetry-driven ops insights; alerting, anomaly detection, and capacity planning views.",
  },
  {
    title: "Experiment Engine",
    summary: "Lightweight feature experimentation with guardrails, metrics registry, and results QC.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Projects</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ScrollReveal key={p.title}>
              <article
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-5 backdrop-blur transition
                           hover:border-sky-500/40 hover:shadow-[0_0_50px_-20px_rgba(56,189,248,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-purple-500/0 to-sky-500/0 group-hover:from-sky-500/10 group-hover:to-purple-500/10 transition-colors" />
                <h3 className="relative font-medium">{p.title}</h3>
                <p className="relative mt-2 text-sm opacity-80">{p.summary}</p>
                {p.link && (
                  <a href={p.link} className="relative mt-4 inline-block text-sky-400 underline decoration-dotted">
                    View case study →
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
