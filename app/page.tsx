"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ToolsSection } from "@/components/sections/tools-section"
import { ContactSection } from "@/components/sections/contact-section"
import { TopQuickMenu } from "@/components/top-quick-menu"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-balance">
            Harshit Govindarajan
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/harshit-govindarajan"
              target="_blank"
              rel="noreferrer"
              className="text-sm underline decoration-dotted opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Open LinkedIn profile"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Quick menu */}
      <TopQuickMenu />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsSection />
      <ContactSection />

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Harshit Govindarajan's Portfolio.</p>
        </div>
      </footer>
    </main>
  )
}
