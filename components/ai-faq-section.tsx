'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@/components/icons'

const faqs = [
  {
    q: 'How do we decide where to start with AI & automation?',
    a: 'We begin by understanding your processes, data and business goals, then identify the use cases offering the strongest combination of value and feasibility — so you start where the impact is most tangible.',
  },
  {
    q: 'How do you ensure responsible and secure AI adoption?',
    a: 'Responsible AI is built in from the start. We embed governance, data privacy, bias mitigation and human oversight into the design so every automation is transparent, compliant and safe to scale.',
  },
  {
    q: 'Do you provide ongoing support after implementation?',
    a: 'Yes. We support you beyond go-live with change management, hypercare and continuous optimisation, ensuring your automation matures, adapts and keeps delivering results.',
  },
]

export function AiFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-cream" aria-labelledby="ai-faq-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
              FAQs
            </p>
            <h2
              id="ai-faq-heading"
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
          {faqs.map(({ q, a }, index) => {
            const isOpen = openIndex === index
            return (
              <div key={q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`ai-faq-panel-${index}`}
                  id={`ai-faq-button-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-navy transition-colors hover:text-rust"
                >
                  {q}
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-xl leading-none text-rust transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`ai-faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`ai-faq-button-${index}`}
                  hidden={!isOpen}
                >
                  <p className="pb-5 max-w-3xl text-sm leading-relaxed text-navy/70">
                    {a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}