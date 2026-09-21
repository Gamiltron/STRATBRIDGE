'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { BrandLogo } from '@/components/brand-logo'
import { ArrowRightIcon, CloseIcon, MenuIcon } from '@/components/icons'

const serviceItems = [
  { label: 'Readiness Assessment', href: '/readiness-assessment' },
  { label: 'AI & Automation', href: '/services/ai-and-automation' },
  { label: 'ERP & CRM Transformation', href: '/services/erp-and-crm-transformation' },
]

const navItems = [
  { label: 'Home', href: '/', caret: false },
  { label: 'About', href: '/about', caret: false },
  { label: 'Services', href: '/readiness-assessment', caret: true },
  { label: 'Functions', href: '#', caret: true },
  { label: 'Insights', href: '#', caret: false },
  { label: 'Contact us', href: '/contact', caret: false },
]

function Caret({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-3 w-3 transition-transform duration-200 ${className}`}
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <BrandLogo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-navy">
            {navItems.map((item) => {
              const isActive = item.label === active
              const isOpen = openDropdown === item.label

              return (
                <li
                  key={item.label}
                  ref={item.label === 'Services' ? dropdownRef : undefined}
                  className="relative"
                >
                  {item.caret ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(isOpen ? null : item.label)
                        }
                        aria-expanded={isOpen}
                        aria-haspopup="menu"
                        className={`inline-flex items-center gap-1 transition-colors hover:text-rust ${
                          isActive
                            ? 'border-b-2 border-rust pb-1 font-medium text-navy'
                            : ''
                        }`}
                      >
                        {item.label}
                        <Caret className={isOpen ? 'rotate-180' : ''} />
                      </button>
                      {isOpen && item.label === 'Services' ? (
                        <div
                          role="menu"
                          aria-label="Services submenu"
                          className="absolute left-0 top-full z-50 mt-2 w-64 border border-navy/10 bg-cream p-2 shadow-xl"
                        >
                          {serviceItems.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setOpenDropdown(null)}
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm text-navy transition-colors hover:bg-cream-dark hover:text-rust"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ) : (
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
                    </Link>
                  )}
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
              const showSubmenu = item.caret && item.label === 'Services'
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
                  {showSubmenu ? (
                    <ul className="ml-3 border-l border-navy/15 pl-4">
                      {serviceItems.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-navy/80 transition-colors hover:text-rust"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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