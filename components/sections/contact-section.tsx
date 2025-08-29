"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin } from "lucide-react"
import { StarfieldBG } from "@/components/starfield-bg"

export function ContactSection() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 md:py-32 text-white">
      {/* Starfield as the far background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <StarfieldBG />
      </div>

      {/* Horizon sits above the starfield but below content */}
      {/* <HorizonBG className="-z-10" /> */}

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s explore new horizons together</h2>
        </ScrollReveal>

        <ScrollReveal className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-lg opacity-90">
            <Mail className="h-5 w-5 text-sky-400" />
            <a
              href="mailto:harshit.govindarajan@gmail.com"
              className="hover:text-sky-400 transition underline-offset-4 hover:underline"
            >
              harshit.govindarajan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-lg opacity-90">
            <MapPin className="h-5 w-5 text-sky-400" />
            <span>Bangalore, India</span>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10 flex justify-center">
          <Button
            asChild
            className="group rounded-full bg-sky-600/90 text-white px-8 py-5
                       shadow-md backdrop-blur-md ring-1 ring-sky-500/30
                       transition-all hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-lg
                       hover:ring-sky-400/50 hover:brightness-110"
          >
            <a
              href="https://www.linkedin.com/in/harshit-govindarajan"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <span className="inline-flex items-center gap-2 font-medium">
                <Linkedin className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                LinkedIn
              </span>
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
