import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 pb-2 lg:px-10">
        <p className="text-xs text-navy/60">
          {items.map((item, i) => (
            <span key={item.label}>
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-rust">
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy/80">{item.label}</span>
              )}
              {i < items.length - 1 ? <span className="mx-1.5">&gt;</span> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
