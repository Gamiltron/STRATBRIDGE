import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const stages = ['PLAN', 'SOURCE', 'MAKE', 'DELIVER', 'RETURN']
const metrics = [
  { label: 'OTIF', value: '98%' },
  { label: 'INVENTORY', value: '-22%' },
  { label: 'COST TO SERVE', value: '-15%' },
]

export function SupplyChainHero() {
  return (
    <section className="bg-cream" aria-labelledby="supply-chain-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            SMARTER SUPPLY CHAINS. STRONGER BUSINESSES.
          </p>
          <h1
            id="supply-chain-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Supply Chain Transformation
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Modernise your supply chain with the right technology, processes
            and data to drive efficiency, resilience and growth.
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
          <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cream p-5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                FROM DATA TO A SMARTER SUPPLY CHAIN
              </span>
              <span className="rounded-full bg-rust/10 px-2 py-1 text-[8px] font-semibold tracking-wide text-rust">
                LIVE
              </span>
            </div>
            <div className="mt-5 grid grid-cols-5 gap-1.5">
              {stages.map((stage) => (
                <div
                  key={stage}
                  className="flex items-center justify-center rounded bg-navy px-1 py-2 text-[8px] font-semibold tracking-wide text-cream"
                >
                  {stage}
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {metrics.map(({ label, value }) => (
                <div key={label} className="rounded bg-cream-dark/70 p-3">
                  <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                    {label}
                  </div>
                  <div className="mt-1 font-serif text-2xl font-semibold text-navy">
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded bg-cream-dark/70 p-3">
              <div className="flex items-center justify-between gap-2">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <span
                    key={i}
                    className="h-10 w-full rounded-sm bg-navy"
                    style={{
                      opacity: 0.15 + (i % 4) * 0.18,
                      transform: `translateY(${((i % 3) - 1) * 2}px)`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 h-1.5 w-1/3 rounded-full bg-navy/20" />
            </div>
          </div>
        </div>

        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            GREATER VISIBILITY
            <br />
            HIGHER EFFICIENCY
            <br />
            LOWER COSTS
            <br />
            STRONGER RESILIENCE
            <br />
            SUSTAINABLE GROWTH
          </p>
        </div>
      </div>
    </section>
  )
}