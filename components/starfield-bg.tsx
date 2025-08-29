"use client"

import { useEffect, useRef } from "react"

export function StarfieldBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)
  const starsRef = useRef<{ x: number; y: number; r: number; tw: number }[]>([])

  const scrollTargetRef = useRef(0)
  const scrollParallaxRef = useRef(0)

  type Comet = { x: number; y: number; vx: number; vy: number; len: number; active: boolean }
  const cometRef = useRef<Comet | null>(null)

  // decorative comet (slow + looping movement)
  const decorativeCometRef = useRef<{ x: number; y: number; progress: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      createStars()
      initComet()
      initDecorativeComet()
    }

    const createStars = () => {
      const count = Math.min(180, Math.floor((width * height) / 16000))
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.3,
        tw: Math.random() * 1 + 0.2,
      }))
    }

    const initComet = () => {
      const speedBase = Math.max(width, height)
      cometRef.current = {
        x: -0.1 * width,
        y: -0.15 * height,
        vx: 0.0025 * speedBase,
        vy: 0.0017 * speedBase,
        len: Math.max(80, Math.min(200, speedBase * 0.12)),
        active: true,
      }
    }

    const initDecorativeComet = () => {
      decorativeCometRef.current = {
        x: 0,
        y: 0,
        progress: 0, // 0 → top-left, 1 → middle of screen
      }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onScroll = () => {
      scrollTargetRef.current = window.scrollY * 0.12
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    let last = performance.now()

    const drawMoon = () => {
      const moonX = width * 0.8 // moved more towards right
      const moonY = height * 0.1 // slightly higher
      const moonR = Math.min(width, height) * 0.06

      // outer glow
      const glow = ctx.createRadialGradient(moonX, moonY, moonR * 0.8, moonX, moonY, moonR * 1.6)
      glow.addColorStop(0, "rgba(255,255,255,0.18)")
      glow.addColorStop(1, "rgba(255,255,255,0)")
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonR * 1.6, 0, Math.PI * 2)
      ctx.fill()

      // main moon
      const grad = ctx.createRadialGradient(
        moonX - moonR * 0.3,
        moonY - moonR * 0.3,
        moonR * 0.3,
        moonX,
        moonY,
        moonR,
      )
      grad.addColorStop(0, "#f5f5f4")
      grad.addColorStop(1, "#d4d4d4")
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2)
      ctx.fill()

      // subtle craters
      ctx.fillStyle = "rgba(0,0,0,0.15)"
      ;[
        [0.2, 0.1, 0.15],
        [-0.25, 0.05, 0.12],
        [0.1, -0.25, 0.1],
      ].forEach(([dx, dy, r]) => {
        ctx.beginPath()
        ctx.arc(moonX + dx * moonR, moonY + dy * moonR, r * moonR, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawDecorativeComet = () => {
      if (!decorativeCometRef.current) return
      const dc = decorativeCometRef.current

      // move towards center gradually
      dc.progress += 0.0006 // speed
      if (dc.progress >= 1) {
        // reset to loop again after reaching center
        dc.progress = 0
      }

      const targetX = width * 0.5
      const targetY = height * 0.35
      dc.x = lerp(0, targetX, dc.progress)
      dc.y = lerp(0, targetY, dc.progress)

      // fade out as it reaches center
      const alpha = 1 - dc.progress

      // Slimmer + shorter tail
      const tailLen = width * 0.1
      const tailX = dc.x - tailLen * 0.5
      const tailY = dc.y - tailLen * 0.3

      ctx.save()
      ctx.globalAlpha = alpha

      const grad = ctx.createLinearGradient(tailX, tailY, dc.x, dc.y)
      grad.addColorStop(0, "rgba(255,255,255,0)")
      grad.addColorStop(0.6, "rgba(186,230,253,0.35)")
      grad.addColorStop(1, "rgba(255,255,255,0.85)")
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.2
      ctx.shadowColor = "rgba(255,255,255,0.7)"
      ctx.shadowBlur = 8
      ctx.beginPath()
      ctx.moveTo(tailX, tailY)
      ctx.lineTo(dc.x, dc.y)
      ctx.stroke()

      // comet head
      ctx.fillStyle = "rgba(255,255,255,0.95)"
      ctx.beginPath()
      ctx.arc(dc.x, dc.y, 2.3, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(186,230,253,0.2)"
      ctx.beginPath()
      ctx.arc(dc.x, dc.y, 5.5, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const draw = (now: number) => {
      if (!ctx) return
      const dt = Math.min(100, now - last)
      last = now

      scrollParallaxRef.current = lerp(scrollParallaxRef.current, scrollTargetRef.current, 0.08)

      ctx.clearRect(0, 0, width, height)

      // background glow
      const grd = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        10,
        width * 0.8,
        height * 0.2,
        Math.max(width, height) * 0.6,
      )
      grd.addColorStop(0, "rgba(99, 102, 241, 0.1)")
      grd.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      // stars
      const yOffset = scrollParallaxRef.current % (height * 2)
      ctx.save()
      starsRef.current.forEach((s, i) => {
        const twinkle = Math.sin((now / 800) * s.tw + i) * 0.5 + 0.5
        ctx.fillStyle = "white"
        ctx.globalAlpha = 0.4 + twinkle * 0.6
        ctx.shadowColor = "white"
        ctx.shadowBlur = 8
        const y = (s.y + yOffset) % height
        ctx.beginPath()
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()

      // animated comet
      if (!cometRef.current) initComet()
      const c = cometRef.current!
      const step = dt / 1000
      c.x += c.vx * step
      c.y += c.vy * step

      ctx.save()
      ctx.globalCompositeOperation = "lighter"

      const tailX = c.x - c.vx * step * c.len
      const tailY = c.y - c.vy * step * c.len

      const grad = ctx.createLinearGradient(tailX, tailY, c.x, c.y)
      grad.addColorStop(0, "rgba(255,255,255,0)")
      grad.addColorStop(0.6, "rgba(186,230,253,0.4)")
      grad.addColorStop(1, "rgba(255,255,255,1)")
      ctx.strokeStyle = grad
      ctx.lineWidth = 2.2
      ctx.shadowColor = "rgba(255,255,255,0.95)"
      ctx.shadowBlur = 16
      ctx.beginPath()
      ctx.moveTo(tailX, tailY)
      ctx.lineTo(c.x, c.y)
      ctx.stroke()

      ctx.fillStyle = "white"
      ctx.beginPath()
      ctx.arc(c.x, c.y, 2.6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "rgba(186,230,253,0.25)"
      ctx.beginPath()
      ctx.arc(c.x, c.y, 7, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      if (c.x > width + 50 || c.y > height + 50) {
        setTimeout(() => initComet(), 1500 + Math.random() * 1500)
      }

      // moon (fixed)
      drawMoon()

      // decorative comet (slow drift, loops, fades)
      drawDecorativeComet()
    }

    const loop = (t: number) => {
      draw(t)
      rafRef.current = requestAnimationFrame(loop)
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    scrollTargetRef.current = window.scrollY * 0.12
    createStars()
    initComet()
    initDecorativeComet()
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
