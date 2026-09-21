import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { SupplyChainHero } from '@/components/supply-chain-hero'
import { SupplyChainFeatureStrip } from '@/components/supply-chain-feature-strip'
import { SupplyChainWhySection } from '@/components/supply-chain-why-section'
import { SupplyChainApproachSection } from '@/components/supply-chain-approach-section'
import { SupplyChainSolutionsSection } from '@/components/supply-chain-solutions-section'
import { SupplyChainUseCasesSection } from '@/components/supply-chain-use-cases-section'
import { SupplyChainCtaBanner } from '@/components/supply-chain-cta-banner'
import { SupplyChainFaqSection } from '@/components/supply-chain-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supply Chain Transformation — Stratbridge & Co.',
  description:
    'Modernise your supply chain with the right technology, processes and data to drive efficiency, resilience and growth.',
}

export default function SupplyChainTransformationPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Functions" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Functions', href: '#' },
          { label: 'Supply Chain' },
        ]}
      />
      <main>
        <SupplyChainHero />
        <SupplyChainFeatureStrip />
        <SupplyChainWhySection />
        <SupplyChainApproachSection />
        <SupplyChainSolutionsSection />
        <SupplyChainUseCasesSection />
        <SupplyChainCtaBanner />
        <SupplyChainFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}