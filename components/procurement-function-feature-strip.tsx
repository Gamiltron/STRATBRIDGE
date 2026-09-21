import {
  BarChartIcon,
  GearIcon,
  UsersIcon,
  DocumentIcon,
  ShieldCheckIcon,
} from '@/components/icons'

const values = [
  { Icon: BarChartIcon, label: 'Process & Policy Design' },
  { Icon: GearIcon, label: 'Technology Enablement' },
  { Icon: UsersIcon, label: 'Supplier & Category Management' },
  { Icon: DocumentIcon, label: 'Data & Analytics' },
  { Icon: ShieldCheckIcon, label: 'Governance & Compliance' },
]

export function ProcurementFunctionFeatureStrip() {
  return (
    <section className="bg-cream-dark/60" aria-label="Procurement at a glance">
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