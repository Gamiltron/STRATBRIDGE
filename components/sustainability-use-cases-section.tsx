import {
  TruckIcon,
  FactoryIcon,
  LeafIcon,
  UsersIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: TruckIcon,
    title: 'Green Logistics',
    body: 'Optimise routes and loads to reduce fuel consumption and emissions.',
  },
  {
    Icon: FactoryIcon,
    title: 'Carbon Visibility',
    body: 'Implement digital tools to track emissions across operations and supply chain.',
  },
  {
    Icon: LeafIcon,
    title: 'Energy Efficiency',
    body: 'Identify and implement opportunities to reduce energy use and costs.',
  },
  {
    Icon: UsersIcon,
    title: 'ESG Reporting',
    body: 'Automate data collection and reporting for customers, investors and regulatory bodies.',
  },
]

export function SustainabilityUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="sustainability-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          TYPICAL USE CASES
        </p>
        <h2
          id="sustainability-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real-world sustainability challenges. Proven results<span className="text-rust">.</span>
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