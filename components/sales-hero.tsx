import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const pipelineStats = ['NEW LEADS', 'PIPELINE', 'WON']

export function SalesHero() {
  return (
    <section className="bg-cream" aria-labelledby="sales-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            MODERN TOOLS. GREATER PIPELINE. REAL GROWTH.
          </p>
          <h1
            id="sales-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Sales, Demand Generation &amp; GTM
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Equip your revenue organisation with the right technology,
            processes and data to find, engage and convert more customers —
            faster.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Start a Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div aria-hidden="true" className="overflow-hidden">
          <div className="rounded-t-lg border border-navy/20 bg-navy-dark p-3">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cream p-5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                  PIPELINE GROWTH
                </span>
                <span className="rounded-full bg-rust/10 px-2 py-1 text-[8px] font-semibold tracking-wide text-rust">
                  LIVE
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {pipelineStats.map((label) => (
                  <div key={label} className="rounded bg-cream-dark/70 p-3">
                    <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                      {label}
                    </div>
                    <div className="mt-1.5 h-2.5 w-12 rounded-full bg-navy/60" />
                  </div>
                ))}
              </div>
              <div className="relative mt-4 h-[42%] rounded border border-navy/10 bg-cream-dark/60 p-2">
                <svg viewBox="0 0 200 90" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    d="M8 78 C 40 74, 48 60, 78 58 S 118 44, 140 34 S 180 18, 194 10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M194 10 V 84" strokeDasharray="3 3" opacity="0.4" />
                  <path d="M8 78 V 84 M78 58 V 84 M140 34 V 84" strokeDasharray="2 4" opacity="0.4" />
                  <circle cx="8" cy="78" r="3.5" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="78" cy="58" r="3.5" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="140" cy="34" r="3.5" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="194" cy="10" r="3.5" fill="#f6f2ea" stroke="#bd5631" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded bg-cream-dark/70 p-3">
                  <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                    SALES CYCLES
                  </div>
                  <div className="mt-1.5 h-2.5 w-12 rounded-full bg-rust/70" />
                </div>
                <div className="rounded bg-cream-dark/70 p-3">
                  <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                    WIN RATE
                  </div>
                  <div className="mt-1.5 h-2.5 w-12 rounded-full bg-navy/60" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-2.5 w-32 rounded-b-md bg-navy/70" />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            DATA-DRIVEN GTM
            <br />
            SALES AUTOMATION
            <br />
            INTENT &amp; INSIGHTS
            <br />
            PERSONALISATION AT SCALE
            <br />
            MEASURABLE REVENUE
            <br />
            IMPACT
          </p>
        </div>
      </div>
    </section>
  )
}