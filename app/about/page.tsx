import { SiteHeader } from '@/components/site-header'
import { AboutHero } from '@/components/about-hero'
import { PurposeSection } from '@/components/purpose-section'
import { FounderSection } from '@/components/founder-section'
import { DifferentiatorsSection } from '@/components/differentiators-section'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Stratbridge & Co.',
  description:
    'Bridging ideas, technology and execution. We partner with organisations to turn complexity into progress through technology-enabled transformation.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="About" />
      <main>
        <AboutHero />
        <PurposeSection />
        <FounderSection />
        <DifferentiatorsSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  )
}
