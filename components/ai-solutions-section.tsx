import {
  TargetIcon,
  WorkflowIcon,
  BarChartIcon,
  ScanTextIcon,
  UsersIcon,
  CheckIcon,
} from '@/components/icons'

const solutions = [
  {
    Icon: TargetIcon,
    label: 'AI use case identification',
    body: 'Find the right opportunities to start with real business value',
  },
  {
    Icon: WorkflowIcon,
    label: 'Process automation',
    body: 'Automate repetitive, rule-based workflows end to end',
  },
  {
    Icon: BarChartIcon,
    label: 'Data, insights & analytics',
    body: 'Turn fragmented data into trusted inputs for AI',
  },
  {
    Icon: ScanTextIcon,
    label: 'Intelligent document processing',
    body: 'Extract and act on information locked in unstructured documents',
  },
  {
    Icon: UsersIcon,
    label: 'Human-augmenting AI',
    body: 'Equip teams with AI that supports judgement, not replaces it',
  },
]

const impact = [
  'Higher productivity',
  'Reduced manual effort',
  'Faster, more confident decisions',
  'Lower operating costs',
  'Growth without adding headcount',
]

export function AiSolutionsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="ai-solutions-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Key Solutions / Impact Areas
          </p>
          <h2
            id="ai-solutions-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Where AI &amp; automation create the impact<span className="text-rust">.</span>
          </h2>

          <ul className="mt-10 space-y-6">
            {solutions.map(({ Icon, label, body }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-rust" />
                <div>
                  <span className="text-base font-medium text-navy">{label}</span>
                  <p className="mt-1 text-sm leading-relaxed text-navy/70">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col bg-navy-dark p-10 text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
            Impact Areas
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
            From Effort
            <br />
            to Advantage.
          </p>
        </div>
      </div>
    </section>
  )
}