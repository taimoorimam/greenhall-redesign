'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PILLARS = [
  {
    icon: '👨‍🏫',
    title: 'Expert Faculty',
    body: 'Senior teachers, PhD holders and subject practitioners — not generalists. Every class is led by a specialist who knows the Cambridge examiner\'s mindset.',
  },
  {
    icon: '👥',
    title: 'Personalised Batch Sizes',
    body: 'Maximum 20 students per class, so every student gets direct attention and no one gets left behind before exam season.',
  },
  {
    icon: '📋',
    title: 'Diagnostic Testing',
    body: 'Regular mock exams calibrated to CAIE and SAT standards, with detailed score reports so students know exactly what to fix — and when.',
  },
  {
    icon: '🎯',
    title: 'Cambridge & SAT Specialists',
    body: 'Decades of focused expertise in CAIE O/A-Level and SAT preparation — not a side offering, but the entire mission.',
  },
  {
    icon: '🗺️',
    title: 'Lahore-Wide Access',
    body: '8 campuses spread across Gulberg, Johar Town, Faisal Town, Wapda Town, DHA Phase 1, 4 & 6 — plus an Online Chapter for students nationwide.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export default function WhyGreenHall() {
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
            Why Choose Us
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
          >
            The Green Hall Difference
          </h2>
        </div>

        {/* Pillars grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl p-7 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: 'var(--color-paper)',
                border: '1.5px solid rgba(11,77,51,0.1)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: 'rgba(125,194,67,0.12)' }}
              >
                {p.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}

          {/* Last column filler — CTA card */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-2xl p-7 flex flex-col justify-between"
            style={{ background: 'var(--color-emerald-deep)' }}
          >
            <div>
              <div className="text-4xl mb-5">✨</div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ready to see the difference?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Join thousands of students who chose Green Hall — and got the results to prove it.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: 'var(--color-orange-cta)' }}
            >
              Apply Now →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
