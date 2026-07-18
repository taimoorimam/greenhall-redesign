'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AdmissionsCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: 'var(--color-emerald-deep)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'var(--color-lime-brand)' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10"
        style={{ background: 'var(--color-orange-cta)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(125,194,67,0.2)', color: '#a8e063' }}
          >
            Admissions Open
          </p>

          <h2
            className="text-3xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Your Result Starts
            <br />
            <span style={{ color: '#a8e063' }}>the Day You Enrol</span>
          </h2>

          <p className="text-white/75 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Sessions begin every few months. Class sizes are limited. The sooner you secure
            your seat, the sooner your score improves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`https://wa.me/923125314147?text=Hi, I'd like to enquire about admissions at Green Hall Academy.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ background: 'var(--color-orange-cta)' }}
            >
              WhatsApp Us Now →
            </a>
            <a
              href="mailto:info@greenhall.edu.pk"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-200 active:scale-95"
              style={{ border: '2px solid rgba(255,255,255,0.5)' }}
            >
              Email: info@greenhall.edu.pk
            </a>
          </div>

          {/* Quick contact strip */}
          <div
            className="inline-flex flex-wrap justify-center gap-6 px-6 py-4 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>📞</span>
              <span>0092-42 35314145-6</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>💬</span>
              <span>+92 312 5314147</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span>🕒</span>
              <span>Mon–Sat · 3:00 PM – 10:00 PM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
