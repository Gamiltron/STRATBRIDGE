import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function HomeCta() {
  return (
    <section
      id="contact"
      className="bg-cream"
      aria-labelledby="home-cta-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Let&apos;s Build What&apos;s Next
          </p>
          <h2
            id="home-cta-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl"
          >
            Have a transformation initiative in mind?
          </h2>
          <p className="mt-4 text-base text-navy/70">
            Let&apos;s explore how we can help you turn it into reality.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-3 bg-rust px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
        >
          Start a Conversation
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
