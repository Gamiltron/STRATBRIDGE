import { SiteHeader } from '@/components/site-header'
import { HomeHero } from '@/components/home-hero'
import { ValueStrip } from '@/components/value-strip'
import { ChallengeSection } from '@/components/challenge-section'
import { ServicesSection } from '@/components/services-section'
import { ApproachSection } from '@/components/approach-section'
import { FunctionsSection } from '@/components/functions-section'
import { InsightsSection } from '@/components/insights-section'
import { HomeCta } from '@/components/home-cta'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stratbridge & Co. — Transformation. Technology. Execution.',
  description:
    'We help organisations turn transformation plans into real business outcomes through technology-enabled transformation across the value chain.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Home" />
      <main>
        <HomeHero />
        <ValueStrip />
        <ChallengeSection />
        <ServicesSection />
        <ApproachSection />
        <FunctionsSection />
        <InsightsSection />
        <HomeCta />
      </main>
      <SiteFooter />
    </div>
  )
}
