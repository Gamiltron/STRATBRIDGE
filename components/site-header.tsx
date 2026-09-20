import { BrandLogo } from '@/components/brand-logo'
import { ArrowRightIcon } from '@/components/icons'

const navItems = [
  { label: 'Home', href: '/', caret: false },
  { label: 'About', href: '/about', caret: false },
  { label: 'Services', href: '#', caret: true },
  { label: 'Functions', href: '#', caret: true },
  { label: 'Insights', href: '#', caret: false },
  { label: 'Contact us', href: '#', caret: false },
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
                <a
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
                </a>
              </li>
              )
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-rust px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-rust/90"
        >
          Let&apos;s Talk
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
