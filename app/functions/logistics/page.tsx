import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { LogisticsHero } from '@/components/logistics-hero'
import { LogisticsFeatureStrip } from '@/components/logistics-feature-strip'
import { LogisticsWhySection } from '@/components/logistics-why-section'
import { LogisticsApproachSection } from '@/components/logistics-approach-section'
import { LogisticsSolutionsSection } from '@/components/logistics-solutions-section'
import { LogisticsUseCasesSection } from '@/components/logistics-use-cases-section'
import { LogisticsCtaBanner } from '@/components/logistics-cta-banner'
import { LogisticsFaqSection } from '@/components/logistics-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logistics — Stratbridge & Co.',
  description:
    'We help you build a smarter, more agile logistics function with the right strategy, processes and technology to move goods efficiently and reduce costs.',
}

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Logistics' },
        ]}
      />
      <main>
        <LogisticsHero />
        <LogisticsFeatureStrip />
        <LogisticsWhySection />
        <LogisticsApproachSection />
        <LogisticsSolutionsSection />
        <LogisticsUseCasesSection />
        <LogisticsCtaBanner />
        <LogisticsFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}