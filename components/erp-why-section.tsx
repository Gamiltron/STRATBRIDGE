export function ErpWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="erp-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY TRANSFORM
          </p>
          <h2
            id="erp-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Outdated systems hold business back<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Many organisations rely on legacy ERP and CRM systems that are
            fragmented, underutilised or no longer fit for purpose — leading
            to inefficiencies, higher costs and limited visibility.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you reimagine and transform your ERP and CRM ecosystem to
            create a connected, scalable and future-ready foundation for
            growth.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/home-challenge-wall.png"
              alt="Angular concrete architectural wall against a clear blue sky"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              GREATER VISIBILITY
              <br />
              HIGHER EFFICIENCY
              <br />
              STRONGER CUSTOMER RELATIONSHIPS
              <br />
              MEASURABLE IMPACT
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}