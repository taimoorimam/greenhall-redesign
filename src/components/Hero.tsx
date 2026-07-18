'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Background image */}
      <Image
        src="/images/hero.webp"
        alt="Green Hall Academy students celebrating results"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,77,51,0.82) 0%, rgba(11,77,51,0.65) 50%, rgba(11,77,51,0.88) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase"
            style={{ background: 'rgba(125,194,67,0.25)', border: '1px solid rgba(125,194,67,0.5)', color: '#a8e063' }}
          >
            Lahore's Premier SAT & CAIE Institute — Since 2003
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
          >
            Where Pakistan's Top
            <br />
            <span style={{ color: '#a8e063' }}>SAT &amp; A-Level Results</span>
            <br />
            Begin
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-base sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Guiding students from Lahore to Harvard, Stanford &amp; beyond —
            8 campuses, expert faculty, results that speak for themselves.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg"
              style={{ background: 'var(--color-orange-cta)' }}
            >
              Apply Now →
            </a>
            <a
              href="#results"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-200 active:scale-95"
              style={{ border: '2px solid rgba(255,255,255,0.6)' }}
            >
              Our Results ↓
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
