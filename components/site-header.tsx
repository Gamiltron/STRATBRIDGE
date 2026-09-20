'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { ArrowRightIcon, CloseIcon, MenuIcon } from '@/components/icons'

const navItems = [
  { label: 'Home', href: '/', caret: false },
  { label: 'About', href: '/about', caret: false },
  { label: 'Services', href: '/readiness-assessment', caret: true },
  { label: 'Functions', href: '#', caret: true },
  { label: 'Insights', href: '#', caret: false },
  { label: 'Contact us', href: '/contact', caret: false },
]

function Caret() {
  return (
    <svg
      aria-hidden="true"
      className="h-3 w-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function SiteHeader({ active }: { active?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <BrandLogo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-navy">
            {navItems.map((item) => {
              const isActive = item.label === active
              return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-rust ${
                    isActive
                      ? 'border-b-2 border-rust pb-1 font-medium text-navy'
                      : ''
                  }`}
                >
                  {item.label}
                  {item.caret ? <Caret /> : null}
                </Link>
              </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden items-center gap-2 bg-rust px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-rust/90 lg:inline-flex"
          >
            Let&apos;s Talk
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center text-navy transition-colors hover:text-rust lg:hidden"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-navy/10 lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm text-navy">
            {navItems.map((item) => {
              const isActive = item.label === active
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between py-3 transition-colors hover:text-rust ${
                      isActive ? 'font-medium text-rust' : ''
                    }`}
                  >
                    {item.label}
                    {item.caret ? <Caret /> : null}
                  </Link>
                </li>
              )
            })}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 bg-rust px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
              >
                Let&apos;s Talk
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
