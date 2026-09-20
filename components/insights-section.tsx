import { ArrowRightIcon } from '@/components/icons'

const insights = [
  {
    image: '/images/insight-erp.png',
    alt: 'Modern glass office skyscraper facade',
    date: '12 Sep 2026',
    title: 'Turning ERP from a Cost Centre to a Growth Enabler',
  },
  {
    image: '/images/insight-ai.png',
    alt: 'Aerial view of a multi-level highway interchange',
    date: '28 Aug 2026',
    title: 'The Practical Path to AI in Operations',
  },
  {
    image: '/images/insight-sustainability.png',
    alt: 'Macro close-up of a backlit green leaf',
    date: '10 Aug 2026',
    title: 'Sustainability: From Reporting to Real Impact',
  },
]

export function InsightsSection() {
  return (
    <section className="bg-cream-dark/60" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Insights
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="insights-heading"
            className="font-serif text-3xl font-semibold text-navy sm:text-4xl"
          >
            Ideas, perspectives and practical insights<span className="text-rust">.</span>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
          >
            View All Insights
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <li key={post.title}>
              <article className="flex h-full flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-navy/50">
                  {post.date}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-navy">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-rust transition-colors hover:text-rust/80"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
