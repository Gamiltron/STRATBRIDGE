const wallNotes = [
  { label: 'Strategy', tone: 'text-rust border-rust/40 bg-rust/5' },
  { label: 'Tools', tone: 'text-navy border-navy/25 bg-navy/5' },
  { label: 'People', tone: 'text-navy border-navy/25 bg-navy/5' },
  { label: 'Pipeline', tone: 'text-rust border-rust/40 bg-rust/5' },
  { label: 'Revenue', tone: 'text-navy border-navy/25 bg-navy/5' },
]

export function SalesWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="sales-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="sales-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Technology unlocks scalable revenue<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Traditional sales approaches are no longer enough. Buyers expect
            personalised outreach, relevant content and seamless digital
            experiences across their journey.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you design and implement a technology-enabled sales and GTM
            engine — combining the right tools, data and processes to attract,
            engage and convert the right customers, while driving predictable
            and scalable revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div aria-hidden="true" className="overflow-hidden rounded-lg border border-navy/20 bg-navy-dark p-3">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm bg-cream p-5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                  GTM WAR ROOM
                </span>
                <span className="h-2 w-10 rounded-full bg-rust/60" />
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {wallNotes.map(({ label, tone }, i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-center rounded border px-3 py-4 text-xs font-semibold uppercase tracking-[0.18em] ${tone} ${
                      i === wallNotes.length - 1 ? 'col-span-2' : ''
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>
              <div className="rounded bg-cream-dark/70 p-3">
                <div className="h-2 w-1/2 rounded-full bg-navy/25" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-navy/15" />
                <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-navy/15" />
              </div>
            </div>
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              SHORTER SALES CYCLES
              <br />
              HIGHER CONVERSION RATES
              <br />
              BETTER SALES PRODUCTIVITY
              <br />
              ACTIONABLE INSIGHTS
              <br />
              STRONGER CUSTOMER ENGAGEMENT
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}