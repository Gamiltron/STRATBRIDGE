import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { SalesHero } from '@/components/sales-hero'
import { SalesFeatureStrip } from '@/components/sales-feature-strip'
import { SalesWhySection } from '@/components/sales-why-section'
import { SalesApproachSection } from '@/components/sales-approach-section'
import { SalesSolutionsSection } from '@/components/sales-solutions-section'
import { SalesUseCasesSection } from '@/components/sales-use-cases-section'
import { SalesCtaBanner } from '@/components/sales-cta-banner'
import { SalesFaqSection } from '@/components/sales-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales, Demand Generation & GTM — Stratbridge & Co.',
  description:
    'We equip your revenue organisation with the right technology, processes and data to find, engage and convert more customers — faster.',
}

export default function SalesDemandGenerationAndGtmPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Sales, Demand Generation & GTM' },
        ]}
      />
      <main>
        <SalesHero />
        <SalesFeatureStrip />
        <SalesWhySection />
        <SalesApproachSection />
        <SalesSolutionsSection />
        <SalesUseCasesSection />
        <SalesCtaBanner />
        <SalesFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}