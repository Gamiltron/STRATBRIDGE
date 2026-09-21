import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const dashboardStats = ['TOTAL EMISSIONS', 'FUEL EFFICIENCY', 'RENEWABLE ENERGY']

export function SustainabilityHero() {
  return (
    <section className="bg-cream" aria-labelledby="sustainability-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            MEASURE TODAY. A CLEANER TOMORROW.
          </p>
          <h1
            id="sustainability-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Sustainability &amp; Emissions
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Turn your sustainability ambitions into measurable outcomes with
            the right data, technology and processes — reducing emissions,
            improving efficiency and creating long-term business value.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Start a Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div aria-hidden="true" className="overflow-hidden rounded-lg border border-navy/20 bg-navy-dark p-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-cream p-5">
            <svg
              viewBox="0 0 200 100"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 h-3/5 w-full text-navy/20"
              fill="none"
              stroke="currentColor"
            >
              <path d="M100 0 56 100M100 0 144 100" strokeWidth="1.5" />
              <path d="M0 22h200M0 48h200M0 74h200" strokeWidth="3" strokeDasharray="16 12" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                EMISSIONS DASHBOARD
              </span>
              <span className="rounded-full bg-rust/10 px-2 py-1 text-[8px] font-semibold tracking-wide text-rust">
                LIVE
              </span>
            </div>
            <div className="relative z-10 mt-4 flex items-end justify-between gap-4">
              <div>
                <div className="font-serif text-4xl font-semibold text-navy">
                  -32%
                </div>
                <div className="mt-1 text-[8px] font-semibold tracking-wide text-rust">
                  EMISSIONS REDUCTION
                </div>
              </div>
              <div className="h-1 w-24 rounded-full bg-navy/10">
                <div className="h-1 w-3/4 rounded-full bg-rust" />
              </div>
            </div>
            <div className="relative z-10 mt-5 grid grid-cols-3 gap-2">
              {dashboardStats.map((label) => (
                <div key={label} className="rounded bg-cream-dark/80 p-2.5">
                  <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                    {label}
                  </div>
                  <div className="mt-1.5 h-2.5 w-10 rounded-full bg-navy/60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            MEASURE
            <br />
            MONITOR
            <br />
            REDUCE
            <br />
            REPORT
            <br />
            CREATE VALUE
          </p>
        </div>
      </div>
    </section>
  )
}