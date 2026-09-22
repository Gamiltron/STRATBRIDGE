export function AiWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="ai-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY AI &amp; AUTOMATION
          </p>
          <h2
            id="ai-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            The opportunity is real.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Advances in AI and automation are transforming how work gets done —
            creating opportunities to do more with less, make better decisions
            and unlock new value.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you identify, prioritise and implement high-impact use
            cases that deliver tangible business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/insight-erp.png"
              alt="Glass building facade"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              PEOPLE
              <br />
              PROCESSES
              <br />
              TECHNOLOGY
              <br />
              BETTER OUTCOMES
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}