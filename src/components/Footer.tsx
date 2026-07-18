import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Programs', href: '#programs' },
  { label: 'Campuses', href: '#campuses' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = [
  { label: 'Facebook', href: 'https://facebook.com', icon: '📘' },
  { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
  { label: 'YouTube', href: 'https://youtube.com', icon: '▶️' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a3d28' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Green Hall Academy"
                width={44}
                height={32}
                className="h-8 w-auto"
              />
              <span
                className="font-semibold text-base leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Green Hall<br />
                <span className="text-xs font-normal tracking-widest uppercase opacity-70">
                  Academy
                </span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Lahore&apos;s premier institute for CAIE O/A-Level and SAT preparation. Delivering Pakistan&apos;s top results since 2003.
            </p>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all hover:opacity-80"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Useful Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <span>0092-42 35314145-6</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">💬</span>
                <a
                  href="https://wa.me/923125314147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +92 312 5314147 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉️</span>
                <a
                  href="mailto:info@greenhall.edu.pk"
                  className="hover:text-white transition-colors"
                >
                  info@greenhall.edu.pk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>395-Block G-1, Johar Town, Lahore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🕒</span>
                <span>Mon–Sat · 3:00 PM – 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-4 opacity-50"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Enrol Now
            </h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              New sessions start every few months. Secure your seat before the batch fills.
            </p>
            <a
              href="https://wa.me/923125314147?text=Hi, I'd like to enquire about admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'var(--color-orange-cta)' }}
            >
              WhatsApp to Enrol →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs text-white/40">
            © 2026 Green Hall Academy. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Lahore&apos;s Top SAT &amp; CAIE Institute Since 2003
          </p>
        </div>
      </div>
    </footer>
  )
}
