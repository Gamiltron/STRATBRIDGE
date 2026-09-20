import {
  DocumentIcon,
  BarChartIcon,
  ClipboardIcon,
  UsersIcon,
  GearIcon,
  CheckIcon,
} from '@/components/icons'

const deliverables = [
  { Icon: DocumentIcon, label: 'Readiness assessment report' },
  { Icon: BarChartIcon, label: 'Gap analysis and maturity scorecard' },
  { Icon: ClipboardIcon, label: 'Prioritised recommendations and roadmap' },
  { Icon: UsersIcon, label: 'Stakeholder alignment workshops' },
  { Icon: GearIcon, label: 'Support for next phase planning' },
]

const outcomes = [
  'Clear view of current state',
  'Aligned stakeholders',
  'Reduced execution risk',
  'Prioritised investments',
  'Faster time to value',
]

export function ReadinessDeliverablesSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="readiness-deliverables-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        {/* Deliverables list */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Key Deliverables
          </p>
          <h2
            id="readiness-deliverables-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Actionable insights, not just a report<span className="text-rust">.</span>
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

        {/* Outcomes card */}
        <div className="flex flex-col bg-navy-dark p-10 text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            Outcomes
          </p>
          <ul className="mt-6 space-y-4">
            {outcomes.map((label) => (
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
            From Assessment
            <br />
            to Action.
          </p>
        </div>
      </div>
    </section>
  )
}
