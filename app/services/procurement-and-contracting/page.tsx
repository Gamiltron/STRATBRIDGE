import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ProcurementHero } from '@/components/procurement-hero'
import { ProcurementFeatureStrip } from '@/components/procurement-feature-strip'
import { ProcurementWhySection } from '@/components/procurement-why-section'
import { ProcurementApproachSection } from '@/components/procurement-approach-section'
import { ProcurementSolutionsSection } from '@/components/procurement-solutions-section'
import { ProcurementUseCasesSection } from '@/components/procurement-use-cases-section'
import { ProcurementCtaBanner } from '@/components/procurement-cta-banner'
import { ProcurementFaqSection } from '@/components/procurement-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Procurement & Contracting — Stratbridge & Co.',
  description:
    'We help you source, evaluate and contract the right technology partners — better contracts, lower risk and greater value for your transformation journey.',
}

export default function ProcurementAndContractingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Services" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '#' },
          { label: 'Procurement & Contracting' },
        ]}
      />
      <main>
        <ProcurementHero />
        <ProcurementFeatureStrip />
        <ProcurementWhySection />
        <ProcurementApproachSection />
        <ProcurementSolutionsSection />
        <ProcurementUseCasesSection />
        <ProcurementCtaBanner />
        <ProcurementFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}