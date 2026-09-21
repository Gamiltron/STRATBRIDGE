export function ProcurementWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="procurement-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="procurement-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            The right technology partners make the difference<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Choosing and contracting technology solutions can be complex,
            time-consuming and risky. The wrong vendor, unclear terms or
            inadequate due diligence can lead to cost overruns, delays and
            underwhelming outcomes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you navigate the technology procurement process end-to-end
            — from market evaluation and vendor selection to contract
            negotiation and finalisation — ensuring you get the right
            solutions on the right terms.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/insight-sustainability.png"
              alt="Macro close-up of a backlit green leaf"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              INFORMED
              <br />
              CHOICES
              <br />
              LOWER RISK
              <br />
              GREATER VALUE
              <br />
              LONG-TERM
              <br />
              SUCCESS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}