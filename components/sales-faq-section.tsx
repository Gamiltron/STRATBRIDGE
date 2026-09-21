import { ArrowRightIcon } from '@/components/icons'

const faqs = [
  {
    q: 'Which CRM or marketing automation platforms do you work with?',
    a: 'We work with leading CRM and marketing automation platforms such as Salesforce and HubSpot, and are platform-agnostic — supporting selection, configuration and optimisation to fit your business.',
  },
  {
    q: 'Can you help with both B2B and B2C GTM strategies?',
    a: 'Yes. We design GTM strategies for both B2B and B2C organisations, tailoring technology, data and processes to each model\'s buying journey.',
  },
  {
    q: 'Do you support ongoing optimisation after implementation?',
    a: 'Yes. We support you beyond go-live with analytics, adoption and continuous optimisation to keep improving performance and ROI.',
  },
]

export function SalesFaqSection() {
  return (
    <section className="bg-cream" aria-labelledby="sales-faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              FAQs
            </p>
            <h2
              id="sales-faq-heading"
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