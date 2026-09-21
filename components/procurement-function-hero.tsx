import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const topRows = ['Sourcing', 'Supplier Management', 'Contracts']
const bottomRows = ['Spend Analytics', 'Savings']
const chartBars = ['h-6', 'h-9', 'h-7', 'h-12', 'h-8', 'h-14', 'h-10']

export function ProcurementFunctionHero() {
  return (
    <section className="bg-cream" aria-labelledby="proc-function-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            SMARTER PROCUREMENT. STRONGER BUSINESS.
          </p>
          <h1
            id="proc-function-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Procurement
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Enable a more intelligent, technology-driven procurement function
            with the right processes, systems and data to drive cost
            efficiency, transparency and strategic value.
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
                  PROCUREMENT DASHBOARD
                </span>
                <span className="rounded-full bg-rust/10 px-2 py-1 text-[8px] font-semibold tracking-wide text-rust">
                  LIVE
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {topRows.map((label) => (
                  <div key={label} className="rounded bg-cream-dark/70 p-2.5">
                    <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                      {label}
                    </div>
                    <div className="mt-1.5 h-2.5 w-10 rounded-full bg-navy/60" />
                  </div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {bottomRows.map((label) => (
                  <div key={label} className="rounded bg-cream-dark/70 p-2.5">
                    <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                      {label}
                    </div>
                    <div className="mt-1.5 h-2.5 w-10 rounded-full bg-navy/60" />
                  </div>
                ))}
              </div>
              <div className="mt-2.5 rounded bg-cream-dark/70 p-3">
                <div className="flex items-end gap-1.5">
                  {chartBars.map((height) => (
                    <span
                      key={height}
                      className={`w-full rounded-sm bg-rust/70 ${height}`}
                    />
                  ))}
                </div>
                <div className="mt-2 h-1.5 w-1/2 rounded-full bg-navy/20" />
              </div>
            </div>
          </div>
          <div className="mx-auto h-2.5 w-32 rounded-b-md bg-navy/70" />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            GREATER TRANSPARENCY
            <br />
            LOWER COSTS
            <br />
            STRONGER SUPPLIERS
            <br />
            HIGHER BUSINESS IMPACT
          </p>
        </div>
      </div>
    </section>
  )
}