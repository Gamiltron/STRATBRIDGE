import {
  TruckIcon,
  BarChartIcon,
  MapPinIcon,
  UsersIcon,
} from '@/components/icons'

const values = [
  { Icon: TruckIcon, label: 'Network Design & Optimisation' },
  { Icon: BarChartIcon, label: 'Freight Cost Reduction' },
  { Icon: MapPinIcon, label: 'End-to-End Visibility' },
  { Icon: UsersIcon, label: 'Technology Enablement & Process Efficiency' },
]

export function LogisticsFeatureStrip() {
  return (
    <section className="bg-cream-dark/60" aria-label="Logistics at a glance">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-navy/15">
          {values.map(({ Icon, label }) => (
            <li
              key={label}
              className="flex items-center justify-center gap-3 px-4 text-center"
            >
              <Icon className="h-7 w-7 shrink-0 text-rust" />
              <span className="text-sm font-medium leading-snug text-navy">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}