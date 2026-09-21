import {
  RouteIcon,
  GearIcon,
  DatabaseIcon,
  TruckIcon,
  BarChartIcon,
  LeafIcon,
  UsersIcon,
  CheckIcon,
} from '@/components/icons'

const deliverables = [
  { Icon: RouteIcon, label: 'Supply chain strategy and target operating model' },
  { Icon: GearIcon, label: 'ERP / SCM / APS implementation support' },
  { Icon: DatabaseIcon, label: 'Demand forecasting and inventory optimisation' },
  { Icon: TruckIcon, label: 'Network and logistics optimisation' },
  { Icon: BarChartIcon, label: 'Control tower and real-time visibility setup' },
  { Icon: LeafIcon, label: 'Sustainability and emissions tracking' },
  { Icon: UsersIcon, label: 'Change management and training' },
]

const impact = [
  'Higher service levels (OTIF, fill rates)',
  'Lower total supply chain costs',
  'Reduced inventory and working capital',
  'Greater visibility and faster decision-making',
  'Stronger resilience to disruptions',
  'Improved sustainability and lower emissions',
]

export function SupplyChainSolutionsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="supply-chain-solutions-heading">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            KEY DELIVERABLES
          </p>
          <h2
            id="supply-chain-solutions-heading"
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
            TECHNOLOGY-ENABLED SUPPLY CHAINS. STRONGER BUSINESSES.
          </p>
        </div>
      </div>
    </section>
  )
}