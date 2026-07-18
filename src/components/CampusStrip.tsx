'use client'

import Image from 'next/image'

const CAMPUSES = [
  {
    name: 'Gulberg Campus',
    address: '3-C Zahoor Elahi Road, Gulberg II',
    landline: '0092 (42) 35714143/7',
    mobile: '(0092) 312 5314148',
    img: '/images/campuses/gulberg.webp',
  },
  {
    name: 'Johar Town Campus',
    address: '395-Block G1, Johar Town',
    landline: '0092 (42) 35314145-6',
    mobile: '(0092) 311 6333666',
    img: '/images/campuses/johar.jpeg',
  },
  {
    name: 'Faisal Town Campus',
    address: '10-B Faisal Town, Lahore',
    landline: '0092 (42) 35161415-6',
    mobile: '(0092) 311 6333777',
    img: '/images/campuses/faisal.jpg',
  },
  {
    name: 'Wapda Town Campus',
    address: '1-E1, Main Boulevard Wapda Town',
    landline: '0092 (42) 35181417-8',
    mobile: '(0092) 311 6333444',
    img: '/images/campuses/wapda.jpg',
  },
  {
    name: 'DHA Phase 1',
    address: '125-G, Commercial Area DHA Phase 1',
    landline: '0092 (42) 35743063-4',
    mobile: '(0092) 331 5314143',
    img: '/images/campuses/dha1.webp',
  },
  {
    name: 'DHA Phase 4',
    address: '282-FF, DHA Phase IV',
    landline: '0092 (42) 35694256',
    mobile: '(0092) 320 6666989',
    img: '/images/campuses/dha4.jpg',
  },
  {
    name: 'DHA Phase 6',
    address: '62-CCA 1, Sector C DHA Phase 6',
    landline: '0092 (42) 37133016',
    mobile: '(0092) 320 7777456',
    img: '/images/campuses/dha6.jpeg',
  },
  {
    name: 'Online Chapter',
    address: 'Nationwide — Live Classes',
    landline: 'info@greenhall.edu.pk',
    mobile: '+92 312 5314147',
    img: '/images/campuses/online.jpeg',
  },
]

export default function CampusStrip() {
  return (
    <section id="campuses" className="py-20 lg:py-28" style={{ background: 'var(--color-paper)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: 'var(--color-lime-brand)' }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-emerald-deep)', fontFamily: 'var(--font-heading)' }}
          >
            8 Campuses Across Lahore
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            From Gulberg to DHA, Johar Town to online — expert instruction wherever you are.
          </p>
        </div>

        {/* Scroll rail */}
        <div className="flex gap-5 overflow-x-auto scroll-snap-x no-scrollbar pb-4">
          {CAMPUSES.map((campus) => (
            <div
              key={campus.name}
              className="rounded-2xl overflow-hidden flex flex-col shrink-0 w-64 sm:w-72"
              style={{
                background: '#fff',
                border: '1.5px solid rgba(11,77,51,0.1)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              }}
            >
              {/* Campus photo */}
              <div className="relative h-40">
                <Image
                  src={campus.img}
                  alt={campus.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, 288px"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(11,77,51,0.6) 0%, transparent 60%)' }}
                />
                <p
                  className="absolute bottom-3 left-3 text-white font-bold text-sm"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {campus.name}
                </p>
              </div>
              {/* Details */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-xs text-gray-600 leading-snug">{campus.address}</p>
                <div className="flex flex-col gap-1 mt-1">
                  <a
                    href={`tel:${campus.landline.replace(/\s|\(|\)|—/g, '')}`}
                    className="flex items-center gap-2 text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-emerald-deep)' }}
                  >
                    <span>📞</span> {campus.landline}
                  </a>
                  <a
                    href={
                      campus.mobile.startsWith('+')
                        ? `https://wa.me/${campus.mobile.replace(/\D/g, '')}`
                        : `tel:${campus.mobile.replace(/\s|\(|\)|—/g, '')}`
                    }
                    className="flex items-center gap-2 text-xs font-medium transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-lime-brand)' }}
                    target={campus.mobile.startsWith('+') ? '_blank' : undefined}
                    rel={campus.mobile.startsWith('+') ? 'noopener noreferrer' : undefined}
                  >
                    <span>{campus.name === 'Online Chapter' ? '💬' : '📱'}</span> {campus.mobile}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-3">← Swipe to explore all campuses →</p>
      </div>
    </section>
  )
}
