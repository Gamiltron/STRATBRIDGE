import {
  SearchIcon,
  ShieldIcon,
  FileContractIcon,
  UsersIcon,
} from '@/components/icons'

const values = [
  { Icon: SearchIcon, label: 'Vendor Sourcing & Evaluation' },
  { Icon: ShieldIcon, label: 'Risk & Compliance Assessment' },
  { Icon: FileContractIcon, label: 'Contract Negotiation & Structuring' },
  { Icon: UsersIcon, label: 'Strategic Vendor Partnerships' },
]

export function ProcurementFeatureStrip() {
  return (
    <section className="bg-cream-dark/60" aria-label="Procurement and contracting at a glance">
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