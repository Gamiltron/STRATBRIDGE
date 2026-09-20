import { TargetIcon, EyeIcon, UsersIcon, LeafIcon } from '@/components/icons'

const pillars = [
  {
    Icon: TargetIcon,
    title: 'Our Mission',
    body: 'Enable businesses to achieve more through technology-driven transformation.',
  },
  {
    Icon: EyeIcon,
    title: 'Our Vision',
    body: 'To be a trusted partner for organisations looking to build a smarter, more efficient and sustainable future.',
  },
  {
    Icon: UsersIcon,
    title: 'Our Values',
    body: 'Integrity, client success, continuous learning and a commitment to measurable impact.',
  },
  {
    Icon: LeafIcon,
    title: 'Our Belief',
    body: 'Technology is a means to an end — real progress happens when ideas translate into execution.',
  },
]

export function PurposeSection() {
  return (
    <section
      className="bg-cream-dark/60"
      aria-labelledby="purpose-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Our Purpose
          </p>
          <h2
            id="purpose-heading"
            className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Progress through transformation<span className="text-rust">.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            We partner with forward-looking organisations to solve complex
            business challenges, leverage technology effectively and create
            lasting value.
          </p>
        </div>

        <ul className="mt-14 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-navy/15">
          {pillars.map(({ Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col items-center px-6 text-center"
            >
              <Icon className="h-10 w-10 text-rust" />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
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
