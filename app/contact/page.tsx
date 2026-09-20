import { SiteHeader } from '@/components/site-header'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Stratbridge & Co.',
  description:
    'Start a conversation with Stratbridge & Co. Tell us about your transformation initiative and we will be in touch within one business day.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteHeader active="Contact us" />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}