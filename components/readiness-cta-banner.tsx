import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function ReadinessCtaBanner() {
  return (
    <section id="contact" className="bg-cream-dark" aria-labelledby="readiness-cta-heading">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Let&apos;s Build What&apos;s Next
          </p>
          <h2
            id="readiness-cta-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl"
          >
            Understand your readiness. Unlock what&apos;s possible.
          </h2>
          <p className="mt-3 text-base text-navy/70">
            Let&apos;s start with a conversation.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-3 bg-rust px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
        >
          Talk to Us
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
