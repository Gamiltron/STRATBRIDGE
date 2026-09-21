export function FinanceWhySection() {
  return (
    <section className="bg-cream" aria-labelledby="finance-why-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            WHY IT MATTERS
          </p>
          <h2
            id="finance-why-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Modernise AR &amp; AP to unlock working capital<span className="text-rust">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            AR and AP are critical to your business performance — yet many
            organisations still rely on manual processes, spreadsheets and
            disconnected systems, leading to delays, errors and limited
            visibility.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            We help you transform your AR and AP functions by leveraging modern
            technology (ERP, automation tools, AI) and best practices to
            streamline processes, improve cash flow, strengthen governance and
            enable data-driven decision-making.
          </p>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr] items-stretch gap-6">
          <div className="overflow-hidden">
            <img
              src="/images/home-hero-bridge.png"
              alt="A person standing on a stone arch bridge looking out over a misty mountain valley at dawn"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center border-l-2 border-rust/70 pl-6">
            <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
              SHORTER CYCLE TIMES
              <br />
              LOWER DSO &amp; DPO
              <br />
              FEWER ERRORS
              <br />
              GREATER VISIBILITY
              <br />
              BETTER COMPLIANCE
              <br />
              STRONGER BUSINESS PERFORMANCE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}