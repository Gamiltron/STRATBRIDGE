import { GearIcon, DatabaseIcon, UsersIcon, NetworkIcon } from '@/components/icons'

const audiences = [
  { Icon: GearIcon, label: 'Technology Transformation' },
  { Icon: DatabaseIcon, label: 'Process Improvement' },
  { Icon: UsersIcon, label: 'Cross-functional Initiatives' },
  { Icon: NetworkIcon, label: 'Pre-RFP / Vendor Evaluation' },
]

export function ReadinessWhoForSection() {
  return (
    <section className="bg-cream" aria-labelledby="readiness-who-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Who It&apos;s For
        </p>
        <h2
          id="readiness-who-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Designed for organisations undertaking technology or process
          transformation<span className="text-rust">.</span>
        </h2>

        <ul className="mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-0 lg:divide-x lg:divide-navy/15">
          {audiences.map(({ Icon, label }) => (
            <li key={label} className="flex flex-col items-center px-4 text-center">
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
