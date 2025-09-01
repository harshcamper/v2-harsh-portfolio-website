"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

type Project = {
  title: string
  summary: string
  tags: string[]
  metrics: { value: string; label: string }[]
  image: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: "B2C Mobile App",
    summary:
      "Built a consumer-facing influencer marketing app from ideation to 1M+ downloads. Features included campaign management, Payment Wallet system, AI-driven workflows, and engagement analytics.",
    tags: ["B2C", "Adtech", "Meta", "Flutter", "0-1", "Engagement", "iOS", "Android", "Cashfree", "Meta API", "Amplitude"],
    metrics: [
      { value: "1M+", label: "Downloads" },
      { value: "90%+", label: "Retention" },
      { value: "100K+", label: "MAU" },
    ],
    image: "/case-studies/1.png",
    link: "https://www.kofluence.com/influencer-marketing-for-digital-content-creators/",
  },
  {
    title: "PayPal AR/AP Academic Project",
    summary:
      "Researched and prototyped an integrated Accounts Receivable & Payable solution for SMBs, streamlining cash flow and payment processes across markets.",
    tags: [
      "FinTech",
      "Account Receivable",
      "Account Payable",
      "MSME",
      "B2B",
      "Payments",
      "Cash Flow",
      "Automation",
      "Artificial Intelligence",
    ],
    metrics: [
      { value: "3 months", label: "Project Timeline" },
      { value: "PayPal", label: "Project Mentor" },
      { value: "Academic", label: "Project Type" },
    ],
    image: "/case-studies/2.png",
    link: "https://drive.google.com/file/d/102x0dMVm0m7FSXiERtqqnNHBtLcefy2A/view?usp=sharing",
  },
  {
    title: "Swiggy Academic Project",
    summary:
      "In this case study, I focused on solving meal indecisiveness and planning challenges for Swiggy users. My approach aimed at improving order rates and AOV while enhancing user satisfaction, thereby driving higher CLTV.",
    tags: ["CaseStudy", "User Experience", "QuickCommerce", "Customer Journey", "Design Thinking", "AOV", "CLTV"],
    metrics: [
      { value: "Competition", label: "Project Type" },
      { value: "Great Lakes", label: "Organiser" },
      { value: "1st Place", label: "Achievement" },
    ],
    image: "/case-studies/3.png",
    link: "https://drive.google.com/file/d/1bs29BgWiH7gxpvkQyL8BoQNXKa1ETZfX/view?usp=sharing",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Projects</h2>
        </ScrollReveal>

        <div className="mt-14 space-y-20">
          {PROJECTS.map((p) => (
            <ScrollReveal key={p.title}>
              <article
                className="group relative grid gap-10 overflow-hidden rounded-2xl border border-border bg-background/60
                           p-8 md:grid-cols-2 backdrop-blur transition hover:border-sky-500/40
                           hover:shadow-[0_0_50px_-20px_rgba(56,189,248,0.5)]"
              >
                {/* Left column: project details */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="mt-3 opacity-80 text-sm md:text-base">{p.summary}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs opacity-80 
                                   transition group-hover:border-sky-500/40 group-hover:text-sky-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-10 border-t border-border pt-6">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-xl font-semibold">{m.value}</div>
                        <div className="text-xs opacity-70">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-4 rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white 
                                 shadow-md transition hover:bg-sky-400 hover:shadow-lg"
                    >
                      Explore More →
                    </a>
                  </div>
                </div>

                {/* Right column: image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={`${p.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
