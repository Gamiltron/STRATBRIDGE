import { BarChartIcon, GearIcon, UsersIcon, LeafIcon } from '@/components/icons'

const items = [
  {
    Icon: BarChartIcon,
    title: 'Industry Experience',
    body: 'Deep domain expertise across multiple industries and markets.',
  },
  {
    Icon: GearIcon,
    title: 'Technology-Driven',
    body: 'Strong understanding of digital tools, data and integration across the enterprise.',
  },
  {
    Icon: UsersIcon,
    title: 'End-to-End Support',
    body: 'From strategy and business case to implementation, change management and adoption.',
  },
  {
    Icon: LeafIcon,
    title: 'Long-Term Focus',
    body: 'Commitment to sustainable growth and measurable, real-world impact.',
  },
]

export function DifferentiatorsSection() {
  return (
    <section className="bg-cream" aria-labelledby="differentiators-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            What Makes Us Different
          </p>
          <h2
            id="differentiators-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            More than advice. A true partner
            <span className="text-rust">.</span>
          </h2>
        </div>

        <ul className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-navy/15">
          {items.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col items-center px-6 text-center"
            >
              <Icon className="h-9 w-9 text-rust" />
              <h3 className="mt-5 text-base font-semibold text-navy">
                {title}
              </h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-navy/70">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
