import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function ReadinessHero() {
  return (
    <section className="bg-cream" aria-labelledby="readiness-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        {/* Text column */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Assess. Align. Accelerate.
          </p>
          <h1
            id="readiness-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Readiness Assessment
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            A clear, objective view of where you are — and what it will take
            to get to where you want to be.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Start a Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Image column */}
        <div className="overflow-hidden">
          <img
            src="/images/home-challenge-wall.png"
            alt="Angular concrete architectural wall against a clear blue sky"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Rail column */}
        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            Clarity
            <br />
            Today,
            <br />
            Confidence
            <br />
            Tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
