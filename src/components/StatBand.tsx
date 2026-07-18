'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

const STATS: Stat[] = [
  { value: 20, suffix: '+', label: 'Years Preparing\nPakistan\'s Brightest', icon: '🎓' },
  { value: 8, suffix: '', label: 'Campuses\nAcross Lahore', icon: '🏛' },
  { value: 28, suffix: '', label: 'SAT Scores\n≥ 1300/1600', icon: '📊' },
  { value: 400, suffix: '+', label: 'CAIE Distinctions\nEarned', icon: '🏆' },
]

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame: number
    const start = performance.now()
    const duration = 1500

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-30% 0px' })

  return (
    <section
      ref={ref}
      id="about"
      style={{ background: 'var(--color-emerald-deep)' }}
      className="py-14 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="text-4xl sm:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} active={isInView} />
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-snug whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
