import { BrandLogo } from '@/components/brand-logo'
import { LinkedinIcon, MailIcon } from '@/components/icons'

const footerNav = ['About', 'Services', 'Functions', 'Insights', 'Contact us']

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BrandLogo wordmarkClassName="text-cream" monogramClassName="text-cream" />

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/85">
              {footerNav.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-cream">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Stratbridge & Co. on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-cream hover:text-cream"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              aria-label="Email Stratbridge & Co."
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-cream hover:text-cream"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <hr className="my-8 border-cream/15" />

        <div className="flex flex-col gap-2 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Stratbridge &amp; Co. All rights reserved.</p>
          <p className="uppercase tracking-[0.16em]">
            Ideas to Execution. Always.
          </p>
        </div>
      </div>
    </footer>
  )
}
