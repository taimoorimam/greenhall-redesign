'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PROGRAMS = [
  {
    icon: '📘',
    title: 'A-Levels (CAIE)',
    sub: 'AS & A2',
    desc: 'Cambridge International AS & A-Level — the gold standard for university admission worldwide. Expert subject teachers for all major streams.',
    tags: ['Business', 'Sciences', 'Humanities'],
  },
  {
    icon: '📗',
    title: 'O-Levels (CAIE)',
    sub: 'Foundation to Final',
    desc: 'Cambridge O-Level prep with personalised batch instruction. Build the foundation that launches a straight-A track record.',
    tags: ['All Subjects', 'Crash Course', 'Mock Exams'],
  },
  {
    icon: '📐',
    title: 'SAT Preparation',
    sub: 'SAT Suite of Assessments',
    desc: 'Pakistan\'s highest SAT scores come from Green Hall. Two-month intensive programs with full College Board syllabus coverage.',
    tags: ['SAT I', 'SAT Subject Tests', 'Diagnostics'],
  },
  {
    icon: '🔬',
    title: 'A-Level Science Practicals',
    sub: 'Physics · Chemistry · Biology',
    desc: 'Hands-on lab sessions designed specifically for Cambridge practical exams — the edge most students overlook until it\'s too late.',
    tags: ['Lab Sessions', 'Exam Technique', 'CAIE Spec'],
  },
  {
    icon: '💻',
    title: 'Online Chapter',
    sub: 'Live Classes · Nationwide',
    desc: 'All the same expert faculty, now accessible from anywhere in Pakistan. Live sessions, real-time doubt resolution, same results.',
    tags: ['Live Classes', 'Recording Access', 'All Pakistan'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="programs" className="py-20 lg:py-28" style={{ background: 'var(--color-paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-lime-brand)' }}
          >
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
          >
            Programs Built for Results
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Every program is structured around the Cambridge and College Board examiner — not the textbook.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {PROGRAMS.map((prog) => (
            <motion.div
              key={prog.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl p-7 flex flex-col gap-4 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: '#fff',
                border: '1.5px solid rgba(11,77,51,0.1)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.04)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: 'rgba(11,77,51,0.06)' }}
                >
                  {prog.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-base leading-tight"
                    style={{ color: 'var(--color-ink-navy)', fontFamily: 'var(--font-heading)' }}
                  >
                    {prog.title}
                  </h3>
                  <p
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: 'var(--color-lime-brand)' }}
                  >
                    {prog.sub}
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {prog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'rgba(11,77,51,0.07)', color: 'var(--color-emerald-deep)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
