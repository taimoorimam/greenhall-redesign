'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const SAT_ACHIEVERS = [
  { name: 'Muhammad Shaamyl', score: '1560/1600', math: '800/800', verbal: '760/800' },
  { name: 'Maarij Zafar', score: '1550/1600', math: '—', verbal: '—' },
  { name: 'Azlan Asim', score: '1520/1600', math: '790/800', verbal: '730/800' },
  { name: 'Hanzla Hamid', score: '1520/1600', math: '770/800', verbal: '750/800' },
  { name: 'Alisha Ashfaq', score: '1510/1600', math: '780/800', verbal: '730/800' },
  { name: 'Dorrabb Khan', score: '1500/1600', math: '—', verbal: '—' },
  { name: 'Usama Ahmed', score: '1480/1600', math: '—', verbal: '—' },
  { name: 'Hassan Shaigan', score: '1460/1600', math: '770/800', verbal: '690/800' },
  { name: 'Shaheryar A. Khan', score: '1460/1600', math: '750/800', verbal: '710/800' },
  { name: 'Ammar Ahmed Khan', score: '1450/1600', math: '780/800', verbal: '670/800' },
  { name: 'Hamdan Ahmed', score: '1440/1600', math: '680/800', verbal: '760/800' },
  { name: 'Rida Faisal', score: '1440/1600', math: '720/800', verbal: '720/800' },
  { name: 'Adil Habib Gill', score: '1420/1600', math: '760/800', verbal: '660/800' },
  { name: 'Musfira Hussain', score: '1300/1600', math: '—', verbal: '—' },
]

const CAIE_ACHIEVERS = [
  {
    img: '/images/caie/caie-6.webp',
    name: 'Abdul Hannan Ghaffar',
    result: 'TOP IN WORLD — Sociology',
    award: 'Rs. 50,000 Cash Cheque',
    tier: 'world',
  },
  {
    img: '/images/caie/caie-7.webp',
    name: 'M. Khizar Kamran',
    result: 'TOP IN WORLD — Physics',
    award: 'Rs. 50,000 Cash Cheque',
    tier: 'world',
  },
  {
    img: '/images/caie/caie-1.webp',
    name: 'M. Usman Ali Khan',
    result: '11 A*s — O-Level',
    award: '1st Place · Rs. 100,000',
    tier: 'first',
  },
  {
    img: '/images/caie/caie-2.webp',
    name: 'Saim Ali Hassan',
    result: '6 A*s + 4 As — O-Level',
    award: '2nd Place',
    tier: 'second',
  },
  {
    img: '/images/caie/caie-3.webp',
    name: 'Ali Asgher',
    result: '6 A*s + 4 As — O-Level',
    award: '2nd Place',
    tier: 'second',
  },
  {
    img: '/images/caie/caie-4.webp',
    name: 'M. Saad Naseer',
    result: '5 A*s + 5 As — O-Level',
    award: '3rd Place',
    tier: 'third',
  },
  {
    img: '/images/caie/caie-5.webp',
    name: 'Khadija Asghar',
    result: '4 A*s + 6 As — O-Level',
    award: '3rd Place',
    tier: 'third',
  },
  {
    img: '/images/caie/caie-8.webp',
    name: 'Zarmeen Hasib',
    result: '5 A*s + 5 As — O-Level',
    award: '3rd Place',
    tier: 'third',
  },
]

function tierStyle(tier: string) {
  if (tier === 'world') return { border: '2px solid #C9A227', background: 'rgba(201,162,39,0.08)' }
  if (tier === 'first') return { border: '2px solid #7DC243', background: 'rgba(125,194,67,0.08)' }
  return { border: '1px solid rgba(11,77,51,0.15)', background: '#fff' }
}

function tierBadge(tier: string) {
  if (tier === 'world') return { label: '⭐ TOP IN WORLD', bg: '#C9A227', color: '#fff' }
  if (tier === 'first') return { label: '🥇 1st', bg: '#0B4D33', color: '#fff' }
  if (tier === 'second') return { label: '🥈 2nd', bg: '#4a5568', color: '#fff' }
  return { label: '🥉 3rd', bg: '#6b7280', color: '#fff' }
}

export default function Results() {
  const [tab, setTab] = useState<'sat' | 'caie'>('sat')
  const railRef = useRef<HTMLDivElement>(null)

  return (
    <section id="results" className="py-20 lg:py-28" style={{ background: 'var(--color-paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-lime-brand)' }}
          >
            High Achievers
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
          >
            Results That Speak for Themselves
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From Lahore classrooms to world rankings — every score here is real.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: 'rgba(11,77,51,0.08)' }}
          >
            {(['sat', 'caie'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  tab === t
                    ? { background: 'var(--color-emerald-deep)', color: '#fff' }
                    : { color: 'var(--color-emerald-deep)' }
                }
              >
                {t === 'sat' ? 'SAT High Achievers' : 'CAIE Distinctions 2024'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'sat' ? (
            <motion.div
              key="sat"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* SAT horizontal scroll rail */}
              <div
                ref={railRef}
                className="flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar pb-4"
              >
                {SAT_ACHIEVERS.map((s, i) => (
                  <div
                    key={s.name}
                    className="rounded-2xl p-5 shrink-0 w-48 sm:w-56 flex flex-col gap-3"
                    style={{
                      background: '#fff',
                      border: '1.5px solid rgba(11,77,51,0.12)',
                      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: i < 3 ? 'var(--color-lime-brand)' : 'var(--color-emerald-deep)' }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm leading-tight mb-1"
                        style={{ color: 'var(--color-ink-navy)', fontFamily: 'var(--font-heading)' }}
                      >
                        {s.name}
                      </p>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
                      >
                        {s.score}
                      </p>
                    </div>
                    {s.math !== '—' && (
                      <div className="text-xs text-gray-500 space-y-0.5">
                        <p>Math: {s.math}</p>
                        <p>Verbal: {s.verbal}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 mt-3">← Scroll to see all 14 scores →</p>
            </motion.div>
          ) : (
            <motion.div
              key="caie"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {/* CAIE grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {CAIE_ACHIEVERS.map((a) => {
                  const badge = tierBadge(a.tier)
                  return (
                    <div
                      key={a.name}
                      className="rounded-2xl overflow-hidden flex flex-col"
                      style={tierStyle(a.tier)}
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={a.img}
                          alt={a.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div
                          className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-bold"
                          style={{ background: badge.bg, color: badge.color }}
                        >
                          {badge.label}
                        </div>
                      </div>
                      <div className="p-3">
                        <p
                          className="font-semibold text-sm mb-0.5"
                          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-ink-navy)' }}
                        >
                          {a.name}
                        </p>
                        <p className="text-xs text-gray-600">{a.result}</p>
                        <p
                          className="text-xs font-semibold mt-1"
                          style={{ color: a.tier === 'world' ? 'var(--color-gold)' : 'var(--color-emerald-deep)' }}
                        >
                          {a.award}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p
                className="text-center text-xs mt-6 font-medium"
                style={{ color: 'var(--color-emerald-deep)' }}
              >
                HIGH ACHIEVERS CEREMONY 2024 — All results verified by CAIE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
