const railItems = ['Strategy', 'Technology', 'Execution', 'Impact']

export function FounderSection() {
  return (
    <section className="bg-cream" aria-labelledby="founder-heading">
      <div className="mx-auto grid max-w-[100rem] lg:grid-cols-[minmax(280px,0.85fr)_1.5fr_0.55fr]">
        {/* Photo */}
        <div className="min-h-[320px]">
          <img
            src="/images/kapil-swarnkar.png"
            alt="Kapil Swarnkar, Founder of Stratbridge & Co."
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-14 lg:px-14 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Founder
          </p>
          <h2
            id="founder-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl"
          >
            Driving transformation with purpose
            <span className="text-rust">.</span>
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-navy/75 sm:text-base">
            <p>
              I&apos;m Kapil Swarnkar, the Founder of Stratbridge &amp; Co. I
              bring 12+ years of leadership experience driving digital
              transformation for organisations across India, the Middle East and
              Europe.
            </p>
            <p>
              Across my career, I&apos;ve worked with global and regional
              organisations in sales, supply chain and technology, helping them
              define strategy, select and implement digital solutions, and
              achieve measurable business outcomes.
            </p>
            <p>
              Stratbridge &amp; Co. is my effort to bring this experience to
              organisations that are ready to transform — with a focused,
              practical and results-oriented approach.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-signature text-4xl text-navy">Kapil Swarnkar</p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-navy">
              Kapil Swarnkar
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-navy/60">
              Founder, Stratbridge &amp; Co.
            </p>
          </div>
        </div>

        {/* Rail */}
        <div className="flex items-center bg-cream-dark/50 px-6 py-14 lg:px-10">
          <ul className="space-y-8">
            {railItems.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="h-px w-6 bg-rust" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-navy">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
