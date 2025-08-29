"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Briefcase, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

const SKILLS = {
  "Product Management": [
    "Product Strategy",
    "Roadmapping",
    "GTM",
    "UI/UX",
    "Stakeholder Management",
    "Agile",
    "PRDs & User Stories",
    "Hypothesis Testing",
    "Backlog Refinement",
    "Prioritization",
    "Design Thinking",
    "Wireframing & Prototyping",
  ],
  "Analytics & Research": [
    "Market Research",
    "A/B Testing",
    "Marketing Analytics",
    "SEO/ASO",
    "Mobile Analytics",
    "Gen AI",
    "Prompt Engineering",
  ],
}

const ICONS: Record<string, any> = {
  "Product Management": Briefcase,
  "Analytics & Research": BarChart3,
}

// Animation variants for the domino effect
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // time gap between each pill
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -20, rotate: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
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
            My expertise across product leadership and analytics to bring ideas to life.
          </p>
        </ScrollReveal>

        {/* Two-column skill cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([category, items]) => {
            const Icon = ICONS[category] || Briefcase
            return (
              <ScrollReveal
                key={category}
                className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur
                           hover:border-sky-500/40 transition group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="h-5 w-5 text-sky-400" />
                  <h3 className="font-semibold">{category}</h3>
                </div>

                {/* Domino effect animation */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={itemVariants}
                      className="rounded-md bg-black/30 px-3 py-2 text-sm opacity-90 
                                 transition group-hover:bg-sky-500/10 group-hover:text-sky-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
