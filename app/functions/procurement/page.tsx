import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ProcurementFunctionHero } from '@/components/procurement-function-hero'
import { ProcurementFunctionFeatureStrip } from '@/components/procurement-function-feature-strip'
import { ProcurementFunctionWhySection } from '@/components/procurement-function-why-section'
import { ProcurementFunctionApproachSection } from '@/components/procurement-function-approach-section'
import { ProcurementFunctionSolutionsSection } from '@/components/procurement-function-solutions-section'
import { ProcurementFunctionUseCasesSection } from '@/components/procurement-function-use-cases-section'
import { ProcurementFunctionCtaBanner } from '@/components/procurement-function-cta-banner'
import { ProcurementFunctionFaqSection } from '@/components/procurement-function-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Procurement — Stratbridge & Co.',
  description:
    'We enable a more intelligent, technology-driven procurement function with the right processes, systems and data to drive cost efficiency and strategic value.',
}

export default function ProcurementFunctionPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Procurement' },
        ]}
      />
      <main>
        <ProcurementFunctionHero />
        <ProcurementFunctionFeatureStrip />
        <ProcurementFunctionWhySection />
        <ProcurementFunctionApproachSection />
        <ProcurementFunctionSolutionsSection />
        <ProcurementFunctionUseCasesSection />
        <ProcurementFunctionCtaBanner />
        <ProcurementFunctionFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}