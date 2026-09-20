'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@/components/icons'

const inputClasses =
  'w-full border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 transition-colors focus:border-rust focus:outline-none'

const fieldClasses = 'mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-navy/70'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col justify-center border border-navy/15 bg-cream-dark px-8 py-16 text-center">
        <p className="font-serif text-2xl font-semibold text-navy">
          Thank you.
        </p>
        <p className="mt-3 text-base text-navy/70">
          Your message has been sent. We&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="border border-navy/15 bg-white p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={fieldClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={fieldClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className={fieldClasses}>
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="How can we help?"
          className={inputClasses}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={fieldClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your project..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-fit items-center gap-3 bg-rust px-8 py-4 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
      >
        Send Message
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </form>
  )
}