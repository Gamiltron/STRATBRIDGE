import { ArrowRightIcon } from '@/components/icons'

const faqs = [
  {
    q: 'Which ERP and CRM platforms do you work with?',
    a: 'We work across the leading ERP and CRM platforms and are platform-agnostic — supporting vendor evaluation, selection, implementation and optimisation to find the right fit for your business.',
  },
  {
    q: 'How long does a typical transformation take?',
    a: 'Timelines vary with scope and complexity, but every transformation is structured around a clear path — from assessment and design through implementation and optimisation — with milestones agreed upfront.',
  },
  {
    q: 'Do you support integration with existing systems?',
    a: 'Yes. System integration and data migration are core to our approach, and we design target states that connect your ERP and CRM with your wider technology landscape.',
  },
]

export function ErpFaqSection() {
  return (
    <section className="bg-cream" aria-labelledby="erp-faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              FAQs
            </p>
            <h2
              id="erp-faq-heading"
              className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl"
            >
              Common questions
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
          >
            View All FAQs
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 divide-y divide-navy/15 border-t border-navy/15">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-navy">
                {q}
                <span className="text-xl text-rust transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy/70">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}