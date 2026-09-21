import { ArrowRightIcon } from '@/components/icons'

const faqs = [
  {
    q: 'How do you help measure Scope 1, 2, and 3 emissions?',
    a: 'We help you identify data sources, automate collection and apply recognised methodologies to measure Scope 1, 2 and 3 emissions — giving you a credible, auditable baseline to reduce from.',
  },
  {
    q: 'Which sustainability platforms do you support?',
    a: 'We are platform-agnostic and support leading sustainability and carbon accounting platforms — including selection, configuration and integration with your existing systems.',
  },
  {
    q: 'Can you help align sustainability initiatives with financial ROI?',
    a: 'Yes. We connect sustainability initiatives to measurable financial and operational outcomes — efficiency gains, cost savings and new value opportunities.',
  },
]

export function SustainabilityFaqSection() {
  return (
    <section className="bg-cream" aria-labelledby="sustainability-faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              FAQs
            </p>
            <h2
              id="sustainability-faq-heading"
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