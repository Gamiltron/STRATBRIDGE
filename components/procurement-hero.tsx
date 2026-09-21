import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function ProcurementHero() {
  return (
    <section className="bg-cream" aria-labelledby="procurement-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            RIGHT PARTNERS. BETTER OUTCOMES.
          </p>
          <h1
            id="procurement-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Procurement &amp; Contracting
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Source, evaluate and engage the right technology partners with
            confidence. Better contracts, lower risk and greater value for your
            transformation journey.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Start a Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="overflow-hidden">
          <img
            src="/images/skyline-bridge.png"
            alt="City skyline at sunset with a cable-stayed bridge over the water"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            THE RIGHT
            <br />
            TECHNOLOGY
            <br />
            THE RIGHT TERMS
            <br />
            THE RIGHT
            <br />
            OUTCOMES
          </p>
        </div>
      </div>
    </section>
  )
}