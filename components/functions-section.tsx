'use client'

import {
  BoxIcon,
  TruckIcon,
  CartIcon,
  DatabaseIcon,
  BarChartIcon,
  LeafIcon,
  ArrowRightIcon,
} from '@/components/icons'

const functions = [
  { Icon: BoxIcon, label: 'Supply Chain' },
  { Icon: TruckIcon, label: 'Logistics' },
  { Icon: CartIcon, label: 'Procurement' },
  { Icon: DatabaseIcon, label: 'Finance: AR & AP' },
  { Icon: BarChartIcon, label: 'Sales, Demand Generation & GTM' },
  { Icon: LeafIcon, label: 'Sustainability & Carbon Visibility' },
]

function handleExploreFunctions() {
  window.dispatchEvent(
    new CustomEvent('open-functions-dropdown', { detail: 'Functions' }),
  )
}

export function FunctionsSection() {
  return (
    <section className="bg-cream" aria-labelledby="functions-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Functions We Support
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="functions-heading"
            className="max-w-xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Deep functional expertise. Real business impact<span className="text-rust">.</span>
          </h2>
          <button
            type="button"
            onClick={handleExploreFunctions}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
          >
            Explore All Functions
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        <ul className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0 lg:divide-x lg:divide-navy/15">
          {functions.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center px-4 text-center"
            >
              <Icon className="h-9 w-9 text-rust" />
              <h3 className="mt-4 text-sm font-semibold leading-snug text-navy">
                {label}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
