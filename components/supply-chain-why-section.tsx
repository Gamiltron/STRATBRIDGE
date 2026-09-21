const wallNotes = [
  { label: 'Forecast', tone: 'text-rust border-rust/40 bg-rust/5' },
  { label: 'Plan', tone: 'text-navy border-navy/25 bg-navy/5' },
  { label: 'Source', tone: 'text-navy border-navy/25 bg-navy/5' },
  { label: 'Make', tone: 'text-navy border-navy/25 bg-navy/5' },
  { label: 'Deliver', tone: 'text-rust border-rust/40 bg-rust/5' },
]

export function SupplyChainWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="supply-chain-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="supply-chain-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            A modern supply chain creates lasting value<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Supply chains today face greater complexity, higher customer
            expectations and constant disruption. Technology — from ERP and
            advanced planning to real-time visibility and AI — is now a
            critical enabler to build agile, efficient and resilient supply
            chains.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you transform your supply chain by combining the right
            digital tools, data and operating models — so you can plan better,
            source smarter, operate efficiently and deliver superior customer
            value.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div
            aria-hidden="true"
            className="overflow-hidden rounded-lg border border-navy/20 bg-navy-dark p-3"
          >
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-sm bg-cream p-5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                  VISIBILITY TODAY. A STRONGER TOMORROW.
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
                <div className="flex items-end gap-1.5">
                  <span className="h-5 w-full rounded-sm bg-rust/60" />
                  <span className="h-8 w-full rounded-sm bg-navy/40" />
                  <span className="h-6 w-full rounded-sm bg-rust/60" />
                  <span className="h-10 w-full rounded-sm bg-navy/40" />
                  <span className="h-9 w-full rounded-sm bg-rust/60" />
                </div>
                <div className="mt-2 h-1.5 w-2/3 rounded-full bg-navy/15" />
              </div>
            </div>
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              BETTER DECISIONS
              <br />
              HIGHER SERVICE LEVELS
              <br />
              LOWER INVENTORY
              <br />
              LESS DISRUPTION
              <br />
              MORE SUSTAINABILITY
              <br />
              GREATER COMPETITIVENESS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}