import {
  DocumentIcon,
  GearIcon,
  BarChartIcon,
  ShieldCheckIcon,
  LeafIcon,
  ClockIcon,
  CheckIcon,
} from '@/components/icons'

const deliverables = [
  { Icon: DocumentIcon, label: 'AR & AP strategy and target operating model' },
  { Icon: GearIcon, label: 'Process design and automation (e.g., invoice matching, collections, approvals)' },
  { Icon: BarChartIcon, label: 'Technology selection and implementation support (e.g., ERP, RPA, AI tools)' },
  { Icon: ShieldCheckIcon, label: 'Policies, controls and governance setup' },
  { Icon: LeafIcon, label: 'Training, change management and adoption support' },
  { Icon: ClockIcon, label: 'Performance tracking and continuous improvement' },
]

const impact = [
  'Improved cash flow and working capital',
  'Lower processing costs',
  'Faster cycle times (DSO & DPO)',
  'Higher accuracy and fewer disputes',
  'Greater visibility and control',
  'Improved compliance and audit readiness',
]

export function FinanceSolutionsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="finance-solutions-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            KEY DELIVERABLES
          </p>
          <h2
            id="finance-solutions-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Practical solutions. Measurable impact<span className="text-rust">.</span>
          </h2>

          <ul className="mt-10 space-y-6">
            {deliverables.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-rust" />
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
            EFFICIENCY TODAY. A STRONGER TOMORROW.
          </p>
        </div>
      </div>
    </section>
  )
}