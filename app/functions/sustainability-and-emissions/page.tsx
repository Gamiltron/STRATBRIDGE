import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { SustainabilityHero } from '@/components/sustainability-hero'
import { SustainabilityFeatureStrip } from '@/components/sustainability-feature-strip'
import { SustainabilityWhySection } from '@/components/sustainability-why-section'
import { SustainabilityApproachSection } from '@/components/sustainability-approach-section'
import { SustainabilitySolutionsSection } from '@/components/sustainability-solutions-section'
import { SustainabilityUseCasesSection } from '@/components/sustainability-use-cases-section'
import { SustainabilityCtaBanner } from '@/components/sustainability-cta-banner'
import { SustainabilityFaqSection } from '@/components/sustainability-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustainability & Emissions — Stratbridge & Co.',
  description:
    'Turn your sustainability ambitions into measurable outcomes with the right data, technology and processes — reducing emissions, improving efficiency and creating long-term business value.',
}

export default function SustainabilityAndEmissionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Sustainability & Emissions' },
        ]}
      />
      <main>
        <SustainabilityHero />
        <SustainabilityFeatureStrip />
        <SustainabilityWhySection />
        <SustainabilityApproachSection />
        <SustainabilitySolutionsSection />
        <SustainabilityUseCasesSection />
        <SustainabilityCtaBanner />
        <SustainabilityFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}