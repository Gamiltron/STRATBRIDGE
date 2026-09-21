import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { ErpHero } from '@/components/erp-hero'
import { ErpFeatureStrip } from '@/components/erp-feature-strip'
import { ErpWhySection } from '@/components/erp-why-section'
import { ErpApproachSection } from '@/components/erp-approach-section'
import { ErpSolutionsSection } from '@/components/erp-solutions-section'
import { ErpUseCasesSection } from '@/components/erp-use-cases-section'
import { ErpCtaBanner } from '@/components/erp-cta-banner'
import { ErpFaqSection } from '@/components/erp-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERP & CRM Transformation — Stratbridge & Co.',
  description:
    'We modernise your core ERP and CRM systems to drive operational efficiency, better customer engagement and sustainable growth.',
}

export default function ErpAndCrmTransformationPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Services" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '#' },
          { label: 'ERP & CRM Transformation' },
        ]}
      />
      <main>
        <ErpHero />
        <ErpFeatureStrip />
        <ErpWhySection />
        <ErpApproachSection />
        <ErpSolutionsSection />
        <ErpUseCasesSection />
        <ErpCtaBanner />
        <ErpFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}