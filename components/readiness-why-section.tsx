export function ReadinessWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="readiness-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Why It Matters
          </p>
          <h2
            id="readiness-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Strong outcomes start with a clear understanding of where you
            stand<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Transformation initiatives often face delays, cost overruns or
            suboptimal outcomes due to gaps in readiness — across people,
            processes, data, technology and governance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Our Readiness Assessment provides an objective, practical
            evaluation of your current state and helps you build a realistic,
            action-oriented roadmap for success.
          </p>
        </div>

        {/* Image + rail */}
        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/insight-erp.png"
              alt="Glass-fronted skyscraper viewed from street level"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              Turn
              <br />
              Insights
              <br />
              Into a
              <br />
              Stronger
              <br />
              Foundation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
