const steps = [
  {
    n: '1',
    title: 'Assess',
    body: 'Understand your current state and readiness.',
  },
  {
    n: '2',
    title: 'Design',
    body: 'Define the right solution and roadmap.',
  },
  {
    n: '3',
    title: 'Coordinate',
    body: 'Bring stakeholders, vendors and teams together.',
  },
  {
    n: '4',
    title: 'Execute',
    body: 'Drive implementation and adoption.',
  },
  {
    n: '5',
    title: 'Measure',
    body: 'Track outcomes and unlock further value.',
  },
]

export function ApproachSection() {
  return (
    <section className="bg-navy text-cream" aria-labelledby="approach-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
          How We Help
        </p>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2
            id="approach-heading"
            className="max-w-2xl font-serif text-3xl font-semibold text-cream sm:text-4xl"
          >
            A structured, outcome-driven approach<span className="text-rust">.</span>
          </h2>
          <a
            href="#"
            className="inline-flex w-fit items-center border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-navy"
          >
            Learn More About Our Approach
          </a>
        </div>

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-6 hidden h-px w-full bg-cream/25 lg:block"
                />
              ) : null}
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cream/40 bg-navy font-serif text-lg text-cream">
                {step.n}
              </span>
              <h3 className="mt-5 text-base font-semibold text-cream">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-cream/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
