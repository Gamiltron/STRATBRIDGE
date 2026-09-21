import {
  DocumentIcon,
  UsersIcon,
  TargetIcon,
  BarChartIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: DocumentIcon,
    title: 'Launch in a New Market',
    body: 'Set up a tech-enabled demand generation engine to build pipeline in a new geography.',
  },
  {
    Icon: UsersIcon,
    title: 'Improve Sales Productivity',
    body: 'Implement CRM, automation and enablement tools to help sales teams do more with less.',
  },
  {
    Icon: TargetIcon,
    title: 'Account-Based Selling',
    body: 'Use intent data and personalised campaigns to engage strategic accounts.',
  },
  {
    Icon: BarChartIcon,
    title: 'Revenue Operations',
    body: 'Build dashboards and governance to drive data-driven sales and marketing decisions.',
  },
]

export function SalesUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="sales-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          TYPICAL USE CASES
        </p>
        <h2
          id="sales-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real-world GTM challenges. Proven results<span className="text-rust">.</span>
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