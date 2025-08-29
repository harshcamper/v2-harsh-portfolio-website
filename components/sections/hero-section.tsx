"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StarfieldBG } from "@/components/starfield-bg"
import { Linkedin } from "lucide-react"

type Audience = "everyone" | "recruiters" | "product" | "designers" | "engineers"

const audienceLabels: Record<Audience, string> = {
  everyone: "For Everyone",
  recruiters: "Recruiters",
  product: "Product Manager",
  designers: "Designers",
  engineers: "Engineers",
}

const audienceText: Record<Audience, string> = {
   everyone: "Hello! I blend Product Management & Design Thinking to craft solutions that drive results.",
  recruiters: "Product Manager with 3+ years of experience leading both B2C and B2B products from 0→1 and scale.",
  designers: "I prioritise high quality design collaboration — no last-minute design changes, I promise. 😉",
  product:
    "We’re alike in one way: we build with empathy, and we build to solve problems that matter 🌍",
  engineers:
    "I collaborate closely with engineering — clear PRDs, and crisp priorities. Let’s ship together 🚀",
}

export function HeroSection() {
  const [active, setActive] = useState<Audience>("everyone")

  return (
    <section className="relative isolate overflow-hidden">
      {/* subtle glow + starfield */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_10%,rgba(56,189,248,0.10),transparent_60%)]" />
      <StarfieldBG />

      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left column: text */}
          <div className="order-2 md:order-1">
            <h1 className="sr-only">Portfolio Hero</h1>

            {/* Audience tabs */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium" role="tablist">
              {(Object.keys(audienceLabels) as Audience[]).map((key) => {
                const selected = active === key
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    role="tab"
                    aria-selected={selected}
                    className={`transition-colors ${selected ? "text-sky-400" : "text-foreground/60 hover:text-sky-400"}`}
                  >
                    {audienceLabels[key]}
                  </button>
                )
              })}
            </div>

            {/* Intro text */}
            <div className="mt-6 max-w-xl">
              <p
                key={active}
                className="text-pretty text-2xl md:text-3xl font-medium leading-snug text-white motion-safe:animate-[fadeSlide_.28s_ease-out]"
              >
                {audienceText[active]}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex items-center gap-4">
              <Button
                asChild
                className="group rounded-full bg-sky-500 text-white hover:bg-sky-400 px-6 py-5 
                           shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <a
                  href="https://www.linkedin.com/in/harshit-govindarajan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    LinkedIn
                  </span>
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group rounded-full border-sky-500/40 text-sky-400 hover:bg-sky-500/10 px-6 py-5
                           transition-all hover:-translate-y-0.5 bg-transparent"
              >
                <a href="/resume.pdf" download aria-label="Download Resume (PDF)">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right column: profile image with rounded avatar and lunar glow */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-square">
                {/* glow layers */}
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-2xl" />
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />
                <img
                  src="/images/harshit-profile.jpeg"
                  alt="Profile photo"
                  className="relative z-10 h-full w-full rounded-full object-cover"
                  style={{ objectPosition: "50% 35%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
