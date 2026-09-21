import {
  TargetIcon,
  BarChartIcon,
  GearIcon,
  TrendingUpIcon,
} from '@/components/icons'

const values = [
  { Icon: TargetIcon, label: 'GTM Strategy & Operating Model' },
  { Icon: BarChartIcon, label: 'MarTech Stack Advisory' },
  { Icon: TargetIcon, label: 'Demand Generation & ABM' },
  { Icon: GearIcon, label: 'Sales Enablement & Automation' },
  { Icon: TrendingUpIcon, label: 'Revenue Operations & Analytics' },
]

export function SalesFeatureStrip() {
  return (
    <section className="bg-cream-dark/60" aria-label="Sales and GTM at a glance">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-navy/15">
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