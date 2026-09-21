export function AiWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="ai-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Why AI &amp; Automation
          </p>
          <h2
            id="ai-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            The opportunity is real<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Most organisations are sitting on a compounding cost: the hours
            spent on repetitive, low-value work. AI and automation turn that
            cost into capacity — delivering consistent speed, accuracy and
            insight where it matters most.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you move beyond pilots. From carefully selected use cases
            to operating models built for scale, we embed automation into the
            way your business already works — focusing on outcomes, not
            technology for its own sake.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/insight-ai.png"
              alt="Abstract architectural representation of artificial intelligence"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              People.
              <br />
              Processes.
              <br />
              Technology.
              <br />
              Better
              <br />
              Outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}