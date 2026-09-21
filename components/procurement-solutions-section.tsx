import {
  DocumentIcon,
  ListIcon,
  BarChartIcon,
  ShieldCheckIcon,
  FileCheckIcon,
  CheckIcon,
} from '@/components/icons'

const deliverables = [
  { Icon: DocumentIcon, label: 'Procurement strategy and sourcing plan' },
  { Icon: ListIcon, label: 'Vendor shortlisting and evaluation reports' },
  { Icon: BarChartIcon, label: 'Commercial negotiation and contract support' },
  { Icon: ShieldCheckIcon, label: 'Risk, compliance and legal alignment' },
  { Icon: FileCheckIcon, label: 'Final contract review and governance setup' },
]

const impact = [
  'Better vendor selection and fit',
  'More favourable commercial terms',
  'Reduced procurement and delivery risk',
  'Greater transparency and accountability',
  'Faster time to value',
]

export function ProcurementSolutionsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="procurement-solutions-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            KEY DELIVERABLES
          </p>
          <h2
            id="procurement-solutions-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Practical outputs. Measurable impact<span className="text-rust">.</span>
          </h2>

          <ul className="mt-10 space-y-6">
            {deliverables.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-4">
                <Icon className="h-6 w-6 shrink-0 text-rust" />
                <span className="text-base font-medium text-navy">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-navy-dark p-10 text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            BUSINESS IMPACT
          </p>
          <ul className="mt-6 space-y-4">
            {impact.map((label) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rust text-cream">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span className="text-sm text-cream/90">{label}</span>
              </li>
            ))}
          </ul>
          <hr className="my-6 border-cream/15" />
          <p className="mt-auto text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-cream/80">
            RIGHT TECHNOLOGY PARTNERS. REAL BUSINESS IMPACT.
          </p>
        </div>
      </div>
    </section>
  )
}