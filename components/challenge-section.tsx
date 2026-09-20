export function ChallengeSection() {
  return (
    <section className="bg-cream" aria-labelledby="challenge-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        {/* Text */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            The Challenge
          </p>
          <h2
            id="challenge-heading"
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-navy sm:text-4xl"
          >
            Technology isn&apos;t the problem.{' '}
            <span className="text-rust">
              Making transformation happen is.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Many organisations have the intent, but lack the internal bandwidth,
            specialised expertise, or someone to coordinate across people,
            processes and technology.
          </p>
          <p className="mt-4 text-base font-medium text-navy">
            We become that bridge.
          </p>
        </div>

        {/* Image + rail */}
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
              Simple
              <br />
              Solutions
              <br />
              For Complex
              <br />
              Challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
