"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { motion } from "framer-motion"

const LOGOS = [
  { name: "Google Analytics", src: "/tools/google-analytics.png" },
  { name: "Figma", src: "/tools/figma.svg" },
  { name: "Jira", src: "/tools/jira.svg" },
  { name: "Mixpanel", src: "/tools/mixpanel.svg" },
  { name: "Miro", src: "/tools/miro.svg" },
  { name: "Power BI", src: "/tools/powerbi.svg" },
  { name: "Whimsical", src: "/tools/whimsical.jpg" },
  { name: "CleverTap", src: "/tools/clevertap.jpg" },
  { name: "Python", src: "/tools/python.svg" },
]

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Tools</h2>
          <p className="mt-3 opacity-80 text-center">Platforms and instruments I use to craft, measure, and iterate.</p>
        </ScrollReveal>

        {/* Animated grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {LOGOS.map((logo) => (
            <motion.div
              key={logo.name}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.07,
                rotateX: 6,
                rotateY: -6,
                boxShadow: "0 12px 35px -10px rgba(56,189,248,0.45)",
              }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="group relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur
                         transition will-change-transform"
            >
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  alt={`${logo.name} logo`}
                  src={logo.src || "/placeholder.svg"}
                  width={48}
                  height={48}
                  className="opacity-90"
                />
              </motion.div>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 
                           group-hover:opacity-100 transition duration-500
                           bg-[radial-gradient(200px_120px_at_50%_120%,rgba(56,189,248,0.12),transparent_70%)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
