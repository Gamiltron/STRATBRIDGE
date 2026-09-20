const steps = [
  {
    n: '1',
    title: 'Understand',
    body: 'Align on objectives, scope and success criteria',
  },
  {
    n: '2',
    title: 'Assess',
    body: 'Evaluate current state across key dimensions',
  },
  {
    n: '3',
    title: 'Analyse',
    body: 'Identify gaps, opportunities and risks',
  },
  {
    n: '4',
    title: 'Recommend',
    body: 'Develop a prioritised roadmap with clear actions',
  },
  {
    n: '5',
    title: 'Enable',
    body: 'Support planning for execution',
  },
]

export function ReadinessApproachSection() {
  return (
    <section className="bg-cream" aria-labelledby="readiness-approach-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Our Approach
        </p>
        <h2
          id="readiness-approach-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          A structured, collaborative and practical assessment
          <span className="text-rust">.</span>
        </h2>

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-6 hidden h-px w-full bg-navy/15 lg:block"
                />
              ) : null}
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-rust font-serif text-lg text-cream">
                {step.n}
              </span>
              <h3 className="mt-5 text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-navy/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
