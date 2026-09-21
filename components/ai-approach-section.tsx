const steps = [
  {
    n: '1',
    title: 'Discover',
    body: 'Map your processes, data and goals to find where friction lives',
  },
  {
    n: '2',
    title: 'Identify',
    body: 'Shortlist the highest-value, lowest-risk AI and automation use cases',
  },
  {
    n: '3',
    title: 'Design',
    body: 'Architect the solution, data readiness and governance approach',
  },
  {
    n: '4',
    title: 'Implement',
    body: 'Build, integrate and automate — proving value early and safely',
  },
  {
    n: '5',
    title: 'Scale',
    body: 'Expand responsibly with change management and continuous improvement',
  },
]

export function AiApproachSection() {
  return (
    <section className="bg-cream" aria-labelledby="ai-approach-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          Our Approach
        </p>
        <h2
          id="ai-approach-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          A practical path from idea to scaled automation<span className="text-rust">.</span>
        </h2>

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
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