import { SiteHeader } from '@/components/site-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { AiHero } from '@/components/ai-hero'
import { AiFeatureStrip } from '@/components/ai-feature-strip'
import { AiWhySection } from '@/components/ai-why-section'
import { AiApproachSection } from '@/components/ai-approach-section'
import { AiSolutionsSection } from '@/components/ai-solutions-section'
import { AiUseCasesSection } from '@/components/ai-use-cases-section'
import { AiCtaBanner } from '@/components/ai-cta-banner'
import { AiFaqSection } from '@/components/ai-faq-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Automation — Stratbridge & Co.',
  description:
    'We design, build and scale intelligent automation that turns everyday operations into a competitive advantage — cutting manual effort, sharpening decisions and freeing your people for work that truly matters.',
}

export default function AiAndAutomationPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Services" />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '#' },
          { label: 'AI & Automation' },
        ]}
      />
      <main>
        <AiHero />
        <AiFeatureStrip />
        <AiWhySection />
        <AiApproachSection />
        <AiSolutionsSection />
        <AiUseCasesSection />
        <AiCtaBanner />
        <AiFaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}