const reviewStats = ['SAVINGS TO DATE', 'SUPPLIER ON-TIME', 'RISK LOWERED']

export function ProcurementFunctionWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="proc-function-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="proc-function-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            A modern procurement function creates real value<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Procurement today is more than cost cutting. With the right
            processes, technology and supplier partnerships, it can unlock
            significant value — better pricing, improved supply resilience,
            higher quality and greater innovation.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you transform your procurement function by designing
            fit-for-purpose processes, implementing the right digital tools,
            and building data-driven capabilities — enabling you to move from
            transactional buying to strategic value creation.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div aria-hidden="true" className="overflow-hidden rounded-lg border border-navy/20 bg-navy-dark p-3">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm bg-cream p-5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                  STRATEGY REVIEW
                </span>
                <span className="h-2 w-10 rounded-full bg-rust/60" />
              </div>
              <div className="rounded border border-navy/10 bg-cream-dark/60 p-3">
                <svg viewBox="0 0 200 80" className="h-full w-full text-navy/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 16 L 36 30 L 62 24 L 92 44 L 124 36 L 156 58 L 192 66" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M156 58 L 156 70 M192 66 V 74" strokeDasharray="3 3" strokeLinecap="round" />
                  <circle cx="8" cy="16" r="4" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="62" cy="24" r="4" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="124" cy="36" r="4" fill="#ede6da" stroke="#1c403c" strokeWidth="1.5" />
                  <circle cx="192" cy="66" r="4" fill="#f6f2ea" stroke="#bd5631" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {reviewStats.map((label) => (
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
              STRATEGIC SOURCING
              <br />
              BETTER SUPPLIER PERFORMANCE
              <br />
              DATA-DRIVEN DECISIONS
              <br />
              GREATER EFFICIENCY
              <br />
              LONG-TERM VALUE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}