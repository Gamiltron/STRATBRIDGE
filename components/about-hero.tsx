import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

const railItems = ['Ideas', 'Technology', 'Execution', 'Impact']

export function AboutHero() {
  return (
    <section className="bg-cream" aria-labelledby="about-hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_1.1fr_0.55fr] lg:gap-8 lg:px-10 lg:py-16">
        {/* Text column */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            About Us
          </p>
          <h1
            id="about-hero-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl"
          >
            Bridging Ideas, Technology and Execution
            <span className="text-rust">.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            We partner with organisations to turn complexity into progress
            through technology-enabled transformation across the value chain.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-rust px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
          >
            Let&apos;s Talk
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Image column */}
        <div className="overflow-hidden">
          <img
            src="/images/skyline-bridge.png"
            alt="City skyline at sunset with a cable-stayed bridge over the water"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        {/* Rail column */}
        <div className="border-l-2 border-rust/70 pl-6 lg:pl-8">
          <ul className="space-y-4">
            {railItems.map((item) => (
              <li
                key={item}
                className="text-sm font-medium uppercase tracking-[0.2em] text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="my-6 h-px w-10 bg-rust" />
          <p className="text-sm font-medium uppercase leading-relaxed tracking-[0.2em] text-navy">
            A Stronger
            <br />
            Tomorrow.
          </p>
        </div>
      </div>
    </section>
  )
}
