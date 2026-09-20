import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ReadinessHero } from '@/components/readiness-hero'
import { ReadinessValueStrip } from '@/components/readiness-value-strip'
import { ReadinessWhySection } from '@/components/readiness-why-section'
import { ReadinessApproachSection } from '@/components/readiness-approach-section'
import { ReadinessDeliverablesSection } from '@/components/readiness-deliverables-section'
import { ReadinessWhoForSection } from '@/components/readiness-who-for-section'
import { ReadinessCtaBanner } from '@/components/readiness-cta-banner'
import { ReadinessFaqSection } from '@/components/readiness-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Readiness Assessment — Stratbridge & Co.',
  description:
    'A clear, objective view of where you are — and what it will take to get to where you want to be.',
}

export default function ReadinessAssessmentPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Services" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '#' },
          { label: 'Readiness Assessment' },
        ]}
      />
      <main>
        <ReadinessHero />
        <ReadinessValueStrip />
        <ReadinessWhySection />
        <ReadinessApproachSection />
        <ReadinessDeliverablesSection />
        <ReadinessWhoForSection />
        <ReadinessCtaBanner />
        <ReadinessFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
