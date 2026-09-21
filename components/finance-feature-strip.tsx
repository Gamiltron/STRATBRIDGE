import {
  GearIcon,
  BarChartIcon,
  DocumentIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '@/components/icons'

const values = [
  { Icon: GearIcon, label: 'Process Automation' },
  { Icon: BarChartIcon, label: 'Real-time Visibility' },
  { Icon: DocumentIcon, label: 'Reduced Manual Effort' },
  { Icon: ShieldCheckIcon, label: 'Compliance & Control' },
  { Icon: UsersIcon, label: 'Stronger Vendor & Customer Experience' },
]

export function FinanceFeatureStrip() {
  return (
    <section className="bg-cream-dark/60" aria-label="Finance AR and AP at a glance">
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