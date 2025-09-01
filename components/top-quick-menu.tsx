"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
]

export function TopQuickMenu() {
  const [active, setActive] = useState<string>("")

  const observer = useMemo(() => {
    if (typeof window === "undefined") return null
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
  }, [])

  useEffect(() => {
    const nodes = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[]
    if (observer) nodes.forEach((n) => observer.observe(n))
    return () => {
      if (observer) nodes.forEach((n) => observer.unobserve(n))
    }
  }, [observer])

  return (
    <nav aria-label="Quick menu" className="sticky top-2 z-40 mx-auto w-full max-w-3xl px-3">
      <div className="flex items-center justify-center rounded-xl border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-md">
        <ul className="flex w-full flex-wrap items-center justify-between gap-1">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <li key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className={[
                    "block rounded-md px-3 py-1.5 text-sm transition-colors",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70",
                    isActive ? "text-sky-400" : "text-zinc-300 hover:text-sky-300",
                  ].join(" ")}
                >
                  {s.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
