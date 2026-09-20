import { ContactForm } from '@/components/contact-form'
import { LinkedinIcon, MailIcon, MapPinIcon } from '@/components/icons'

export function ContactSection() {
  return (
    <section className="bg-cream" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-navy/70">
            Get In Touch
          </p>
          <h1
            id="contact-heading"
            className="mt-4 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl"
          >
            Let&apos;s start a conversation.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Tell us about your transformation initiative and we&apos;ll get
            back to you within one business day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-navy px-8 py-10 text-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/80">
              Contact Details
            </p>

            <ul className="mt-8 space-y-8">
              <li>
                <a
                  href="mailto:hello@stratbridge.co"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 text-cream transition-colors group-hover:border-cream">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-cream/70">
                      Email
                    </span>
                    <span className="mt-1 block text-sm text-cream">
                      hello@stratbridge.co
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a href="#" className="group flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 text-cream transition-colors group-hover:border-cream">
                    <LinkedinIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-cream/70">
                      Social
                    </span>
                    <span className="mt-1 block text-sm text-cream">
                      Visit us on LinkedIn
                    </span>
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-cream/25 text-cream">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-cream/70">
                    Location
                  </span>
                  <span className="mt-1 block text-sm text-cream">
                    London, United Kingdom
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}