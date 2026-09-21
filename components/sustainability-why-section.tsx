const dashboardStats = ['TOTAL EMISSIONS', 'FUEL EFFICIENCY', 'RENEWABLE ENERGY']
const trendBars = ['h-6', 'h-8', 'h-6', 'h-10', 'h-9', 'h-13', 'h-11']

export function SustainabilityWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="sustainability-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="sustainability-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Sustainability drives resilience and growth<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Regulatory pressure, customer expectations and investor focus on
            ESG are growing. But sustainability is not just about compliance —
            it&apos;s an opportunity to run a more efficient, resilient and
            future-ready business.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you embed sustainability into your operations using
            digital tools and data-driven insights, enabling you to measure
            emissions, identify reduction opportunities and achieve your
            business and environmental goals.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div aria-hidden="true" className="overflow-hidden">
            <div className="rounded-t-lg border border-navy/20 bg-navy-dark p-3">
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cream p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold tracking-widest text-navy/50">
                    SUSTAINABILITY DASHBOARD
                  </span>
                  <span className="h-2 w-10 rounded-full bg-rust/60" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2.5">
                  {dashboardStats.map((label) => (
                    <div key={label} className="rounded bg-cream-dark/70 p-3">
                      <div className="text-[8px] font-semibold tracking-wide text-navy/50">
                        {label}
                      </div>
                      <div className="mt-1.5 h-2.5 w-12 rounded-full bg-navy/60" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded bg-cream-dark/70 p-3">
                  <div className="flex items-end gap-1.5">
                    {trendBars.map((height, i) => (
                      <span
                        key={`${height}-${i}`}
                        className={`w-full rounded-sm bg-rust/70 ${height}`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 h-1.5 w-1/2 rounded-full bg-navy/20" />
                </div>
              </div>
            </div>
            <div className="mx-auto h-2.5 w-32 rounded-b-md bg-navy/70" />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              LOWER CARBON EMISSIONS
              <br />
              GREATER OPERATIONAL EFFICIENCY
              <br />
              MEET REGULATORY REQUIREMENTS
              <br />
              ENHANCE BRAND VALUE
              <br />
              BUILD A MORE RESILIENT BUSINESS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}