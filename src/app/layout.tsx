import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: "Green Hall Academy — Pakistan's Top SAT & CAIE Results",
  description:
    "Green Hall Academy, Lahore — delivering Pakistan's highest SAT scores and CAIE distinctions since 2003. 8 campuses. Expert faculty. Real results.",
  keywords: [
    'Green Hall Academy',
    'Lahore',
    'SAT preparation',
    'A-Level',
    'O-Level',
    'CAIE',
    'Cambridge',
    'top results Pakistan',
  ],
  openGraph: {
    title: "Green Hall Academy — Pakistan's Top SAT & CAIE Results",
    description:
      'SAT scores up to 1560/1600. O-Level world toppers. 8 campuses across Lahore.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
