import { ArrowRightIcon } from '@/components/icons'

export function HomeHero() {
  return (
    <section className="bg-cream" aria-labelledby="home-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1fr_1fr_0.5fr] lg:gap-8 lg:px-10 lg:py-16">
        {/* Text column */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            From Ambition to Impact
          </p>
          <h1
            id="home-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl"
          >
            Transformation.
            <br />
            Technology.
            <br />
            <span className="text-rust">Execution.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            We help organisations turn transformation plans into real business
            outcomes.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Start a Conversation
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Image column */}
        <div className="overflow-hidden">
          <img
            src="/images/home-hero-bridge.png"
            alt="A person standing on a stone arch bridge looking out over a misty mountain valley at dawn"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Rail column */}
        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            A Bridge
            <br />
            Between
            <br />
            Possibility
            <br />
            And Progress
          </p>
        </div>
      </div>
    </section>
  )
}
