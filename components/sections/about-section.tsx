"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-5">
        <ScrollReveal className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-pretty text-center">About Me</h2>
        </ScrollReveal>
        <ScrollReveal className="md:col-span-3 opacity-90">
          <p className="leading-relaxed">
            I’m Harshit 👋 — a selenophile and a tech enthusiast who blends curiosity with disciplined product thinking. The moon’s
            calm precision inspires my work approach: clear strategy, considered experimentation, and execution that shines
            when it matters.
          </p>
          <p className="leading-relaxed mt-4">
            I lead AI-driven initiatives with user empathy, aligning business outcomes with delightful experiences. I
            believe great products are navigated like the night sky — anchored by principles, guided by patterns, and
            always exploring the edges.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
