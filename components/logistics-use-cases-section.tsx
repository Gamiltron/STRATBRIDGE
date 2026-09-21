import {
  FactoryIcon,
  TruckIcon,
  EyeIcon,
  LeafIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: FactoryIcon,
    title: 'Network Optimisation',
    body: 'Redesign distribution network to reduce transit time and costs.',
  },
  {
    Icon: TruckIcon,
    title: 'Freight Procurement',
    body: 'Leverage market intelligence to negotiate better rates with carriers.',
  },
  {
    Icon: EyeIcon,
    title: 'Control Tower Implementation',
    body: 'Enable real-time tracking and exception management across all modes.',
  },
  {
    Icon: LeafIcon,
    title: 'Sustainable Logistics',
    body: 'Reduce emissions through modal optimisation and route efficiency.',
  },
]

export function LogisticsUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="logistics-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          TYPICAL USE CASES
        </p>
        <h2
          id="logistics-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real-world logistics challenges. Proven results<span className="text-rust">.</span>
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