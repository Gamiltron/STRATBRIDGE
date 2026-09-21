import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { FinanceHero } from '@/components/finance-hero'
import { FinanceFeatureStrip } from '@/components/finance-feature-strip'
import { FinanceWhySection } from '@/components/finance-why-section'
import { FinanceApproachSection } from '@/components/finance-approach-section'
import { FinanceSolutionsSection } from '@/components/finance-solutions-section'
import { FinanceUseCasesSection } from '@/components/finance-use-cases-section'
import { FinanceCtaBanner } from '@/components/finance-cta-banner'
import { FinanceFaqSection } from '@/components/finance-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance: Accounts Receivable & Accounts Payable — Stratbridge & Co.',
  description:
    'We transform AR and AP functions with the right processes, technology and data to improve cash flow, reduce manual effort and drive operational efficiency.',
}

export default function FinanceArAndApPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Finance: AR & AP' },
        ]}
      />
      <main>
        <FinanceHero />
        <FinanceFeatureStrip />
        <FinanceWhySection />
        <FinanceApproachSection />
        <FinanceSolutionsSection />
        <FinanceUseCasesSection />
        <FinanceCtaBanner />
        <FinanceFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}