"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { motion } from "framer-motion"

// Skill categories with up to 9 rows max
const SKILL_GROUPS = {
  "Product Management": [
    "Product Strategy",
    "Roadmapping",
    "Project Management",
    "Stakeholder Management",
    "Agile/Scrum/Waterfall",
    "PRDs & User Stories",
    "Hypothesis Testing",
    "Backlog Refinement",
    "Wireframing & Prototyping",
  ],
  "Analytics & Research": [
    "Market Research",
    "A/B Testing",
    "Marketing Analytics",
    "Competitor Analysis",
    "Mobile Analytics",
    "Gen AI",
    "Prompt Engineering",
    "Customer Journey Mapping",
    "Prioritization",
  ],
  Marketing: [
    "Design Thinking",
    "UI/UX",
    "SEO/ASO",
    "Growth Strategy",
    "Customer Insights",
    "User Segmentation",
    "Campaign Optimization",
    "Go-to-Market",
    "Brand Positioning",
  ],
}

// Domino animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -20, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 22,
    },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <p className="mt-3 opacity-80 max-w-prose mx-auto">
            Expertise across product management, analytics, and marketing to craft impactful solutions.
          </p>
        </ScrollReveal>

        {/* 3-column skills grid with headers */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {Object.entries(SKILL_GROUPS).map(([category, items]) => (
            <ScrollReveal
              key={category}
              className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur
                         hover:border-sky-500/40 transition group"
            >
              {/* Column header */}
              <h3 className="mb-5 text-lg font-semibold text-sky-400">{category}</h3>

              {/* Skills with domino animation */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-2"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    className="rounded-md bg-black/30 px-3 py-2 text-sm opacity-90 
                               transition hover:bg-sky-500/10 hover:text-sky-200
                               hover:border hover:border-sky-500/40"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
