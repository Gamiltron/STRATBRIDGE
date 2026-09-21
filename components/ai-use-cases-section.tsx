import {
  ScanTextIcon,
  WorkflowIcon,
  TrendingUpIcon,
  UsersIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: ScanTextIcon,
    title: 'Intelligent Document Processing',
    body: 'Extract, classify and validate information from invoices, contracts and forms — automatically and accurately.',
  },
  {
    Icon: WorkflowIcon,
    title: 'Operational Automation',
    body: 'Orchestrate end-to-end processes across systems to eliminate manual handoffs and reduce errors.',
  },
  {
    Icon: TrendingUpIcon,
    title: 'Insights & Forecasting',
    body: 'Surface patterns early and forecast demand, costs and performance with AI-driven analytics.',
  },
  {
    Icon: UsersIcon,
    title: 'Employee Productivity',
    body: 'Give teams intelligent assistance for the work they do every day, enabling focus on what matters.',
  },
]

export function AiUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="ai-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Example Use Cases
        </p>
        <h2
          id="ai-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real world applications, tangible results<span className="text-rust">.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ Icon, title, body }) => (
            <article
              key={title}
              className="flex flex-col border-l-2 border-rust/70 bg-cream-dark/40 p-6"
            >
              <Icon className="h-8 w-8 text-rust" />
              <h3 className="mt-5 text-base font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}