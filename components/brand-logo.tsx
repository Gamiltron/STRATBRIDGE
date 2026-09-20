type BrandLogoProps = {
  className?: string
  wordmarkClassName?: string
  monogramClassName?: string
}

export function BrandLogo({
  className = '',
  wordmarkClassName = 'text-navy',
  monogramClassName = 'text-navy',
}: BrandLogoProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 ${className}`}
      aria-label="Stratbridge & Co. home"
    >
      <span
        className={`font-serif text-2xl font-semibold leading-none tracking-tight ${monogramClassName}`}
        aria-hidden="true"
      >
        <span className="relative">
          S<span className="-ml-1">B</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.72rem] font-semibold uppercase tracking-[0.22em] ${wordmarkClassName}`}
        >
          Stratbridge &amp; Co.
        </span>
      </span>
    </a>
  )
}
