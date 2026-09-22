'use client'

import {
  ClipboardIcon,
  ChipIcon,
  DatabaseIcon,
  DocumentIcon,
  LeafIcon,
  UsersIcon,
  ArrowRightIcon,
} from '@/components/icons'

const services = [
  { Icon: ClipboardIcon, label: 'Readiness Assessment' },
  { Icon: ChipIcon, label: 'AI & Automation' },
  { Icon: DatabaseIcon, label: 'ERP & CRM Transformation' },
  { Icon: DocumentIcon, label: 'RFP & Vendor Management' },
  { Icon: LeafIcon, label: 'Commercials & Contracting' },
  { Icon: UsersIcon, label: 'Change Management & Hypercare' },
]

function handleExploreServices() {
  window.dispatchEvent(
    new CustomEvent('open-services-dropdown', { detail: 'Services' }),
  )
}

export function ServicesSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Our Services
        </p>
        <h2
          id="services-heading"
          className="mt-4 max-w-2xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          End-to-end support for your transformation journey<span className="text-rust">.</span>
        </h2>

        <ul className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-4 lg:gap-y-0 lg:divide-x lg:divide-navy/15">
          {services.map(({ Icon, label }) => (
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

        <button
          type="button"
          onClick={handleExploreServices}
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
        >
          Explore Our Services
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
