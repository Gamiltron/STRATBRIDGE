import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function AiHero() {
  return (
    <section className="bg-cream" aria-labelledby="ai-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            IDEAS TO EFFICIENCY
          </p>
          <h1
            id="ai-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            AI &amp; Automation
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Unlock efficiency, insight and scale with practical AI and
            automation solutions tailored to your business.
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
            alt="Architectural concrete bridge and overpass against the sky"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            AUTOMATE
            <br />
            SIMPLIFY
            <br />
            AUGMENT
            <br />
            ACCELERATE
          </p>
        </div>
      </div>
    </section>
  )
}