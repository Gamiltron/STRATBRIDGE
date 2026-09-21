import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const routeStats = ['TRUCK LOADS', 'ON-TIME', 'COST / KM']

export function LogisticsHero() {
  return (
    <section className="bg-cream" aria-labelledby="logistics-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            CONNECTED. EFFICIENT. READY FOR WHAT&apos;S NEXT.
          </p>
          <h1
            id="logistics-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Logistics
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Build a smarter, more agile logistics function with the right
            strategy, processes and technology to move goods efficiently,
            reduce costs and deliver a better customer experience.
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
                  DISTRIBUTION NETWORK
                </span>
                <span className="rounded-full bg-rust/10 px-2 py-1 text-[8px] font-semibold tracking-wide text-rust">
                  LIVE
                </span>
              </div>
              <div className="relative mt-4 h-[55%] rounded border border-navy/10 bg-cream-dark/60">
                <svg viewBox="0 0 200 120" className="h-full w-full text-navy/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    d="M30 95 C 70 95, 60 40, 105 40 S 150 80, 178 28"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M105 40 V 88"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  <circle cx="30" cy="95" r="5" fill="#ede6da" stroke="#bd5631" strokeWidth="2" />
                  <circle cx="105" cy="40" r="5" fill="#ede6da" stroke="#1c403c" strokeWidth="2" />
                  <circle cx="178" cy="28" r="5" fill="#ede6da" stroke="#1c403c" strokeWidth="2" />
                  <circle cx="105" cy="88" r="5" fill="#ede6da" stroke="#1c403c" strokeWidth="2" />
                  <g fill="none" stroke="#1c403c" strokeWidth="1.5">
                    <rect x="14" y="96" width="32" height="13" />
                    <path d="M46 96h12l9 13H38v-4" />
                    <circle cx="23" cy="109" r="3" />
                    <circle cx="55" cy="109" r="3" />
                  </g>
                </svg>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {routeStats.map((label) => (
                  <div key={label} className="rounded bg-cream-dark/70 p-3">
                    <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                      {label}
                    </div>
                    <div className="mt-1.5 h-2.5 w-12 rounded-full bg-navy/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto h-2.5 w-32 rounded-b-md bg-navy/70" />
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            RIGHT NETWORKS
            <br />
            HIGHER UTILISATION
            <br />
            LOWER COSTS
            <br />
            BETTER VISIBILITY
            <br />
            HAPPIER CUSTOMERS
          </p>
        </div>
      </div>
    </section>
  )
}