'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Green Hall changed my future. The faculty treats you like a scholar, not a student number.',
    name: 'Zainab M.',
    role: 'A-Level Student',
    initial: 'Z',
  },
  {
    quote: 'Best SAT prep in Pakistan, full stop. 1520 on my first attempt — I wasn\'t expecting that.',
    name: 'Ahmed F.',
    role: 'SAT Student',
    initial: 'A',
  },
  {
    quote: 'My daughter scored 1560. Worth every rupee, every class, every mock test they put her through.',
    name: 'Parent',
    role: 'DHA Phase 4 Campus',
    initial: 'P',
  },
  {
    quote: 'The faculty genuinely cares about results. They remember your weak points from two weeks ago.',
    name: 'Hassan T.',
    role: 'O-Level Student',
    initial: 'H',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section className="py-20 lg:py-28" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-lime-brand)' }}
          >
            What Students Say
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
          >
            Heard It From Our Students
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: 'var(--color-paper)',
                border: '1.5px solid rgba(11,77,51,0.1)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--color-gold)' }}>★</span>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-base text-gray-700 leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'var(--color-emerald-deep)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: 'var(--color-ink-navy)', fontFamily: 'var(--font-heading)' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
