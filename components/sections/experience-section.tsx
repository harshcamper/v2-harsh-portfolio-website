"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Briefcase } from "lucide-react"

type ExpItem = {
  company: string
  role: string
  period: string
  bullets: string[]
  phase: "new" | "crescent" | "half" | "gibbous" | "full"
}

const EXPERIENCE: ExpItem[] = [
  {
    company: "Infosys Consulting",
    role: "Senior Consultant, Product & Analytics",
    period: "2022 — Present",
    bullets: [
      "Drove AI/analytics roadmap across multi-stakeholder programs",
      "Shipped data-informed feature sets improving adoption and retention",
      "Partnered with engineering to streamline delivery and reduce cycle time",
    ],
    phase: "gibbous",
  },
  {
    company: "Kofluence",
    role: "Product Manager",
    period: "2020 — 2022",
    bullets: [
      "Led influencer marketing platform initiatives from discovery to launch",
      "Introduced experimentation loops, improving CTR and CPA",
      "Scaled dashboards and reporting for enterprise clients",
    ],
    phase: "half",
  },
]

function PhaseIcon({ phase }: { phase: ExpItem["phase"] }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <clipPath id="moon-clip">
          <circle cx="12" cy="12" r="10" />
        </clipPath>
      </defs>
      <circle cx="12" cy="12" r="10" fill="rgb(14, 23, 42)" />
      <g clipPath="url(#moon-clip)">
        <circle cx="12" cy="12" r="10" fill="rgb(203,213,225)" />
        {phase === "crescent" && <rect x="8" y="0" width="16" height="24" fill="rgb(14, 23, 42)" />}
        {phase === "half" && <rect x="12" y="0" width="12" height="24" fill="rgb(14, 23, 42)" />}
        {phase === "gibbous" && <rect x="16" y="0" width="8" height="24" fill="rgb(14, 23, 42)" />}
        {phase === "new" && <rect x="0" y="0" width="24" height="24" fill="rgb(14, 23, 42)" />}
      </g>
      <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(56,189,248,0.5)" />
    </svg>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Experience</h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-6">
          {EXPERIENCE.map((exp) => (
            <ScrollReveal key={exp.company} className="group">
              <div className="flex items-start gap-4 rounded-xl border border-border bg-background/60 p-5 backdrop-blur transition hover:border-sky-500/40">
                <div className="mt-1">
                  <PhaseIcon phase={exp.phase} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="font-medium">
                      {exp.role} • {exp.company}
                    </h3>
                    <span className="text-sm opacity-70">{exp.period}</span>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 opacity-90">
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
                <Briefcase className="h-5 w-5 opacity-60 group-hover:text-sky-400 group-hover:opacity-100 transition" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
