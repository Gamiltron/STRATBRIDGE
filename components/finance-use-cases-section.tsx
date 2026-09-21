import {
  DocumentIcon,
  UsersIcon,
  DatabaseIcon,
  BarChartIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: DocumentIcon,
    title: 'Accounts Payable Automation',
    body: 'Automate invoice capture, three-way matching and approval workflows.',
  },
  {
    Icon: UsersIcon,
    title: 'Accounts Receivable Optimisation',
    body: 'Implement digital collections, customer self-service and dispute management.',
  },
  {
    Icon: DatabaseIcon,
    title: 'ERP Finance Transformation',
    body: 'Streamline and standardise AR & AP processes as part of an ERP implementation (e.g., SAP, Oracle, Microsoft).',
  },
  {
    Icon: BarChartIcon,
    title: 'Analytics & Reporting',
    body: 'Set up real-time dashboards for cash flow, DSO, DPO and supplier/customer performance.',
  },
]

export function FinanceUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="finance-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          TYPICAL USE CASES
        </p>
        <h2
          id="finance-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real-world AR &amp; AP transformation<span className="text-rust">.</span>
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