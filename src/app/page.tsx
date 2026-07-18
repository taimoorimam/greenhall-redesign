import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatBand from '@/components/StatBand'
import Results from '@/components/Results'
import WhyGreenHall from '@/components/WhyGreenHall'
import Programs from '@/components/Programs'
import Testimonials from '@/components/Testimonials'
import CampusStrip from '@/components/CampusStrip'
import AdmissionsCTA from '@/components/AdmissionsCTA'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatBand />
        <Results />
        <WhyGreenHall />
        <Programs />
        <Testimonials />
        <CampusStrip />
        <AdmissionsCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
