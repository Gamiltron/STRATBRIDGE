import { ArrowRightIcon } from '@/components/icons'

const faqs = [
  {
    q: 'Do you work with specific ERP systems?',
    a: 'Yes. We work across leading ERP platforms such as SAP, Oracle and Microsoft, and we are platform-agnostic — supporting selection, configuration and optimisation to fit your business.',
  },
  {
    q: 'Can you help automate invoice processing and approvals?',
    a: 'Yes. We design and deploy automation across invoice capture, three-way matching and approval workflows — reducing manual effort, errors and cycle times.',
  },
  {
    q: 'How do you measure the impact of AR & AP transformation?',
    a: 'We track outcomes against clear metrics such as cycle times, DSO and DPO, processing costs, accuracy and compliance — and continuously refine to unlock further value.',
  },
]

export function FinanceFaqSection() {
  return (
    <section className="bg-cream" aria-labelledby="finance-faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              FAQs
            </p>
            <h2
              id="finance-faq-heading"
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