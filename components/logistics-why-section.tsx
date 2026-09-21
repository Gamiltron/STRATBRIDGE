const fleetStats = ['ON-TIME RATE', 'KM / ROUTE', 'COST / KM']

export function LogisticsWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="logistics-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="logistics-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Logistics can be a competitive advantage<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            In a fast-moving market, logistics plays a critical role in
            service levels, cost efficiency and customer satisfaction. Many
            organisations face challenges such as suboptimal networks, high
            freight costs, limited visibility and manual processes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you transform your logistics function by combining
            operational expertise with the right technology solutions to create
            a more efficient, transparent and resilient logistics operation.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div aria-hidden="true" className="overflow-hidden rounded-lg border border-navy/20 bg-navy-dark p-3">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm bg-cream p-5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                  FLEET ON THE ROAD
                </span>
                <span className="h-2 w-10 rounded-full bg-rust/60" />
              </div>
              <div className="rounded border border-navy/10 bg-cream-dark/60 p-3">
                <svg viewBox="0 0 200 70" className="h-full w-full text-navy/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M0 52h200" strokeDasharray="10 8" strokeLinecap="round" />
                  <path d="M0 20h200" strokeDasharray="10 8" strokeLinecap="round" opacity="0.4" />
                  <rect x="22" y="12" width="60" height="24" fill="none" stroke="#1c403c" strokeWidth="1.5" />
                  <path d="M82 12h22l16 24H58" fill="none" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="44" cy="40" r="5" fill="#f6f2ea" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="96" cy="40" r="5" fill="#f6f2ea" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="180" cy="16" r="4" fill="#ede6da" stroke="#bd5631" strokeWidth="1.5" />
                  <circle cx="180" cy="58" r="4" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {fleetStats.map((label) => (
                  <div key={label} className="rounded bg-cream-dark/70 p-3">
                    <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                      {label}
                    </div>
                    <div className="mt-1.5 h-2.5 w-12 rounded-full bg-navy/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              MOVE MORE.
              <br />
              SPEND SMARTER.
              <br />
              DELIVER BETTER.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}