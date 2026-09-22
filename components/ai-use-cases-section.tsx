import {
  DocumentIcon,
  TruckIcon,
  BarChartIcon,
  UsersIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: DocumentIcon,
    title: 'Intelligent Document Processing',
    body: 'Automate data extraction and processing from invoices, contracts and other documents.',
  },
  {
    Icon: TruckIcon,
    title: 'Operational Automation',
    body: 'Automate repetitive tasks across supply chain, logistics, procurement and finance.',
  },
  {
    Icon: BarChartIcon,
    title: 'Insights & Forecasting',
    body: 'Use AI to surface insights, identify trends and improve forecast accuracy.',
  },
  {
    Icon: UsersIcon,
    title: 'Employee Productivity',
    body: 'Enable your teams with GenAI tools and automated workflows.',
  },
]

export function AiUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="ai-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          EXAMPLE USE CASES
        </p>
        <h2
          id="ai-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real possibilities across your business.
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