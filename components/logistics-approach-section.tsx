const steps = [
  {
    n: '1',
    title: 'Assess',
    body: 'Understand current network, processes, costs and pain points',
  },
  {
    n: '2',
    title: 'Define',
    body: 'Set clear objectives, prioritise opportunities and design the target operating model',
  },
  {
    n: '3',
    title: 'Design',
    body: 'Select and configure the right technology and process changes',
  },
  {
    n: '4',
    title: 'Implement',
    body: 'Support execution with change management and stakeholder alignment',
  },
  {
    n: '5',
    title: 'Optimise',
    body: 'Track performance and drive continuous improvement',
  },
]

export function LogisticsApproachSection() {
  return (
    <section className="bg-cream" aria-labelledby="logistics-approach-heading">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
          OUR APPROACH
        </p>
        <h2
          id="logistics-approach-heading"
          className="mt-4 max-w-3xl font-serif text-3xl font-semibold text-navy sm:text-4xl"
        >
          A structured approach to logistics transformation<span className="text-rust">.</span>
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