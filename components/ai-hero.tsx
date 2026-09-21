import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function AiHero() {
  return (
    <section className="bg-cream" aria-labelledby="ai-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Ideas to Efficiency
          </p>
          <h1
            id="ai-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            AI &amp; Automation<span className="text-rust">.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            We design, build and scale intelligent automation that turns
            everyday operations into a competitive advantage — cutting manual
            effort, sharpening decisions and freeing your people for work that
            truly matters.
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
            src="/images/AI & Automation.png"
            alt="Futuristic visual of intelligent automation and artificial intelligence"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            Automate,
            <br />
            Simplify,
            <br />
            Augment,
            <br />
            Accelerate.
          </p>
        </div>
      </div>
    </section>
  )
}