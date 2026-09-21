import {
  CartIcon,
  GearIcon,
  DatabaseIcon,
  ShieldIcon,
} from '@/components/icons'

const useCases = [
  {
    Icon: CartIcon,
    title: 'Indirect Spend Optimisation',
    body: 'Rationalise tail spend and consolidate suppliers using digital tools.',
  },
  {
    Icon: GearIcon,
    title: 'Procurement Automation',
    body: 'Implement e-procurement workflows and approvals to reduce cycle time.',
  },
  {
    Icon: DatabaseIcon,
    title: 'Supplier Management',
    body: 'Build supplier performance frameworks and SRM for better collaboration.',
  },
  {
    Icon: ShieldIcon,
    title: 'Compliance & Risk',
    body: 'Strengthen controls and ensure regulatory compliance with digital monitoring.',
  },
]

export function ProcurementFunctionUseCasesSection() {
  return (
    <section className="bg-cream" aria-labelledby="proc-function-use-cases-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          TYPICAL USE CASES
        </p>
        <h2
          id="proc-function-use-cases-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          Real-world procurement challenges. Proven results<span className="text-rust">.</span>
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