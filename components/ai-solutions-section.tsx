import {
  ChipIcon,
  GearIcon,
  BarChartIcon,
  DocumentIcon,
  UsersIcon,
  CheckIcon,
} from '@/components/icons'

const solutions = [
  {
    Icon: ChipIcon,
    label: 'AI use case identification and prioritisation',
  },
  {
    Icon: GearIcon,
    label: 'Process automation (RPA & intelligent workflows)',
  },
  {
    Icon: BarChartIcon,
    label: 'Data-driven insights and analytics',
  },
  {
    Icon: DocumentIcon,
    label: 'GenAI tools for business productivity',
  },
  {
    Icon: UsersIcon,
    label: 'Change management and enablement',
  },
]

const impact = [
  'Higher productivity',
  'Reduced manual effort',
  'Faster turnaround times',
  'Improved accuracy and compliance',
  'Better decision-making',
  'Scalable and future-ready operations',
]

export function AiSolutionsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="ai-solutions-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            KEY SOLUTIONS
          </p>
          <h2
            id="ai-solutions-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Practical applications. Measurable results.
          </h2>

          <ul className="mt-10 space-y-6">
            {solutions.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-rust" />
                <span className="text-base font-medium text-navy">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-navy-dark p-10 text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            IMPACT AREAS
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
            TURN TECHNOLOGY INTO A COMPETITIVE ADVANTAGE.
          </p>
        </div>
      </div>
    </section>
  )
}