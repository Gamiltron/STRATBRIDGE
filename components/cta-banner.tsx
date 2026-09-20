import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-navy"
      aria-labelledby="cta-heading"
    >
      <img
        src="/images/mountains.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/40"
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/80">
            Let&apos;s Build What&apos;s Next
          </p>
          <h2
            id="cta-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl"
          >
            Ready to turn your ambition into impact?
          </h2>
          <p className="mt-4 text-base text-cream/80">
            Let&apos;s discuss how Stratbridge &amp; Co. can support your
            transformation journey.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex w-fit items-center gap-3 bg-rust px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
        >
          Let&apos;s Talk
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
